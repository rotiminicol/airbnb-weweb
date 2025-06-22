
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Search, Filter, MapPin } from 'lucide-react';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import { listings } from '../data/listings';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Explore = () => {
  const [showMap, setShowMap] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);

  const filteredListings = listings.filter(listing => 
    listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter(listing => 
    listing.price >= priceRange[0] && listing.price <= priceRange[1]
  );

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
    <div className="min-h-screen bg-white">
      <Header 
        isLoggedIn={isLoggedIn}
        user={user}
        onAuthModal={setAuthModal}
        onLogout={handleLogout}
      />

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search destinations, properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <button
              onClick={() => setShowMap(!showMap)}
              className="flex items-center space-x-2 px-6 py-3 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span>{showMap ? 'Hide map' : 'Show map'}</span>
            </button>
          </div>

          {/* Price Range Filter */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Price range:</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-600 min-w-[100px]">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
        </div>

        <div className={`grid ${showMap ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-8`}>
          {/* Listings Grid */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {filteredListings.length} stays found
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>

          {/* Map */}
          {showMap && (
            <div className="sticky top-24 h-[600px] rounded-lg overflow-hidden border">
              <MapContainer
                center={[39.8283, -98.5795]} // Center of USA
                zoom={4}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredListings.map((listing) => (
                  <Marker
                    key={listing.id}
                    position={[listing.coordinates.lat, listing.coordinates.lng]}
                  >
                    <Popup>
                      <div className="p-2">
                        <img
                          src={listing.image}
                          alt={listing.title}
                          className="w-32 h-20 object-cover rounded mb-2"
                        />
                        <h3 className="font-semibold text-sm">{listing.title}</h3>
                        <p className="text-xs text-gray-600">{listing.location}</p>
                        <p className="font-bold text-sm">${listing.price}/night</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
