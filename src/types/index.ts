export interface Listing {
  id: number;
  title: string;
  location: string;
  country: string;
  city: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviews_count: number;
  amenities: string[];
  coordinates_lat: number;
  coordinates_lng: number;
  max_guests: number;
  bedrooms?: number;
  bathrooms?: number;
  property_type?: string;
  status: string;
  user_id: number;
  created_at?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  member_since?: string;
  verified?: boolean;
  language?: string;
  currency?: string;
  timezone?: string;
  two_factor_enabled?: boolean;
  email_notifications?: boolean;
  sms_notifications?: boolean;
  google_oauth?: {
    id: string;
    name: string;
    email: string;
  };
  facebook_oauth?: {
    id: number;
    name: string;
    email: string;
  };
  created_at?: string;
}

export interface Booking {
  id: number;
  check_in: string;
  check_out: string;
  guests: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  nights: number;
  user_id: number;
  listing_id: number;
  created_at?: string;
}

export interface Wishlist {
  id: number;
  name: string;
  description?: string;
  image?: string;
  is_public: boolean;
  user_id: number;
  created_at?: string;
}

export interface WishlistItem {
  id: number;
  added_at: string;
  wishlist_id: number;
  listing_id: number;
  created_at?: string;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  user_id: number;
  listing_id: number;
  booking_id?: number;
  created_at?: string;
}

export interface Message {
  id: number;
  message: string;
  is_read: boolean;
  sender_id: number;
  receiver_id: number;
  booking_id?: number;
  created_at?: string;
}

export interface Notification {
  id: number;
  type: string;
  title: string;
  message: string;
  is_read: boolean;
  data?: string;
  user_id: number;
  created_at?: string;
}
