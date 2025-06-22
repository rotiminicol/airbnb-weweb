import { Listing } from '../types';

export interface CountryListings {
  [country: string]: Listing[];
}

export const listingsByCountry: CountryListings = {
  'France': [
    {
      id: 'fr-1',
      title: 'Parisian Loft with Eiffel View',
      location: 'Paris, France',
      price: 320,
      image: '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
      images: [
        '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png'
      ],
      description: 'Chic loft in the heart of Paris with a stunning Eiffel Tower view.',
      rating: 4.9,
      reviews: 120,
      host: 'Claire Dubois',
      amenities: ['WiFi', 'Kitchen', 'Balcony', 'Washer'],
      coordinates: { lat: 48.8584, lng: 2.2945 }
    },
    {
      id: 'fr-2',
      title: 'Montmartre Artist Studio',
      location: 'Paris, France',
      price: 210,
      image: '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
      images: [
        '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
        '/lovable-uploads/067dfcc9-c1c2-43a8-9fa9-2907750cc6cc.png',
        '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png'
      ],
      description: 'Cozy artist studio in bohemian Montmartre, steps from Sacré-Cœur.',
      rating: 4.7,
      reviews: 80,
      host: 'Luc Moreau',
      amenities: ['WiFi', 'Kitchenette', 'Art supplies'],
      coordinates: { lat: 48.8867, lng: 2.3431 }
    },
    {
      id: 'fr-3',
      title: 'Luxury Flat near Louvre',
      location: 'Paris, France',
      price: 400,
      image: '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
      images: [
        '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
        '/lovable-uploads/1d9f4ef3-7678-4f63-ae2b-f0388d9e0874.png',
        '/lovable-uploads/02b3fe4c-5a06-4ee4-bbb2-6ab901be6ecc.png'
      ],
      description: 'Elegant flat steps from the Louvre and Seine, with luxury amenities.',
      rating: 4.8,
      reviews: 95,
      host: 'Sophie Laurent',
      amenities: ['WiFi', 'Kitchen', 'Elevator', 'Air conditioning'],
      coordinates: { lat: 48.8606, lng: 2.3376 }
    },
    {
      id: 'fr-4',
      title: 'Champs-Élysées Penthouse',
      location: 'Paris, France',
      price: 650,
      image: '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
      images: [
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
        '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png'
      ],
      description: 'Stunning penthouse with panoramic city views on the Champs-Élysées.',
      rating: 5.0,
      reviews: 60,
      host: 'Jean-Pierre Martin',
      amenities: ['WiFi', 'Kitchen', 'Terrace', 'Concierge'],
      coordinates: { lat: 48.8698, lng: 2.3078 }
    },
    {
      id: 'fr-5',
      title: 'Seine Riverside Cottage',
      location: 'Versailles, France',
      price: 180,
      image: '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
      images: [
        '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/9b812bae-9900-4374-b108-d35b81a4ed8c.png'
      ],
      description: 'Charming riverside cottage near Versailles Palace, perfect for couples.',
      rating: 4.6,
      reviews: 70,
      host: 'Marie Petit',
      amenities: ['WiFi', 'Garden', 'Fireplace'],
      coordinates: { lat: 48.8049, lng: 2.1204 }
    }
  ],
  'UAE': [
    {
      id: 'ae-1',
      title: 'Luxury Burj Khalifa View Suite',
      location: 'Dubai, UAE',
      price: 700,
      image: '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
      images: [
        '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
        '/lovable-uploads/1d9f4ef3-7678-4f63-ae2b-f0388d9e0874.png',
        '/lovable-uploads/02b3fe4c-5a06-4ee4-bbb2-6ab901be6ecc.png'
      ],
      description: 'Opulent suite with direct Burj Khalifa views and private pool.',
      rating: 4.9,
      reviews: 110,
      host: 'Aisha Al Farsi',
      amenities: ['WiFi', 'Pool', 'City view', 'Concierge'],
      coordinates: { lat: 25.1972, lng: 55.2744 }
    },
    {
      id: 'ae-2',
      title: 'Palm Jumeirah Beach Villa',
      location: 'Dubai, UAE',
      price: 1200,
      image: '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
      images: [
        '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png'
      ],
      description: 'Private villa on the Palm with beach access and infinity pool.',
      rating: 5.0,
      reviews: 85,
      host: 'Omar Bin Zayed',
      amenities: ['WiFi', 'Beachfront', 'Pool', 'Private chef'],
      coordinates: { lat: 25.1122, lng: 55.1386 }
    },
    {
      id: 'ae-3',
      title: 'Desert Glamping Dome',
      location: 'Al Ain, UAE',
      price: 350,
      image: '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
      images: [
        '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
        '/lovable-uploads/067dfcc9-c1c2-43a8-9fa9-2907750cc6cc.png',
        '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png'
      ],
      description: 'Unique desert dome with stargazing and luxury amenities.',
      rating: 4.8,
      reviews: 60,
      host: 'Fatima Al Mazrouei',
      amenities: ['WiFi', 'Desert view', 'Breakfast', 'Fire pit'],
      coordinates: { lat: 24.2075, lng: 55.7447 }
    },
    {
      id: 'ae-4',
      title: 'Abu Dhabi Corniche Apartment',
      location: 'Abu Dhabi, UAE',
      price: 400,
      image: '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
      images: [
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
        '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png'
      ],
      description: 'Modern apartment with sea views on the Abu Dhabi Corniche.',
      rating: 4.7,
      reviews: 50,
      host: 'Khalid Al Nahyan',
      amenities: ['WiFi', 'Sea view', 'Gym', 'Parking'],
      coordinates: { lat: 24.4667, lng: 54.3667 }
    },
    {
      id: 'ae-5',
      title: 'Sharjah Heritage House',
      location: 'Sharjah, UAE',
      price: 180,
      image: '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
      images: [
        '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/9b812bae-9900-4374-b108-d35b81a4ed8c.png'
      ],
      description: 'Traditional Emirati house in the heart of Sharjah\'s heritage area.',
      rating: 4.6,
      reviews: 40,
      host: 'Salem Al Qasimi',
      amenities: ['WiFi', 'Courtyard', 'Breakfast'],
      coordinates: { lat: 25.3463, lng: 55.4209 }
    }
  ],
  'Nigeria': [
    {
      id: 'ng-1',
      title: 'Lekki Luxury Penthouse',
      location: 'Lagos, Nigeria',
      price: 300,
      image: '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
      images: [
        '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png'
      ],
      description: 'Modern penthouse in Lekki Phase 1 with city views and pool.',
      rating: 4.8,
      reviews: 90,
      host: 'Chinedu Okafor',
      amenities: ['WiFi', 'Pool', 'City view', 'Parking'],
      coordinates: { lat: 6.4318, lng: 3.6015 }
    },
    {
      id: 'ng-2',
      title: 'Victoria Island Executive Suite',
      location: 'Lagos, Nigeria',
      price: 250,
      image: '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
      images: [
        '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
        '/lovable-uploads/1d9f4ef3-7678-4f63-ae2b-f0388d9e0874.png',
        '/lovable-uploads/02b3fe4c-5a06-4ee4-bbb2-6ab901be6ecc.png'
      ],
      description: 'Executive suite in Victoria Island, close to top restaurants and nightlife.',
      rating: 4.7,
      reviews: 70,
      host: 'Ngozi Balogun',
      amenities: ['WiFi', 'Kitchen', 'Air conditioning'],
      coordinates: { lat: 6.4281, lng: 3.4216 }
    },
    {
      id: 'ng-3',
      title: 'Abuja City Center Apartment',
      location: 'Abuja, Nigeria',
      price: 180,
      image: '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
      images: [
        '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
        '/lovable-uploads/067dfcc9-c1c2-43a8-9fa9-2907750cc6cc.png',
        '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png'
      ],
      description: 'Central Abuja apartment with modern amenities and security.',
      rating: 4.6,
      reviews: 55,
      host: 'Amina Bello',
      amenities: ['WiFi', 'Security', 'Parking'],
      coordinates: { lat: 9.0579, lng: 7.4951 }
    },
    {
      id: 'ng-4',
      title: 'Ibadan Garden Villa',
      location: 'Ibadan, Nigeria',
      price: 120,
      image: '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
      images: [
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
        '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png'
      ],
      description: 'Peaceful villa with lush gardens in Ibadan GRA.',
      rating: 4.5,
      reviews: 40,
      host: 'Tunde Adebayo',
      amenities: ['WiFi', 'Garden', 'Breakfast'],
      coordinates: { lat: 7.3775, lng: 3.947 }
    },
    {
      id: 'ng-5',
      title: 'Enugu Cozy Bungalow',
      location: 'Enugu, Nigeria',
      price: 90,
      image: '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
      images: [
        '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/9b812bae-9900-4374-b108-d35b81a4ed8c.png'
      ],
      description: 'Cozy family bungalow in Enugu with all essentials.',
      rating: 4.4,
      reviews: 30,
      host: 'Chika Eze',
      amenities: ['WiFi', 'Parking', 'Family-friendly'],
      coordinates: { lat: 6.5244, lng: 7.5086 }
    }
  ],
  'Italy': [
    {
      id: 'it-1',
      title: 'Venetian Canal Apartment',
      location: 'Venice, Italy',
      price: 350,
      image: '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
      images: [
        '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png'
      ],
      description: 'Charming apartment overlooking a quiet canal in Venice.',
      rating: 4.8,
      reviews: 100,
      host: 'Giulia Rossi',
      amenities: ['WiFi', 'Kitchen', 'Canal view'],
      coordinates: { lat: 45.4408, lng: 12.3155 }
    },
    {
      id: 'it-2',
      title: 'Tuscan Countryside Villa',
      location: 'Florence, Italy',
      price: 500,
      image: '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
      images: [
        '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
        '/lovable-uploads/1d9f4ef3-7678-4f63-ae2b-f0388d9e0874.png',
        '/lovable-uploads/02b3fe4c-5a06-4ee4-bbb2-6ab901be6ecc.png'
      ],
      description: 'Spacious villa in the Tuscan hills with a private pool.',
      rating: 4.9,
      reviews: 80,
      host: 'Marco Bianchi',
      amenities: ['WiFi', 'Pool', 'Garden', 'Fireplace'],
      coordinates: { lat: 43.7696, lng: 11.2558 }
    },
    {
      id: 'it-3',
      title: 'Rome City Center Loft',
      location: 'Rome, Italy',
      price: 270,
      image: '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
      images: [
        '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
        '/lovable-uploads/067dfcc9-c1c2-43a8-9fa9-2907750cc6cc.png',
        '/lovable-uploads/4a3456c9-e8c0-46f5-8822-b205513d2057.png'
      ],
      description: 'Modern loft in the heart of Rome, steps from the Colosseum.',
      rating: 4.7,
      reviews: 90,
      host: 'Luca Romano',
      amenities: ['WiFi', 'Kitchen', 'Air conditioning'],
      coordinates: { lat: 41.9028, lng: 12.4964 }
    },
    {
      id: 'it-4',
      title: 'Amalfi Coast Seaside Home',
      location: 'Amalfi, Italy',
      price: 600,
      image: '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
      images: [
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
        '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png'
      ],
      description: 'Breathtaking home with sea views on the Amalfi Coast.',
      rating: 5.0,
      reviews: 60,
      host: 'Francesca Esposito',
      amenities: ['WiFi', 'Sea view', 'Terrace'],
      coordinates: { lat: 40.6346, lng: 14.6029 }
    },
    {
      id: 'it-5',
      title: 'Milan Fashion District Flat',
      location: 'Milan, Italy',
      price: 320,
      image: '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
      images: [
        '/lovable-uploads/e8c2315f-ed84-47ff-9d7a-1c7da960b64a.png',
        '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        '/lovable-uploads/9b812bae-9900-4374-b108-d35b81a4ed8c.png'
      ],
      description: 'Trendy flat in Milan\'s fashion district, perfect for shopping trips.',
      rating: 4.6,
      reviews: 70,
      host: 'Alessandra Conti',
      amenities: ['WiFi', 'Kitchen', 'Balcony'],
      coordinates: { lat: 45.4642, lng: 9.19 }
    }
  ],
  // ... Add USA, UK, Japan, Brazil, Australia, South Africa, Spain with 5 listings each ...
};
