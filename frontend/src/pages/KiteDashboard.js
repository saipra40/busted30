import React, { useState } from 'react';
import Watchlist from '../components/Watchlist';
import StockChart from '../components/StockChart';
import OrderPanel from '../components/OrderPanel';
import { mockStocks } from '../mockData';

const KiteDashboard = () => {
  const [selectedStock, setSelectedStock] = useState(mockStocks[0]);
  const [showOrderPanel, setShowOrderPanel] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50">
      <div className="flex-1 flex overflow-hidden">
        {/* Watchlist - Left Sidebar */}
        <div className="w-80 flex-shrink-0 overflow-hidden">
          <Watchlist onStockSelect={setSelectedStock} />
        </div>

        {/* Main Content - Chart */}
        <div className="flex-1 overflow-hidden border-r border-gray-200">
          <StockChart stock={selectedStock} />
        </div>

        {/* Order Panel - Right Sidebar */}
        <div className="w-96 flex-shrink-0 overflow-hidden">
          <OrderPanel stock={selectedStock} />
        </div>
      </div>

      {/* Mobile Order Button */}
      <button
        onClick={() => setShowOrderPanel(true)}
        className="md:hidden fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg font-medium"
      >
        Place Order
      </button>

      {/* Mobile Order Panel Modal */}
      {showOrderPanel && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-hidden">
            <OrderPanel
              stock={selectedStock}
              onClose={() => setShowOrderPanel(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default KiteDashboard;