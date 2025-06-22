// Script to seed Xano database with sample data
const XANO_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io';
const AUTH_API = `${XANO_BASE_URL}/api:K84Lj_FE`;
const AIRBNB_API = `${XANO_BASE_URL}/api:WFmTHjwy`;

// Sample users
const sampleUsers = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    phone: '+1234567890',
    verified: true,
    language: 'en',
    currency: 'USD',
    timezone: 'America/New_York'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    phone: '+1234567891',
    verified: true,
    language: 'en',
    currency: 'USD',
    timezone: 'America/Los_Angeles'
  }
];

// Sample listings
const sampleListings = [
  {
    title: 'Cozy Beachfront Villa',
    location: 'Maldives',
    country: 'Maldives',
    city: 'Male',
    price: 250,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    description: 'Beautiful beachfront villa with stunning ocean views. Perfect for a romantic getaway or family vacation.',
    rating: 4.8,
    reviews_count: 127,
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Beach Access', 'Air Conditioning'],
    coordinates_lat: 3.2028,
    coordinates_lng: 73.2207,
    max_guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    property_type: 'Villa',
    status: 'active',
    user_id: 1
  },
  {
    title: 'Modern City Apartment',
    location: 'New York',
    country: 'United States',
    city: 'New York',
    price: 180,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    description: 'Stylish apartment in the heart of Manhattan. Walking distance to major attractions and restaurants.',
    rating: 4.6,
    reviews_count: 89,
    amenities: ['WiFi', 'Kitchen', 'Gym', 'Doorman', 'Air Conditioning'],
    coordinates_lat: 40.7128,
    coordinates_lng: -74.0060,
    max_guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    property_type: 'Apartment',
    status: 'active',
    user_id: 2
  },
  {
    title: 'Mountain Cabin Retreat',
    location: 'Swiss Alps',
    country: 'Switzerland',
    city: 'Zermatt',
    price: 320,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    description: 'Charming wooden cabin with panoramic mountain views. Perfect for skiing and hiking adventures.',
    rating: 4.9,
    reviews_count: 156,
    amenities: ['WiFi', 'Fireplace', 'Ski Storage', 'Mountain View', 'Kitchen'],
    coordinates_lat: 46.0207,
    coordinates_lng: 7.7491,
    max_guests: 8,
    bedrooms: 4,
    bathrooms: 2,
    property_type: 'Cabin',
    status: 'active',
    user_id: 1
  },
  {
    title: 'Luxury Parisian Loft',
    location: 'Paris',
    country: 'France',
    city: 'Paris',
    price: 450,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    description: 'Elegant loft in the heart of Paris with Eiffel Tower views. High-end amenities and designer furniture.',
    rating: 4.7,
    reviews_count: 203,
    amenities: ['WiFi', 'Kitchen', 'Balcony', 'Concierge', 'Air Conditioning'],
    coordinates_lat: 48.8566,
    coordinates_lng: 2.3522,
    max_guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    property_type: 'Loft',
    status: 'active',
    user_id: 2
  },
  {
    title: 'Desert Oasis Villa',
    location: 'Dubai',
    country: 'UAE',
    city: 'Dubai',
    price: 380,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    description: 'Luxurious villa with private pool and desert views. Experience the perfect blend of comfort and adventure.',
    rating: 4.5,
    reviews_count: 78,
    amenities: ['WiFi', 'Private Pool', 'Kitchen', 'Desert View', 'Air Conditioning'],
    coordinates_lat: 25.2048,
    coordinates_lng: 55.2708,
    max_guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    property_type: 'Villa',
    status: 'active',
    user_id: 1
  }
];

// Sample bookings
const sampleBookings = [
  {
    check_in: '2024-06-15',
    check_out: '2024-06-20',
    guests: 4,
    total_price: 1000,
    status: 'confirmed',
    notes: 'Early check-in requested',
    nights: 5,
    user_id: 1,
    listing_id: 1
  },
  {
    check_in: '2024-07-01',
    check_out: '2024-07-05',
    guests: 2,
    total_price: 720,
    status: 'pending',
    notes: '',
    nights: 4,
    user_id: 2,
    listing_id: 2
  }
];

// Sample wishlists
const sampleWishlists = [
  {
    name: 'Dream Vacations',
    description: 'Places I want to visit someday',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    is_public: true,
    user_id: 1
  },
  {
    name: 'Weekend Getaways',
    description: 'Perfect for short trips',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    is_public: false,
    user_id: 2
  }
];

async function createUser(userData) {
  try {
    const response = await fetch(`${AUTH_API}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    console.log('Created user:', data);
    return data.user?.id;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
}

async function createListing(listingData) {
  try {
    const response = await fetch(`${AIRBNB_API}/listing`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(listingData)
    });
    const data = await response.json();
    console.log('Created listing:', data);
    return data.id;
  } catch (error) {
    console.error('Error creating listing:', error);
    return null;
  }
}

async function createBooking(bookingData) {
  try {
    const response = await fetch(`${AIRBNB_API}/booking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    });
    const data = await response.json();
    console.log('Created booking:', data);
    return data.id;
  } catch (error) {
    console.error('Error creating booking:', error);
    return null;
  }
}

async function createWishlist(wishlistData) {
  try {
    const response = await fetch(`${AIRBNB_API}/wishlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(wishlistData)
    });
    const data = await response.json();
    console.log('Created wishlist:', data);
    return data.id;
  } catch (error) {
    console.error('Error creating wishlist:', error);
    return null;
  }
}

async function seedDatabase() {
  console.log('Starting database seeding...');

  // Create users
  console.log('Creating users...');
  const userIds = [];
  for (const user of sampleUsers) {
    const userId = await createUser(user);
    if (userId) userIds.push(userId);
  }

  // Create listings
  console.log('Creating listings...');
  const listingIds = [];
  for (const listing of sampleListings) {
    const listingId = await createListing(listing);
    if (listingId) listingIds.push(listingId);
  }

  // Create bookings
  console.log('Creating bookings...');
  for (const booking of sampleBookings) {
    await createBooking(booking);
  }

  // Create wishlists
  console.log('Creating wishlists...');
  for (const wishlist of sampleWishlists) {
    await createWishlist(wishlist);
  }

  console.log('Database seeding completed!');
  console.log('Created users:', userIds);
  console.log('Created listings:', listingIds);
}

// Run the seeding
seedDatabase().catch(console.error); 