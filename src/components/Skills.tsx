import React from 'react';

const Skills = () => {
  const skills = [
    { category: 'Programming', items: ['Python', 'JavaScript', 'C++' , 'C'] },
    { category: 'Web Technologies', items: ['React', 'Node.js', 'HTML/CSS', 'TypeScript'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Linux'] },
    { category: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  ];

  return (
    <section id="skills" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;