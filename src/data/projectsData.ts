import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for e-commerce platforms with analytics, inventory management, and order processing capabilities.',
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
    title: 'Portfolio Generator',
    description: 'A tool that helps developers create beautiful portfolios with customizable templates and easy content management.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Vercel'],
    githubUrl: 'https://github.com/esteak/portfolio-generator',
    liveUrl: 'https://portfolio-generator-demo.vercel.app',
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description: 'A culinary app that helps users discover recipes based on available ingredients, dietary preferences, and cuisine types.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Firebase', 'Spoonacular API', 'Styled Components'],
    githubUrl: 'https://github.com/esteak/recipe-finder',
    liveUrl: 'https://recipe-finder-app.netlify.app',
  },
  {
    id: 5,
    title: 'Collaborative Whiteboard',
    description: 'A real-time collaborative drawing and brainstorming tool with multi-user support and instant sharing capabilities.',
    image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Vue.js', 'Socket.io', 'Express', 'Canvas API'],
    githubUrl: 'https://github.com/esteak/collaborative-whiteboard',
    liveUrl: 'https://collab-whiteboard.herokuapp.com',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness application for tracking workouts, setting goals, and monitoring progress over time.',
    image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React Native', 'GraphQL', 'Apollo', 'MongoDB'],
    githubUrl: 'https://github.com/esteak/fitness-tracker',
    liveUrl: null,
  },
];

export default projectsData;