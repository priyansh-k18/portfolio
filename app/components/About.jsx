import React from 'react'
import Image from 'next/image'
import { assets } from '../assests/assets'
function About() {
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
                 <p>I am an exprerienced Frontend Developer with over a decade of professional 
                    experitise in the field.
                    Throughout my career,I have had privilege of collaborating
                     with prestigious organizations,contributing to their
                    success and growth.
                 </p>
            </div>
        </div>
    </div>
  )
}

export default About
