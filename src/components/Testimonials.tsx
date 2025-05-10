import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-500">What</span> People Say
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Feedback from clients and colleagues I've had the pleasure to work with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-8 left-0 text-blue-500 opacity-20 transform scale-150">
            <Quote size={64} />
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
            <div key={testimonialsData[currentIndex].id} className="space-y-6">
              <p className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300">
                "{testimonialsData[currentIndex].text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonialsData[currentIndex].avatar} 
                    alt={testimonialsData[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonialsData[currentIndex].position}, {testimonialsData[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonialsData.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-blue-500' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-blue-800'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;