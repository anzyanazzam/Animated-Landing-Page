'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

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

  // Auto-play functionality
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
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
    // Resume auto-play after 10 seconds
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
          {/* Main Slider */}
          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={photos[currentIndex].src}
                  alt={photos[currentIndex].alt}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback untuk gambar yang tidak ditemukan
                    e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="800" height="400" fill="#374151"/>
                        <rect x="350" y="150" width="100" height="100" rx="8" fill="#6B7280"/>
                        <text x="400" y="280" font-family="Arial" font-size="18" fill="#9CA3AF" text-anchor="middle">Dokumentasi ${currentIndex + 1}</text>
                      </svg>
                    `)}`;
                  }}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          
          {/* Dots Indicator */}
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
              />
            ))}
          </div>
          
          {/* Thumbnail Strip (Hidden on mobile) */}
          <div className="hidden md:flex justify-center space-x-2 mt-6 overflow-x-auto">
            {photos.map((photo, index) => (
              <motion.button
                key={photo.id}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? 'ring-2 ring-red-500 scale-105'
                    : 'opacity-70 hover:opacity-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="80" height="64" viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height="64" fill="#374151"/>
                        <rect x="30" y="22" width="20" height="20" rx="2" fill="#6B7280"/>
                      </svg>
                    `)}`;
                  }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PhotoSlider;