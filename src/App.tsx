import React from 'react';
import { Mail, MapPin, Github, Linkedin, Code, Cloud, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section with Name and Email */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vyom Raj
              </span>
            </h1>
            <div className="flex justify-center">
              <a
                href="mailto:rajpromptwebsite@Ai.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
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
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative inline-block">
                <img
                  src="https://share.google/images/fKfMeKrIlXZshdP95"
                  alt="Vyom Raj"
                  className="w-80 h-80 sm:w-96 sm:h-96 rounded-2xl shadow-2xl border-4 border-white object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face';
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating skill badges around photo */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Cloud className="w-6 h-6 text-orange-600" />
              </div>
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
                <Database className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          {/* Right Column - Bio and Skills */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Full Stack Developer & AWS Enthusiast
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"></div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Proficient in <span className="font-semibold text-blue-600">Python</span>, <span className="font-semibold text-yellow-600">JavaScript</span>, and <span className="font-semibold text-orange-600">AWS</span>, I have led the development of a key feature that improved user retention by <span className="font-bold text-green-600">25%</span>. My focus is on writing clean, efficient code and collaborating with cross-functional teams to deliver high-quality products on time.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Python</h4>
                  <p className="text-sm text-gray-600">Backend Development</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">JavaScript</h4>
                  <p className="text-sm text-gray-600">Frontend Development</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AWS</h4>
                  <p className="text-sm text-gray-600">Cloud Infrastructure</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Collaborate</h3>
              <p className="text-blue-100 mb-6">
                Ready to work on your next project? I'd love to discuss how we can create something amazing together.
              </p>
              <a
                href="mailto:rajpromptwebsite@Ai.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Vyom Raj. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;