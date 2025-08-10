import Link from 'next/link'

export default function AlexanderWirelessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="py-8 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Alexander Wireless
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced anomaly detection system for billing cycles with interactive dashboard and comprehensive database integration.
            </p>
          </div>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Role</h3>
              <p className="text-gray-300">Full-Stack Developer & Data Scientist</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
              <p className="text-gray-300">3 months</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Team Size</h3>
              <p className="text-gray-300">Solo Project</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Python</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Next.js</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">TypeScript</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">SQL</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Prisma</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Tailwind CSS</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Pandas</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">NumPy</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Alexander Wireless started as an attempt to recreate a billing anomaly detection dashboard I built at T-Mobile using Power BI and Alteryx. The original system was rich with nuance—solving complex, real-world problems under tight operational constraints—but I couldn't directly replicate those proprietary details. Instead, I reimagined the project as a new, standalone anomaly detection solution.
                </p>
                <p>
                  To bring it to life, I stepped outside my original tech stack and learned Next.js, Prisma, and advanced Python data processing from the ground up. The result is a full-stack application that ingests large datasets, applies advanced anomaly detection algorithms, and visualizes insights through an interactive, real-time dashboard. While inspired by my enterprise work, this version became its own challenge—one that pushed me to adapt, expand my skills, and deliver a production-quality system from scratch.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Advanced anomaly detection algorithms for billing cycle analysis
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Interactive dashboard with real-time data visualization
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Automated data processing and anomaly reporting
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Comprehensive database integration with SQLite
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  RESTful API for data access and system management
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Responsive design optimized for desktop and mobile
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Backend (Python)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Data processing pipeline with Pandas and NumPy</li>
                  <li>• Statistical anomaly detection algorithms</li>
                  <li>• SQLite database integration</li>
                  <li>• Automated data import and export</li>
                  <li>• RESTful API endpoints</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Frontend (Next.js)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Modern React-based dashboard</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Interactive data visualizations</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Challenges & Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Challenges</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Processing large datasets efficiently</li>
                  <li>• Implementing accurate anomaly detection</li>
                  <li>• Creating intuitive data visualizations</li>
                  <li>• Ensuring real-time data updates</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Solutions</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Optimized data processing with chunking</li>
                  <li>• Multiple detection algorithms for accuracy</li>
                  <li>• Interactive charts with Chart.js</li>
                  <li>• WebSocket integration for real-time updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Results & Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                <p className="text-gray-300">Anomaly Detection Accuracy</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10x</div>
                <p className="text-gray-300">Faster Data Processing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <p className="text-gray-300">Automated Monitoring</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://github.com/daknox/Alexander-Wireless"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View on GitHub
              </Link>
              <Link 
                href="/"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
