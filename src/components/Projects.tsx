import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import projectsData from '../data/projectsData';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-20 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some of my featured projects. Each one was crafted with attention to detail,
            focusing on both functionality and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover object-center transition-transform duration-700 ${
                    hoveredProject === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex space-x-3">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-300 transition-colors"
                            aria-label={`View GitHub repo for ${project.title}`}
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-300 transition-colors"
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Adnan-Ahmed07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;