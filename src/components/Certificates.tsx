import React from "react";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Deep Learning - IIT Ropar",
      organization: "IIT Ropar (NPTEL)",
      description:
        "Comprehensive course covering neural networks, deep learning architectures, and practical implementations.",
      date: "2024",
      type: "Academic Excellence",
      icon: <Award className="text-white" size={28} />,
      gradient: "from-gray-600 to-gray-600",
      bgGradient: "from-white-50 to-blue-150",
      link: "https://drive.google.com/file/d/17utJIPZlgMq4iOPp_m4N77Lm7tSbwp1k/view?usp=drive_link",
    },
    {
      title: "Fundamentals of Deep Learning",
      organization: "NVIDIA",
      description:
        "Industry-focused certification covering GPU-accelerated deep learning and practical AI applications.",
      date: "2024",
      type: "Industry Certification",
      icon: <Award className="text-white" size={28} />,
      gradient: "from-gray-600 to-gray-600",
      bgGradient: "from-white-50 to-indigo-50",
      link: "https://drive.google.com/file/d/1RmoFATuUvyveDyZ6VRnVOGhB9wel0RJy/view?usp=drive_link",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional certifications validating my academic and industry
              exposure to AI/ML and deep learning technologies.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${cert.bgGradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group`}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${cert.gradient}`}
                    >
                      {cert.icon}
                    </div>
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${cert.gradient} text-white text-sm rounded-full font-medium`}
                    >
                      {cert.type}
                    </span>
                  </div>

                  {/* Info */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-blue-500 font-semibold mb-4">
          
                    <span>{cert.organization}</span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} />
                      <span className="font-medium">{cert.date}</span>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
                    >
                      View Certificate <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`h-2 bg-gradient-to-r ${cert.gradient}`}
                ></div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These certifications reflect my commitment to continuous learning
                and strengthening both academic foundations and industry-relevant
                AI/ML skills.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="text-center p-4 bg-gradient-to-br from-white-100 to-white-100 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600 mb-2">
                    IIT Ropar
                  </div>
                  <div className="text-sm text-gray-600">
                    Academic Excellence
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-br from-white-100 to-white-100 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600 mb-2">
                    NVIDIA
                  </div>
                  <div className="text-sm text-gray-600">
                    Industry Recognition
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-br from-white-100 to-white-100 rounded-lg">
                  <div className="text-2xl font-bold text-gray-600 mb-2">
                    Deep Learning
                  </div>
                  <div className="text-sm text-gray-600">
                    Specialized Focus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
