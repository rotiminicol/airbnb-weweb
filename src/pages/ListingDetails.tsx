import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, Share, MapPin, Wifi, Car, Home, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { listings } from '../data/listings';
import Header from '../components/Header';
import AuthModal from '../components/AuthModal';

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [openModal, setOpenModal] = useState<
    | { type: 'auth'; mode: 'login' | 'signup' }
    | null
  >(null);

  const listing = listings.find(l => l.id === id);

  if (!listing) {
    return <div>Listing not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === listing.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? listing.images.length - 1 : prev - 1
    );
  };

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    
    const nights = Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24));
    const total = nights * listing.price;
    
    navigate('/payment', {
      state: {
        listing,
        checkIn,
        checkOut,
        guests,
        nights,
        total
      }
    });
  };

  const handleAuth = (userData: { name: string; email: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
    setOpenModal(null);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        isLoggedIn={isLoggedIn}
        user={user}
        onAuthModal={(mode) => setOpenModal({ type: 'auth', mode })}
        onLogout={handleLogout}
      />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">{listing.title}</h1>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current text-yellow-500" />
                <span className="font-medium">{listing.rating}</span>
                <span className="text-gray-600">({listing.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{listing.location}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-coral-600 transition-colors">
                <Share className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-coral-600 transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Save</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={listing.images[currentImageIndex]}
              alt={listing.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            {listing.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {listing.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Host Info */}
            <div className="border-b pb-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Entire place hosted by {listing.host}</h2>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>Up to {guests} guests</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{listing.host.charAt(0)}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-b pb-6 mb-6">
              <p className="text-gray-700 leading-relaxed">{listing.description}</p>
            </div>

            {/* Amenities */}
            <div className="border-b pb-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Wifi className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold">${listing.price}</span>
                    <span className="text-gray-600"> night</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <span className="font-medium">{listing.rating}</span>
                    <span className="text-gray-600">({listing.reviews})</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button 
                  onClick={handleBooking}
                  className="w-full bg-coral-500 hover:bg-coral-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Reserve
                </Button>

                <p className="text-center text-sm text-gray-600 mt-3">
                  You won't be charged yet
                </p>

                {checkIn && checkOut && (
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>${listing.price} x {Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))} nights</span>
                      <span>${Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) * listing.price}</span>
                    </div>
                    <div className="flex justify-between font-medium border-t pt-2">
                      <span>Total</span>
                      <span>${Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) * listing.price}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal?.type === 'auth' && (
        <AuthModal
          type={openModal.mode}
          onClose={() => setOpenModal(null)}
          onAuth={handleAuth}
          onSwitchType={(mode) => setOpenModal({ type: 'auth', mode })}
        />
      )}
    </div>
  );
};

export default ListingDetails;
