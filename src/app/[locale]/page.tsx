import { ContactSection } from '@/components/sections/ContactSection'
import DesignSection from '@/components/sections/DesignSection'
import GallerySection from '@/components/sections/GallerySection'
import HeroSection from '@/components/sections/HeroSections'
import ProblemsSection from '@/components/sections/ProblemSection'
import SolutionsSection from '@/components/sections/SolutionSection'
import Testmonials from '@/components/sections/Testmonials'
import WhyChooseSection from '@/components/sections/WhyChooseSection'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <>
      <HeroSection locale={locale} />
      <SolutionsSection />
      <ProblemsSection />
      <DesignSection />
      <GallerySection />
      <WhyChooseSection />
      <Testmonials />
      <ContactSection />
    </>
  )
}
