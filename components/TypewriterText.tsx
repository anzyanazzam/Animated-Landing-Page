'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = () => {
  const texts = [
    "Bersama Menyuarakan Aspirasi, Demi Kelas yang Lebih Baik.",
    "Dari Pelajar, Oleh Pelajar, Untuk Pelajar."
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (isTyping) {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 80); // Kecepatan mengetik
        
        return () => clearTimeout(timeout);
      } else {
        // Selesai mengetik, tunggu sebelum menghapus
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000); // Delay sebelum menghapus (3 detik)
        
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 40); // Kecepatan menghapus
        
        return () => clearTimeout(timeout);
      } else {
        // Selesai menghapus, pindah ke teks berikutnya
        const timeout = setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIsTyping(true);
        }, 500); // Delay sebelum mulai mengetik teks baru
        
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isTyping, currentTextIndex, texts]);

  return (
    <div className="min-h-[120px] md:min-h-[80px] flex items-center justify-center px-4">
      <motion.h1 
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {displayedText}
        <motion.span
          className="text-red-500"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          |
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default TypewriterText;