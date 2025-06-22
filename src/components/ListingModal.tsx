import React, { useState } from 'react';
import { X, Star, MapPin, Wifi, Utensils, Car, Thermometer, ChevronLeft, ChevronRight } from 'lucide-react';
import { Listing } from '../types';

interface ListingModalProps {
  listing: Listing;
  onClose: () => void;
  onBookNow: () => void;
}

const ListingModal: React.FC<ListingModalProps> = ({ listing, onClose, onBookNow }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  const amenityIcons: { [key: string]: React.ReactNode } = {
    'WiFi': <Wifi className="w-5 h-5" />,
    'Kitchen': <Utensils className="w-5 h-5" />,
    'Kitchenette': <Utensils className="w-5 h-5" />,
    'Air conditioning': <Thermometer className="w-5 h-5" />,
    'Parking': <Car className="w-5 h-5" />,
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">{listing.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Image Carousel */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={listing.images[currentImageIndex]}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
            
            {listing.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
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

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Location and Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>{listing.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{listing.rating}</span>
                    <span className="text-gray-500">({listing.reviews} reviews)</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About this place</h3>
                  <p className="text-gray-600 leading-relaxed">{listing.description}</p>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {listing.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {amenityIcons[amenity] || <div className="w-5 h-5 bg-gray-300 rounded"></div>}
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Host */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hosted by {listing.host}</h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center">
                      <span className="text-coral-600 font-medium">{listing.host.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{listing.host}</p>
                      <p className="text-sm text-gray-500">Superhost</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900">${listing.price}</div>
                    <div className="text-gray-600">per night</div>
                  </div>

                  <button
                    onClick={onBookNow}
                    className="w-full bg-coral-600 text-white py-3 rounded-lg font-semibold hover:bg-coral-700 transition-colors"
                  >
                    Book Now
                  </button>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">You won't be charged yet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingModal;
