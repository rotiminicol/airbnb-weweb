import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import AuthModal from '../components/AuthModal';
import { supabase } from '@/integrations/supabase/client';

interface Booking {
  id: string;
  listingTitle: string;
  listingImage: string;
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  hostName: string;
}

const Bookings = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [openModal, setOpenModal] = useState<
    | { type: 'auth'; mode: 'login' | 'signup' }
    | null
  >(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = useCallback(async (userId: string) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      if (error) throw error;
      setBookings(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const userId = data.session?.user?.id;
      if (userId) fetchBookings(userId);
      else setBookings([]);
      // Fetch demo bookings from localStorage
      const demo = JSON.parse(localStorage.getItem('demo_bookings') || '[]');
      if (demo.length > 0) setBookings(prev => [...demo, ...prev]);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (['SIGNED_OUT', 'USER_DELETED'].includes(event)) {
        setUser(null);
        setIsLoggedIn(false);
      } else if (session && session.user) {
        setUser({
          name: session.user.user_metadata?.name || session.user.email.split('@')[0],
          email: session.user.email
        });
        setIsLoggedIn(true);
      }
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [user, fetchBookings]);

  const handleAuth = (userData: { name: string; email: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
    setOpenModal(null);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isLoggedIn={isLoggedIn}
        user={user}
        onAuthModal={(mode) => setOpenModal({ type: 'auth', mode })}
        onLogout={handleLogout}
      />

      {openModal?.type === 'auth' && (
        <AuthModal
          type={openModal.mode}
          onClose={() => setOpenModal(null)}
          onAuth={handleAuth}
          onSwitchType={(mode) => setOpenModal({ type: 'auth', mode })}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Your Bookings</h1>
          <p className="text-gray-600">Manage your trips and view booking details</p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading bookings...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-600 mb-6">Start exploring amazing places to stay</p>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Start Exploring
            </Button>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-48 h-48 sm:h-auto">
                    <img
                      src={booking.listingImage}
                      alt={booking.listingTitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="mb-4 sm:mb-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                          {booking.listingTitle}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{booking.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="text-sm">Hosted by {booking.hostName}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start sm:items-end">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${getStatusColor(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                        <div className="text-right">
                          <div className="text-lg sm:text-xl font-bold text-gray-900">${booking.totalPrice}</div>
                          <div className="text-sm text-gray-600">total</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <div>
                          <div className="font-medium">Check-in</div>
                          <div>{formatDate(booking.checkIn)}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <div>
                          <div className="font-medium">Check-out</div>
                          <div>{formatDate(booking.checkOut)}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <div>
                          <div className="font-medium">Guests</div>
                          <div>{booking.guests} guest{booking.guests > 1 ? 's' : ''}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 mt-4 pt-4 border-t border-gray-200">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      {booking.status === 'upcoming' && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          Cancel Booking
                        </Button>
                      )}
                      <Button
                        size="sm"
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                      >
                        Contact Host
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
