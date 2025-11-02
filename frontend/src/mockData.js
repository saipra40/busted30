// Mock data for Zerodha clone

export const mockStocks = [
  { symbol: 'RELIANCE', ltp: 2845.50, change: 15.30, changePercent: 0.54, volume: 2453678, high: 2850.00, low: 2820.00, open: 2830.20, prevClose: 2830.20 },
  { symbol: 'TCS', ltp: 3650.75, change: -12.50, changePercent: -0.34, volume: 1876543, high: 3670.00, low: 3640.00, open: 3663.25, prevClose: 3663.25 },
  { symbol: 'INFY', ltp: 1545.20, change: 8.90, changePercent: 0.58, volume: 3245678, high: 1550.00, low: 1535.00, open: 1536.30, prevClose: 1536.30 },
  { symbol: 'HDFCBANK', ltp: 1678.40, change: -5.60, changePercent: -0.33, volume: 2987654, high: 1690.00, low: 1675.00, open: 1684.00, prevClose: 1684.00 },
  { symbol: 'ICICIBANK', ltp: 1089.75, change: 12.25, changePercent: 1.14, volume: 4567890, high: 1092.00, low: 1075.00, open: 1077.50, prevClose: 1077.50 },
  { symbol: 'SBIN', ltp: 623.80, change: 7.80, changePercent: 1.27, volume: 5678901, high: 625.00, low: 615.00, open: 616.00, prevClose: 616.00 },
  { symbol: 'BHARTIARTL', ltp: 1234.60, change: -3.40, changePercent: -0.27, volume: 1234567, high: 1242.00, low: 1230.00, open: 1238.00, prevClose: 1238.00 },
  { symbol: 'TATAMOTORS', ltp: 789.90, change: 18.90, changePercent: 2.45, volume: 6789012, high: 795.00, low: 770.00, open: 771.00, prevClose: 771.00 },
  { symbol: 'WIPRO', ltp: 445.30, change: -2.70, changePercent: -0.60, volume: 2345678, high: 450.00, low: 442.00, open: 448.00, prevClose: 448.00 },
  { symbol: 'LT', ltp: 3456.80, change: 25.80, changePercent: 0.75, volume: 987654, high: 3465.00, low: 3430.00, open: 3431.00, prevClose: 3431.00 }
];

export const mockIndices = [
  { name: 'NIFTY 50', value: 22150.45, change: 85.30, changePercent: 0.39 },
  { name: 'SENSEX', value: 73245.60, change: 125.80, changePercent: 0.17 },
  { name: 'NIFTY BANK', value: 48567.90, change: -45.20, changePercent: -0.09 },
  { name: 'NIFTY IT', value: 35678.20, change: 156.40, changePercent: 0.44 }
];

export const mockHoldings = [
  { symbol: 'RELIANCE', qty: 50, avgPrice: 2650.00, ltp: 2845.50, investment: 132500, currentValue: 142275, pnl: 9775, pnlPercent: 7.38 },
  { symbol: 'TCS', qty: 30, avgPrice: 3500.00, ltp: 3650.75, investment: 105000, currentValue: 109522.50, pnl: 4522.50, pnlPercent: 4.31 },
  { symbol: 'INFY', qty: 100, avgPrice: 1400.00, ltp: 1545.20, investment: 140000, currentValue: 154520, pnl: 14520, pnlPercent: 10.37 },
  { symbol: 'HDFCBANK', qty: 40, avgPrice: 1650.00, ltp: 1678.40, investment: 66000, currentValue: 67136, pnl: 1136, pnlPercent: 1.72 },
  { symbol: 'ICICIBANK', qty: 80, avgPrice: 1050.00, ltp: 1089.75, investment: 84000, currentValue: 87180, pnl: 3180, pnlPercent: 3.79 }
];

export const mockPositions = [
  { symbol: 'SBIN', qty: 100, avgPrice: 620.00, ltp: 623.80, pnl: 380, pnlPercent: 0.61, product: 'MIS' },
  { symbol: 'TATAMOTORS', qty: -50, avgPrice: 785.00, ltp: 789.90, pnl: -245, pnlPercent: -0.62, product: 'MIS' }
];

export const mockOrders = [
  { time: '09:15:23', symbol: 'RELIANCE', type: 'BUY', qty: 10, price: 2840.00, status: 'COMPLETE', orderType: 'MARKET', product: 'CNC' },
  { time: '09:45:12', symbol: 'SBIN', type: 'BUY', qty: 100, price: 620.00, status: 'COMPLETE', orderType: 'LIMIT', product: 'MIS' },
  { time: '10:30:45', symbol: 'TCS', type: 'SELL', qty: 5, price: 3655.00, status: 'PENDING', orderType: 'LIMIT', product: 'CNC' },
  { time: '11:05:32', symbol: 'INFY', type: 'BUY', qty: 20, price: 1548.00, status: 'REJECTED', orderType: 'LIMIT', product: 'MIS' }
];

export const mockChartData = Array.from({ length: 100 }, (_, i) => ({
  time: i,
  price: 2800 + Math.sin(i / 10) * 50 + Math.random() * 20
}));

export const mockProducts = [
  {
    name: 'Kite',
    description: 'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more.',
    icon: 'BarChart3',
    link: '/kite'
  },
  {
    name: 'Console',
    description: 'Backoffice platform for managing your trading and demat account. View reports, statements, and more.',
    icon: 'FileText',
    link: '/console'
  },
  {
    name: 'Coin',
    description: 'Buy direct mutual funds online, commission-free, delivered directly to your Demat account.',
    icon: 'TrendingUp',
    link: '/coin'
  },
  {
    name: 'Kite Connect',
    description: 'Build powerful trading platforms and experiences with our super-fast API.',
    icon: 'Code',
    link: '/kiteconnect'
  }
];

export const mockPricing = [
  { service: 'Equity delivery', charge: '₹0', details: 'Free' },
  { service: 'Equity intraday', charge: '0.03%', details: 'or ₹20/executed order whichever is lower' },
  { service: 'Equity futures', charge: '0.03%', details: 'or ₹20/executed order whichever is lower' },
  { service: 'Equity options', charge: '₹20', details: 'per executed order' },
  { service: 'Currency futures', charge: '0.03%', details: 'or ₹20/executed order whichever is lower' },
  { service: 'Currency options', charge: '₹20', details: 'per executed order' },
  { service: 'Commodity futures', charge: '0.03%', details: 'or ₹20/executed order whichever is lower' },
  { service: 'Commodity options', charge: '₹20', details: 'per executed order' }
];

export const mockUser = {
  name: 'Guest User',
  email: 'guest@example.com',
  userId: 'GU12345',
  funds: {
    available: 125000,
    used: 75000,
    total: 200000
  }
};