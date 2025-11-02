import React, { useState } from 'react';
import { Calculator, TrendingUp, Target } from 'lucide-react';

const SIPCalculators = () => {
  const [activeCalc, setActiveCalc] = useState('amount');

  // Calculator 1: Start with SIP amount
  const [sipAmount, setSipAmount] = useState(5000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  // Calculator 2: Start with target
  const [targetAmount, setTargetAmount] = useState(1000000);
  const [targetYears, setTargetYears] = useState(10);
  const [targetRate, setTargetRate] = useState(12);

  // Calculate maturity amount
  const calculateMaturity = (monthly, years, rate) => {
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;
    const maturity = monthly * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    return Math.round(maturity);
  };

  // Calculate required SIP
  const calculateRequiredSIP = (target, years, rate) => {
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;
    const requiredSIP = target / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    return Math.round(requiredSIP);
  };

  const maturityAmount = calculateMaturity(sipAmount, years, returnRate);
  const invested = sipAmount * years * 12;
  const returns = maturityAmount - invested;

  const requiredSIP = calculateRequiredSIP(targetAmount, targetYears, targetRate);
  const targetInvested = requiredSIP * targetYears * 12;
  const targetReturns = targetAmount - targetInvested;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-genzpink to-genzpurple text-white px-4 py-2 rounded-full mb-4">
            <Calculator size={20} />
            <span className="font-semibold">SIP Calculators</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent">
              Plan Your Wealth
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Two ways to plan your investments. Pick what works for you.
          </p>
        </div>

        {/* Calculator Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveCalc('amount')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCalc === 'amount'
                  ? 'bg-gradient-to-r from-genzpink to-genzpurple text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center space-x-2">
                <TrendingUp size={18} />
                <span>Know Your Returns</span>
              </div>
            </button>
            <button
              onClick={() => setActiveCalc('target')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCalc === 'target'
                  ? 'bg-gradient-to-r from-genzpink to-genzpurple text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Target size={18} />
                <span>Reach Your Goal</span>
              </div>
            </button>
          </div>
        </div>

        {/* Calculator 1: Amount to Maturity */}
        {activeCalc === 'amount' && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Enter Details</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly SIP Amount
                  </label>
                  <input
                    type="number"
                    value={sipAmount}
                    onChange={(e) => setSipAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpink focus:outline-none text-lg font-semibold"
                  />
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={sipAmount}
                    onChange={(e) => setSipAmount(Number(e.target.value))}
                    className="w-full mt-3"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹500</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Investment Period (Years)
                  </label>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpurple focus:outline-none text-lg font-semibold"
                  />
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full mt-3"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Returns (% per year)
                  </label>
                  <input
                    type="number"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpink focus:outline-none text-lg font-semibold"
                  />
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full mt-3"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="bg-gradient-to-br from-genzpink to-genzpurple rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Your Wealth Journey</h3>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-white/80 text-sm mb-1">Total Investment</p>
                  <p className="text-3xl font-bold">₹{invested.toLocaleString('en-IN')}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-white/80 text-sm mb-1">Estimated Returns</p>
                  <p className="text-3xl font-bold">₹{returns.toLocaleString('en-IN')}</p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                  <p className="text-white/90 text-sm mb-1">Maturity Amount</p>
                  <p className="text-4xl font-bold">₹{maturityAmount.toLocaleString('en-IN')}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80">Investment</span>
                    <span className="font-semibold">{((invested / maturityAmount) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-white h-full rounded-full"
                      style={{ width: `${(invested / maturityAmount) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <p className="text-white/80 text-sm mt-6">
                Investing ₹{sipAmount.toLocaleString('en-IN')} every month for {years} years at {returnRate}% returns
              </p>
            </div>
          </div>
        )}

        {/* Calculator 2: Target to SIP */}
        {activeCalc === 'target' && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Your Goal</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Amount
                  </label>
                  <input
                    type="number"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpink focus:outline-none text-lg font-semibold"
                  />
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(Number(e.target.value))}
                    className="w-full mt-3"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time to Achieve (Years)
                  </label>
                  <input
                    type="number"
                    value={targetYears}
                    onChange={(e) => setTargetYears(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpurple focus:outline-none text-lg font-semibold"
                  />
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={targetYears}
                    onChange={(e) => setTargetYears(Number(e.target.value))}
                    className="w-full mt-3"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Expected Returns (% per year)
                  </label>
                  <input
                    type="number"
                    value={targetRate}
                    onChange={(e) => setTargetRate(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpink focus:outline-none text-lg font-semibold"
                  />
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={targetRate}
                    onChange={(e) => setTargetRate(Number(e.target.value))}
                    className="w-full mt-3"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="bg-gradient-to-br from-genzpurple to-genzdark rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Your Action Plan</h3>

              <div className="space-y-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                  <p className="text-white/90 text-sm mb-1">Required Monthly SIP</p>
                  <p className="text-4xl font-bold">₹{requiredSIP.toLocaleString('en-IN')}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-white/80 text-sm mb-1">Total Investment Needed</p>
                  <p className="text-3xl font-bold">₹{targetInvested.toLocaleString('en-IN')}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-white/80 text-sm mb-1">Expected Returns</p>
                  <p className="text-3xl font-bold">₹{targetReturns.toLocaleString('en-IN')}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-white/80 text-sm mb-1">Your Goal</p>
                  <p className="text-3xl font-bold">₹{targetAmount.toLocaleString('en-IN')}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80">Returns Contribution</span>
                    <span className="font-semibold">{((targetReturns / targetAmount) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-white h-full rounded-full"
                      style={{ width: `${(targetReturns / targetAmount) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <p className="text-white/80 text-sm mt-6">
                Start with ₹{requiredSIP.toLocaleString('en-IN')}/month to reach ₹{targetAmount.toLocaleString('en-IN')} in {targetYears} years
              </p>
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent">
            Pro Tips for Gen Z Investors
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-genzpink rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
              <p className="text-gray-700">Start early, even with small amounts. Time is your superpower.</p>
            </div>
            <div className="flex space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-genzpurple rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
              <p className="text-gray-700">Consistency beats timing. SIP helps you invest in ups and downs.</p>
            </div>
            <div className="flex space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-genzpink rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
              <p className="text-gray-700">Higher returns come with higher risk. Balance is key.</p>
            </div>
            <div className="flex space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-genzpurple rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
              <p className="text-gray-700">Review your portfolio every 6 months. Stay on track.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculators;