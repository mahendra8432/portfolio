import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Mahendra Bansode</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Software developer with a strong interest in AI/ML, focused on building practical, real-world solutions. Always learning, always building.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/mahendra8432" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/mahendrabansode" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:msbansode8432@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About Me
                </button>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Certificates
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                <div>
                  <strong>Email:</strong>
                  <br />
                  <a href="mailto:msbansode8432@gmail.com" className="hover:text-blue-400 transition-colors">
                    msbansode8432@gmail.com
                  </a>
                </div>
                <div>
                  <strong>Location:</strong>
                  <br />
                  Nagpur, India
                </div>
                <div>
                  <strong>Status:</strong>
                  <br />
                  <span className="text-green-400">Open for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="text-red-500" size={16} />
              <span>by Mahendra Bansode</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">
                © {new Date().getFullYear()} All rights reserved
              </span>
              <button 
                onClick={scrollToTop}
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;