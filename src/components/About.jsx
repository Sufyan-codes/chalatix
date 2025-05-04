import React from 'react'
import { motion } from 'framer-motion'
import img from "../assets/milad-fakurian-3-QTY22bQGQ-unsplash.jpg"
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"

export default function About() {
  

        const stepVariants = {
            hidden: { opacity: 0, y: 50 },
            visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * 0.2,
                    duration: 0.6,
                    ease: "easeOut"
                }
            })
      }

    return (
    <section id='about' className='bg-black max-h-full h-full mx-auto mt-20'>
          <div className='max-w-6xl mx-auto px-4 py-8'>
    
                
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            }
                        }
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                    
                    <div className='flex flex-col lg:gap-48 gap-8 lg:mt-28 mt-8'>
                    <div className='flex flex-col gap-2 tracking-tighter'>
                        <p className=' lg:text-2xl text-xl text-white tracking-tighter'><span className='text-neutral-600'>02 /</span> ABOUT</p>
                        <p className='lg:text-5xl text-2xl text-white tracking-tighter'>We are <br /><span className='font-semibold'>Creatives.</span></p>
                        </div>
                        
                    </div>
                
                    <div className='flex flex-col gap-8 '>
                        <img src={img} alt="" className='w-[450px] h-[450px]' />
                        <p className=''>
                            <span className='font-semibold text-white'>Creative minded people</span> with a lot of joyfull in visual art that
                            will help you <br /> turning the idea into usefull and beautiful 
                            products. were based in <br /> <span className='font-semibold text-white'>Canada and spain</span>
                        </p>
                        <p className=''>
                            Visual art is our field of experties, we help people to create 
                            good <br /> engagement through <span className='font-semibold text-white'>design and process.</span>
                            We believe in teamwork and <br /> tenacity
                        </p>
                    </div>
              </motion.div>
            </div>

           
            
            <div className="lg:mt-28 mt-8 background lg:h-[300px]">
            <div className='max-w-6xl mx-auto px-4 py-8'>
            <div className='circle space-x-4 px-8 py-5 '>
                <a href="#" className='circles inline-block bg-purple-700 hover:bg-purple-500
                 text-white py-12 px-12 text-xl rounded-full font-medium'>
                 Get in <br /> Touch </a>
                    </div>
                    <h1 className='lg:text-8xl text-3xl mt-4 text-white text-center'>Work . Think . Creative</h1>
          </div>
            </div>


    </section>
  )
}
