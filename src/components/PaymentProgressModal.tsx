
import React from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaymentProgressModalProps {
  isOpen: boolean;
  status: 'processing' | 'success' | 'error';
  onClose: () => void;
  onBackToHome: () => void;
  onViewBookings: () => void;
}

const PaymentProgressModal: React.FC<PaymentProgressModalProps> = ({
  isOpen,
  status,
  onClose,
  onBackToHome,
  onViewBookings
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 text-center animate-scale-in">
        {status === 'processing' && (
          <>
            <div className="mb-6">
              <Loader2 className="w-16 h-16 text-red-500 mx-auto animate-spin" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Processing Payment</h2>
            <p className="text-gray-600 mb-6">
              Please wait while we process your payment. This may take a few moments.
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="mb-6">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Payment Complete!</h2>
            <p className="text-gray-600 mb-6">
              Your booking has been confirmed. You'll receive a confirmation email shortly.
            </p>
            <div className="space-y-3">
              <Button
                onClick={onViewBookings}
                className="w-full bg-red-500 hover:bg-red-600 text-white"
              >
                View My Bookings
              </Button>
              <Button
                onClick={onBackToHome}
                variant="outline"
                className="w-full"
              >
                Back to Home
              </Button>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-red-500 text-2xl">✕</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Payment Failed</h2>
            <p className="text-gray-600 mb-6">
              We couldn't process your payment. Please try again or use a different payment method.
            </p>
            <Button
              onClick={onClose}
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Try Again
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentProgressModal;
