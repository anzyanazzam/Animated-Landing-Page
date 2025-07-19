'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-10 pb-5 flex items-center justify-between font-light text-zinc-300 sticky top-0 backdrop-blur-md z-20'>
      <div className='overflow-hidden'>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <a href="/" className='z-50 flex items-center space-x-2'>
            <Image
              src="/logo.png"
              alt="Logo MPK"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <span className='font-bold text-2xl text-white'>MPK</span>
          </a>
        </motion.div>
      </div>

      <div className='max-md:hidden overflow-hidden'>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className='flex items-center space-x-6'>
          <a href="/"><span>Docs</span></a>
          <a href="/"><span>Blog</span></a>
          <div className='h-8 bg-gradient-to-br from-zinc-600 to-zinc-900 rounded-lg focus:outline-none w-56'>
            <div className='flex items-center gap-2 pr-1 pl-3 bg-gradient-to-br from-zinc-800 to-zinc-950 h-full rounded-[7px]'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current h-4 shrink-0 text-black dark:text-white">
                <path d="M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L510.5 487.9l-22.6 22.6L343.3 366z" />
              </svg>
              <div className='text-left grow font-thin text-neutral-300'>Search Docs...</div>
              <div className='shrink-0 bg-gradient-to-b from-zinc-400 to-zinc-600 rounded'>
                <div className='bg-zinc-700 text-xs text-white px-1 py-0.5 rounded-[3px]'>
                  ⌘K
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <a href="/"><span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="fill-current h-5 text-zinc-700 dark:text-zinc-400">
                <path d="..." />
              </svg>
            </a>
            <a href="/"><span className="sr-only">Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="fill-current h-5 text-zinc-700 dark:text-zinc-400">
                <path d="..." />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      <div className='md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>
    </div>
  )
}

export default Navbar
