'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoSlider = () => {
  const photos = [
    { id: 1, src: '/images/photo1.jpg', alt: 'Dokumentasi 1' },
    { id: 2, src: '/images/photo2.jpg', alt: 'Dokumentasi 2' },
    { id: 3, src: '/images/photo3.jpg', alt: 'Dokumentasi 3' },
    { id: 4, src: '/images/photo4.jpg', alt: 'Dokumentasi 4' },
    { id: 5, src: '/images/photo5.jpg', alt: 'Dokumentasi 5' },
    { id: 6, src: '/images/photo6.jpg', alt: 'Dokumentasi 6' },
    { id: 7, src: '/images/photo7.jpg', alt: 'Dokumentasi 7' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, photos.length]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12"
        >
          Dokumentasi Organisasi
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gray-700 flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">📷</span>
                  </div>
                  <p className="text-lg">Dokumentasi {currentIndex + 1}</p>
                  <p className="text-sm text-gray-400 mt-2">Ganti dengan foto asli di /public/images/</p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous photo"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Next photo"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-red-500 scale-110'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PhotoSlider;