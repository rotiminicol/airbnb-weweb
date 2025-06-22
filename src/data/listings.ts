
import { Listing } from '../types';

export const listings: Listing[] = [
  {
    id: '1',
    title: 'Cozy Downtown Loft',
    location: 'New York, NY',
    price: 125,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
    ],
    description: 'A beautiful loft in the heart of downtown Manhattan. Perfect for business travelers and couples looking for a romantic getaway.',
    rating: 4.8,
    reviews: 124,
    host: 'Sarah Chen',
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Workspace'],
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: '2',
    title: 'Modern Beach House',
    location: 'Malibu, CA',
    price: 350,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop'
    ],
    description: 'Stunning oceanfront property with panoramic views. Wake up to the sound of waves and enjoy sunset dinners on the deck.',
    rating: 4.9,
    reviews: 89,
    host: 'Michael Rodriguez',
    amenities: ['WiFi', 'Beach access', 'Hot tub', 'BBQ grill', 'Parking'],
    coordinates: { lat: 34.0259, lng: -118.7798 }
  },
  {
    id: '3',
    title: 'Rustic Mountain Cabin',
    location: 'Aspen, CO',
    price: 200,
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop'
    ],
    description: 'Escape to nature in this charming log cabin surrounded by towering pines. Perfect for hiking, skiing, and stargazing.',
    rating: 4.7,
    reviews: 156,
    host: 'Jennifer Walsh',
    amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Hiking trails', 'Pet-friendly'],
    coordinates: { lat: 39.1911, lng: -106.8175 }
  },
  {
    id: '4',
    title: 'Urban Studio Apartment',
    location: 'San Francisco, CA',
    price: 95,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop'
    ],
    description: 'Compact and efficient studio in vibrant SOMA district. Walking distance to tech companies and trendy restaurants.',
    rating: 4.6,
    reviews: 203,
    host: 'David Kim',
    amenities: ['WiFi', 'Kitchenette', 'Elevator', 'Laundry'],
    coordinates: { lat: 37.7749, lng: -122.4194 }
  },
  {
    id: '5',
    title: 'Historic Brownstone',
    location: 'Boston, MA',
    price: 175,
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop'
    ],
    description: 'Experience Boston\'s rich history in this beautifully restored 19th-century brownstone in Back Bay.',
    rating: 4.8,
    reviews: 97,
    host: 'Emily Thompson',
    amenities: ['WiFi', 'Historic charm', 'Central location', 'Garden access'],
    coordinates: { lat: 42.3601, lng: -71.0589 }
  },
  {
    id: '6',
    title: 'Desert Oasis Villa',
    location: 'Scottsdale, AZ',
    price: 275,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
    ],
    description: 'Luxurious villa with pool and spa, set against stunning desert mountain views. Perfect for relaxation and rejuvenation.',
    rating: 4.9,
    reviews: 134,
    host: 'Carlos Martinez',
    amenities: ['WiFi', 'Pool', 'Spa', 'Mountain views', 'Parking'],
    coordinates: { lat: 33.4942, lng: -111.9261 }
  },
  {
    id: '7',
    title: 'Lakefront Cottage',
    location: 'Lake Tahoe, CA',
    price: 225,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop'
    ],
    description: 'Charming cottage right on the lake with private dock. Enjoy swimming, kayaking, and breathtaking sunsets.',
    rating: 4.8,
    reviews: 178,
    host: 'Lisa Anderson',
    amenities: ['WiFi', 'Lake access', 'Dock', 'Kayaks', 'Fire pit'],
    coordinates: { lat: 39.0968, lng: -120.0324 }
  },
  {
    id: '8',
    title: 'Metropolitan Penthouse',
    location: 'Chicago, IL',
    price: 400,
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop'
    ],
    description: 'Luxury penthouse with panoramic city views and modern amenities. The ultimate urban experience in the Windy City.',
    rating: 4.9,
    reviews: 87,
    host: 'Robert Wilson',
    amenities: ['WiFi', 'City views', 'Balcony', 'Gym access', 'Concierge'],
    coordinates: { lat: 41.8781, lng: -87.6298 }
  },
  {
    id: '9',
    title: 'Vineyard Estate',
    location: 'Napa Valley, CA',
    price: 320,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop'
    ],
    description: 'Elegant estate surrounded by vineyards. Includes wine tasting experiences and gourmet kitchen for cooking enthusiasts.',
    rating: 4.8,
    reviews: 112,
    host: 'Maria Garcia',
    amenities: ['WiFi', 'Wine tasting', 'Garden', 'Gourmet kitchen', 'Terrace'],
    coordinates: { lat: 38.2975, lng: -122.2869 }
  },
  {
    id: '10',
    title: 'Coastal Bungalow',
    location: 'Key West, FL',
    price: 185,
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop'
    ],
    description: 'Tropical paradise just steps from the beach. Enjoy the laid-back Key West lifestyle with snorkeling and sunset watching.',
    rating: 4.7,
    reviews: 145,
    host: 'James Porter',
    amenities: ['WiFi', 'Beach access', 'Snorkel gear', 'Bicycle', 'Patio'],
    coordinates: { lat: 24.5551, lng: -81.7800 }
  },
  {
    id: '11',
    title: 'Garden View Suite',
    location: 'Portland, OR',
    price: 140,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
    ],
    description: 'Peaceful suite overlooking beautiful botanical gardens. Perfect for nature lovers and those seeking tranquility.',
    rating: 4.6,
    reviews: 168,
    host: 'Rachel Green',
    amenities: ['WiFi', 'Garden view', 'Quiet location', 'Coffee maker', 'Reading nook'],
    coordinates: { lat: 45.5152, lng: -122.6784 }
  },
  {
    id: '12',
    title: 'Riverfront Lodge',
    location: 'Austin, TX',
    price: 165,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop'
    ],
    description: 'Modern lodge on the Colorado River with easy access to downtown Austin\'s music scene and food trucks.',
    rating: 4.7,
    reviews: 192,
    host: 'Kevin Johnson',
    amenities: ['WiFi', 'River access', 'Kayak rental', 'Music venue nearby', 'BBQ area'],
    coordinates: { lat: 30.2672, lng: -97.7431 }
  },
  {
    id: '13',
    title: 'Mountain View Chalet',
    location: 'Jackson Hole, WY',
    price: 280,
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop'
    ],
    description: 'Luxury chalet with breathtaking mountain views. Perfect for skiing in winter and hiking in summer.',
    rating: 4.9,
    reviews: 98,
    host: 'Amanda Davis',
    amenities: ['WiFi', 'Mountain views', 'Ski access', 'Hot tub', 'Fireplace'],
    coordinates: { lat: 43.4799, lng: -110.7624 }
  },
  {
    id: '14',
    title: 'Art District Loft',
    location: 'Santa Fe, NM',
    price: 155,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop'
    ],
    description: 'Artistic loft in the heart of Santa Fe\'s gallery district. Surrounded by local art, cuisine, and southwestern culture.',
    rating: 4.8,
    reviews: 127,
    host: 'Sofia Rodriguez',
    amenities: ['WiFi', 'Art galleries nearby', 'Local cuisine', 'Cultural sites', 'Workspace'],
    coordinates: { lat: 35.6870, lng: -105.9378 }
  },
  {
    id: '15',
    title: 'Skyline View Apartment',
    location: 'Seattle, WA',
    price: 190,
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop'
    ],
    description: 'Modern apartment with stunning views of the Seattle skyline and Space Needle. Close to Pike Place Market and waterfront.',
    rating: 4.7,
    reviews: 156,
    host: 'Tyler Brown',
    amenities: ['WiFi', 'City views', 'Central location', 'Coffee shops nearby', 'Public transit'],
    coordinates: { lat: 47.6062, lng: -122.3321 }
  }
];
