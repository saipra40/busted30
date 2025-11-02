import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, FileText, TrendingUp, Code, Smartphone, PieChart } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: BarChart3,
      name: 'Kite',
      description: 'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.',
      features: ['Instant order execution', 'Advanced charting', 'Market depth', 'Algo trading']
    },
    {
      icon: FileText,
      name: 'Console',
      description: 'Backoffice platform for managing your trading and demat account. View reports, ledgers, and more.',
      features: ['Portfolio analytics', 'Tax P&L reports', 'Funds management', 'Account statements']
    },
    {
      icon: TrendingUp,
      name: 'Coin',
      description: 'Buy direct mutual funds online, commission-free, delivered directly to your Demat account.',
      features: ['Direct mutual funds', 'Zero commission', 'SIP investments', 'Portfolio tracking']
    },
    {
      icon: Code,
      name: 'Kite Connect',
      description: 'Build powerful trading platforms and experiences with our super-fast API. Trusted by startups, traders, and investors.',
      features: ['REST & WebSocket API', 'Historical data', 'Real-time streaming', 'Order management']
    },
    {
      icon: Smartphone,
      name: 'Kite Mobile',
      description: 'Trade on the go with our intuitive mobile apps for iOS and Android.',
      features: ['Real-time alerts', 'Quick orders', 'Advanced charts', 'Touch ID login']
    },
    {
      icon: PieChart,
      name: 'Varsity',
      description: 'Comprehensive stock market education and trading lessons for beginners and advanced traders.',
      features: ['Free modules', 'Interactive content', 'Quizzes', 'Certification']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sleek, modern, and intuitive trading platforms
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to start your investment journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of Gen Z and Millennials building wealth with ZaM.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Start investing now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;