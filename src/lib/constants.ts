import type {
  NavItem,
  Testimonial,
  ProblemItem,
  ApproachItem,
  FooterSection,
  Service,
  StepCard,
} from '@/types'

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'service',
    href: '/service',
    dropdown: [
      { label: 'services.kitchens', href: '/service/kitchens', description: 'services.kitchensDesc' },
      { label: 'services.wardrobes', href: '/service/wardrobes', description: 'services.wardrobesDesc' },
      { label: 'services.doors', href: '/service/interior-doors', description: 'services.doorsDesc' },
      { label: 'services.windows', href: '/service/upvc-window-door-systems', description: 'services.windowsDesc' },
    ],
  },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
]

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

export const DESIGN_STEP_CARDS: StepCard[] = [
  { key: 'upload', iconName: 'Box' },
  { key: 'get3d', iconName: 'PencilRuler' },
  { key: 'liveEdit', iconName: 'Pencil' },
]

export const GALLERY_ITEMS = [
  {
    src: '/images/kitchen-1.png',
    altKey: 'kitchenWithIsland',
    category: 'kitchen',
    className: 'row-span-2 col-span-2',
  },
  {
    src: '/images/door-2.jpg',
    altKey: 'woodenDoor',
    category: 'door',
    className: '',
  },
  {
    src: '/images/kitchen-2.png',
    altKey: 'modernKitchen',
    category: 'kitchen',
    className: '',
  },
  {
    src: '/images/closet-1.jpg',
    altKey: 'walkInCloset',
    category: 'closet',
    className: 'col-span-2',
  },
  {
    src: '/images/upvc-1.png',
    altKey: 'upvcWindowsLivingRoom',
    category: 'upvc',
    className: 'col-span-2',
  },
  {
    src: '/images/door-1.png',
    altKey: 'interiorDoor',
    category: 'door',
    className: '',
  },
  {
    src: '/images/upvc-2.jpg',
    altKey: 'upvcWindowsBedroom',
    category: 'upvc',
    className: '',
  },
] as const

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'quickLinks',
    links: [
      { label: 'links.about', href: '/about#about-us' },
      { label: 'links.team', href: '/about#our-team' },
      { label: 'links.testimonials', href: '/about#testimonials' },
      { label: 'links.projects', href: '/projects' },
      { label: 'links.gallery', href: '/gallery' },
    ],
  },
  {
    title: 'explore',
    links: [
      { label: 'links.walkInCloset', href: '/service/wardrobes/walk-in-closets' },
      { label: 'links.wardrobeCloset', href: '/service/wardrobes' },
      { label: 'links.uShapeKitchen', href: '/service/kitchens/u-shaped-kitchen' },
      { label: 'links.pantryKitchen', href: '/service/kitchens/pantry-kitchen' },
      { label: 'links.doors', href: '/service/interior-doors' },
    ],
  },
]
