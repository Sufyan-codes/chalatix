import React from 'react'
import { motion } from 'framer-motion'
import {PLANS_CONTENT} from '../constants'

export default function Services() {
    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            }
        })
    }
  return (
      <section id='pricing'>
          <div  className='max-w-6xl mx-auto px-4 mt-20'>
          <motion.div
          className='text-center mb-12 lg:flex lg:justify-between '
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{duration:0.6,ease: 'easeOut'}}
              >
                  <div className='flex flex-col gap-2 '>
                  <p className=' text-2xl text-black text-left tracking-tighter'><span className='text-neutral-600'>04 /</span> SERVICES </p>
                  <h2 className='text-3xl lg:text-5xl mt-2 tracking-tighter
              text-black text-left
              bg-clip-text '>
                      Provising Visual <br /> <span className='font-semibold'>Services</span>
                  </h2>
                  </div>
                  <p className='mt-12 text-black text-left text-xl'>We focus on turnin <span className='font-semibold'>idea</span> into useful <br />
                      and <span className='font-semibold'>amazing</span> Products. Love to see <br />
                  our services is mathes to clients.</p>
              </motion.div>
              
              <motion.div
                  initial='hidden'
                  whileInView='visible'
                  variants={
                      {
                          visible: {
                              transition: {
                                  straggerChildren: 0.5,
                              }
                          }
                      }
                  }
              className='grid grid-cols-1 md:grid-cols-3 gap-8'
              >
                  {PLANS_CONTENT.plans.map((plan, index) => (
                      <motion.div key={index}
                          custom={index}
                          variants={childVariants}
                          className={`p-8 rounded-xl shadow-lg  bg-neutral-950 ${
                              plan.popular ? "border border-purple-700" : "border border-purple-800"
                          }`}
                      >
                          {
                              plan.popular && (
                                  <div className='text-center mb-4'>
                                      <span className='bg-purple-700 text-white text-xs py-1 px-3 rounded-full
                                      uppercase'>{ PLANS_CONTENT.popularBadge }</span>
                                  </div>
                              )
                          }
                          <h3 className='text-lg lg:text-xl mb-4 tracking-tighter uppercase'>
                              {plan.name}
                          </h3>
                          <p className='text-neutral-400 mb-6'>
                              {plan.description}
                          </p>
                          
                          <ul className='mb-8 space-y-2 text-neutral-400'>
                              {plan.features.map((feature, i) => (
                                  <li key={i} className='flex items-center'>
                                      <span className='inline-block w-2 h-2 mr-2 bg-neutral-600 rounded-full'>
                                          
                                      </span>
                                      {feature}
                                  </li>
                              ))}
                          </ul>
                          <button className='w-full py-3 px-4 bg-purple-700 hover:bg-purple-600 rounded-lg'>
                              {PLANS_CONTENT.ctaText}
                          </button>
                      </motion.div>
                  ))}
              </motion.div>
</div>
</section>
  )
}
