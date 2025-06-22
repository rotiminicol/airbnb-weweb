
import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Smartphone, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  const bookingData = location.state;

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No booking data found</h2>
          <Link to="/" className="text-coral-500 hover:text-coral-600">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const { listing, checkIn, checkOut, guests, nights, total } = bookingData;

  const handlePayment = () => {
    // Simulate payment processing
    alert('Payment successful! Your booking has been confirmed.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Confirm and pay</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div className="space-y-6">
              {/* Trip Details */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Your trip</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dates</span>
                    <span className="font-medium">{checkIn} - {checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-medium">{guests} guest{guests > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Choose payment method</h2>
                
                <div className="space-y-3 mb-6">
                  <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-coral-500"
                    />
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Credit or debit card</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-coral-500"
                    />
                    <Smartphone className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">PayPal</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-coral-500"
                    />
                    <Building className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Bank transfer</span>
                  </label>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card number
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 1234 1234 1234"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry date
                        </label>
                        <input
                          type="text"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          placeholder="MM/YY"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          placeholder="123"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name on card
                      </label>
                      <input
                        type="text"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        placeholder="John Doe"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Terms */}
              <div className="text-sm text-gray-600">
                <p className="mb-2">
                  By selecting the button below, I agree to the{' '}
                  <a href="#" className="text-coral-500 hover:underline">Host's House Rules</a>,{' '}
                  <a href="#" className="text-coral-500 hover:underline">Ground rules for guests</a>,{' '}
                  <a href="#" className="text-coral-500 hover:underline">Airbnb's Rebooking and Refund Policy</a>, and that Airbnb can{' '}
                  <a href="#" className="text-coral-500 hover:underline">charge my payment method</a> if I'm responsible for damage.
                </p>
              </div>

              <Button 
                onClick={handlePayment}
                className="w-full bg-coral-500 hover:bg-coral-600 text-white py-4 rounded-lg font-medium text-lg transition-colors"
              >
                Confirm and pay
              </Button>
            </div>

            {/* Booking Summary */}
            <div>
              <div className="bg-white rounded-lg border p-6 sticky top-6">
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{listing.title}</h3>
                    <p className="text-gray-600 text-sm">{listing.location}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      <span className="text-sm font-medium">{listing.rating}</span>
                      <span className="text-gray-600 text-sm">({listing.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-4">Price details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>${listing.price} x {nights} nights</span>
                      <span>${listing.price * nights}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning fee</span>
                      <span>$50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>$25</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>${Math.round(total * 0.1)}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-semibold text-base">
                        <span>Total (USD)</span>
                        <span>${total + 75 + Math.round(total * 0.1)}</span>
                      </div>
                    </div>
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

export default Payment;
