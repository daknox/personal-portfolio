'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add scroll effect to navigation
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('bg-gray-900/95');
        } else {
          nav.classList.remove('bg-gray-900/95');
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="gradient-bg min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gradient">DataPortfolio</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-electric-purple transition-colors">Home</a>
              <a href="#projects" className="hover:text-electric-purple transition-colors">Projects</a>
              <a href="#about" className="hover:text-electric-purple transition-colors">About</a>
              <a href="#contact" className="hover:text-electric-purple transition-colors">Contact</a>
            </div>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Data</span> <span className="text-white">Storyteller</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transforming complex datasets into meaningful insights through visualization, analysis, and machine learning
          </p>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-electric-purple hover:bg-dark-purple px-8 py-4 rounded-full text-lg font-semibold transition-all glow-effect hover:scale-105"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="project-card rounded-xl p-6">
              <div className="w-full h-48 bg-gradient-to-br from-electric-purple to-light-purple rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Alexander Wireless Dashboard</h4>
              <p className="text-gray-400 mb-4">Recreation of a production anomaly detection system developed at T-Mobile, built with generated data to protect proprietary information. Monitors billing cycles in real time, flags irregularities, and streamlines investigation workflows using a full production-grade database architecture.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">Anomaly Detection</span>
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">Data Analysis</span>
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">Real-time Monitoring</span>
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">SQL</span>
              </div>
              <button className="w-full bg-gray-700 hover:bg-electric-purple hover:scale-105 text-white py-2 rounded-lg transition-all duration-300 transform">
                View Project
              </button>
            </div>

            {/* Project 2 */}
            <div className="project-card rounded-xl p-6">
              <div className="w-full h-48 bg-gradient-to-br from-light-purple to-electric-purple rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">ML Prediction Model</h4>
              <p className="text-gray-400 mb-4">Machine learning model predicting customer churn with 94% accuracy using ensemble methods and feature engineering.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">Scikit-learn</span>
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">Pandas</span>
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">XGBoost</span>
              </div>
              <button className="w-full bg-gray-700 hover:bg-electric-purple hover:scale-105 text-white py-2 rounded-lg transition-all duration-300 transform">
                View Project
              </button>
            </div>

            {/* Project 3 */}
            <div className="project-card rounded-xl p-6">
              <div className="w-full h-48 bg-gradient-to-br from-electric-purple via-dark-purple to-gray-800 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Market Research Analysis</h4>
              <p className="text-gray-400 mb-4">Comprehensive analysis of consumer behavior patterns using statistical modeling and data visualization techniques.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">R</span>
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">ggplot2</span>
                <span className="px-3 py-1 bg-electric-purple/20 text-light-purple rounded-full text-sm">Statistics</span>
              </div>
              <button className="w-full bg-gray-700 hover:bg-electric-purple hover:scale-105 text-white py-2 rounded-lg transition-all duration-300 transform">
                View Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">
            About <span className="text-gradient">Me</span>
          </h3>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        I began my journey into data and coding while studying Management Information Systems at the University of Alabama, where my first C# course sparked a deep curiosity for technology. That interest grew into a full-fledged passion during my internship with T-Mobile, where I worked extensively with production data to create dashboards, alert systems, and data pipelines that monitored customer billing activity. It was here that I realized both how much I enjoyed working with data—and how much there was still to learn.
                      </p>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        For my MIS capstone, I served as the technical lead on a data visualization project for a non-profit supporting low-income families in Tuscaloosa. I developed dashboards with geospatial mapping and granular community data to help the organization demonstrate its impact and secure government funding.
                      </p>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Today, I continue to grow as a data professional at T-Mobile, collaborating with seasoned experts, leveraging robust resources, and tackling complex, real-world problems. My featured Alexander Wireless Dashboard is a recreation of one of my most impactful professional projects—an advanced anomaly detection and monitoring system for billing cycles—rebuilt with generated data to protect proprietary information. While I cannot showcase many of my strongest projects due to confidentiality, this example represents the type of high-impact, real-world solutions I deliver.
                      </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Data Analysis</h4>
              <p className="text-gray-400">Expert in statistical analysis and data mining techniques</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Visualization</h4>
              <p className="text-gray-400">Creating compelling visual stories from complex datasets</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Machine Learning</h4>
              <p className="text-gray-400">Building predictive models and AI solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h3>
                      <p className="text-xl text-gray-300 mb-12">
              Interested in collaborating or discussing data science opportunities? I&apos;d love to hear from you.
            </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-electric-purple hover:bg-dark-purple px-8 py-4 rounded-full text-lg font-semibold transition-all glow-effect hover:scale-105 hover:shadow-lg">
              Send Email
            </button>
            <button className="border-2 border-electric-purple text-electric-purple hover:bg-electric-purple hover:text-white hover:scale-105 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform">
              View Resume
            </button>
          </div>
          
                    <div className="flex justify-center space-x-6 mt-12">
            <a href="https://www.linkedin.com/in/dylan-knox/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-purple hover:scale-110 transition-all duration-300 transform">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/daknox" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-purple hover:scale-110 transition-all duration-300 transform">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
 
            <a href="https://www.instagram.com/dylandoesdata/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-purple hover:scale-110 transition-all duration-300 transform">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 DataPortfolio. Crafted with passion for data storytelling.</p>
        </div>
      </footer>
    </main>
  );
}
