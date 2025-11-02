import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Calendar, Wallet, CheckCircle, Info } from 'lucide-react';
import { mockMutualFunds } from '../mockDataMF';
import { toast } from '../hooks/use-toast';

const InvestNow = () => {
  const { fundId } = useParams();
  const navigate = useNavigate();
  const fund = mockMutualFunds.find(f => f.id === fundId);

  const [investmentType, setInvestmentType] = useState('SIP'); // SIP or Lumpsum
  const [amount, setAmount] = useState(fund?.minInvestment || 500);
  const [sipDate, setSipDate] = useState(5);
  const [duration, setDuration] = useState(12); // months

  if (!fund) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Fund not found</h2>
          <button
            onClick={() => navigate('/explore')}
            className="px-6 py-3 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-full font-semibold"
          >
            Browse Funds
          </button>
        </div>
      </div>
    );
  }

  const calculateReturns = () => {
    const rate = fund.returns.threeYear / 100 / 12; // monthly rate
    if (investmentType === 'SIP') {
      const months = duration;
      const futureValue = amount * (((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate));
      const invested = amount * months;
      return {
        invested,
        returns: futureValue - invested,
        total: futureValue
      };
    } else {
      const years = duration / 12;
      const futureValue = amount * Math.pow(1 + (fund.returns.threeYear / 100), years);
      return {
        invested: amount,
        returns: futureValue - amount,
        total: futureValue
      };
    }
  };

  const projections = calculateReturns();

  const handleInvest = () => {
    toast({
      title: 'Investment Successful!',
      description: `${investmentType} of ₹${amount.toLocaleString('en-IN')} started in ${fund.name}`,
    });
    setTimeout(() => {
      navigate('/portfolio');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/explore')}
          className="flex items-center space-x-2 text-gray-600 hover:text-genzpink mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Explore</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Fund Details */}
          <div className="bg-white rounded-2xl p-8 shadow-lg h-fit sticky top-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{fund.name}</h1>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                  {fund.category}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-yellow-500">
                <span className="text-2xl">⭐</span>
                <span className="font-bold text-gray-700">{fund.rating}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-6">{fund.description}</p>

            {/* Returns */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Historical Returns</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-xs text-gray-600 mb-1">1 Year</div>
                  <div className="text-lg font-bold text-green-600">{fund.returns.oneYear}%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-600 mb-1">3 Years</div>
                  <div className="text-lg font-bold text-green-600">{fund.returns.threeYear}%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-600 mb-1">5 Years</div>
                  <div className="text-lg font-bold text-green-600">{fund.returns.fiveYear}%</div>
                </div>
              </div>
            </div>

            {/* Fund Details */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Risk Level:</span>
                <span className="font-semibold text-gray-900">{fund.risk}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Min Investment:</span>
                <span className="font-semibold text-gray-900">₹{fund.minInvestment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">AUM:</span>
                <span className="font-semibold text-gray-900">₹{fund.aum} Cr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Expense Ratio:</span>
                <span className="font-semibold text-gray-900">{fund.expenseRatio}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Exit Load:</span>
                <span className="font-semibold text-gray-900 text-xs">{fund.exitLoad}</span>
              </div>
            </div>
          </div>

          {/* Right: Investment Form */}
          <div className="space-y-6">
            {/* Investment Type Toggle */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Investment Type</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setInvestmentType('SIP')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    investmentType === 'SIP'
                      ? 'border-genzpink bg-pink-50'
                      : 'border-gray-200 hover:border-genzpink'
                  }`}
                >
                  <Calendar className={investmentType === 'SIP' ? 'text-genzpink' : 'text-gray-400'} size={24} />
                  <h3 className="font-bold text-gray-900 mt-2">SIP</h3>
                  <p className="text-xs text-gray-600">Monthly auto-invest</p>
                </button>
                <button
                  onClick={() => setInvestmentType('Lumpsum')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    investmentType === 'Lumpsum'
                      ? 'border-genzpurple bg-purple-50'
                      : 'border-gray-200 hover:border-genzpurple'
                  }`}
                >
                  <Wallet className={investmentType === 'Lumpsum' ? 'text-genzpurple' : 'text-gray-400'} size={24} />
                  <h3 className="font-bold text-gray-900 mt-2">Lumpsum</h3>
                  <p className="text-xs text-gray-600">One-time invest</p>
                </button>
              </div>
            </div>

            {/* Amount Input */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {investmentType === 'SIP' ? 'Monthly Investment' : 'Investment Amount'}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">₹</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(fund.minInvestment, Number(e.target.value)))}
                  min={fund.minInvestment}
                  className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-genzpink focus:outline-none text-2xl font-bold"
                />
              </div>
              <input
                type="range"
                min={fund.minInvestment}
                max={50000}
                step={500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full mt-4"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>₹{fund.minInvestment}</span>
                <span>₹50,000</span>
              </div>
            </div>

            {/* SIP Date (only for SIP) */}
            {investmentType === 'SIP' && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  SIP Date (Day of Month)
                </label>
                <select
                  value={sipDate}
                  onChange={(e) => setSipDate(Number(e.target.value))}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpurple focus:outline-none font-semibold"
                >
                  {[1, 5, 10, 15, 20, 25].map(day => (
                    <option key={day} value={day}>{day}th of every month</option>
                  ))}
                </select>
              </div>
            )}

            {/* Duration */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Investment Duration
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Math.max(1, Number(e.target.value)))}
                  min="1"
                  className="w-24 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpink focus:outline-none text-lg font-bold"
                />
                <span className="text-gray-700 font-medium">months</span>
              </div>
              <input
                type="range"
                min="1"
                max="120"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full mt-4"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1 month</span>
                <span>10 years</span>
              </div>
            </div>

            {/* Projections */}
            <div className="bg-gradient-to-br from-genzpink to-genzpurple rounded-2xl p-6 shadow-lg text-white">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp size={24} />
                <h3 className="text-xl font-bold">Estimated Returns</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Total Invested</span>
                  <span className="text-2xl font-bold">₹{Math.round(projections.invested).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Expected Returns</span>
                  <span className="text-2xl font-bold">₹{Math.round(projections.returns).toLocaleString('en-IN')}</span>
                </div>
                <div className="border-t border-white/20 pt-3 flex justify-between items-center">
                  <span className="text-white/90 font-semibold">Total Value</span>
                  <span className="text-3xl font-bold">₹{Math.round(projections.total).toLocaleString('en-IN')}</span>
                </div>
              </div>
              <div className="mt-4 flex items-start space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Info size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-xs text-white/90">
                  Returns are projected based on historical {fund.returns.threeYear}% annual returns. Actual returns may vary.
                </p>
              </div>
            </div>

            {/* Invest Button */}
            <button
              onClick={handleInvest}
              className="w-full py-4 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
            >
              <CheckCircle size={24} />
              <span>Confirm Investment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestNow;