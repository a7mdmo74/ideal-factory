import { ContactSection } from '@/components/sections/ContactSection'
import HeroSection from '@/components/sections/HeroSections'
import SolutionsSection from '@/components/sections/SolutionSection'
import Testmonials from '@/components/sections/Testmonials'
import WhyChooseSection from '@/components/sections/WhyChooseSection'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <>
      <HeroSection locale={locale} />
      <SolutionsSection />
      <WhyChooseSection />
      <Testmonials />
      <ContactSection />
    </>
  )
}
