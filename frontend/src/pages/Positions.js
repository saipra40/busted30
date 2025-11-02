import React from 'react';
import { TrendingUp, TrendingDown, X } from 'lucide-react';
import { mockPositions } from '../mockData';
import { toast } from '../hooks/use-toast';

const Positions = () => {
  const totalPnl = mockPositions.reduce((sum, p) => sum + p.pnl, 0);

  const handleExitPosition = (position) => {
    toast({
      title: 'Position closed',
      description: `${position.symbol} position exited successfully`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Summary Card */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Total P&L (Intraday)</div>
              <div
                className={`text-3xl font-bold flex items-center ${
                  totalPnl >= 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {totalPnl >= 0 ? (
                  <TrendingUp size={28} className="mr-2" />
                ) : (
                  <TrendingDown size={28} className="mr-2" />
                )}
                {totalPnl >= 0 ? '+' : ''}₹{totalPnl.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </div>
            </div>
            <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-medium">
              Exit all positions
            </button>
          </div>
        </div>

        {/* Positions Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {mockPositions.length > 0 ? (
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
                      Avg.
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      LTP
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      P&L
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Chg.
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockPositions.map((position, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-blue-600 cursor-pointer hover:underline">
                          {position.symbol}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span
                          className={`text-sm font-medium ${
                            position.qty > 0 ? 'text-blue-600' : 'text-red-600'
                          }`}
                        >
                          {position.qty > 0 ? '+' : ''}
                          {position.qty}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                        ₹{position.avgPrice.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                        ₹{position.ltp.toFixed(2)}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-right text-sm font-medium ${
                          position.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {position.pnl >= 0 ? '+' : ''}₹{position.pnl.toFixed(2)}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-right text-sm font-medium ${
                          position.pnlPercent >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {position.pnlPercent >= 0 ? '+' : ''}
                        {position.pnlPercent.toFixed(2)}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                          {position.product}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <button
                          onClick={() => handleExitPosition(position)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                          title="Exit position"
                        >
                          <X size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No open positions</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Positions;