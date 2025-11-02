import React from 'react';
import { BookOpen, TrendingUp, Target, Zap, Shield, Clock } from 'lucide-react';

const Learn = () => {
  const topics = [
    {
      icon: Target,
      title: 'Know Your Vibe (Risk Profile)',
      emoji: '🎯',
      content: `Think of risk like choosing your difficulty level in a game. Low risk = easy mode, slow wins but steady. High risk = hard mode, big potential but can lose too.

Your vibe depends on:
- Your age (Young? You can handle more risk)
- Your goals (Need money soon? Play safe)
- Your sleep at night (Can't handle ups and downs? Stick to safer funds)

Gen Z tip: You're young, time is your superpower. A little risk won't hurt, you've got years to bounce back!`,
      color: 'from-genzpink to-genzpurple'
    },
    {
      icon: Zap,
      title: 'Compounding = Money Making Money',
      emoji: '⚡',
      content: `This is literally the cheat code of investing. Your money makes money, then THAT money makes more money. It's like a snowball rolling downhill getting bigger and bigger.

Example: ₹5000/month for 20 years at 12% = ₹50 lakhs! But you only put in ₹12 lakhs. The rest? Pure compounding magic.

The earlier you start, the crazier the results. Start at 22 vs 32 = Double the wealth. That's 10 years of Netflix you could skip!`,
      color: 'from-genzpurple to-genzpink'
    },
    {
      icon: TrendingUp,
      title: 'Start Small, Dream Big',
      emoji: '🚀',
      content: `You don't need lakhs to start. Even ₹500/month works. It's not about how much, it's about starting NOW.

Think of it like this:
- ₹500/month = Your coffee budget
- ₹1000/month = One weekend party
- ₹2000/month = That subscription you don't use

Start with what you can. Increase when you can. That's the vibe.

Real talk: Rich people didn't start rich. They started small and stayed consistent.`,
      color: 'from-genzpink to-genzpurple'
    },
    {
      icon: Clock,
      title: 'Consistency > Perfection',
      emoji: '🎯',
      content: `Trying to time the market? That's like trying to predict your ex's next move. Impossible and stressful.

Better strategy: SIP (Systematic Investment Plan)
- Auto-invests every month
- Market down? You buy more units (discount shopping!)
- Market up? Your existing units gain value (stonks!)

It's called rupee cost averaging. Basically, you win either way. Set it, forget it, get rich. That's the Gen Z way.`,
      color: 'from-genzpurple to-genzpink'
    },
    {
      icon: Shield,
      title: 'Stay Long Term, Skip the Drama',
      emoji: '🛡️',
      content: `Markets go up and down like your mood on Monday morning. But zoom out - they always go up long term.

Short term = Stressful, risky, basically gambling
Long term (5+ years) = Chill, profitable, actually investing

Your strategy:
1. Invest regularly
2. Don't check prices daily (seriously, stop)
3. Trust the process
4. Check back in 5 years
5. Be amazed at your gains

Warren Buffett is 94 and still holding. That's the vibe. HODL before crypto made it cool.`,
      color: 'from-genzpink to-genzpurple'
    },
    {
      icon: BookOpen,
      title: 'Diversification = Don\'t Put All Eggs in One Basket',
      emoji: '🧺',
      content: `Spread your money across different funds. Like having multiple backup plans for your life.

Why? If one fund tanks, others might boom. Balance, you know?

Mix it up:
- Some safe funds (large cap, hybrid)
- Some growth funds (mid cap, flexi cap)
- Some index funds (market mirror, low cost)

Think of it as your investment playlist - different moods, all vibes.`,
      color: 'from-genzpurple to-genzpink'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-genzpink via-genzpurple to-genzdark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <BookOpen size={20} />
            <span className="font-semibold">Investment School</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Learn the Game
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            No boring lectures. Just real talk about money in language you actually speak.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 ${
                  index % 2 === 0 ? 'border-genzpink/20' : 'border-genzpurple/20'
                }`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-4xl">{topic.emoji}</span>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent">
                        {topic.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none">
                  {topic.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 text-lg leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-genzpink via-genzpurple to-genzdark text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Quick Fire Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">💰 Emergency Fund First</h3>
              <p className="text-white/90">
                Keep 3-6 months expenses in liquid funds before going all in. Safety net is not boring, it's smart.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">📱 Don't Check Daily</h3>
              <p className="text-white/90">
                Markets fluctuate. Your mental health doesn't need that stress. Monthly check-ins are enough.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">🎯 Set Clear Goals</h3>
              <p className="text-white/90">
                Bike? Travel? Business? Know WHY you're investing. Makes it easier to stay committed.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">🚫 Avoid FOMO</h3>
              <p className="text-white/90">
                Friend made 50% returns? Cool. But their risk isn't your risk. Stick to YOUR plan.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">📈 Review Yearly</h3>
              <p className="text-white/90">
                Once a year, check if your funds are still aligned with goals. Rebalance if needed.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">🎓 Keep Learning</h3>
              <p className="text-white/90">
                Markets evolve. So should you. Read, watch, learn. Knowledge = wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent">
              Ready to Start?
            </span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Knowledge checked. Now let's put that money to work!
          </p>
          <a
            href="/explore"
            className="inline-block px-10 py-4 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Explore Funds
          </a>
        </div>
      </section>
    </div>
  );
};

export default Learn;