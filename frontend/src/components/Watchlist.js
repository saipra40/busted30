import React, { useState } from 'react';
import { Search, Plus, TrendingUp, TrendingDown } from 'lucide-react';
import { mockStocks, mockIndices } from '../mockData';

const Watchlist = ({ onStockSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('watchlist1');

  const filteredStocks = mockStocks.filter(stock =>
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStockClick = (stock) => {
    if (onStockSelect) {
      onStockSelect(stock);
    }
  };

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      {/* Search */}
      <div className="p-3 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search eg: INFY"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button
          onClick={() => setActiveTab('watchlist1')}
          className={`flex-1 px-4 py-2 text-xs font-medium ${
            activeTab === 'watchlist1'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
          }`}
        >
          Watchlist 1
        </button>
        <button
          onClick={() => setActiveTab('indices')}
          className={`flex-1 px-4 py-2 text-xs font-medium ${
            activeTab === 'indices'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
          }`}
        >
          Indices
        </button>
      </div>

      {/* Stock List */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'watchlist1' ? (
          <div>
            {filteredStocks.map((stock) => (
              <div
                key={stock.symbol}
                onClick={() => handleStockClick(stock)}
                className="px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{stock.symbol}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {stock.ltp.toFixed(2)}
                    </div>
                    <div
                      className={`text-xs font-medium flex items-center justify-end ${
                        stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stock.change >= 0 ? (
                        <TrendingUp size={12} className="mr-1" />
                      ) : (
                        <TrendingDown size={12} className="mr-1" />
                      )}
                      {stock.changePercent.toFixed(2)}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {mockIndices.map((index) => (
              <div
                key={index.name}
                className="px-3 py-2 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{index.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {index.value.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </div>
                    <div
                      className={`text-xs font-medium ${
                        index.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {index.changePercent >= 0 ? '+' : ''}
                      {index.changePercent.toFixed(2)}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Stock Button */}
      <div className="p-3 border-t border-gray-200">
        <button className="w-full py-2 text-sm text-blue-600 hover:bg-blue-50 rounded flex items-center justify-center transition-colors">
          <Plus size={16} className="mr-1" />
          Add stocks
        </button>
      </div>
    </div>
  );
};

export default Watchlist;