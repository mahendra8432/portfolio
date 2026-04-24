import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "AI / ML",
      skills: ["Machine Learning", "Deep Learning"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman"],
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-500">
            Things I work with. Still learning, always building.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;