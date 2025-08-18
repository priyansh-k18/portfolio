import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='Profile Image'
         className='rounded-full w-32'/>
      </div>
      
      <h3 className='flex items-end gap-2 text-xl md:text 2xl mb-3 font-ovo'>
        Hi! I'm Priyansh Keer <Image src={assets.hand_icon} alt='Hand Wave'
         className='w-6'/></h3>
         <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
            Full-Stack Web Developer Based in India.</h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                I am a full‑stack web developer from MP, India, building end‑to‑end
                applications with React, Next.js, Node.js, and MongoDB.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href='#contact'
                className = 'px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white'>
                contact me <Image src={assets.right_arrow_white} alt='Right Arrow' 
                className='w-4'/></a>

                <a href='/Priyansh-resume.pdf' download 
                className = 'px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                my resume <Image src={assets.download_icon} alt='Download Icon'
                className='w-4'/></a>
            </div>
    </div>
  )
}

export default Header
