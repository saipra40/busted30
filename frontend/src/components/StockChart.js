import React, { useEffect, useRef } from 'react';
import { mockChartData } from '../mockData';

const StockChart = ({ stock }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !stock) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Generate chart data based on stock
    const data = mockChartData.map((point, i) => ({
      time: i,
      price: stock.ltp + (point.price - 2800)
    }));

    const maxPrice = Math.max(...data.map(d => d.price));
    const minPrice = Math.min(...data.map(d => d.price));
    const priceRange = maxPrice - minPrice;

    // Draw grid lines
    ctx.strokeStyle = '#f0f0f0';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      const y = (height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw price line
    ctx.strokeStyle = stock.change >= 0 ? '#22c55e' : '#ef4444';
    ctx.lineWidth = 2;
    ctx.beginPath();

    data.forEach((point, i) => {
      const x = (width / data.length) * i;
      const y = height - ((point.price - minPrice) / priceRange) * height;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    // Fill area under line
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = stock.change >= 0 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)';
    ctx.fill();

  }, [stock]);

  if (!stock) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a stock to view chart
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white p-4">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{stock.symbol}</h3>
        <div className="flex items-baseline space-x-3 mt-1">
          <span className="text-2xl font-bold text-gray-900">₹{stock.ltp.toFixed(2)}</span>
          <span
            className={`text-sm font-medium ${
              stock.change >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {stock.change >= 0 ? '+' : ''}
            {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      <div className="flex-1 relative">
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="w-full h-full"
        />
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-gray-600">Open</div>
          <div className="font-medium text-gray-900">₹{stock.open.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-gray-600">High</div>
          <div className="font-medium text-gray-900">₹{stock.high.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-gray-600">Low</div>
          <div className="font-medium text-gray-900">₹{stock.low.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-gray-600">Prev. Close</div>
          <div className="font-medium text-gray-900">₹{stock.prevClose.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default StockChart;