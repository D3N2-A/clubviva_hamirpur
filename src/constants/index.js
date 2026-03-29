export const heroSlides = [
  { type: 'image', src: '/assets/gym-floor-strength.jpg', alt: 'Gym Interior' },
  { type: 'video', src: '/assets/hero-video-3.mp4' },
  { type: 'video', src: '/assets/hero-video-1.mp4' },
  { type: 'video', src: '/assets/hero-video-2.mp4' },
  { type: 'image', src: '/assets/gym-equipment-wide.jpg', alt: 'Training Aesthetic' },
  { type: 'image', src: '/assets/entrance-lobby.jpg', alt: 'Equipment' },
  { type: 'image', src: '/assets/gym-floor-cardio.jpg', alt: 'Cardio Zone' },
]

export const stats = [
  { value: '7,000+', label: 'Square Feet' },
  { value: 'PREMIUM', label: 'Equipment' },
  { value: 'EXPERT', label: 'Trainers' },
  { value: 'RECOVERY', label: 'Zone' },
]

export const facilities = [
  {
    title: 'Gym Floor',
    description: 'State-of-the-art strength and cardio zones with panoramic views.',
    image: '/assets/gym-floor-wide.jpg',
    span: 'md:col-span-8 md:row-span-2',
    titleSize: 'text-3xl',
    padding: 'p-12',
  },
  {
    title: "Women's Section",
    description: 'A private, secure sanctuary for focused training sessions.',
    image: '/assets/cardio-zone.jpg',
    span: 'md:col-span-4',
    titleSize: 'text-xl',
    padding: 'p-8',
  },
  {
    title: 'Recovery Zone',
    description: 'Steam, Sauna, and Ice Baths to accelerate your results.',
    image: '/assets/gym-floor-overview.jpg',
    span: 'md:col-span-4',
    titleSize: 'text-xl',
    padding: 'p-8',
  },
  {
    title: 'Viva Cafe',
    description: 'Artisan coffee and high-protein nutrition for your post-workout fuel.',
    image: '/assets/cafe-food-1.jpg',
    span: 'md:col-span-6',
    titleSize: 'text-xl',
    padding: 'p-8',
  },
  {
    title: 'Salon & Spa',
    description: 'Professional grooming and therapeutic massage services.',
    image: '/assets/equipment-bench-press.jpg',
    span: 'md:col-span-6',
    titleSize: 'text-xl',
    padding: 'p-8',
  },
]

export const galleryItems = [
  { type: 'image', src: '/assets/gym-floor-strength.jpg', alt: 'Gym Aesthetic' },
  { type: 'video', src: '/assets/hero-video-2.mp4' },
  { type: 'image', src: '/assets/gym-equipment-wide.jpg', alt: 'Barbell Details' },
  { type: 'image', src: '/assets/gym-floor-cardio.jpg', alt: 'Fitness Training' },
  { type: 'image', src: '/assets/equipment-bench-press.jpg', alt: 'Elite PT Session', aspect: 'aspect-[4/5]' },
  { type: 'image', src: '/assets/entrance-lobby.jpg', alt: 'Entrance' },
  { type: 'image', src: '/assets/gym-weights-rack.jpg', alt: 'Weight Rack' },
  { type: 'video', src: '/assets/hero-video-3.mp4' },
  { type: 'image', src: '/assets/gym-floor-weights.jpg', alt: 'Gym Floor' },
  { type: 'image', src: '/assets/cardio-zone.jpg', alt: 'Cardio Zone' },
  { type: 'video', src: '/assets/cafe-motion-1.mp4' },
  { type: 'image', src: '/assets/cafe-food-2.jpg', alt: 'Fresh Fruit Bowl' },
  { type: 'image', src: '/assets/cafe-food-4.jpg', alt: 'Protein Wrap' },
  { type: 'video', src: '/assets/cafe-motion-2.mp4' },
]

export const pricingTiers = [
  {
    name: 'Monthly',
    price: '₹3,500',
    period: '/month',
    features: ['24/7 Gym Access', 'Basic Recovery Tools', 'Free WiFi'],
    cta: 'Join Basic',
    highlighted: false,
  },
  {
    name: 'Yearly Elite',
    price: '₹31,500',
    period: '/year',
    badge: '25% OFF',
    features: [
      'All Gym Access',
      'Unlimited Sauna & Ice Bath',
      '10% Off Viva Cafe',
      'Complementary Personal Training',
    ],
    cta: 'Join Elite',
    highlighted: true,
  },
  {
    name: 'Quarterly',
    price: '₹9,500',
    period: '/3 months',
    features: ['24/7 Gym Access', 'Scheduled Steam Sessions', 'Nutrition Consultation'],
    cta: 'Join Quarterly',
    highlighted: false,
  },
]

export const recoveryFeatures = [
  {
    icon: 'thermostat',
    title: 'Himalayan Steam',
    description: 'Purify your skin and respiratory system with therapeutic heat.',
  },
  {
    icon: 'ac_unit',
    title: 'Polar Ice Bath',
    description: 'Immediate inflammation reduction and mental clarity.',
  },
]

export const cafeHighlights = [
  {
    title: 'High-Protein Bowls',
    description: 'Balanced meals packed with lean protein, fresh vegetables, and superfoods to fuel your gains.',
    icon: 'restaurant',
  },
  {
    title: 'Fresh Fruit Bowls',
    description: 'Seasonal dragon fruit, pomegranate, kiwi, and more — nature\'s recovery formula.',
    icon: 'nutrition',
  },
  {
    title: 'Wraps & Bites',
    description: 'Grilled protein wraps and healthy snacks crafted for on-the-go nutrition.',
    icon: 'lunch_dining',
  },
]

export const cafeGallery = [
  { type: 'image', src: '/assets/cafe-food-1.jpg', alt: 'Protein Bowl with Eggs' },
  { type: 'video', src: '/assets/cafe-motion-3.mp4' },
  { type: 'image', src: '/assets/cafe-food-2.jpg', alt: 'Fresh Fruit Bowl' },
  { type: 'video', src: '/assets/cafe-motion-4.mp4' },
  { type: 'image', src: '/assets/cafe-food-4.jpg', alt: 'Grilled Protein Wrap' },
  { type: 'video', src: '/assets/cafe-motion-1.mp4' },
  { type: 'image', src: '/assets/cafe-food-3.jpg', alt: 'Fruit Bowl Close-up' },
  { type: 'video', src: '/assets/cafe-motion-2.mp4' },
]

export const navLinks = [
  { label: 'Facilities', href: '#facilities' },
  { label: 'Recovery', href: '#recovery' },
  // { label: 'Pricing', href: '#pricing' },
  { label: 'Cafe', href: '#cafe' },
]

export const footerLinks = {
  followUs: [
    { label: 'Instagram', href: 'https://www.instagram.com/club_viva_hamirpur/' },
    { label: 'Facebook', href: '#' },
  ],
  explore: [
    { label: 'Facilities', href: '#facilities' },
    { label: 'Pricing', href: '#pricing' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}
