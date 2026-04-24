import React from 'react';
import { ExternalLink, Github, Eye, Calendar, Zap, User, ShoppingCart, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
      {
    title: "MindScope - Mental Wellness Web App",
    subtitle: "Track. Reflect. Grow.",
    description:
      "A self-care web platform that enables users to track moods, journal thoughts, build habits, and manage goals through a unified and intuitive dashboard.",
    features: [
      "JWT-based Authentication",
      "Mood Tracking",
      "Journaling System",
      "Habit Builder",
      "Goal Setting"
    ],
    tech: ["MERN Stack", "TypeScript", "Tailwind CSS", "JWT"],
    deployment: "Frontend on Vercel, backend runs locally",
    github: "https://github.com/mahendra8432/mindscope",
    icon: <Eye className="text-pink-700" size={26} color='white' />,
    gradient: "from-gray-500 to-gray-500",
    bgGradient: "from-grey-50 to-white"
  },
      {
      title: "BlinkBreak – Focus Timer",
      subtitle: "Stay focused, take intentional breaks.",
      description:
        "A Pomodoro-style productivity timer with customizable focus and break durations, session management, sound alerts, and a distinctive square progress animation.",
      features: [
        "Customizable Timers",
        "Session Management",
        "Alarm Alerts",
        "Square Progress Animation",
        "Minimal UI"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS"],
      deployment: "Optimized for all devices",
      github: "https://github.com/mahendra8432/blinkbreak",
      icon: <Zap className="text-blue-700" size={26} color='white'/>,
      gradient: "from-gray-500 to-gray-500",
      bgGradient: "from-gray-50 to-white"
    },
          {
      title: "Personal Portfolio Website",
      subtitle: "A professional space to showcase my work and skills.",
      description:
        "A responsive and performance-focused personal website designed to present projects, technical skills, and professional journey with clarity and clean user experience.",
      features: [
        "Structured Project Showcase",
        "Responsive Design",
        "Contact Form Integration",
        "Custom Error Pages",
        "Clean Transitions"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Bolt"],
      deployment: "Hosted on Vercel",
      github: "https://github.com/mahendra8432/portfolio",
      icon: <User className="text-gray-700" size={26} color='white' />,
      gradient: "from-gray-500 to-gray-500",
      bgGradient: "from-gray-50 to-white"
    },
        {
      title: "Shopping Cart Phone & Bottle Holder",
      subtitle: "A practical retail utility product.",
      description:
        "A physical product designed to securely hold a mobile phone and beverage bottle on shopping carts, aimed at improving convenience and hands-free usability during shopping.",
      features: [
        "Officially Registered Design",
        "Indian Designs Act Compliance",
        "Retail-Oriented Design",
        "Practical Product Innovation"
      ],
      tech: ["Product Design", "Prototyping", "Patent Research"],
      deployment: "Officially registered under the Indian Designs Act",
      github: "https://drive.google.com/file/d/1zP-O5sn6n6lmcregMrH0EobWzsQqSfuZ/view?usp=sharing",
      icon: <ShoppingCart className="text-gray-700" size={26} color='white'/>,
      gradient: "from-gray-500 to-gray-500",
      bgGradient: "from-gray-50 to-white",
      isPhysicalProduct: true
    }

    
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my work spanning web applications, productivity tools, and innovative product design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${project.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group`}
              >
                {/* Project Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                      {project.icon}
                    </div>
                    <div className="flex gap-3">
                      {!project.isPhysicalProduct && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                        >
                          <Github size={18} className="text-gray-700" />
                        </a>
                      )}
                      {project.isPhysicalProduct && (
                        <div className="p-2 bg-white rounded-lg shadow-md">
                          <Calendar size={18} className="text-gray-700" />
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4 italic">{project.subtitle}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-white bg-opacity-70 text-gray-700 text-sm rounded-full border"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm rounded-full font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deployment Info */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <Globe size={16} />
                    <span>{project.deployment}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {!project.isPhysicalProduct ? (
                      <>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      </>
                    ) : (
                      <div className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold cursor-default`}>
                        <Calendar size={18} />
                        Patent Registered
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h3>
              <p className="text-gray-600 mb-6">
                These are just highlights of my work. Check out my GitHub for more projects and contributions.
              </p>
              <a 
                href="https://github.com/mahendra8432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Github size={20} />
                Visit My GitHub
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;