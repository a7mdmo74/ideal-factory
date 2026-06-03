export interface NavLink {
  label: string
  href: string
}

export interface NavDropdownItem {
  label: string
  href: string
  description?: string
}

export interface NavItem extends NavLink {
  dropdown?: NavDropdownItem[]
}

export type ServiceSlug = 'kitchens' | 'wardrobes' | 'interior-doors' | 'upvc-window-door-systems'

export type KitchenLayoutSlug =
  | 'kitchen-with-island'
  | 'u-shaped-kitchen'
  | 'pantry-kitchen'
  | 'l-shaped-kitchen'
  | 'double-galley-kitchen'

export type WardrobeLayoutSlug = 'walk-in-closets' | 'reach-in-closets' | 'smart-closet-solutions'

export type DoorStyleSlug =
  | 'laminate-doors'
  | 'veneer-doors'
  | 'pvc-doors'
  | 'painted-doors'
  | 'solid-wood-doors'

export type WindowSystemSlug =
  | 'fixed-window'
  | 'tilt-and-turn-window'
  | 'side-hinged-window'
  | 'bottom-hinged-window'
  | 'sliding-window'
  | 'hinged-door'
  | 'tilt-and-turn-door'
  | 'sliding-door'
  | 'parallel-sliding-and-ventilation-door'
  | 'tilt-and-slide-door'

export interface ServiceSpec {
  label: string
  value: string
}

export interface ServiceItem {
  title: string
  shortTitle: string
  slug: string
  overviewDescription: string
  detailDescription: string
  specs: ServiceSpec[]
  image: string
  href: string
}

export interface Service {
  title: string
  subtitle: string
  slug: ServiceSlug
  href: string
  icon: string
  image: string
  description: string
  items?: ServiceItem[]
}

export type ProjectCategory = 'all' | 'kitchen' | 'door' | 'closet' | 'upvc-window'

export interface Project {
  id: string
  title: string
  location: string
  category: ProjectCategory[]
  coverImage: string
  images?: string[]
  completedAt?: string
  slug: string
}

export interface GalleryImage {
  src: string
  alt: string
  category: ProjectCategory
  caption?: string
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  quote: string
  avatar?: string
  rating?: number
}

export interface ContactFormData {
  first_name: string
  last_name: string
  email: string
  phone?: string
  message: string
}

export type ContactFormState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string; fieldErrors?: ContactFieldErrors }

export interface ContactFieldErrors {
  first_name?: string[]
  last_name?: string[]
  email?: string[]
  phone?: string[]
  message?: string[]
}

export type ActionResponse<T = void> =
  | { success: true; data?: T }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> }

export interface PageSEO {
  title: string
  description: string
  image?: string
  imageAlt?: string
  canonical?: string
  noIndex?: boolean
}

export interface SiteConfig {
  name: string
  legalName: string
  url: string
  description: string
  phone: string
  email: string
  address: SiteAddress
  ogImage: string
  links: {
    maps: string
    instagram?: string
    facebook?: string
    whatsapp?: string
  }
}

export interface SiteAddress {
  street: string
  poBox: string
  city: string
  region: string
  country: string
  countryCode: string
  gps: string
  coordinates: {
    lat: number
    lng: number
  }
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface FeatureItem {
  title: string
  description: string
  icon: string
}

export interface WhyPoint {
  label: string
  icon?: string
}

export interface ProblemItem {
  label: string
  icon: string
}

export interface ApproachItem {
  title: string
  body: string
  icon: string
}

export interface MaterialSlide {
  label: string
  image: string
}

export interface MaterialGroup {
  title: string
  description: string
  slides: MaterialSlide[]
}

export interface Partner {
  name: string
  logo: string
  url?: string
}

export interface SectionBadgeProps {
  label: string
  className?: string
}

export interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}
