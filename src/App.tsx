import React from 'react';
import { Mail, MapPin, Github, Linkedin, Code, Cloud, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Header Section with Name and Email */}
      <header className="bg-gray-800/50 backdrop-blur-sm shadow-lg border-b border-gray-700/50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans text-white mb-4 animate-slide-up">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Vyom Raj
              </span>
            </h1>
            <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="mailto:rajpromptwebsite@Ai.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 font-semibold font-sans px-6 py-3 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:shadow-xl group transform hover:scale-105"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>rajpromptwebsite@Ai.com</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Two Column Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-left">
            <div className="relative">
              <div className="relative inline-block">
                <img
                  src="https://share.google/images/fKfMeKrIlXZshdP95"
                  alt="Vyom Raj"
                  className="w-80 h-80 sm:w-96 sm:h-96 rounded-2xl shadow-2xl border-4 border-gray-700 object-cover hover:border-cyan-400/50 transition-all duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face';
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating skill badges around photo */}
              <div className="absolute -top-4 -right-4 bg-gray-800 border border-gray-600 rounded-full p-3 shadow-lg animate-float">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-gray-600 rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Cloud className="w-6 h-6 text-blue-400" />
              </div>
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-800 border border-gray-600 rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <Database className="w-6 h-6 text-cyan-300" />
              </div>
            </div>
          </div>

          {/* Right Column - Bio and Skills */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white mb-6">
                Full Stack Developer & AWS Enthusiast
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-8"></div>
              
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300">
                <p className="text-lg text-gray-300 leading-relaxed font-serif">
                  Proficient in <span className="font-semibold text-cyan-400">Python</span>, <span className="font-semibold text-blue-400">JavaScript</span>, and <span className="font-semibold text-cyan-300">AWS</span>, I have led the development of a key feature that improved user retention by <span className="font-bold text-green-400">25%</span>. My focus is on writing clean, efficient code and collaborating with cross-functional teams to deliver high-quality products on time.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-bold font-sans text-white mb-6">Technical Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/30 group animate-scale-in" style={{ animationDelay: '0.6s' }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-gray-900" />
                  </div>
                  <h4 className="font-semibold font-sans text-white mb-2">Python</h4>
                  <p className="text-sm text-gray-400 font-serif">Backend Development</p>
                </div>
                
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50 hover:border-blue-400/30 group animate-scale-in" style={{ animationDelay: '0.7s' }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold font-sans text-white mb-2">JavaScript</h4>
                  <p className="text-sm text-gray-400 font-serif">Frontend Development</p>
                </div>
                
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 border border-gray-700/50 hover:border-cyan-300/30 group animate-scale-in" style={{ animationDelay: '0.8s' }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-6 h-6 text-gray-900" />
                  </div>
                  <h4 className="font-semibold font-sans text-white mb-2">AWS</h4>
                  <p className="text-sm text-gray-400 font-serif">Cloud Infrastructure</p>
                </div>
              </div>
            </div>

            {/* My Interests */}
            <div className="animate-slide-up" style={{ animationDelay: '0.9s' }}>
              <h3 className="text-2xl font-bold font-sans text-white mb-6">My Interests</h3>
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-700/50 hover:border-cyan-400/20 transition-all duration-300">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300 font-serif animate-slide-in-right" style={{ animationDelay: '1s' }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg">Reading about AI and machine learning</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 font-serif animate-slide-in-right" style={{ animationDelay: '1.1s' }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg">Learning new programming languages</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 font-serif animate-slide-in-right" style={{ animationDelay: '1.2s' }}>
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg">Hiking</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 animate-scale-in" style={{ animationDelay: '1.3s' }}>
              <h3 className="text-2xl font-bold font-sans text-white mb-4">Let's Collaborate</h3>
              <p className="text-cyan-100 font-serif mb-6">
                Ready to work on your next project? I'd love to discuss how we can create something amazing together.
              </p>
              <a
                href="mailto:rajpromptwebsite@Ai.com"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 font-semibold font-sans px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm py-8 border-t border-gray-700/50 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 font-serif">
            © 2025 Vyom Raj. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;