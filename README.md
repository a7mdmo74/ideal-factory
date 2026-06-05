# Ideal Factory — Villa Interior Design & Manufacturing

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat&logo=tailwind-css)
![License](https://img.shields.io/badge/License-Private-red)

> A modern, bilingual website for Ideal Factory — a premium villa interior design and manufacturing company based in Abu Dhabi, UAE. Specializing in kitchens, wardrobes, interior doors, and premium uPVC window systems.

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=flat&logo=vercel)](https://ideal-factory-a7mdmo74.vercel.app/en)

---

## 🚀 Features

- **Bilingual Support** — English and Arabic with automatic RTL/LTR switching
- **Contact Form** — Server Actions with Resend email integration + user confirmation emails
- **Animated Gallery** — Category filters with smooth transitions using Motion
- **Scroll-Aware Navbar** — Glassmorphism effect with scroll-based background changes
- **Fully Typed** — Zero `any` types, comprehensive TypeScript coverage
- **No Hardcoded Strings** — All content managed via next-intl translation keys
- **No Hardcoded Data** — All data structures centralized in `constants.ts`
- **No Hardcoded Config** — All site-wide values managed in `config/site.ts`

---

## 🛠 Tech Stack

| Technology                                     | Version | Purpose                                          |
| ---------------------------------------------- | ------- | ------------------------------------------------ |
| [Next.js](https://nextjs.org)                  | 16.2.7  | React framework with App Router                  |
| [TypeScript](https://www.typescriptlang.org)   | 5.7     | Type safety                                      |
| [Tailwind CSS](https://tailwindcss.com)        | 4.0     | Utility-first CSS                                |
| [shadcn/ui](https://ui.shadcn.com)             | Latest  | Component library (New York style, Neutral base) |
| [next-intl](https://next-intl-docs.vercel.app) | Latest  | Internationalization (EN/AR, RTL support)        |
| [React Hook Form](https://react-hook-form.com) | Latest  | Form management                                  |
| [Zod](https://zod.dev)                         | Latest  | Schema validation                                |
| [Resend](https://resend.com)                   | Latest  | Email service                                    |
| [Motion](https://motion.dev)                   | Latest  | Animations                                       |
| [Lucide React](https://lucide.dev)             | Latest  | Icon library                                     |
| [pnpm](https://pnpm.io)                        | Latest  | Package manager                                  |

---

## 📋 Prerequisites

- Node.js 18.17 or later
- pnpm 8.0 or later
- Resend API key (for email functionality)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ideal-factory
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Resend Email Configuration
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@idealhomeuae.com
RESEND_TO_EMAIL=info@idealhomeuae.com
```

See [Environment Variables](#environment-variables) for detailed descriptions.

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
pnpm build
pnpm start
```

---

## 🔐 Environment Variables

| Variable            | Required | Description                                          |
| ------------------- | -------- | ---------------------------------------------------- |
| `RESEND_API_KEY`    | Yes      | API key for Resend email service                     |
| `RESEND_FROM_EMAIL` | Yes      | Sender email address for contact form submissions    |
| `RESEND_TO_EMAIL`   | Yes      | Recipient email address for contact form submissions |

### Setting Up Resend

1. Create an account at [resend.com](https://resend.com)
2. Generate an API key in your dashboard
3. Verify your sender domain/email
4. Add the API key to your `.env.local` file

---

## 📁 Project Structure

```
src/
├── app/[locale]/           # Locale-based routing
│   ├── layout.tsx         # Root layout with locale provider
│   └── page.tsx           # Home page with all sections
├── components/
│   ├── layout/            # Layout components
│   │   ├── header.tsx     # Navigation header with dropdown
│   │   └── footer.tsx     # Footer with links and contact info
│   ├── sections/          # Page sections
│   │   ├── HeroSections.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── DesignSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── Testmonials.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                # shadcn/ui components
│   └── custom/            # Custom components
│       ├── GalleryGrid.tsx
│       ├── GalleryDecoration.tsx
│       └── FloatingChat.tsx
├── actions/               # Server Actions
│   └── contact.actions.ts # Contact form submission
├── emails/                # Email templates
│   ├── ContactEmail.tsx   # Admin notification email
│   └── ConfirmationEmail.tsx # User confirmation email
├── i18n/                  # Internationalization
│   ├── routing.ts         # Locale routing configuration
│   └── navigation.ts      # Locale-aware Link component
├── lib/                   # Utility functions
│   ├── constants.ts       # Centralized data constants
│   ├── utils.ts           # Helper functions
│   └── validations.ts     # Zod schemas
├── config/                # Configuration files
│   ├── site.ts            # Site-wide configuration
│   └── fonts.ts           # Font configuration
├── types/                 # TypeScript type definitions
│   └── index.ts           # All type exports
└── messages/              # Translation files
    ├── en.json            # English translations
    └── ar.json            # Arabic translations
```

---

## 🌍 i18n Guide

### Adding a New Translation Key

1. **Add to English (`messages/en.json`)**

```json
{
  "YourNamespace": {
    "yourKey": "Your English text"
  }
}
```

2. **Add to Arabic (`messages/ar.json`)**

```json
{
  "YourNamespace": {
    "yourKey": "النص العربي الخاص بك"
  }
}
```

3. **Use in Server Component**

```tsx
import { getTranslations } from 'next-intl/server'

export default async function YourComponent() {
  const t = await getTranslations('YourNamespace')
  return <div>{t('yourKey')}</div>
}
```

4. **Use in Client Component**

```tsx
'use client'
import { useTranslations } from 'next-intl'

export default function YourComponent() {
  const t = useTranslations('YourNamespace')
  return <div>{t('yourKey')}</div>
}
```

### Supported Namespaces

- `Hero` — Hero section
- `Solutions` — Solutions section
- `Problems` — Problems section
- `Design` — Design section
- `Gallery` — Gallery section
- `WhyChoose` — Why Choose section
- `Testimonials` — Testimonials section
- `Contact` — Contact section
- `Footer` — Footer
- `Navigation` — Navigation
- `Metadata` — Page metadata

---

## 📄 Adding a New Page

### 1. Create the Page File

Create a new file in `src/app/[locale]/`:

```tsx
// src/app/[locale]/your-page/page.tsx
import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('Metadata')
  return {
    title: t('yourPage.title'),
    description: t('yourPage.description'),
  }
}

export default async function YourPage() {
  const t = await getTranslations('YourPage')
  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </main>
  )
}
```

### 2. Add Translation Keys

Add to both `messages/en.json` and `messages/ar.json`:

```json
{
  "Metadata": {
    "yourPage": {
      "title": "Your Page Title",
      "description": "Your page description"
    }
  },
  "YourPage": {
    "title": "Your Page Title",
    "description": "Your page description"
  }
}
```

### 3. Add Navigation Link (Optional)

Update `src/lib/constants.ts`:

```ts
export const NAV_ITEMS: NavItem[] = [
  // ... existing items
  { label: 'yourPage', href: '/your-page' },
]
```

Add translation key to `Navigation` namespace in both language files.

---

## 🧩 Adding a New Section

### 1. Create the Section Component

Create a new file in `src/components/sections/`:

```tsx
// src/components/sections/YourSection.tsx
import { getTranslations } from 'next-intl/server'

export default async function YourSection() {
  const t = await getTranslations('YourSection')
  return (
    <section className="bg-white px-6 py-20">
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </section>
  )
}
```

### 2. Add Translation Keys

Add to both `messages/en.json` and `messages/ar.json`:

```json
{
  "YourSection": {
    "title": "Your Section Title",
    "description": "Your section description"
  }
}
```

### 3. Add to Home Page

Import and add to `src/app/[locale]/page.tsx`:

```tsx
import YourSection from '@/components/sections/YourSection'

export default async function Home() {
  return (
    <>
      {/* ... existing sections */}
      <YourSection />
    </>
  )
}
```

### 4. Add Data to Constants (Optional)

If your section needs data, add it to `src/lib/constants.ts`:

```ts
export const YOUR_DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
]
```

Import and use in your section component.

---

## 🚀 Deployment Guide

### Deploying to Vercel

1. **Push to GitHub**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Import Project to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository

3. **Configure Environment Variables**

In Vercel project settings:

- `RESEND_API_KEY` — Your Resend API key
- `RESEND_FROM_EMAIL` — Your sender email
- `RESEND_TO_EMAIL` — Your recipient email

4. **Deploy**

Vercel will automatically deploy on push. Monitor the deployment in the Vercel dashboard.

### Environment-Specific Builds

The project uses Next.js 16 with Turbopack for optimal build performance. No additional configuration is needed for Vercel deployment.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style Guidelines

- Use TypeScript for all new files
- Follow existing component patterns
- Add translation keys for all user-facing text
- Add data to `constants.ts` instead of hardcoding
- Use `siteConfig` for all site-wide values
- Run `pnpm build` before committing to ensure no TypeScript errors

---

## 📝 License

This project is proprietary software. All rights reserved by Ideal Factory.

---

## 📞 Support

For support, email info@idealhomeuae.com or visit [idealhomeuae.com](https://idealhomeuae.com).

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Email powered by [Resend](https://resend.com)
- Animations by [Motion](https://motion.dev)
