import { motion } from 'framer-motion'
import React from 'react'
import img from '../assets/christian-buehner-DItYlc26zVI-unsplash.jpg'
import img1 from '../assets/automation.jpeg'
import img2 from '../assets/monetize.jpeg'
import img3 from '../assets/optimize.jpeg'
import forward from '../assets/forward_interface_mobile_next_ui_icon.svg'
import "../index.css"

export default function Projects() {
    
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    straggerChildren: 0.2,
                    when: "beforeChildren",
                }
            }
          }
    
    const featureVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }
  
    return (
        <section className='bg-black' id='project'>
            <div className='max-w-7xl mx-auto py-20 text-white'>
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-wrap justify-center gap-20 '>
                    <div className='flex flex-col gap-2'>
                        <img src={img} className='w-[300px] mt-4' alt="" />
                        <h2 className='font-semibold text-2xl'>John Kennedy</h2>
                        <p className='text-neutral-500'>Chalatix Founder</p>
                    </div>

                    <div>
                        <div className='flex flex-col gap-2'>
                            
                        <p className='lg:text-2xl text-xl text-white tracking-tighter'><span className='text-neutral-600'>03 / </span>PROJECTS</p>
                        <h1 className='lg:text-5xl text-3xl text-white tracking-tighter'>"We <span className='font-semibold'>crafted</span> Products <br />
                            that help people to <br />
                            solve <span className='font-semibold'> problem</span>"</h1>
                        </div>
    
                    </div>
                </motion.div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-8 lg:mt-28'>
                    <a href=""><div className='p-8 rounded-xl shadow-lg flex flex-col gap-2 border-purple-700'>
                        <p className='font-semibold tracking-tighter text-lg'>Super Car project</p>
                        <span className='text-neutral-600'>Branding</span>
                        <img src={img1} className='' alt="" />
                    </div></a>
                    <a href=""><div className='p-8 rounded-xl shadow-lg flex flex-col gap-2  border-purple-700'>
                        <p className='font-semibold tracking-tighter text-lg'>Super Car project</p>
                        <span className='text-neutral-600'>Branding</span>
                        <img src={img2} className='' alt="" />
                    </div></a>
                    <a href="">
                    <div className='p-8 rounded-xl shadow-lg flex flex-col gap-2 border-purple-700'>
                        <p className='font-semibold tracking-tighter text-lg'>Super Car project</p>
                        <span className='text-neutral-600'>Branding</span>
                        <img src={img3} className='' alt="" />
                    </div>
                   </a>
                </div>
            </div>
        </section>
  )
}
