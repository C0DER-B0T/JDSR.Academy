# JDSR Academy Website

A production-ready, ultra-polished, fully responsive, SEO-friendly, and secure single-purpose website for JDSR Academy - Government Job Preparation Center.

## 🚀 Features

- **Ultra-Smooth Animations**: GSAP, Framer Motion, and Lottie animations
- **SEO Optimized**: Complete meta tags, JSON-LD schema, sitemap, and robots.txt
- **Performance Optimized**: Lighthouse scores 90+ on desktop, 85+ on mobile
- **Security**: HTTPS headers, CSP, rate limiting, input sanitization
- **Accessibility**: WCAG compliant with reduced motion support
- **PWA Ready**: Progressive Web App with offline support
- **Responsive Design**: Mobile-first approach with perfect responsiveness

## 🎨 Design System

- **Primary Black**: `#000000`
- **Glitter Gold**: `#F5C518` (primary accent)
- **Slight Blue**: `#1E90FF` (secondary accent)
- **Card Dark**: `#0a0a0a`
- **Fonts**: Poppins (headings), Inter (body)

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion, Lottie
- **Deployment**: Vercel/Netlify
- **Email**: Nodemailer/SendGrid
- **Analytics**: Google Analytics 4

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jdsr-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   # Email Configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=contact@jdsracademy.com
   
   # Google Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   
   # Google Sheets (Optional)
   GOOGLE_SHEET_WEBHOOK=https://script.google.com/macros/s/...
   
   # reCAPTCHA (Optional)
   RECAPTCHA_SITE_KEY=your-recaptcha-site-key
   RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on push to main branch

### Netlify

1. **Connect your repository to Netlify**
2. **Set build command**: `npm run build`
3. **Set publish directory**: `.next`
4. **Set environment variables** in Netlify dashboard

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
jdsr-academy/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── components/        # React components
│   ├── connect/          # Connect page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── news/             # News/Blog page
│   ├── jdsr-academy-*/   # Local landing pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
├── scripts/              # Build scripts
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🔧 Configuration

### Customization

1. **Update contact information** in `app/components/ContactCard.tsx`
2. **Modify channel links** in `app/components/ConnectPage.tsx`
3. **Update business hours** throughout the application
4. **Replace placeholder images** in `public/images/`
5. **Update SEO meta tags** in each page component

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `EMAIL_USER` | Gmail address for sending emails | Yes |
| `EMAIL_PASS` | Gmail app password | Yes |
| `CONTACT_EMAIL` | Email for receiving contact form | Yes |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | No |
| `GOOGLE_SHEET_WEBHOOK` | Google Sheets webhook URL | No |

## 📊 Performance

### Lighthouse Scores (Target)
- **Desktop**: 90+
- **Mobile**: 85+

### Optimization Features
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Critical CSS inlining
- Gzip compression
- CDN caching
- PWA with offline support

## 🔒 Security

### Headers Implemented
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: no-referrer-when-downgrade`
- `X-XSS-Protection: 1; mode=block`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Contact Form Security
- Rate limiting (10 requests per hour per IP)
- Input sanitization
- reCAPTCHA v3 integration
- Email validation

## 📱 PWA Features

- **Offline Support**: Service worker with caching
- **App-like Experience**: Standalone mode
- **Install Prompt**: Add to home screen
- **Background Sync**: Contact form submission
- **Push Notifications**: (Future implementation)

## 🎯 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter cards
- **JSON-LD Schema**: Organization and LocalBusiness schema
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Local SEO**: City-specific landing pages
- **Performance**: Core Web Vitals optimization

## 🎨 Animation System

### GSAP Animations
- Hero section particle effects
- Button hover animations
- Page entrance animations

### Framer Motion
- Page transitions
- Component animations
- Reduced motion support

### Lottie
- Micro-animations
- Loading states
- Interactive elements

## 📞 Contact & Support

For technical support or customization requests:

- **Email**: support@jdsracademy.com
- **WhatsApp**: Join our channel for updates
- **Telegram**: Follow us for latest news

## 📄 License

This project is proprietary software developed for JDSR Academy. All rights reserved.

## 🤝 Contributing

This is a private project for JDSR Academy. For any issues or suggestions, please contact the development team.

---

**Built with ❤️ for JDSR Academy **
*Director: Monika Singh*
