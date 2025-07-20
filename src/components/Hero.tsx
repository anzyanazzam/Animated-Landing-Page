'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TypewriterText = ({ texts, className }: { texts: string[], className?: string }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [delayAfterFull, setDelayAfterFull] = useState(0)

  useEffect(() => {
    const fullText = texts[index]
    let timeout: NodeJS.Timeout

    if (!deleting && subIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, subIndex + 1))
        setSubIndex(prev => prev + 1)
      }, 40)
    } else if (!deleting && subIndex === fullText.length) {
      if (delayAfterFull < 100) {
        timeout = setTimeout(() => {
          setDelayAfterFull(prev => prev + 1)
        }, 50)
      } else {
        setDeleting(true)
        setDelayAfterFull(0)
      }
    } else if (deleting && subIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, subIndex - 1))
        setSubIndex(prev => prev - 1)
      }, 30)
    } else if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((index + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, texts, delayAfterFull])

  return (
    <span className={className}>{displayedText}<span className="animate-pulse">|</span></span>
  )
}

type Props = {}

function Hero({}: Props) {
  const wrapper = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
  }

  const list = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.455, 0.03, 0.515, 0.955], delay: 1 } }
  }

  const container = {
    visible: { transition: { staggerChildren: 0.025 } }
  }

  const galleryImages = [
    '/docs1.jpg', '/docs2.jpg', '/docs3.jpg',
    '/docs4.jpg', '/docs5.jpg', '/docs6.jpg', '/docs7.jpg'
  ]

  return (
    <div className='w-full px-4 sm:px-8 lg:px-16 pt-20'>
      <div className='flex flex-col md:flex-row md:gap-x-6 lg:gap-x-0 xl:grid xl:grid-cols-2 mt-4'>
        <div className='shrink-0 md:w-1/2 lg:w-7/12 xl:w-auto'>
          <motion.h1 initial='hidden' animate='visible' variants={container} className='text-3xl lg:text-4xl xl:text-5xl mb-8 font-semibold leading-snug'>
            <TypewriterText
              texts={[
                'Bersama Menyuarakan Aspirasi, Demi Kelas yang Lebih Baik',
                'Dari Pelajar, Oleh Pelajar, Untuk Pelajar'
              ]}
              className='text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block'
            />
          </motion.h1>

          <motion.ul initial='hidden' animate='visible' variants={wrapper} className='text-white space-y-2'>
            {[
              'Mewakili suara siswa secara adil',
              'Menjadi penghubung antara siswa dan siswa',
              'Membentuk lingkungan belajar yang positif',
              'Mendorong kegiatan yang membangun'
            ].map((text, i) => (
              <motion.li key={i} variants={list} className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current h-5 shrink-0 mt-0.5">
                  <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z" />
                </svg>
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1.5 }} className='mt-10 flex flex-col items-center sm:flex-row gap-3'>
            <a href="/" className='inline-flex relative z-10 h-10 rounded-xl p-px shadow-lg bg-gradient-to-b from-white to-zinc-300'>
              <div className='flex items-center gap-1 px-6 font-medium rounded-xl whitespace-nowrap bg-white text-black'>
                <span>Gabung Sekarang</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current h-3.5">
                  <path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Galeri Dokumentasi */}
      <div className="mt-16">
        <h3 className="text-white text-lg font-semibold mb-4">Dokumentasi Kegiatan</h3>
        {/* Tambahkan 'touch-action-pan-x' untuk memastikan gesture geser horizontal ditangani */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-hide touch-action-pan-x">
          <div className="flex gap-4 min-w-max snap-x snap-mandatory">
            {galleryImages.map((src, index) => (
              <div key={index} className="shrink-0 w-[300px] aspect-video bg-zinc-800 rounded-lg overflow-hidden shadow-md transform rotate-[2deg] snap-center">
                <Image src={src} alt={`Dokumentasi ${index + 1}`} width={300} height={200} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
