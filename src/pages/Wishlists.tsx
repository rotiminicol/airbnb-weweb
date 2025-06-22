import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus, MapPin, Star, Trash2, Edit3, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import ListingCard from '../components/ListingCard';
import { listingsByCountry } from '../data/listings';

const Wishlists = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com'
  });

  // Mock wishlist data
  const [wishlists] = useState([
    {
      id: '1',
      name: 'Dream Vacation',
      description: 'Places I want to visit someday',
      count: 8,
      image: '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
      listings: Object.values(listingsByCountry).flat().slice(0, 8)
    },
    {
      id: '2',
      name: 'Weekend Getaways',
      description: 'Perfect for short trips',
      count: 5,
      image: '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
      listings: Object.values(listingsByCountry).flat().slice(8, 13)
    },
    {
      id: '3',
      name: 'Luxury Stays',
      description: 'High-end accommodations',
      count: 3,
      image: '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
      listings: Object.values(listingsByCountry).flat().slice(13, 16)
    }
  ]);

  const [selectedWishlist, setSelectedWishlist] = useState(wishlists[0]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} user={user} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Wishlists</h1>
              <p className="text-gray-600">Save and organize places you love</p>
            </div>
            <Button 
              onClick={() => setShowCreateModal(true)}
              className="bg-red-500 hover:bg-red-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Wishlist
            </Button>
          </div>

          {/* Wishlist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlists.map((wishlist, index) => (
              <motion.div
                key={wishlist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-sm border overflow-hidden cursor-pointer"
                onClick={() => setSelectedWishlist(wishlist)}
              >
                <div className="relative h-48">
                  <img
                    src={wishlist.image}
                    alt={wishlist.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
                      <Edit3 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{wishlist.name}</h3>
                    <p className="text-sm opacity-90">{wishlist.count} places</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">{wishlist.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {wishlist.listings.slice(0, 3).map((listing, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                        >
                          <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      {wishlist.count > 3 && (
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">
                            +{wishlist.count - 3}
                          </span>
                        </div>
                      )}
                    </div>
                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Wishlist Details */}
          {selectedWishlist && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedWishlist.name}</h2>
                  <p className="text-gray-600">{selectedWishlist.description}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedWishlist.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {selectedWishlist.listings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Create Wishlist Modal */}
      {showCreateModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowCreateModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Create New Wishlist</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="e.g., Dream Vacation"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={3}
                  placeholder="Describe your wishlist..."
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button className="flex-1 bg-red-500 hover:bg-red-600">
                  Create
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Wishlists; 