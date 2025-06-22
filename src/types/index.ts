
export interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviews: number;
  host: string;
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Booking {
  id: string;
  userId: string;
  listingId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  guestName: string;
  guestEmail: string;
  notes?: string;
}
