
import React from 'react';
import { Star } from 'lucide-react';
import { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
  onClick: () => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{listing.rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 group-hover:text-coral-600 transition-colors line-clamp-1">
            {listing.title}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-2">{listing.location}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <span>{listing.reviews} reviews</span>
          </div>
          <div className="text-right">
            <span className="font-bold text-gray-900">${listing.price}</span>
            <span className="text-gray-600 text-sm"> / night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
