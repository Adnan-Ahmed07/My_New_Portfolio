import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'm a passionate front-end developer dedicated to creating exceptional web experiences 
            that combine aesthetic appeal with functional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                With a foundation in web development and a keen eye for design, I've
                crafting responsive, user-friendly websites and applications. My approach combines technical 
                expertise with a creative mindset to solve complex problems and deliver exceptional results.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Briefcase size={20} className="text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Front-End Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Specializing in React, TypeScript, and modern CSS frameworks
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <GraduationCap size={20} className="text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Computer Science
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Bachelor's of computer science and Engineering
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin size={20} className="text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Calendar size={20} className="text-blue-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Experience
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    5+ years of professional development experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              What I Do
            </h3>
            
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Web Development
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 pl-13">
                  Create modern, responsive websites and applications using the latest technologies and best practices.
                </p>
              </div>
              
              <div className="group">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    UI/UX Implementation
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 pl-13">
                  Transform design concepts into pixel-perfect, accessible, and user-friendly interfaces.
                </p>
              </div>
              
              <div className="group">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Performance Optimization
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 pl-13">
                  Enhance website speed and performance through code optimization and modern techniques.
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