import type {
  NavItem,
  Testimonial,
  WhyPoint,
  ProblemItem,
  ApproachItem,
  ProcessStep,
  FooterSection,
  Service,
  GalleryImage,
} from '@/types'

// ============================================================
// NAVIGATION
// ============================================================

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Our Service',
    href: '/service',
  },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

// ============================================================
// SERVICES
// ============================================================

export const SERVICES: Service[] = [
  {
    title: 'Kitchens',
    subtitle: 'Designed for daily use, built for long-term performance',
    slug: 'kitchens',
    href: '/service/kitchens',
    icon: 'ChefHat',
    image: 'https://i.pravatar.cc/600?img=1',
    description:
      'Modern kitchens engineered for durability, functionality, and refined everyday use.',
  },
  {
    title: 'Wardrobes & Closets',
    subtitle: 'Structured storage that stays organized over time',
    slug: 'wardrobes',
    href: '/service/wardrobes',
    icon: 'Shirt',
    image: 'https://i.pravatar.cc/600?img=2',
    description:
      'Walk-in and built-in wardrobe systems designed to organise storage while enhancing interior elegance.',
  },
  {
    title: 'Interior Doors',
    subtitle: 'Precise finishes that hold up with everyday use',
    slug: 'interior-doors',
    href: '/service/interior-doors',
    icon: 'DoorOpen',
    image: 'https://i.pravatar.cc/600?img=3',
    description: 'Precision-crafted doors built for durability, security, and premium finishes.',
  },
  {
    title: 'Premium Window Systems',
    subtitle: 'Sealed systems for better comfort and control',
    slug: 'upvc-window-door-systems',
    href: '/service/upvc-window-door-systems',
    icon: 'Maximize',
    image: 'https://i.pravatar.cc/600?img=4',
    description:
      'High-performance uPVC windows engineered for thermal insulation and long-term performance in UAE weather.',
  },
]

// ============================================================
// TESTIMONIALS
// ============================================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Khalid Al Mansoori',
    role: 'Customer',
    quote:
      'Working with Ideal Factory was the best decision for our villa. Every kitchen, closet and door felt like part of one coordinated whole.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Aisha Al Nuaimi',
    role: 'Customer',
    quote:
      'Having one factory handle everything saved months of coordination and the finish quality is genuinely premium.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Fatima Al Hammadi',
    role: 'Customer',
    quote:
      'The uPVC windows and matching interior doors transformed how the villa feels. Quiet, well sealed, beautifully aligned.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=3',
  },
]

// ============================================================
// WHY CHOOSE
// ============================================================

export const WHY_POINTS: WhyPoint[] = [
  {
    label: 'One factory for kitchens, wardrobes, doors, and premium window systems.',
    icon: 'Factory',
  },
  {
    label: 'Fast 3D design before production',
    icon: 'Box',
  },
  {
    label: 'Precision manufacturing with European machinery',
    icon: 'Settings2',
  },
  {
    label: 'Solutions designed for UAE villas',
    icon: 'Home',
  },
]

// ============================================================
// PROBLEMS SECTION
// ============================================================

export const PROBLEM_ITEMS: ProblemItem[] = [
  { label: 'Quality Problems', icon: 'ShieldX' },
  { label: 'Delays during execution', icon: 'Clock' },
  { label: 'Poor value for money', icon: 'Wallet' },
  { label: 'Weak after-sales support', icon: 'CircleAlert' },
]

export const APPROACH_ITEMS: ApproachItem[] = [
  {
    title: 'Multiple Interior Systems',
    body: 'One Factory. Kitchens, wardrobes, doors, and premium window systems manufactured together in one facility for coordinated villa interiors.',
    icon: 'Layers',
  },
  {
    title: 'Coordinated Design',
    body: 'Our designers ensure that kitchens, closets, doors, and window systems complement each other in style and proportion.',
    icon: 'PencilRuler',
  },
  {
    title: 'After-Sales Support & Maintenance',
    body: 'Our team installs every product with precision to ensure the final result reflects the original design.',
    icon: 'Wrench',
  },
  {
    title: 'Precision Manufacturing & Installation',
    body: 'Manufactured in-house. Installed with precision. One accountable team.',
    icon: 'Factory',
  },
]

// ============================================================
// DESIGN PROCESS
// ============================================================

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Upload Floor Plan',
    description: 'Share your villa layout so our designer understands your space.',
    icon: 'Box',
  },
  {
    step: 2,
    title: 'Get 3D Design',
    description: 'Receive a complete 3D interior concept within an hour.',
    icon: 'PencilRuler',
  },
  {
    step: 3,
    title: 'Live Design Edit',
    description: 'Refine the design in real time with our designers.',
    icon: 'Pencil',
  },
]

// ============================================================
// GALLERY
// ============================================================

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/home/kitchen-product-image.webp',
    alt: 'Kitchen',
    category: 'kitchen',
    caption: 'Villa Kitchen',
  },
  {
    src: '/images/home/wardrobe-product-image.webp',
    alt: 'Wardrobe',
    category: 'closet',
    caption: 'Walk-in Closet',
  },
  {
    src: '/images/home/door-product-image.webp',
    alt: 'Interior Door',
    category: 'door',
    caption: 'Interior Door',
  },
  {
    src: '/images/home/window-systems-image.webp',
    alt: 'uPVC Windows',
    category: 'upvc-window',
    caption: 'uPVC Window System',
  },
]

// ============================================================
// FOOTER
// ============================================================

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '/about#about-us' },
      { label: 'Our Team', href: '/about#our-team' },
      { label: 'Testimonials', href: '/about#testimonials' },
      { label: 'Projects', href: '/projects' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Walk in Closet', href: '/service/wardrobes/walk-in-closets' },
      { label: 'Wardrobe Closet', href: '/service/wardrobes' },
      { label: 'U-Shape Kitchen', href: '/service/kitchens/u-shaped-kitchen' },
      { label: 'Pantry Kitchen', href: '/service/kitchens/pantry-kitchen' },
      { label: 'Doors', href: '/service/interior-doors' },
    ],
  },
]
