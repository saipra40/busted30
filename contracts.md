# Zerodha Clone - API Contracts & Backend Implementation Plan

## Current Implementation Status
✅ **Frontend-only with Mock Data Complete**
- All 12 pages implemented and working
- Authentication flow with React Context
- Mock data for stocks, orders, holdings, positions

## Mock Data Currently Used (to be replaced with backend)

### 1. Authentication (`mockData.js`)
- User signup/login (stored in localStorage)
- Mock user profile with funds information

### 2. Market Data
- Stock prices, changes, volumes
- Market indices (NIFTY 50, SENSEX, BANK NIFTY, NIFTY IT)
- Real-time chart data

### 3. Trading Data
- Holdings (user's portfolio)
- Positions (intraday trades)
- Order history
- Watchlists

## API Contracts to Implement

### Authentication APIs

#### POST /api/auth/signup
```json
Request: {
  "name": "string",
  "email": "string",
  "mobile": "string",
  "password": "string"
}
Response: {
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "userId": "string"
  },
  "token": "jwt_token"
}
```

#### POST /api/auth/login
```json
Request: {
  "email": "string",
  "password": "string"
}
Response: {
  "user": { ... },
  "token": "jwt_token"
}
```

#### GET /api/auth/me
```json
Headers: { "Authorization": "Bearer token" }
Response: {
  "user": { ... },
  "funds": {
    "available": number,
    "used": number,
    "total": number
  }
}
```

### Market Data APIs

#### GET /api/market/stocks
```json
Response: [{
  "symbol": "string",
  "ltp": number,
  "change": number,
  "changePercent": number,
  "volume": number,
  "high": number,
  "low": number,
  "open": number,
  "prevClose": number
}]
```

#### GET /api/market/indices
```json
Response: [{
  "name": "string",
  "value": number,
  "change": number,
  "changePercent": number
}]
```

#### GET /api/market/chart/:symbol
```json
Response: {
  "symbol": "string",
  "data": [{ "time": number, "price": number }]
}
```

### Trading APIs

#### POST /api/orders
```json
Request: {
  "symbol": "string",
  "type": "BUY" | "SELL",
  "quantity": number,
  "price": number (optional for market orders),
  "orderType": "MARKET" | "LIMIT",
  "product": "CNC" | "MIS"
}
Response: {
  "orderId": "string",
  "status": "PENDING" | "COMPLETE" | "REJECTED",
  "message": "string"
}
```

#### GET /api/orders
```json
Response: [{
  "orderId": "string",
  "time": "string",
  "symbol": "string",
  "type": "BUY" | "SELL",
  "qty": number,
  "price": number,
  "status": "string",
  "orderType": "string",
  "product": "string"
}]
```

#### DELETE /api/orders/:orderId
```json
Response: {
  "success": boolean,
  "message": "string"
}
```

#### GET /api/holdings
```json
Response: [{
  "symbol": "string",
  "qty": number,
  "avgPrice": number,
  "ltp": number,
  "investment": number,
  "currentValue": number,
  "pnl": number,
  "pnlPercent": number
}]
```

#### GET /api/positions
```json
Response: [{
  "symbol": "string",
  "qty": number (can be negative for shorts),
  "avgPrice": number,
  "ltp": number,
  "pnl": number,
  "pnlPercent": number,
  "product": "MIS"
}]
```

#### POST /api/positions/exit/:symbol
```json
Response: {
  "success": boolean,
  "message": "string"
}
```

### Funds APIs

#### GET /api/funds
```json
Response: {
  "available": number,
  "used": number,
  "total": number
}
```

#### POST /api/funds/add
```json
Request: {
  "amount": number
}
Response: {
  "success": boolean,
  "newBalance": number
}
```

#### POST /api/funds/withdraw
```json
Request: {
  "amount": number
}
Response: {
  "success": boolean,
  "newBalance": number
}
```

### Watchlist APIs

#### GET /api/watchlist
```json
Response: [{
  "id": "string",
  "name": "string",
  "symbols": ["string"]
}]
```

#### POST /api/watchlist/:id/add
```json
Request: {
  "symbol": "string"
}
Response: {
  "success": boolean
}
```

## Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  mobile: String,
  password: String (hashed),
  userId: String (unique, auto-generated),
  createdAt: Date
}
```

### Funds Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  available: Number,
  used: Number,
  total: Number,
  updatedAt: Date
}
```

### Holdings Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  symbol: String,
  qty: Number,
  avgPrice: Number,
  purchaseDate: Date
}
```

### Orders Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  symbol: String,
  type: String (BUY/SELL),
  qty: Number,
  price: Number,
  orderType: String (MARKET/LIMIT),
  product: String (CNC/MIS),
  status: String (PENDING/COMPLETE/REJECTED),
  createdAt: Date,
  executedAt: Date
}
```

### Positions Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  symbol: String,
  qty: Number,
  avgPrice: Number,
  product: String (MIS),
  openedAt: Date
}
```

### Watchlists Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: Users),
  name: String,
  symbols: [String]
}
```

## Frontend Integration Points

### Files to Update for Backend Integration

1. **Authentication Context** (`/frontend/src/context/AuthContext.js`)
   - Replace localStorage mock with API calls
   - Add JWT token management
   - Implement token refresh logic

2. **API Service** (New file: `/frontend/src/services/api.js`)
   - Create axios instance with interceptors
   - Add authentication headers
   - Handle API errors

3. **Dashboard Components**
   - `Watchlist.js` - Fetch stocks from API
   - `OrderPanel.js` - Submit orders to backend
   - `StockChart.js` - Fetch real-time data

4. **Pages to Update**
   - `Holdings.js` - Fetch user holdings
   - `Positions.js` - Fetch active positions
   - `Orders.js` - Fetch order history
   - `Funds.js` - Add/withdraw funds via API
   - `Login.js` & `Signup.js` - Use authentication APIs

## Implementation Strategy

### Phase 1: Backend Setup
1. Create MongoDB models
2. Implement JWT authentication
3. Create auth middleware
4. Build authentication endpoints

### Phase 2: Market Data
1. Create market data endpoints
2. Implement mock stock price generator (or integrate real API)
3. Add WebSocket for real-time updates (optional)

### Phase 3: Trading Features
1. Build order management system
2. Implement holdings calculation
3. Create positions tracking
4. Add P&L calculations

### Phase 4: Funds Management
1. Build funds tracking system
2. Implement add/withdraw logic
3. Add transaction history

### Phase 5: Frontend Integration
1. Create API service layer
2. Replace all mock data with API calls
3. Add loading states
4. Implement error handling
5. Add toast notifications for actions

### Phase 6: Testing & Polish
1. Test all user flows
2. Add validation
3. Implement rate limiting
4. Add security measures
5. Performance optimization

## Notes
- All mock data is currently in `/frontend/src/mockData.js`
- Authentication is stored in localStorage (to be replaced with JWT)
- Stock prices are static mock data (could integrate real API or continue with simulated data)
- No database is currently used - everything is frontend state management
