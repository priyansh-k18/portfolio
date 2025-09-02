import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

function About({isDarkMode}) {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction</h4>
      <h2 className='text-center mb-2 text-5xl font-Ovo'>
        About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
            <p className="mb-10 max-w-2xl font-Ovo">
  I am a passionate Full-Stack Web Developer specializing in building scalable and
  user-friendly applications using modern technologies like 
  <span className="font-semibold"> React, Next.js, TypeScript, and PostgreSQL</span>.  
  Over the years, I have worked on diverse projects ranging from dynamic 
  frontends to robust backend systems, integrating databases and APIs to deliver 
  complete end-to-end solutions.  
  I enjoy solving real-world problems through clean, efficient code and take pride 
  in crafting digital experiences that balance performance, functionality, 
  and design.
</p>

                 <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                     {infoList.map(({icon,iconDark,title,description},index) => (
                      <li className={`border-[0.5px] border-gray-400
                      rounded-xl p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700
                      hover:-translate-y-1 duration-500
                     hover:shadow-lg transition-all duration-300`}
                      key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3'/>
                        <h3 className={`my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
                      </li>
                     ))}
                 </ul>
                 <h4 className={`my-6 font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Tools I use</h4>
                 <ul className='flex items-center gap-3 sm:gap-5'>
                  {toolsData.map((tool,index) => (
                    <li className='flex items-center justify-center
                    w-12 sm:w-14 aspect-square border border-gray-400
                    rounded-lg cursor-pointer  hover:-translate-y-1 duration-500'
                    key={index}>
                      <Image src={tool} alt='Tool' className='w-5
                      sm:w-7'/>
                    </li>
                  ))}
                 </ul>
            </div>
        </div>
    </div>
  )
}

export default About
