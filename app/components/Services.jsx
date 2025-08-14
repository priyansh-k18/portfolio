import React from 'react'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'

function Services({isDarkMode}) {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 id="services" className='text-center mb-5 text-lg font-Ovo'>
        What I offer
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        My Services
      </h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I am a frontend developer from India, with good experience with multiple projects
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
          {serviceData.map(({icon,title,description,link},index) => (
            <div key={index}
            className={`border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg cursor-pointer 
            ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
            hover:-translate-y-1 duration-500 transition-all duration-300`}>
              <Image src={icon} alt='img' className='w-10'/>
              <h3 className={`text-lg my-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-5`}>
                {description}</p>
              <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                Read more <Image alt = '' src={assets.right_arrow} className='w-4'/>
              </a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Services
