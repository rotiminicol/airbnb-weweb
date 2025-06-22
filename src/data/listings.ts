
import { Listing } from '../types';

export const listings: Listing[] = [
  {
    id: '1',
    title: 'Modern Architectural Retreat',
    location: 'Los Angeles, California',
    price: 299,
    image: '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
    images: [
      '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
      '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
      '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png'
    ],
    description: 'A stunning modern home with clean lines, floor-to-ceiling windows, and a seamless indoor-outdoor living experience. Perfect for those who appreciate contemporary design and architectural excellence.',
    rating: 4.8,
    reviews: 47,
    host: 'Sarah Chen',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Parking', 'Modern Design'],
    coordinates: { lat: 34.0522, lng: -118.2437 }
  },
  {
    id: '2',
    title: 'Luxury Villa with Private Pool',
    location: 'Miami, Florida',
    price: 450,
    image: '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
    images: [
      '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
      '/lovable-uploads/1d9f4ef3-7678-4f63-ae2b-f0388d9e0874.png',
      '/lovable-uploads/02b3fe4c-5a06-4ee4-bbb2-6ab901be6ecc.png'
    ],
    description: 'Elegant Mediterranean-style villa featuring a beautiful private pool, lush tropical gardens, and sophisticated interiors. An oasis of tranquility and luxury in the heart of Miami.',
    rating: 4.9,
    reviews: 63,
    host: 'Michael Rodriguez',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Pool', 'Hot tub', 'Garden'],
    coordinates: { lat: 25.7617, lng: -80.1918 }
  },
  {
    id: '3',
    title: 'Contemporary Family Home',
    location: 'Seattle, Washington',
    price: 180,
    image: '/lovable-uploads/9b812bae-9900-4374-b108-d35b81a4ed8c.png',
    images: [
      '/lovable-uploads/9b812bae-9900-4374-b108-d35b81a4ed8c.png',
      '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
      '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png'
    ],
    description: 'Spacious modern family home with multiple levels, large windows, and a well-maintained landscape. Perfect for families seeking comfort, style, and convenience.',
    rating: 4.6,
    reviews: 29,
    host: 'Jennifer Walsh',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Parking', 'Garage', 'Family-friendly'],
    coordinates: { lat: 47.6062, lng: -122.3321 }
  },
  {
    id: '4',
    title: 'Desert Oasis with Pool',
    location: 'Scottsdale, Arizona',
    price: 380,
    image: '/lovable-uploads/02b3fe4c-5a06-4ee4-bbb2-6ab901be6ecc.png',
    images: [
      '/lovable-uploads/02b3fe4c-5a06-4ee4-bbb2-6ab901be6ecc.png',
      '/lovable-uploads/1d9f4ef3-7678-4f63-ae2b-f0388d9e0874.png',
      '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png'
    ],
    description: 'Stunning desert retreat with a beautiful infinity pool, outdoor entertainment area, and breathtaking sunset views. Experience luxury in the heart of the Sonoran Desert.',
    rating: 4.9,
    reviews: 82,
    host: 'Carlos Martinez',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Pool', 'Hot tub', 'Desert views'],
    coordinates: { lat: 33.4942, lng: -111.9261 }
  },
  {
    id: '5',
    title: 'Cozy Tiny House Experience',
    location: 'Portland, Oregon',
    price: 95,
    image: '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
    images: [
      '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
      '/lovable-uploads/067dfcc9-c1c2-43a8-9fa9-2907750cc6cc.png',
      '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png'
    ],
    description: 'Charming tiny house with clever space-saving design, warm wood interiors, and all the amenities you need for a unique and cozy getaway experience.',
    rating: 4.7,
    reviews: 156,
    host: 'Rachel Green',
    amenities: ['WiFi', 'Kitchenette', 'Heating', 'Compact living', 'Eco-friendly'],
    coordinates: { lat: 45.5152, lng: -122.6784 }
  },
  {
    id: '6',
    title: 'Elegant Coastal Living',
    location: 'Santa Barbara, California',
    price: 275,
    image: '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
    images: [
      '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
      '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
      '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png'
    ],
    description: 'Beautiful coastal home with soft blue accents, open floor plan, and stunning ocean proximity. The perfect retreat for a peaceful seaside vacation with modern amenities.',
    rating: 4.8,
    reviews: 94,
    host: 'Emily Thompson',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Ocean proximity', 'Fireplace', 'Peaceful'],
    coordinates: { lat: 34.4208, lng: -119.6982 }
  },
  {
    id: '7',
    title: 'Rustic Modern Loft',
    location: 'Austin, Texas',
    price: 165,
    image: '/lovable-uploads/067dfcc9-c1c2-43a8-9fa9-2907750cc6cc.png',
    images: [
      '/lovable-uploads/067dfcc9-c1c2-43a8-9fa9-2907750cc6cc.png',
      '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png',
      '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png'
    ],
    description: 'Industrial-chic loft with exposed wooden beams, modern amenities, and an open-concept design. Perfect blend of rustic charm and contemporary comfort in vibrant Austin.',
    rating: 4.5,
    reviews: 73,
    host: 'Tyler Brown',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Loft space', 'Exposed beams', 'Urban'],
    coordinates: { lat: 30.2672, lng: -97.7431 }
  },
  {
    id: '8',
    title: 'Tropical Modern Paradise',
    location: 'Key West, Florida',
    price: 520,
    image: '/lovable-uploads/1d9f4ef3-7678-4f63-ae2b-f0388d9e0874.png',
    images: [
      '/lovable-uploads/1d9f4ef3-7678-4f63-ae2b-f0388d9e0874.png',
      '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
      '/lovable-uploads/02b3fe4c-5a06-4ee4-bbb2-6ab901be6ecc.png'
    ],
    description: 'Stunning modern villa with infinity pool, tropical gardens, and seamless indoor-outdoor living. Experience ultimate luxury in a tropical paradise setting.',
    rating: 4.9,
    reviews: 127,
    host: 'Maria Garcia',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Infinity Pool', 'Garden', 'Luxury'],
    coordinates: { lat: 24.5551, lng: -81.7800 }
  },
  {
    id: '9',
    title: 'Modern Mountain Cabin',
    location: 'Aspen, Colorado',
    price: 420,
    image: '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png',
    images: [
      '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png',
      '/lovable-uploads/067dfcc9-c1c2-43a8-9fa9-2907750cc6cc.png',
      '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png'
    ],
    description: 'Contemporary mountain cabin with soaring ceilings, large windows, and modern amenities. Enjoy breathtaking mountain views while experiencing luxury comfort.',
    rating: 4.8,
    reviews: 68,
    host: 'Amanda Davis',
    amenities: ['WiFi', 'Kitchen', 'Heating', 'Fireplace', 'Mountain view', 'Luxury'],
    coordinates: { lat: 39.1911, lng: -106.8175 }
  },
  {
    id: '10',
    title: 'Charming Cottage Retreat',
    location: 'Napa Valley, California',
    price: 225,
    image: '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
    images: [
      '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
      '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
      '/lovable-uploads/9b812bae-9900-4374-b108-d35b81a4ed8c.png'
    ],
    description: 'Adorable cottage with traditional charm, covered porch, and beautifully landscaped grounds. Perfect for a peaceful wine country getaway with modern comforts.',
    rating: 4.7,
    reviews: 91,
    host: 'James Porter',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Garden', 'Porch', 'Wine country'],
    coordinates: { lat: 38.2975, lng: -122.2869 }
  }
];
