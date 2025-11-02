import React, { useState } from 'react';
import { Search, TrendingUp, Star, Filter } from 'lucide-react';
import { mockMutualFunds } from '../mockDataMF';

const ExploreFunds = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Large Cap', 'Small Cap', 'Mid Cap', 'Index', 'Flexi Cap', 'Hybrid', 'Sectoral'];

  // Filter funds based on search query
  const filteredFunds = mockMutualFunds.filter(fund => {
    const matchesSearch = 
      fund.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fund.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fund.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (searchQuery.toLowerCase().includes('flexi') && fund.category.toLowerCase().includes('flexi')) ||
      (searchQuery.toLowerCase().includes('mid') && fund.category.toLowerCase().includes('mid')) ||
      (searchQuery.toLowerCase().includes('equity') && (fund.category.toLowerCase().includes('cap') || fund.name.toLowerCase().includes('equity'))) ||
      (searchQuery.toLowerCase().includes('index') && fund.category.toLowerCase().includes('index')) ||
      (searchQuery.toLowerCase().includes('metal') && fund.name.toLowerCase().includes('metal'));
    
    const matchesCategory = selectedCategory === 'All' || fund.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low to Moderate':
      case 'Moderate':
        return 'text-yellow-600 bg-yellow-100';
      case 'High':
      case 'Moderate to High':
        return 'text-orange-600 bg-orange-100';
      case 'Very High':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-green-600 bg-green-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent">
              Discover Your Perfect Fund
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Search by type, risk, or returns. Find funds that match your vibe.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for flexi, mid cap, equity, index, metal..."
              className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-genzpink focus:outline-none text-lg shadow-lg"
            />
          </div>
          <div className="mt-2 text-sm text-gray-500 text-center">
            Try: "flexi cap", "mid cap", "equity", "index", "metal"
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-3 mb-8 overflow-x-auto pb-2">
          <Filter size={20} className="text-gray-500 flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-genzpink to-genzpurple text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-genzpink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-genzpurple">{filteredFunds.length}</span> funds
          </p>
        </div>

        {/* Funds Grid */}
        {filteredFunds.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFunds.map((fund) => (
              <div
                key={fund.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100"
              >
                {/* Fund Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{fund.name}</h3>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                      {fund.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-semibold text-gray-700">{fund.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{fund.description}</p>

                {/* Returns */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-xs text-gray-600">1Y</div>
                    <div className="text-sm font-bold text-green-600">{fund.returns.oneYear}%</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-xs text-gray-600">3Y</div>
                    <div className="text-sm font-bold text-green-600">{fund.returns.threeYear}%</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-xs text-gray-600">5Y</div>
                    <div className="text-sm font-bold text-green-600">{fund.returns.fiveYear}%</div>
                  </div>
                </div>

                {/* Risk & Min Investment */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskColor(fund.risk)}`}>
                    {fund.risk} Risk
                  </span>
                  <span className="text-sm text-gray-600">
                    Min: <span className="font-semibold text-gray-900">₹{fund.minInvestment}</span>
                  </span>
                </div>

                {/* Key Details */}
                <div className="border-t border-gray-100 pt-4 space-y-2 text-xs text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>AUM:</span>
                    <span className="font-semibold text-gray-900">₹{fund.aum} Cr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expense Ratio:</span>
                    <span className="font-semibold text-gray-900">{fund.expenseRatio}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Exit Load:</span>
                    <span className="font-semibold text-gray-900 text-xs">{fund.exitLoad}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full py-3 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                  Invest Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No funds found</h3>
            <p className="text-gray-600">Try different keywords or clear filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreFunds;