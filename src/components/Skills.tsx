import React from 'react';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I've worked with a variety of technologies in the web development world.
            Here's a snapshot of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {skillsData.technical.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-medium text-blue-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Professional Skills */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tools & Frameworks
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skillsData.tools.map((skill) => (
                <div 
                  key={skill.name}
                  className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-3 group hover:bg-blue-50 dark:hover:bg-gray-800"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-blue-500 group-hover:text-blue-600 transition-colors">
                    {skill.icon}
                  </div>
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Skills */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Professional Skills
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skillsData.professional.map((skill) => (
              <div 
                key={skill.name}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-3 group hover:bg-blue-50 dark:hover:bg-gray-800"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;