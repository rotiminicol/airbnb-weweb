import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../contexts/AuthContext';
import { useBookings } from '../hooks/useBookings';
import { useListing } from '../hooks/useListings';

const Bookings = () => {
  const { user, isAuthenticated } = useAuth();
  const [openModal, setOpenModal] = useState<
    | { type: 'auth'; mode: 'login' | 'signup' }
    | null
  >(null);

  // Fetch bookings from Xano API
  const { data: bookings = [], isLoading, error } = useBookings(user?.id);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onAuthModal={(mode) => setOpenModal({ type: 'auth', mode })} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sign in to view your bookings</h3>
            <p className="text-gray-600 mb-6">Log in to see your upcoming trips and past stays</p>
            <Button 
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={() => setOpenModal({ type: 'auth', mode: 'login' })}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAuthModal={(mode) => setOpenModal({ type: 'auth', mode })} />

      {openModal?.type === 'auth' && (
        <AuthModal
          type={openModal.mode}
          onClose={() => setOpenModal(null)}
          onSwitchType={(mode) => setOpenModal({ type: 'auth', mode })}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Your Bookings</h1>
          <p className="text-gray-600">Manage your trips and view booking details</p>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-gray-500">Loading bookings...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">Failed to load bookings</div>
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
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Separate component for booking card to handle listing data
const BookingCard = ({ booking }: { booking: any }) => {
  const { data: listing } = useListing(booking.listing_id);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
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

  if (!listing) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-48 h-48 sm:h-auto">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                {listing.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{listing.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-sm">Hosted by Host</span>
              </div>
            </div>
            
            <div className="flex flex-col items-start sm:items-end">
              <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${getStatusColor(booking.status)}`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
              <div className="text-right">
                <div className="text-lg sm:text-xl font-bold text-gray-900">${booking.total_price}</div>
                <div className="text-sm text-gray-600">total</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <div>
                <div className="font-medium">Check-in</div>
                <div>{formatDate(booking.check_in)}</div>
              </div>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <div>
                <div className="font-medium">Check-out</div>
                <div>{formatDate(booking.check_out)}</div>
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
            {booking.status === 'confirmed' && (
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
  );
};

export default Bookings;
