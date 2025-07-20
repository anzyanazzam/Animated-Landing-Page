'use client'
import React from 'react'
import Image from 'next/image'

type Props = {}

const galleryImages = [
  '/docs1.jpg',
  '/docs2.jpg',
  '/docs3.jpg',
  '/docs4.jpg',
  '/docs5.jpg',
  '/docs6.jpg',
  '/docs7.jpg'
]

function Footer({}: Props) {
  return (
    <div className='dark'>
      <footer className='bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-400 text-sm z-20'>
        <hr className="w-full border-none h-px bg-gradient-to-r from-black/0 via-black/20 to-black/0 dark:from-white/0 dark:via-white/25 dark:to-white/0 " />

        <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-24 flex flex-col gap-16'>

          {/* Galeri Dokumentasi */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Dokumentasi Kegiatan</h3>
            <div className="w-full overflow-x-auto pb-2">
              <div className="flex gap-4 min-w-max touch-pan-x">
                {galleryImages.map((src, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-[300px] aspect-video bg-zinc-800 rounded-lg overflow-hidden shadow-md transform rotate-[2deg]"
                  >
                    <Image
                      src={src}
                      alt={`Dokumentasi ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logo & Info */}
          <div className='flex flex-col sm:flex-row gap-10 justify-between'>
            <div>
              <a href="/" className='z-50 flex items-center space-x-2'>
                <Image
                  src="/logo2.png"
                  alt="Logo Techy"
                  width={32}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
                <span className='font-bold text-2xl text-white'>.</span>
              </a>
              <p className="leading-relaxed my-6">
                MIT Licensed<br />
                Copyright © 2025.
              </p>
            </div>

            {/* Navigasi */}
            <div className='flex flex-wrap sm:gap-x-12 gap-y-6 sm:mt-0'>
              {/* Link navigasi bisa ditambahkan di sini */}
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
