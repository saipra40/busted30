import React, { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const OrderPanel = ({ stock, onClose }) => {
  const [orderType, setOrderType] = useState('BUY');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState(stock?.ltp?.toFixed(2) || '');
  const [productType, setProductType] = useState('CNC');
  const [priceType, setPriceType] = useState('MARKET');

  const handlePlaceOrder = () => {
    if (!quantity || quantity <= 0) {
      toast({
        title: 'Error',
        description: 'Please enter valid quantity',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Order placed successfully',
      description: `${orderType} ${quantity} ${stock.symbol} @ ${priceType === 'MARKET' ? 'Market' : '₹' + price}`,
    });

    // Reset form
    setQuantity('');
    if (onClose) onClose();
  };

  if (!stock) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 text-sm">
        Select a stock from watchlist to place order
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{stock.symbol}</h3>
          <p className="text-sm text-gray-600">₹{stock.ltp.toFixed(2)}</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Order Form */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Buy/Sell Toggle */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setOrderType('BUY')}
            className={`py-3 rounded font-medium transition-colors ${
              orderType === 'BUY'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            BUY
          </button>
          <button
            onClick={() => setOrderType('SELL')}
            className={`py-3 rounded font-medium transition-colors ${
              orderType === 'SELL'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            SELL
          </button>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="0"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Type</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setPriceType('MARKET')}
              className={`py-2 rounded text-sm font-medium transition-colors ${
                priceType === 'MARKET'
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Market
            </button>
            <button
              onClick={() => setPriceType('LIMIT')}
              className={`py-2 rounded text-sm font-medium transition-colors ${
                priceType === 'LIMIT'
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Limit
            </button>
          </div>
        </div>

        {/* Price */}
        {priceType === 'LIMIT' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              step="0.05"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Product Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
          <select
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="CNC">CNC (Delivery)</option>
            <option value="MIS">MIS (Intraday)</option>
          </select>
        </div>

        {/* Order Summary */}
        {quantity && (
          <div className="bg-gray-50 rounded p-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Quantity:</span>
              <span className="font-medium">{quantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Price:</span>
              <span className="font-medium">
                {priceType === 'MARKET' ? 'Market' : `₹${price}`}
              </span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-gray-900 font-medium">Total:</span>
              <span className="font-semibold">
                ₹{(quantity * (priceType === 'MARKET' ? stock.ltp : parseFloat(price || 0))).toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Place Order Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handlePlaceOrder}
          className={`w-full py-3 rounded font-medium text-white transition-colors ${
            orderType === 'BUY'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          {orderType} {quantity || 0} @ {priceType === 'MARKET' ? 'Market' : `₹${price}`}
        </button>
      </div>
    </div>
  );
};

export default OrderPanel;