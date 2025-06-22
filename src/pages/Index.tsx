
import React, { useState } from 'react';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import ListingModal from '../components/ListingModal';
import BookingModal from '../components/BookingModal';
import AuthModal from '../components/AuthModal';
import { listings } from '../data/listings';
import { Listing } from '../types';

const Index = () => {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleListingClick = (listing: Listing) => {
    setSelectedListing(listing);
  };

  const handleBookNow = () => {
    if (!isLoggedIn) {
      setAuthModal('login');
      return;
    }
    setShowBookingModal(true);
  };

  const handleAuth = (userData: { name: string; email: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
    setAuthModal(null);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isLoggedIn={isLoggedIn}
        user={user}
        onAuthModal={setAuthModal}
        onLogout={handleLogout}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Find your perfect stay</h1>
          <p className="text-xl text-gray-600">Discover amazing places to stay around the world</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              onClick={() => handleListingClick(listing)}
            />
          ))}
        </div>
      </main>

      {selectedListing && (
        <ListingModal
          listing={selectedListing}
          onClose={() => setSelectedListing(null)}
          onBookNow={handleBookNow}
        />
      )}

      {showBookingModal && selectedListing && (
        <BookingModal
          listing={selectedListing}
          onClose={() => setShowBookingModal(false)}
        />
      )}

      {authModal && (
        <AuthModal
          type={authModal}
          onClose={() => setAuthModal(null)}
          onAuth={handleAuth}
          onSwitchType={(type) => setAuthModal(type)}
        />
      )}
    </div>
  );
};

export default Index;
