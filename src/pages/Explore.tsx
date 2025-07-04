import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import AuthModal from '../components/AuthModal';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useListings } from '../hooks/useListings';

const Explore = () => {
  const { isAuthenticated } = useAuth();
  const [showMap, setShowMap] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [openModal, setOpenModal] = useState<
    | { type: 'auth'; mode: 'login' | 'signup' }
    | null
  >(null);
  const [selectedCountry, setSelectedCountry] = useState<string>('All');

  // Fetch listings from Xano API
  const { data: listings = [], isLoading, error } = useListings({
    country: selectedCountry === 'All' ? undefined : selectedCountry,
    search: searchQuery || undefined,
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
  });

  const filteredListings = listings.filter(listing => 
    listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter(listing => 
    listing.price >= priceRange[0] && listing.price <= priceRange[1]
  );

  // Get unique countries from listings
  const countryNames = ['All', ...Array.from(new Set(listings.map(l => l.country)))];

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onAuthModal={(mode) => setOpenModal({ type: 'auth', mode })}
      />

      {openModal?.type === 'auth' && (
        <AuthModal
          type={openModal.mode}
          onClose={() => setOpenModal(null)}
          onSwitchType={(mode) => setOpenModal({ type: 'auth', mode })}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Search and Filters */}
        <div className="mb-6 sm:mb-8">
          {/* Mobile Search Bar */}
          <div className="lg:hidden mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations, properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Search and Filter Controls */}
          <div className="hidden lg:flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations, properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <button
              onClick={() => setShowMap(!showMap)}
              className="flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors whitespace-nowrap"
            >
              <MapPin className="w-5 h-5" />
              <span>{showMap ? 'Hide map' : 'Show map'}</span>
            </button>
          </div>

          {/* Mobile Filter and Map Buttons */}
          <div className="flex lg:hidden gap-2 mb-4">
            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <button
              onClick={() => setShowMap(!showMap)}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span className="hidden sm:inline">{showMap ? 'Hide map' : 'Show map'}</span>
              <span className="sm:hidden">Map</span>
            </button>
          </div>

          {/* Price Range Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-sm text-gray-600 whitespace-nowrap">Price range:</span>
            <div className="flex items-center space-x-4 flex-1">
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-gray-600 min-w-[100px] text-right">
                ${priceRange[0]} - ${priceRange[1]}
              </span>
            </div>
          </div>

          {/* Country/Category Filter */}
          <div className="sticky top-0 z-10 bg-white py-4 flex flex-wrap gap-2 justify-center mb-6 border-b">
            {countryNames.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-3 py-1 rounded-full font-medium border transition-all duration-200 ${selectedCountry === country ? 'bg-red-500 text-white shadow scale-105' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                aria-current={selectedCountry === country}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid ${showMap ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-6 lg:gap-8`}>
          {/* Listings Grid */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-semibold">
                {filteredListings.length} stays found
              </h2>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry + searchQuery + priceRange.join('-')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
              >
                {filteredListings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Simple Map Placeholder */}
          {showMap && (
            <div className="sticky top-20 h-[400px] sm:h-[600px] rounded-lg overflow-hidden border bg-gray-100 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-4xl sm:text-6xl mb-4">🗺️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Showing {filteredListings.length} properties</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xs mx-auto">
                  {filteredListings.slice(0, 4).map((listing) => (
                    <div key={listing.id} className="bg-white p-2 rounded shadow text-xs">
                      <div className="font-semibold truncate">{listing.title}</div>
                      <div className="text-gray-600">${listing.price}/night</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
