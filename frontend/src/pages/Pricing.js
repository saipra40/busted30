import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const charges = [
    { service: 'Equity delivery', charge: '₹0', details: 'Free equity delivery trades' },
    { service: 'Equity intraday', charge: '0.03% or ₹20/order', details: 'whichever is lower' },
    { service: 'Equity futures', charge: '0.03% or ₹20/order', details: 'whichever is lower' },
    { service: 'Equity options', charge: '₹20/order', details: 'Flat fee per executed order' },
    { service: 'Currency futures', charge: '0.03% or ₹20/order', details: 'whichever is lower' },
    { service: 'Currency options', charge: '₹20/order', details: 'Flat fee per executed order' },
    { service: 'Commodity futures', charge: '0.03% or ₹20/order', details: 'whichever is lower' },
    { service: 'Commodity options', charge: '₹20/order', details: 'Flat fee per executed order' }
  ];

  const accountCharges = [
    { name: 'Account opening', charge: '₹0', description: 'Free account opening' },
    { name: 'Account maintenance (AMC)', charge: '₹300/year', description: 'For demat account' },
    { name: 'Fund withdrawal', charge: '₹0', description: 'Free and instant' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>

        {/* Free Equity Highlight */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">₹0</h2>
          <p className="text-lg text-gray-700 mb-4">Free equity delivery</p>
          <p className="text-gray-600">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Brokerage Charges */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Brokerage charges</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                    Instrument
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                    Charges
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {charges.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.service}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{item.charge}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Account Charges */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Account charges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accountCharges.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">{item.charge}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Charges Info */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional charges</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <p>Call & Trade: ₹50 per order for phone orders</p>
            </div>
            <div className="flex items-start">
              <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <p>Stamp duty: 0.015% or ₹1500 per crore on buy side</p>
            </div>
            <div className="flex items-start">
              <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <p>Transaction charges: Charged by exchanges (NSE, BSE, MCX)</p>
            </div>
            <div className="flex items-start">
              <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <p>GST: 18% on brokerage and transaction charges</p>
            </div>
            <div className="flex items-start">
              <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
              <p>SEBI charges: ₹10 per crore + GST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;