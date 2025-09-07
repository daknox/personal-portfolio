'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Sample data for the dashboard
const generateSampleData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonth = new Date().getMonth();
  
  return months.map((month, index) => ({
    month,
    billingAmount: Math.floor(Math.random() * 50000) + 20000,
    customerCount: Math.floor(Math.random() * 1000) + 500,
    anomalies: Math.floor(Math.random() * 20),
    isAnomaly: Math.random() > 0.85, // 15% chance of anomaly
    timestamp: new Date(2024, index, Math.floor(Math.random() * 28) + 1)
  }));
};

const generateRealTimeData = () => ({
  currentBilling: Math.floor(Math.random() * 1000) + 500,
  activeCustomers: Math.floor(Math.random() * 100) + 50,
  anomaliesDetected: Math.floor(Math.random() * 5),
  systemHealth: Math.floor(Math.random() * 20) + 80
});

export default function AlexanderWirelessDashboard() {
  const [sampleData, setSampleData] = useState(generateSampleData());
  const [realTimeData, setRealTimeData] = useState(generateRealTimeData());
  const [selectedTimeframe, setSelectedTimeframe] = useState('6M');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(generateRealTimeData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSampleData(generateSampleData());
      setRealTimeData(generateRealTimeData());
      setIsLoading(false);
    }, 1000);
  };

  const getAnomalyColor = (isAnomaly: boolean) => {
    return isAnomaly ? 'text-red-400' : 'text-green-400';
  };

  const getAnomalyBg = (isAnomaly: boolean) => {
    return isAnomaly ? 'bg-red-500/20 border-red-500/30' : 'bg-green-500/20 border-green-500/30';
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="py-6 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <Link 
              href="/projects/alexander-wireless"
              className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center"
            >
              ← Back to Project
            </Link>
            <h1 className="text-3xl font-bold text-white mt-2">Alexander Wireless Dashboard</h1>
            <p className="text-gray-300">Real-time Anomaly Detection & Billing Analytics</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Live</span>
            </div>
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {isLoading ? 'Refreshing...' : 'Refresh Data'}
            </button>
          </div>
        </div>
      </header>

      {/* Real-time Metrics */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Real-time Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Current Billing</p>
                  <p className="text-3xl font-bold text-white">${realTimeData.currentBilling.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Active Customers</p>
                  <p className="text-3xl font-bold text-white">{realTimeData.activeCustomers.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Anomalies Detected</p>
                  <p className="text-3xl font-bold text-red-400">{realTimeData.anomaliesDetected}</p>
                </div>
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">System Health</p>
                  <p className="text-3xl font-bold text-green-400">{realTimeData.systemHealth}%</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeframe Selector */}
      <section className="py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2">
            {['1M', '3M', '6M', '1Y'].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedTimeframe === timeframe
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Analytics */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Billing Analytics</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart placeholder */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Monthly Billing Trends</h3>
                <div className="h-64 bg-white/5 rounded-lg flex items-end justify-between p-4">
                  {sampleData.slice(0, 6).map((data, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="bg-purple-500 rounded-t w-8 mb-2 transition-all duration-500"
                        style={{ height: `${(data.billingAmount / 70000) * 200}px` }}
                      ></div>
                      <span className="text-xs text-gray-400">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anomaly Detection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Anomaly Detection Results</h3>
                <div className="space-y-3">
                  {sampleData.slice(0, 5).map((data, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${getAnomalyBg(data.isAnomaly)}`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-medium">{data.month} 2024</p>
                          <p className="text-gray-300 text-sm">${data.billingAmount.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${getAnomalyColor(data.isAnomaly)}`}>
                            {data.isAnomaly ? 'Anomaly Detected' : 'Normal'}
                          </p>
                          <p className="text-gray-400 text-sm">{data.anomalies} issues</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Analytics */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Customer Analytics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Customer Growth</h3>
              <div className="space-y-3">
                {sampleData.slice(0, 4).map((data, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{data.month}</span>
                    <span className="text-white font-medium">{data.customerCount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Billing Distribution</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Low ($0-25k)</span>
                  <span className="text-white">35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Medium ($25k-50k)</span>
                  <span className="text-white">45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">High ($50k+)</span>
                  <span className="text-white">20%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Data Processing</span>
                  <span className="text-green-400">✓ Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Anomaly Detection</span>
                  <span className="text-green-400">✓ Running</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Alert System</span>
                  <span className="text-green-400">✓ Monitoring</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Database</span>
                  <span className="text-green-400">✓ Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            This is a demo dashboard showcasing Alexander Wireless anomaly detection capabilities.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Data is simulated for demonstration purposes.
          </p>
        </div>
      </footer>
    </main>
  );
}