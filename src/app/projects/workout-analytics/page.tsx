import Link from 'next/link'

export default function WorkoutAnalyticsPage() {
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
              Workout Analytics App
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive fitness tracking application with advanced analytics, workout management, and progress visualization.
            </p>
          </div>

          {/* Project Overview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Role</h3>
              <p className="text-gray-300">Full-Stack Developer</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
              <p className="text-gray-300">4 months</p>
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
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Node.js</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Express.js</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">MongoDB</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">React</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">JavaScript</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Chart.js</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Mongoose</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The Workout Analytics App is a comprehensive fitness tracking solution designed to help users 
                  monitor their fitness journey with detailed analytics and insights. The application provides 
                  a complete workout management system with progress tracking and performance analysis.
                </p>
                <p>
                  Built with a modern MERN stack (MongoDB, Express.js, React, Node.js), the app offers 
                  real-time data tracking, customizable workout plans, and detailed progress visualizations 
                  to help users achieve their fitness goals.
                </p>
                <p>
                  The system includes features for tracking various workout types, setting personal goals, 
                  analyzing performance trends, and providing actionable insights to improve fitness outcomes.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Comprehensive workout tracking and logging
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Advanced analytics and progress visualization
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Customizable workout plans and routines
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Performance metrics and goal tracking
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Real-time data synchronization
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Mobile-responsive design
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Backend (Node.js)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Express.js RESTful API</li>
                  <li>• MongoDB with Mongoose ODM</li>
                  <li>• JWT authentication</li>
                  <li>• Data validation and sanitization</li>
                  <li>• File upload handling</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Frontend (React)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Modern React with hooks</li>
                  <li>• Chart.js for data visualization</li>
                  <li>• Responsive design with CSS3</li>
                  <li>• State management with Context API</li>
                  <li>• Progressive Web App features</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Breakdown */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">💪</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Workout Tracking</h4>
                <p className="text-gray-300 text-sm">Log exercises, sets, reps, and weights with detailed notes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Analytics Dashboard</h4>
                <p className="text-gray-300 text-sm">Visualize progress with charts and performance metrics</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Goal Setting</h4>
                <p className="text-gray-300 text-sm">Set and track personal fitness goals and milestones</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📱</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Mobile Responsive</h4>
                <p className="text-gray-300 text-sm">Optimized for use on all devices and screen sizes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔄</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Real-time Sync</h4>
                <p className="text-gray-300 text-sm">Instant data synchronization across devices</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔒</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Secure Data</h4>
                <p className="text-gray-300 text-sm">Encrypted data storage and secure authentication</p>
              </div>
            </div>
          </div>

          {/* Database Schema */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Database Architecture</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Users Collection</h4>
                  <p className="text-gray-300 text-sm">Profile data, preferences, and authentication</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Workouts Collection</h4>
                  <p className="text-gray-300 text-sm">Exercise logs, sets, reps, and performance data</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Goals Collection</h4>
                  <p className="text-gray-300 text-sm">Fitness goals, milestones, and progress tracking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results & Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Results & Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <p className="text-gray-300">Workouts Tracked</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                <p className="text-gray-300">Exercise Types</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <p className="text-gray-300">Data Accuracy</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://github.com/yourusername/workout-analytics"
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
