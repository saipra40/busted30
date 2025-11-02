import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { mockHoldings } from '../mockData';

const Holdings = () => {
  const totalInvestment = mockHoldings.reduce((sum, h) => sum + h.investment, 0);
  const totalCurrentValue = mockHoldings.reduce((sum, h) => sum + h.currentValue, 0);
  const totalPnl = totalCurrentValue - totalInvestment;
  const totalPnlPercent = (totalPnl / totalInvestment) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total Investment</div>
            <div className="text-2xl font-bold text-gray-900">
              ₹{totalInvestment.toLocaleString('en-IN')}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Current Value</div>
            <div className="text-2xl font-bold text-gray-900">
              ₹{totalCurrentValue.toLocaleString('en-IN')}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Total P&L</div>
            <div
              className={`text-2xl font-bold ${
                totalPnl >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {totalPnl >= 0 ? '+' : ''}₹{totalPnl.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Returns</div>
            <div
              className={`text-2xl font-bold flex items-center ${
                totalPnlPercent >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {totalPnlPercent >= 0 ? (
                <TrendingUp size={24} className="mr-1" />
              ) : (
                <TrendingDown size={24} className="mr-1" />
              )}
              {totalPnlPercent.toFixed(2)}%
            </div>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Instrument
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qty.
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avg. cost
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    LTP
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cur. value
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    P&L
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Net chg.
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockHoldings.map((holding, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">
                        {holding.symbol}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                      {holding.qty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                      ₹{holding.avgPrice.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                      ₹{holding.ltp.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                      ₹{holding.currentValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-right text-sm font-medium ${
                        holding.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {holding.pnl >= 0 ? '+' : ''}₹{holding.pnl.toFixed(2)}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-right text-sm font-medium ${
                        holding.pnlPercent >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {holding.pnlPercent >= 0 ? '+' : ''}
                      {holding.pnlPercent.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;