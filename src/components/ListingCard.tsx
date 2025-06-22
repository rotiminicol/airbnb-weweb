import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Listing } from '../types';
import { motion } from 'framer-motion';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Link 
      to={`/listing/${listing.id}`}
      className="group block animate-fade-in"
    >
      <motion.div
        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white rounded-xl overflow-hidden transition-all duration-300"
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={listing.image}
            alt={listing.title}
            className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
          <motion.button
            whileHover={{ scale: 1.15 }}
            className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200"
          >
            <Heart className="w-4 h-4 text-gray-600 hover:text-coral-500" />
          </motion.button>
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{listing.rating}</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-gray-900 group-hover:text-coral-600 transition-colors line-clamp-2 leading-tight">
              {listing.title}
            </h3>
          </div>
          
          <p className="text-gray-600 text-sm mb-2 line-clamp-1">{listing.location}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <span>{listing.reviews} reviews</span>
            </div>
            <div className="text-right">
              <span className="font-bold text-gray-900">${listing.price}</span>
              <span className="text-gray-600 text-sm"> night</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ListingCard;
