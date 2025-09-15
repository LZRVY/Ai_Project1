import React from 'react';
import { Mail, MapPin, Github, Linkedin, Code, Cloud, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <img
                src="https://share.google/images/fKfMeKrIlXZshdP95"
                alt="Vyom Raj"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto shadow-2xl border-4 border-white object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face';
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vyom Raj
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Full Stack Developer & AWS Enthusiast
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <Code className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Python</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <Database className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">JavaScript</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <Cloud className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium text-gray-700">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-12 shadow-lg">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              Proficient in <span className="font-semibold text-blue-600">Python</span>, <span className="font-semibold text-yellow-600">JavaScript</span>, and <span className="font-semibold text-orange-600">AWS</span>, I have led the development of a key feature that improved user retention by <span className="font-bold text-green-600">25%</span>. My focus is on writing clean, efficient code and collaborating with cross-functional teams to deliver high-quality products on time.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Backend Development</h3>
              <p className="text-gray-600 text-center">Expert in Python for building scalable server-side applications and APIs</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Frontend Development</h3>
              <p className="text-gray-600 text-center">Proficient in JavaScript for creating interactive user experiences</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 text-center">Experienced with AWS services for deploying and scaling applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-white text-lg mb-8">
              Ready to collaborate on your next project? I'd love to hear from you!
            </p>
            
            <a
              href="mailto:rajpromptwebsite@Ai.com"
              className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>rajpromptwebsite@Ai.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Vyom Raj. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;