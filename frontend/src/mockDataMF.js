// Mock data for Mutual Fund App

export const mockMutualFunds = [
  {
    id: 'mf1',
    name: 'Growth Plus Equity Fund',
    category: 'Large Cap',
    risk: 'Moderate',
    returns: {
      oneYear: 18.5,
      threeYear: 22.3,
      fiveYear: 19.8
    },
    minInvestment: 500,
    exitLoad: '1% if redeemed within 1 year',
    expenseRatio: 1.2,
    aum: 12500,
    rating: 4.5,
    description: 'Invest in top companies. Perfect for long-term wealth building.',
    navValue: 245.67
  },
  {
    id: 'mf2',
    name: 'Tech Leaders Fund',
    category: 'Sectoral',
    risk: 'High',
    returns: {
      oneYear: 25.2,
      threeYear: 28.5,
      fiveYear: 24.1
    },
    minInvestment: 1000,
    exitLoad: '1% if redeemed within 1 year',
    expenseRatio: 1.5,
    aum: 8900,
    rating: 4.2,
    description: 'Ride the tech wave. Invest in companies shaping tomorrow.',
    navValue: 156.34
  },
  {
    id: 'mf3',
    name: 'Balanced Hybrid Fund',
    category: 'Hybrid',
    risk: 'Low to Moderate',
    returns: {
      oneYear: 12.8,
      threeYear: 14.5,
      fiveYear: 13.2
    },
    minInvestment: 500,
    exitLoad: '1% if redeemed within 1 year',
    expenseRatio: 1.0,
    aum: 15600,
    rating: 4.7,
    description: 'Best of both worlds - stocks and bonds. Steady growth with safety.',
    navValue: 189.23
  },
  {
    id: 'mf4',
    name: 'Small Cap Discovery Fund',
    category: 'Small Cap',
    risk: 'Very High',
    returns: {
      oneYear: 32.5,
      threeYear: 35.8,
      fiveYear: 28.9
    },
    minInvestment: 500,
    exitLoad: '1% if redeemed within 1 year',
    expenseRatio: 1.8,
    aum: 4500,
    rating: 4.0,
    description: 'Hunt for hidden gems. High risk, high reward potential.',
    navValue: 98.45
  },
  {
    id: 'mf5',
    name: 'Index Nifty 50 Fund',
    category: 'Index',
    risk: 'Moderate',
    returns: {
      oneYear: 16.2,
      threeYear: 18.5,
      fiveYear: 17.1
    },
    minInvestment: 100,
    exitLoad: 'Nil',
    expenseRatio: 0.5,
    aum: 25000,
    rating: 4.8,
    description: 'Mirror the market. Low cost, diversified portfolio.',
    navValue: 234.56
  },
  {
    id: 'mf6',
    name: 'Flexi Cap Dynamic Fund',
    category: 'Flexi Cap',
    risk: 'Moderate to High',
    returns: {
      oneYear: 20.1,
      threeYear: 23.7,
      fiveYear: 21.3
    },
    minInvestment: 500,
    exitLoad: '1% if redeemed within 1 year',
    expenseRatio: 1.3,
    aum: 18700,
    rating: 4.6,
    description: 'Flexibility is key. Invests across market caps based on opportunities.',
    navValue: 312.89
  }
];

export const mockUserPortfolio = [
  {
    fundId: 'mf1',
    fundName: 'Growth Plus Equity Fund',
    investedAmount: 25000,
    currentValue: 28500,
    units: 115.86,
    sipAmount: 5000,
    sipDate: 5,
    returns: 14.0,
    returnsAmount: 3500
  },
  {
    fundId: 'mf3',
    fundName: 'Balanced Hybrid Fund',
    investedAmount: 15000,
    currentValue: 16200,
    units: 85.62,
    sipAmount: 3000,
    sipDate: 10,
    returns: 8.0,
    returnsAmount: 1200
  },
  {
    fundId: 'mf5',
    fundName: 'Index Nifty 50 Fund',
    investedAmount: 10000,
    currentValue: 11500,
    units: 49.02,
    sipAmount: 2000,
    sipDate: 15,
    returns: 15.0,
    returnsAmount: 1500
  }
];

export const mockEducationalContent = [
  {
    id: 'edu1',
    title: 'What are Mutual Funds?',
    category: 'Basics',
    readTime: '3 min',
    content: 'Think of mutual funds as a group investment. You and thousands of others pool money together, and a pro fund manager invests it for everyone. Like splitting an Uber - cheaper and smarter together!',
    keyPoints: [
      'Pool money with other investors',
      'Professional management',
      'Diversification = less risk',
      'Start with as little as rupees 100'
    ]
  },
  {
    id: 'edu2',
    title: 'SIP: Your Money on Autopilot',
    category: 'Investing',
    readTime: '4 min',
    content: 'SIP means Systematic Investment Plan. Like a Netflix subscription, but for investing! Set it once, and a fixed amount gets invested automatically every month. Perfect for busy Gen Z life.',
    keyPoints: [
      'Invest automatically every month',
      'Start small, grow big',
      'Rupee cost averaging benefit',
      'Build discipline without thinking'
    ]
  },
  {
    id: 'edu3',
    title: 'Understanding Risk and Returns',
    category: 'Basics',
    readTime: '5 min',
    content: 'Higher risk means higher potential returns but also losses. Like choosing between a safe job vs starting a startup. Young? You can take more risk. Close to retirement? Play it safe.',
    keyPoints: [
      'Risk and return go hand-in-hand',
      'Young means more time to recover',
      'Diversify to manage risk',
      'Match risk with your goals'
    ]
  },
  {
    id: 'edu4',
    title: 'Large Cap vs Small Cap',
    category: 'Fund Types',
    readTime: '4 min',
    content: 'Large Cap means Big, stable companies like Google of India. Small Cap means Smaller companies with huge growth potential. Like betting on established YouTubers vs new creators.',
    keyPoints: [
      'Large Cap means Lower risk, steady returns',
      'Small Cap means Higher risk, explosive growth potential',
      'Mid Cap means Sweet spot in between',
      'Mix them for balance'
    ]
  }
];

export const mockGoals = [
  { id: 1, name: 'Dream Bike', target: 150000, saved: 45000, deadline: '2026-12' },
  { id: 2, name: 'World Trip', target: 300000, saved: 80000, deadline: '2027-06' },
  { id: 3, name: 'Start Business', target: 500000, saved: 120000, deadline: '2028-12' }
];