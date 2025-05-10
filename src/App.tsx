import React, { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const title = document.querySelector('title');
    if (title) {
      title.textContent = 'Esteak Ahmed Adnan | Front-End Developer';
    }
  }, []);

  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
}

export default App;