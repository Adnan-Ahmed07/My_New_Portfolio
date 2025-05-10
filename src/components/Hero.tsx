import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const hasTyped = useRef(false);
  useEffect(() => {
    if (hasTyped.current) return; // ← skip second mount
    hasTyped.current = true;
    const text = "Front-End Developer";
    const element = textRef.current;
    let index = 0;

    if (element) {
      element.textContent = "";

      const typeText = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeText, 100);
        }
      };

      setTimeout(typeText, 500);
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-500">Esteak Ahmed Adnan</span>
            </h1>
            <h2 className="font-medium text-gray-700 dark:text-gray-300 mb-6">
              <span
                ref={textRef}
                className="inline-block text-4xl md:text-5xl"
              ></span>
              <span className="animate-blink ml-1">|</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-8">
              I create responsive and performant web experiences with modern
              technologies. Focusing on clean code and user-centered designs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-delayed">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 p-1 shadow-xl">
              <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full overflow-hidden">
                <img
                  src="/96421546.jpg"
                  alt="Esteak Ahmed Adnan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-blue-500 dark:text-gray-600 dark:hover:text-blue-400 transition-colors animate-bounce"
      >
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
