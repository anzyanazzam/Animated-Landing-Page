import React from 'react'
import Image from 'next/image'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='dark'>
      <footer className='bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-400 text-sm z-20'>
        <hr className="w-full border-none h-px bg-gradient-to-r from-black/0 via-black/20 to-black/0 dark:from-white/0 dark:via-white/25 dark:to-white/0 " />
        <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-24 flex flex-col sm:flex-row gap-10 justify-between'>
          <div>
            <a href="/" className='z-50 flex items-center space-x-2'>
              <Image
                src="/logo2.png"
                alt="Logo Techy"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className='font-bold text-2xl text-white'>MPK STEMA</span>
            </a>
            <p className="leading-relaxed my-6">
              MIT Licensed<br />
              Copyright © 2025 MPK STEMA.
            </p>
            <div className="flex items-center gap-4">
              {/* ... link-icon lainnya seperti GitHub, Discord, Twitter tetap seperti semula ... */}
            </div>
          </div>
          <div className='flex flex-wrap sm:gap-x-12 gap-y-6 sm:mt-0'>
            {/* ... bagian link navigasi lainnya tetap sama ... */}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
