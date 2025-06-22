import React, { useState, useEffect } from 'react';
import { xanoAPI } from '../lib/api';

const ApiTest = () => {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testApi = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Testing Xano API connection...');
      const data = await xanoAPI.getListings();
      console.log('API Response:', data);
      setListings(data || []);
    } catch (err: any) {
      console.error('API Test Error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    testApi();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Xano API Test</h2>
      
      <div className="mb-4">
        <button 
          onClick={testApi}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test API Connection'}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}

      {listings.length > 0 && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <strong>Success!</strong> Found {listings.length} listings
        </div>
      )}

      <div className="space-y-2">
        <h3 className="font-semibold">API Endpoints:</h3>
        <div className="text-sm space-y-1">
          <div>Auth API: https://x8ki-letl-twmt.n7.xano.io/api:K84Lj_FE</div>
          <div>Airbnb API: https://x8ki-letl-twmt.n7.xano.io/api:WFmTHjwy</div>
        </div>
      </div>

      {listings.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Sample Listings ({listings.length} total):</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {listings.slice(0, 5).map((listing: any) => (
              <div key={listing.id} className="p-2 border rounded text-sm">
                <div><strong>{listing.title}</strong></div>
                <div>{listing.location}, {listing.country}</div>
                <div>${listing.price}/night</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiTest; 