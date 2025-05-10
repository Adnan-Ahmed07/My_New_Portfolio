import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'MERN Stack E-Commerce Website',
    description: 'A full-fledged e-commerce platform built with the MERN stack, featuring user authentication, product management, and a seamless shopping experience And have Admin Panel.',
    image: 'https://iili.io/3kkNFls.png',
    technologies: ['React', 'JavaScript', 'TailwindCSS', 'shadcn ui'],
    githubUrl: 'https://github.com/Adnan-Ahmed07/Adnan-Ahmed07-MERN-Stack-Ecommerce',
    liveUrl: 'https://adnanecommerce-website-deploy-1.onrender.com/',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A sleek weather application featuring real-time updates, detailed forecasts, and location-based weather information.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Redux', 'WeatherAPI', 'CSS Modules'],
    githubUrl: 'https://github.com/esteak/weather-app',
    liveUrl: 'https://modern-weather-app.netlify.app',
  },
  {
    id: 3,
    title: 'Ask Here Academy',
    description: 'ASK Here Academy is a web-based LMS where instructors create and sell multimedia courses and students enroll,track progress, and earn certificates',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React.js','JavaScript', 'TailwindCSS', 'Express.js', 'Node.js', 'MongoDB','Shadcn UI'],
    githubUrl: 'https://github.com/Adnan-Ahmed07/Ask_Here_Academy',
    liveUrl: 'https://github.com/Adnan-Ahmed07/Ask_Here_Academy',
  },
  {
    id: 4,
    title: 'AD E-Commerce App',
    description: 'AD E-Commerce App in React Native with Node.js backend,Custom Css,Database mongoDB with Admin panel and user panel and payment gateway.',
    image: 'https://iili.io/3vfwZge.png',
    technologies: ['React Native', 'Node.js', 'TypeScript', 'MongoDB'],
    githubUrl: 'https://github.com/Adnan-Ahmed07/AdnanEcommerce_APP',
    liveUrl: null,
  },
  {
    id: 5,
    title: 'Adnan Food App',
    description: 'A food delivery app that allows users to browse restaurants, view menus, and place orders for delivery or pickup.',
    image: 'https://iili.io/3vqWHOl.png',
    technologies:['React Native','TypeScript'],
    githubUrl: 'https://github.com/Adnan-Ahmed07/Adnan-Food-App',
    liveUrl: null,
  },
  
  {
    id: 6,
    title: 'Recipe Finder',
    description: 'A culinary app that helps users discover recipes based on available ingredients, dietary preferences, and cuisine types.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Firebase', 'Spoonacular API', 'Styled Components'],
    githubUrl: 'https://github.com/esteak/recipe-finder',
    liveUrl: 'https://recipe-finder-app.netlify.app',
  },
];

export default projectsData;