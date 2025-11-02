import React, { useState } from 'react';
import { Wallet, TrendingUp, TrendingDown, Plus, Minus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from '../hooks/use-toast';

const Funds = () => {
  const { user } = useAuth();
  const [amount, setAmount] = useState('');
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const handleAddFunds = () => {
    if (!amount || amount <= 0) {
      toast({
        title: 'Error',
        description: 'Please enter valid amount',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Funds added successfully',
      description: `₹${parseFloat(amount).toLocaleString('en-IN')} added to your account`,
    });
    setAmount('');
    setShowAddFunds(false);
  };

  const handleWithdraw = () => {
    if (!amount || amount <= 0) {
      toast({
        title: 'Error',
        description: 'Please enter valid amount',
        variant: 'destructive',
      });
      return;
    }

    if (parseFloat(amount) > user?.funds?.available) {
      toast({
        title: 'Error',
        description: 'Insufficient funds',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Withdrawal initiated',
      description: `₹${parseFloat(amount).toLocaleString('en-IN')} will be credited to your bank account`,
    });
    setAmount('');
    setShowWithdraw(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Funds Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-2">
              <Wallet className="text-blue-600 mr-2" size={24} />
              <div className="text-sm text-gray-600">Available margin</div>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              ₹{user?.funds?.available?.toLocaleString('en-IN') || '0'}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-2">
              <TrendingDown className="text-orange-600 mr-2" size={24} />
              <div className="text-sm text-gray-600">Used margin</div>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              ₹{user?.funds?.used?.toLocaleString('en-IN') || '0'}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-2">
              <TrendingUp className="text-green-600 mr-2" size={24} />
              <div className="text-sm text-gray-600">Available cash</div>
            </div>
            <div className="text-3xl font-bold text-gray-900">
              ₹{user?.funds?.total?.toLocaleString('en-IN') || '0'}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setShowAddFunds(true)}
            className="bg-blue-600 text-white rounded-lg p-6 hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Plus size={24} className="mr-2" />
            <span className="text-lg font-medium">Add funds</span>
          </button>

          <button
            onClick={() => setShowWithdraw(true)}
            className="bg-white text-gray-700 border-2 border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <Minus size={24} className="mr-2" />
            <span className="text-lg font-medium">Withdraw funds</span>
          </button>
        </div>

        {/* Add Funds Modal */}
        {showAddFunds && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Add funds</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleAddFunds}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Add funds
                </button>
                <button
                  onClick={() => {
                    setShowAddFunds(false);
                    setAmount('');
                  }}
                  className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Withdraw Modal */}
        {showWithdraw && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Withdraw funds</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Available: ₹{user?.funds?.available?.toLocaleString('en-IN') || '0'}
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleWithdraw}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Withdraw
                </button>
                <button
                  onClick={() => {
                    setShowWithdraw(false);
                    setAmount('');
                  }}
                  className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Information */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Fund transfer information</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Instant fund transfer using UPI, NEFT, RTGS, or IMPS</li>
            <li>• Funds are available immediately after transfer</li>
            <li>• Withdrawals are processed instantly and credited to your bank account</li>
            <li>• Zero charges for fund transfers - keeping it simple for Gen Z & Millennials</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Funds;