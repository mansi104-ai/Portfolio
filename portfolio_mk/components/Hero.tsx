// import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='-top-30 -left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='-top-28 -left-80  h-[80vh] w-[50vw]' fill='blue' />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.035] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
           <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
           <div className='flex justify-center relative my-20 z-10 '>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
              <h2 className='uppercase tracking-widest text-xs text-center max-w-80 not-italic text-[#f563ff]'>HI, MY NAME IS </h2>
              
              <TextGenerateEffect 
              className='text-center text-[70px] md:text:3xl lg:text-5xl'
              words = 'MANSI '/>

              <TextGenerateEffect 
              className='text-center text-[90px] md:text:3xl mb-4 lg:text-5xl'
              words = 'I am an MLOps Engineer'/>

              <p className = 'text-center md:tracking-wider mb-4 text-sm md:text-base lg:text-lg mt-10px'>
                 I like to build mesmerising machine models ranging  from computer vision to AI tools 🌐.My first goal is to challenge myself and second to improve with those challenges.🧑‍💻
              </p>

              <Link href = "https://www.linkedin.com/in/mansi-kalra-b46608252">
                <MagicButton
              title="Check out my LinkedIn" 
              icon={<FaLocationArrow />} 
              position= 'right' />
              </Link>              
            </div>

           </div>
    </div>
  )
}

export default Hero;
