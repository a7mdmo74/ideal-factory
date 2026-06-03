import HeroSection from '@/components/sections/HeroSections'
import SolutionsSection from '@/components/sections/SolutionSection'
import Testmonials from '@/components/sections/Testmonials'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <>
      <HeroSection locale={locale} />
      <SolutionsSection />
      <Testmonials />
    </>
  )
}
