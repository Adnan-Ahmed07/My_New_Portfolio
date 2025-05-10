import React from 'react';
import { Code, Layout, Globe, Database, Server, Shield } from 'lucide-react';

export const skillsData = {
  technical: [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 80 },
    { name: 'MongoDB', level: 85 },
    { name: 'Express.js', level: 82 },
    { name: 'Node.js', level: 75 },
    { name: 'GraphQL', level: 70 },
  ],
  tools: [
    { name: 'React', icon: <Code size={24} /> },
    { name: 'TypeScript', icon: <Code size={24} /> },
    { name: 'Next.js', icon: <Server size={24} /> },
    { name: 'MongoDB', icon: <Database size={24} /> },
    { name: 'Express.js', icon: <Server size={24} /> },
    { name: 'Node.js', icon: <Server size={24} /> },
    { name: 'Git & GitHub', icon: <Code size={24} /> },
    { name: 'REST APIs', icon: <Globe size={24} /> },
    { name: 'TailwindCSS', icon: <Layout size={24} /> },
  ],
  professional: [
    { 
      name: 'Problem Solving', 
      icon: <Code size={24} />,
      description: 'Analyze complex issues and develop creative solutions' 
    },
    { 
      name: 'Full Stack Development', 
      icon: <Server size={24} />,
      description: 'Build complete web applications with MERN stack' 
    },
    { 
      name: 'Performance Optimization', 
      icon: <Server size={24} />,
      description: 'Improve speed and efficiency of web applications' 
    },
    { 
      name: 'Security Best Practices', 
      icon: <Shield size={24} />,
      description: 'Implement secure coding patterns and authentication' 
    },
  ],
};