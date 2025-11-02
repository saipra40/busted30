import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, BookOpen, Calculator, Sparkles, Zap } from 'lucide-react';

const SuccessStories = () => {
  const [showAll, setShowAll] = useState(false);

  const allStories = [
    {
      name: 'Rohan, 23',
      role: 'Software Engineer',
      story: 'Started with just ₹2000/month SIP. In 2 years, I saved enough for my dream bike! ZaM made investing feel like a game, not a chore.',
      returns: '+42%',
      duration: '2 years',
      initial: 'R'
    },
    {
      name: 'Priya, 25',
      role: 'Content Creator',
      story: 'As a freelancer, my income varies. ZaM\'s flexibility let me invest when I could. Now I have an emergency fund that\'s actually growing!',
      returns: '+38%',
      duration: '18 months',
      initial: 'P'
    },
    {
      name: 'Arjun, 22',
      role: 'Recent Graduate',
      story: 'Started investing from my first salary. The calculators showed me I could reach ₹10L in 5 years. Best decision ever!',
      returns: '+35%',
      duration: '1 year',
      initial: 'A'
    },
    {
      name: 'Sanya, 24',
      role: 'Marketing Executive',
      story: 'Was scared of stocks. Started with hybrid funds. Now I\'m confident and my portfolio is up 40%! Thanks ZaM for making it simple.',
      returns: '+40%',
      duration: '2.5 years',
      initial: 'S'
    },
    {
      name: 'Karan, 26',
      role: 'Entrepreneur',
      story: 'Used to think investing was for old people. ZaM changed my mind. Now I\'m building wealth while building my startup!',
      returns: '+45%',
      duration: '3 years',
      initial: 'K'
    },
    {
      name: 'Nisha, 21',
      role: 'College Student',
      story: 'Started with just ₹500/month from my internship stipend. Small amounts, big dreams. Already at ₹25K in 10 months!',
      returns: '+28%',
      duration: '10 months',
      initial: 'N'
    }
  ];

  const displayedStories = showAll ? allStories : allStories.slice(0, 3);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent">
              Real Stories, Real Vibes
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            See how Gen Z investors are winning with ZaM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedStories.map((story, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border-2 border-genzpink/20 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-genzpink to-genzpurple rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {story.initial}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold text-gray-900">{story.name}</h4>
                  <p className="text-sm text-gray-600">{story.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{story.story}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-genzpink font-semibold">{story.returns} returns</span>
                <span className="text-gray-500">{story.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Load More Stories
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const MFHome = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-genzpink via-genzpurple to-genzdark text-white py-20 px-4 min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1698374178988-9da9609584b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxmcmllbmRzJTIwY2VsZWJyYXRpbmclMjB0b2dldGhlcnxlbnwwfHx8fDE3NjIwNTUwNDZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Gen Z friends celebrating together"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-genzpink/85 via-genzpurple/85 to-genzdark/90"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Built for Gen Z & Millennials</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Vibe Investing for<br />Gen Z & Millennials
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-md">
            ZaM makes mutual funds easy. Start your wealth journey with good vibes only.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/social-auth"
              className="px-8 py-4 bg-white text-genzpurple rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Start Investing
            </Link>
            <Link
              to="/learn"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all"
            >
              Learn First
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-genzpink/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-genzpurple/30 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent mb-2">
                ₹100
              </div>
              <p className="text-gray-600">Minimum to start</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent mb-2">
                0%
              </div>
              <p className="text-gray-600">Commission. Seriously.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-gray-600">Invest anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent">
              Everything you need
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            All the tools to make investing easy and fun
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/calculators" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-genzpink to-genzpurple rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">SIP Calculators</h3>
                <p className="text-gray-600">
                  Plan your investments. See how much you will grow.
                </p>
              </div>
            </Link>

            <Link to="/explore" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-genzpurple to-genzdark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Explore Funds</h3>
                <p className="text-gray-600">
                  Discover funds that match your vibe and goals.
                </p>
              </div>
            </Link>

            <Link to="/learn" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-genzpink to-genzpurple rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Learn & Grow</h3>
                <p className="text-gray-600">
                  Simple guides to understand investing. No boring stuff.
                </p>
              </div>
            </Link>

            <Link to="/portfolio" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-genzpurple to-genzpink rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Track Portfolio</h3>
                <p className="text-gray-600">
                  See your money grow in real-time. Stay on top of your game.
                </p>
              </div>
            </Link>

            <div className="bg-gradient-to-br from-genzpink to-genzpurple rounded-2xl p-8 shadow-lg text-white transform hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Auto-Invest</h3>
              <p className="text-white/90">
                Set it and forget it. Money moves while you sleep.
              </p>
            </div>

            <div className="bg-gradient-to-br from-genzpurple to-genzdark rounded-2xl p-8 shadow-lg text-white transform hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Goal Based</h3>
              <p className="text-white/90">
                Dream bike? World trip? We help you get there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-genzpink via-genzpurple to-genzdark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start your wealth journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of Gen Z and Millennials building wealth with ZaM
          </p>
          <Link
            to="/social-auth"
            className="inline-block px-10 py-4 bg-white text-genzpurple rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MFHome;