import Link from 'next/link'

export default function NeonDbPage() {
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
              Neon Database Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern web application showcasing advanced database management and analytics capabilities with real-time data processing.
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
              <p className="text-gray-300">2 months</p>
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
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Next.js</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">TypeScript</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Prisma</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">PostgreSQL</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Tailwind CSS</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Neon Database</span>
              <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-lg">Vercel</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  The Neon Database Portfolio is a comprehensive web application designed to demonstrate advanced 
                  database management capabilities and real-time analytics. Built with modern web technologies, 
                  it showcases efficient data handling, secure API endpoints, and responsive user interfaces.
                </p>
                <p>
                  The project leverages Neon&apos;s serverless PostgreSQL database for optimal performance and scalability, 
                  while providing a seamless development experience with automatic scaling and global distribution.
                </p>
                <p>
                  Key features include real-time data synchronization, advanced querying capabilities, 
                  automated database migrations, and a modern dashboard for data visualization and management.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Serverless PostgreSQL database with Neon
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Real-time data synchronization and updates
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Advanced querying and data analytics
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Automated database migrations with Prisma
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  RESTful API with TypeScript type safety
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  Modern responsive dashboard interface
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Database Layer</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Neon serverless PostgreSQL database</li>
                  <li>• Prisma ORM for type-safe database access</li>
                  <li>• Automated migrations and schema management</li>
                  <li>• Connection pooling and optimization</li>
                  <li>• Real-time data replication</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Application Layer</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Next.js 14 with App Router</li>
                  <li>• TypeScript for type safety</li>
                  <li>• API routes with proper error handling</li>
                  <li>• Server-side rendering optimization</li>
                  <li>• Vercel deployment and hosting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Database Architecture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Database Architecture</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Serverless</h4>
                  <p className="text-gray-300 text-sm">Automatic scaling and pay-per-use pricing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Global</h4>
                  <p className="text-gray-300 text-sm">Multi-region deployment for low latency</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Secure</h4>
                  <p className="text-gray-300 text-sm">Built-in security and compliance features</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Performance & Results</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">&lt;100ms</div>
                <p className="text-gray-300 text-sm">Query Response Time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <p className="text-gray-300 text-sm">Uptime</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Auto</div>
                <p className="text-gray-300 text-sm">Scaling</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Global</div>
                <p className="text-gray-300 text-sm">Distribution</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://github.com/yourusername/neon-db"
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
