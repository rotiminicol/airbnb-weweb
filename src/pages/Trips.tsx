import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Star, MessageCircle, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';

const Trips = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com'
  });

  const [activeTab, setActiveTab] = useState('upcoming');

  // Mock trips data
  const [trips] = useState({
    upcoming: [
      {
        id: '1',
        title: 'Parisian Loft with Eiffel View',
        location: 'Paris, France',
        image: '/lovable-uploads/ba48c5b8-024e-4aaf-91fc-7447ad07f7e1.png',
        checkIn: '2024-06-15',
        checkOut: '2024-06-20',
        guests: 2,
        totalPrice: 1600,
        status: 'confirmed',
        host: 'Claire Dubois',
        rating: 4.9,
        reviews: 120
      },
      {
        id: '2',
        title: 'Luxury Burj Khalifa View Suite',
        location: 'Dubai, UAE',
        image: '/lovable-uploads/ff8d89b3-4a90-4f0f-a792-a6aedc294eaf.png',
        checkIn: '2024-07-10',
        checkOut: '2024-07-15',
        guests: 3,
        totalPrice: 3500,
        status: 'confirmed',
        host: 'Aisha Al Farsi',
        rating: 4.9,
        reviews: 110
      }
    ],
    past: [
      {
        id: '3',
        title: 'Venetian Canal Apartment',
        location: 'Venice, Italy',
        image: '/lovable-uploads/17378010-9fe6-41c6-adb6-65c2808116f0.png',
        checkIn: '2024-03-20',
        checkOut: '2024-03-25',
        guests: 2,
        totalPrice: 1750,
        status: 'completed',
        host: 'Giulia Rossi',
        rating: 4.8,
        reviews: 100
      }
    ],
    cancelled: [
      {
        id: '4',
        title: 'Tuscan Countryside Villa',
        location: 'Florence, Italy',
        image: '/lovable-uploads/2f0df201-e9f9-4395-b788-e404f25bd832.png',
        checkIn: '2024-05-01',
        checkOut: '2024-05-06',
        guests: 4,
        totalPrice: 2500,
        status: 'cancelled',
        host: 'Marco Bianchi',
        rating: 4.9,
        reviews: 80
      }
    ]
  });

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: trips.upcoming.length },
    { id: 'past', label: 'Past', count: trips.past.length },
    { id: 'cancelled', label: 'Cancelled', count: trips.cancelled.length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
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

  const calculateNights = (checkIn: string, checkOut: string) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} user={user} />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Trips</h1>
            <p className="text-gray-600">Manage your upcoming and past stays</p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-white p-1 rounded-xl shadow-sm border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Trips List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {trips[activeTab as keyof typeof trips].length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No {activeTab} trips</h3>
                  <p className="text-gray-600 mb-6">
                    {activeTab === 'upcoming' 
                      ? "Start planning your next adventure"
                      : activeTab === 'past'
                      ? "Your past trips will appear here"
                      : "No cancelled trips"
                    }
                  </p>
                  {activeTab === 'upcoming' && (
                    <Button className="bg-red-500 hover:bg-red-600">
                      Start Exploring
                    </Button>
                  )}
                </div>
              ) : (
                trips[activeTab as keyof typeof trips].map((trip, index) => (
                  <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-sm border overflow-hidden"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-80 h-64 lg:h-auto">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div className="mb-4 lg:mb-0">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {trip.title}
                            </h3>
                            <div className="flex items-center text-gray-600 mb-2">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{trip.location}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                                <span>{trip.rating}</span>
                                <span className="ml-1">({trip.reviews} reviews)</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                <span>{trip.guests} guest{trip.guests > 1 ? 's' : ''}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-start lg:items-end">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${getStatusColor(trip.status)}`}>
                              {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                            </span>
                            <div className="text-right">
                              <div className="text-xl font-bold text-gray-900">${trip.totalPrice}</div>
                              <div className="text-sm text-gray-600">total</div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm mb-6">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <div>
                              <div className="font-medium">Check-in</div>
                              <div>{formatDate(trip.checkIn)}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <div>
                              <div className="font-medium">Check-out</div>
                              <div>{formatDate(trip.checkOut)}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <div>
                              <div className="font-medium">Duration</div>
                              <div>{calculateNights(trip.checkIn, trip.checkOut)} nights</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Message Host
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download Receipt
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Trip
                          </Button>
                          {activeTab === 'upcoming' && (
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                              Cancel Trip
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Trips; 