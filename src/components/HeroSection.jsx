import React from 'react'
import { BRAND_LOGOS, HERO_CONTENT} from "../constants"
import heroImage from "../assets/hero.jpg"
import img from '../assets/forward_interface_mobile_next_ui_icon.svg'
import {motion} from 'framer-motion'

export default function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {opacity:1, transition: {straggerChildren: 0.2}},
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {opacity: 1, y:0 , transition: {duration: 0.6}}
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {opacity: 1, transition: {duration: 0.6}}
  }

  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='pt-28 lg:pt-36'>
      <div className='max-w-7xl  mx-0 lg:px-28 px-5 flex flex-col text-black lg:items-left
      lg:text-left'>
        <motion.h1
          variants={fadeInUp}
          className=' text-4xl lg:text-9xl md:text-5xl   my-4 text-black tracking-tighter'>
          <span className='font-bold'>Chalatix</span>  Agency,
        </motion.h1>

        <div className='lg:flex items-center gap-6'>
        <motion.p
          variants={fadeInUp}
          className='mt-6 text-black lg:ml-28  lg:text-5xl text-2xl  max-w-2xl text-left tracking-tighter'>
          Turning and bringing  <span className='font-bold'>idea </span>  
           into <span className='font-bold'>amazing</span> product through 
          next level visual display.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className='mt-6 space-x-4 px-8 py-5'>
          <a href="#" className='inline-block bg-purple-700 hover:bg-purple-500
            text-white py-12 px-12 text-xl rounded-full font-medium'>
            Get in <br /> Touch
          </a>
          
          </motion.div>
          
        </div>

        <motion.div
          variants={fadeIn}
          className='py-8 '>

          <motion.div
            variants={fadeInUp}
            className='flex flex-wrap justify-center  lg:gap-8 gap-5   lg:max-w-xl'>
            <p className='lg:text-2xl text-neutral-900'><a href="#">Behance.</a></p>
            <p className='lg:text-2xl text-neutral-900'><a href="#">Dribble.</a></p>
            <p className='lg:text-2xl text-neutral-900'><a href="#">Instagram.</a></p>
            
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  )
}
