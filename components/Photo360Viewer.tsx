'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Photo360Viewer = () => {
  const photos360 = [
    { id: 1, src: '/images/photo3601.jpg', title: 'Photo 1' },
    { id: 2, src: '/images/photo3602.jpg', title: 'Photo 2' },
    { id: 3, src: '/images/photo3603.jpg', title: 'Photo 3' },
    { id: 4, src: '/images/photo3604.jpg', title: 'Photo 4' },
    { id: 5, src: '/images/photo3605.jpg', title: 'Photo 5' },
    { id: 6, src: '/images/photo3606.jpg', title: 'Photo 6' },
    { id: 7, src: '/images/photo3607.jpg', title: 'Photo 7' },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [startX, setStartX] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotation(prev => prev + deltaX * 0.5);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setRotation(prev => prev + deltaX * 0.5);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, 50);

    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 md:py-24 bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12"
        >
          Foto 360° Interaktif
        </motion.h2>
        
        <motion.h3
          key={selectedPhoto}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-center text-gray-300 mb-8"
        >
          {photos360[selectedPhoto].title}
        </motion.h3>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div
            ref={imageRef}
            className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-800 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="absolute inset-0 bg-gray-700 flex items-center justify-center"
              style={{
                transform: `rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div className="text-white text-center">
                <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🌐</span>
                </div>
                <p className="text-lg">Foto 360° {selectedPhoto + 1}</p>
                <p className="text-sm text-gray-400 mt-2">Drag untuk memutar / Ganti dengan foto 360° asli</p>
              </div>
            </motion.div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              {isDragging ? 'Memutar...' : 'Drag untuk memutar 360°'}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
          {photos360.map((photo, index) => (
            <motion.button
              key={photo.id}
              onClick={() => {
                setSelectedPhoto(index);
                setRotation(0);
              }}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                index === selectedPhoto
                  ? 'ring-4 ring-red-500 scale-105'
                  : 'ring-2 ring-gray-600 hover:ring-gray-400 hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-8 h-8 bg-gray-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-sm">🌐</span>
                  </div>
                  <p className="text-xs">{photo.title}</p>
                </div>
              </div>
              
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                360°
              </div>
            </motion.button>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm md:text-base">
            Klik pada foto untuk memilih, lalu drag pada foto besar untuk melihat sudut 360°
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Photo360Viewer;