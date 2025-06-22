// Xano API Configuration
const XANO_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io';
const AUTH_API = `${XANO_BASE_URL}/api:K84Lj_FE`;
const AIRBNB_API = `${XANO_BASE_URL}/api:WFmTHjwy`;
const FACEBOOK_OAUTH_API = `${XANO_BASE_URL}/api:FNRgufoX`;
const GOOGLE_OAUTH_API = `${XANO_BASE_URL}/api:dSLtswBq`;

// Types
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

// API Client Class
class XanoAPI {
  private authToken: string | null = null;

  constructor() {
    // Load token from localStorage on initialization
    this.authToken = localStorage.getItem('xano_auth_token');
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = endpoint.startsWith('http') ? endpoint : `${AIRBNB_API}/${endpoint}`;
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Network error' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Authentication Methods
  async login(email: string, password: string) {
    const response = await fetch(`${AUTH_API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Xano login response:', data); // Debug: see the actual response structure
    console.log('Response keys:', Object.keys(data)); // Debug: see all available keys
    
    const token = data.authToken || data.token || data.access_token || data.jwt; // Check for more common token names
    
    if (token) {
      this.authToken = token;
      localStorage.setItem('xano_auth_token', token);
    } else {
      console.log('No token found in response. Available keys:', Object.keys(data));
    }

    return data;
  }

  async signup(name: string, email: string, password: string) {
    const signupData = {
      name,
      email,
      password
    };
    
    console.log('Sending signup data:', { ...signupData, password: '***' }); // Debug: see what we're sending
    console.log('Signup data keys:', Object.keys(signupData)); // Debug: see the exact keys being sent
    
    const response = await fetch(`${AUTH_API}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signupData),
    });

    console.log('Signup response status:', response.status); // Debug: see the HTTP status
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Xano signup error:', errorData); // Debug: see the error details
      console.error('Full error response:', JSON.stringify(errorData, null, 2)); // More detailed error info
      throw new Error(`Signup failed: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    console.log('Xano signup response:', data); // Debug: see the actual response structure
    console.log('Response keys:', Object.keys(data)); // Debug: see all available keys
    
    const token = data.authToken || data.token || data.access_token || data.jwt; // Check for more common token names
    
    if (token) {
      this.authToken = token;
      localStorage.setItem('xano_auth_token', token);
    } else {
      console.log('No token found in response. Available keys:', Object.keys(data));
    }

    return data;
  }

  async getCurrentUser(): Promise<User> {
    if (!this.authToken) {
      throw new Error('No auth token found');
    }

    const response = await fetch(`${AUTH_API}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${this.authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get current user');
    }

    return response.json();
  }

  logout() {
    this.authToken = null;
    localStorage.removeItem('xano_auth_token');
  }

  // Listings Methods
  async getListings(params?: {
    country?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    guests?: number;
  }): Promise<Listing[]> {
    let endpoint = 'listing';
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
      endpoint += `?${searchParams.toString()}`;
    }
    
    return this.request(endpoint);
  }

  async getListing(id: number): Promise<Listing> {
    return this.request(`listing/${id}`);
  }

  async createListing(listing: Omit<Listing, 'id' | 'created_at'>): Promise<Listing> {
    return this.request('listing', {
      method: 'POST',
      body: JSON.stringify(listing),
    });
  }

  async updateListing(id: number, listing: Partial<Listing>): Promise<Listing> {
    return this.request(`listing/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(listing),
    });
  }

  async deleteListing(id: number): Promise<void> {
    return this.request(`listing/${id}`, {
      method: 'DELETE',
    });
  }

  // Bookings Methods
  async getBookings(userId?: number): Promise<Booking[]> {
    let endpoint = 'booking';
    if (userId) {
      endpoint += `?user_id=${userId}`;
    }
    return this.request(endpoint);
  }

  async getBooking(id: number): Promise<Booking> {
    return this.request(`booking/${id}`);
  }

  async createBooking(booking: Omit<Booking, 'id' | 'created_at'>): Promise<Booking> {
    return this.request('booking', {
      method: 'POST',
      body: JSON.stringify(booking),
    });
  }

  async updateBooking(id: number, booking: Partial<Booking>): Promise<Booking> {
    return this.request(`booking/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(booking),
    });
  }

  async deleteBooking(id: number): Promise<void> {
    return this.request(`booking/${id}`, {
      method: 'DELETE',
    });
  }

  // Wishlists Methods
  async getWishlists(userId?: number): Promise<Wishlist[]> {
    let endpoint = 'wishlist';
    if (userId) {
      endpoint += `?user_id=${userId}`;
    }
    return this.request(endpoint);
  }

  async getWishlist(id: number): Promise<Wishlist> {
    return this.request(`wishlist/${id}`);
  }

  async createWishlist(wishlist: Omit<Wishlist, 'id' | 'created_at'>): Promise<Wishlist> {
    return this.request('wishlist', {
      method: 'POST',
      body: JSON.stringify(wishlist),
    });
  }

  async updateWishlist(id: number, wishlist: Partial<Wishlist>): Promise<Wishlist> {
    return this.request(`wishlist/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(wishlist),
    });
  }

  async deleteWishlist(id: number): Promise<void> {
    return this.request(`wishlist/${id}`, {
      method: 'DELETE',
    });
  }

  // Wishlist Items Methods
  async getWishlistItems(wishlistId: number): Promise<WishlistItem[]> {
    return this.request(`wishlist_item?wishlist_id=${wishlistId}`);
  }

  async addToWishlist(wishlistId: number, listingId: number): Promise<WishlistItem> {
    return this.request('wishlist_item', {
      method: 'POST',
      body: JSON.stringify({
        wishlist_id: wishlistId,
        listing_id: listingId,
        added_at: new Date().toISOString(),
      }),
    });
  }

  async removeFromWishlist(wishlistItemId: number): Promise<void> {
    return this.request(`wishlist_item/${wishlistItemId}`, {
      method: 'DELETE',
    });
  }

  // Reviews Methods
  async getReviews(listingId?: number): Promise<Review[]> {
    let endpoint = 'review';
    if (listingId) {
      endpoint += `?listing_id=${listingId}`;
    }
    return this.request(endpoint);
  }

  async createReview(review: Omit<Review, 'id' | 'created_at'>): Promise<Review> {
    return this.request('review', {
      method: 'POST',
      body: JSON.stringify(review),
    });
  }

  async updateReview(id: number, review: Partial<Review>): Promise<Review> {
    return this.request(`review/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(review),
    });
  }

  async deleteReview(id: number): Promise<void> {
    return this.request(`review/${id}`, {
      method: 'DELETE',
    });
  }

  // Messages Methods
  async getMessages(userId?: number): Promise<Message[]> {
    let endpoint = 'message';
    if (userId) {
      endpoint += `?user_id=${userId}`;
    }
    return this.request(endpoint);
  }

  async getMessage(id: number): Promise<Message> {
    return this.request(`message/${id}`);
  }

  async sendMessage(message: Omit<Message, 'id' | 'created_at'>): Promise<Message> {
    return this.request('message', {
      method: 'POST',
      body: JSON.stringify(message),
    });
  }

  async updateMessage(id: number, message: Partial<Message>): Promise<Message> {
    return this.request(`message/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(message),
    });
  }

  async deleteMessage(id: number): Promise<void> {
    return this.request(`message/${id}`, {
      method: 'DELETE',
    });
  }

  // Notifications Methods
  async getNotifications(userId?: number): Promise<Notification[]> {
    let endpoint = 'notification';
    if (userId) {
      endpoint += `?user_id=${userId}`;
    }
    return this.request(endpoint);
  }

  async getNotification(id: number): Promise<Notification> {
    return this.request(`notification/${id}`);
  }

  async createNotification(notification: Omit<Notification, 'id' | 'created_at'>): Promise<Notification> {
    return this.request('notification', {
      method: 'POST',
      body: JSON.stringify(notification),
    });
  }

  async updateNotification(id: number, notification: Partial<Notification>): Promise<Notification> {
    return this.request(`notification/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(notification),
    });
  }

  async deleteNotification(id: number): Promise<void> {
    return this.request(`notification/${id}`, {
      method: 'DELETE',
    });
  }

  // Utility Methods
  isAuthenticated(): boolean {
    return !!this.authToken;
  }

  getAuthToken(): string | null {
    return this.authToken;
  }

  getGoogleAuthUrl(redirectUri: string) {
    return `${GOOGLE_OAUTH_API}/init?redirect_uri=${encodeURIComponent(redirectUri)}`;
  }

  getFacebookAuthUrl(redirectUri: string) {
    return `${FACEBOOK_OAUTH_API}/init?redirect_uri=${encodeURIComponent(redirectUri)}`;
  }

  async handleOauthCallback(provider: 'google' | 'facebook', code: string, redirectUri: string) {
    const endpoint = provider === 'google' 
      ? `${GOOGLE_OAUTH_API}/continue`
      : `${FACEBOOK_OAUTH_API}/continue`;
      
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, redirect_uri: redirectUri }),
    });

    const data = await response.json();
    const token = data.authToken || data.token;
    
    if (token) {
      this.authToken = token;
      localStorage.setItem('xano_auth_token', token);
    }

    return data;
  }
}

// Export singleton instance
export const xanoAPI = new XanoAPI(); 