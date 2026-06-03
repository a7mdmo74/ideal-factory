import HeroSection from '@/components/sections/HeroSections'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HeroSection locale={locale} />
}
