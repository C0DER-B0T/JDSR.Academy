import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limit configuration
const RATE_LIMIT = {
  MAX_REQUESTS: 10,
  WINDOW_MS: 60 * 60 * 1000, // 1 hour
}

interface ContactFormData {
  name: string
  phone: string
  channel: string
  message: string
  token?: string // reCAPTCHA v3 token (optional for preview)
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  
  return forwarded?.split(',')[0] || realIP || cfConnectingIP || 'unknown'
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.WINDOW_MS })
    return true
  }
  
  if (record.count >= RATE_LIMIT.MAX_REQUESTS) {
    return false
  }
  
  record.count++
  return true
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000) // Limit length
}

async function verifyRecaptcha(token?: string) {
  if (!process.env.RECAPTCHA_SECRET_KEY || !token) return true // allow for preview
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })
    const data = (await res.json()) as { success: boolean; score?: number }
    return !!data.success && (data.score ?? 0) >= 0.5
  } catch {
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request)
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body: ContactFormData = await request.json()
    
    // Validate required fields
    if (!body.name || !body.phone || !body.channel || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // reCAPTCHA (soft for preview)
    const recaptchaOk = await verifyRecaptcha(body.token)
    if (!recaptchaOk) {
      return NextResponse.json(
        { error: 'Failed reCAPTCHA verification' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      phone: sanitizeInput(body.phone),
      channel: sanitizeInput(body.channel),
      message: sanitizeInput(body.message),
    }

    // Email configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const emailContent = `
New Contact Form Submission from JDSR Academy Website

Name: ${sanitizedData.name}
Phone: ${sanitizedData.phone}
Channel of Interest: ${sanitizedData.channel}
Message: ${sanitizedData.message}

Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
IP Address: ${clientIP}
    `

    // Send email (skip silently if not configured for preview)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
        subject: `New Contact Form Submission - ${sanitizedData.name}`,
        text: emailContent,
        html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #F5C518;">New Contact Form Submission</h2>
  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Name:</strong> ${sanitizedData.name}</p>
    <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
    <p><strong>Channel of Interest:</strong> ${sanitizedData.channel}</p>
    <p><strong>Message:</strong></p>
    <div style="background: white; padding: 15px; border-radius: 4px; margin: 10px 0;">
      ${sanitizedData.message.replace(/\n/g, '<br>')}
    </div>
  </div>
  <p style="color: #666; font-size: 12px;">
    Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}<br>
    IP Address: ${clientIP}
  </p>
</div>
        `,
      })
    }

    // Optional: Add to Google Sheets (if configured)
    if (process.env.GOOGLE_SHEET_WEBHOOK) {
      try {
        await fetch(process.env.GOOGLE_SHEET_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name: sanitizedData.name,
            phone: sanitizedData.phone,
            channel: sanitizedData.channel,
            message: sanitizedData.message,
            ip: clientIP,
          }),
        })
      } catch (error) {
        console.error('Google Sheets integration error:', error)
      }
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
