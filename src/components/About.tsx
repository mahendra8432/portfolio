import React from 'react';
import { User, Target, Heart, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know me better - my journey, passions, and what drives me as a developer
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - About Text */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue- rounded-lg">
                  <User className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Who I Am</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I’m a final-year Computer Science (AI/ML) student at RCOEM, Nagpur, with a strong foundation in full-stack development and hands-on experience in applied AI/ML. I enjoy building practical software solutions that solve real-world problems.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-10 rounded-lg">
                  <Target className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">My Goals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To grow as a versatile software developer capable of working across the full stack, while applying AI/ML to build intelligent, scalable, and user-centric applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-10 rounded-lg">
                  <Heart className="text-pink-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What I Love</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I enjoy building purpose-driven software products, as reflected in my MindScope project, and I’m particularly interested in thoughtful product design and creating applications that improve real-world user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Highlights */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-8 rounded-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <Code className="text-gray-700" size={28} />
                      <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
                    </div>
                
                                  <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                          <span className="font-medium text-gray-700">Projects Built</span>
                          <span className="text-xl font-semibold text-gray-900">5+</span>
                        </div>
                            <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                  <span className="font-medium text-gray-700">Technologies</span>
                  <span className="text-xl font-semibold text-gray-900">10+</span>
                </div>

                <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                  <span className="font-medium text-gray-700">Certifications</span>
                  <span className="text-xl font-semibold text-gray-900">2</span>
                </div>

                <div className="flex justify-between items-center p-3 border border-gray-200 rounded-md">
                  <span className="font-medium text-gray-700">Years Learning</span>
                  <span className="text-xl font-semibold text-gray-900">3+</span>
                </div>
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-00 mb-2"> Fun Fact</h4>
                <p className="text-gray-700">
                  I designed and officially registered a real-world product - a Shopping Cart Phone & Bottle Holder 
                  under the Indian Designs Act! Innovation isn't just digital for me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;