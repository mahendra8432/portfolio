import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, GraduationCap } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm Mahendra Bansode";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Greeting */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {displayText}
            <span className="inline-block w-1 h-8 md:h-12 bg-blue-600 ml-1 animate-pulse"></span>
          </h1>
          
          {/* Role and Career Goal */}
          <h2 className="text-xl md:text-2xl text-yellow-600 font-semibold mb-6">
            Software Developer | AI/ML
          </h2>
          
          {/* Education Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <GraduationCap size={20} />
              <span>B.Tech Computer Science (AIML) •  2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Nagpur, India</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Building scalable web applications and practical AI solutions with a problem solving mindset.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;