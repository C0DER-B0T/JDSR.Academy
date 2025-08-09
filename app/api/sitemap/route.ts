import { NextResponse } from 'next/server'

const baseUrl = 'https://jdsracademy.com'

const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/connect', priority: '0.9', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/news', priority: '0.7', changefreq: 'weekly' },
  // Local landing pages
  { url: '/jdsr-academy-roorkee', priority: '0.8', changefreq: 'monthly' },
  { url: '/jdsr-academy-dehradun', priority: '0.8', changefreq: 'monthly' },
  { url: '/jdsr-academy-haridwar', priority: '0.8', changefreq: 'monthly' },
  { url: '/jdsr-academy-meerut', priority: '0.8', changefreq: 'monthly' },
  { url: '/jdsr-academy-ghaziabad', priority: '0.8', changefreq: 'monthly' },
  { url: '/jdsr-academy-noida', priority: '0.8', changefreq: 'monthly' },
]

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return sitemap
}

export async function GET() {
  const sitemap = generateSitemap()
  
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
