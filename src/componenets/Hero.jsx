import React from 'react'
import {HERO_CONTENT} from "../constants"
import portt from "../assets/ffgg.png"
import { motion } from "framer-motion"
const container=(delay)=>({
  hidden:{x:-100,opacity:0},visible:{
    x:0,opacity:1,transition:{duration:0.5,delay:delay}
  }
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start" >
                    <motion.h1  variants={container(0)}
                    initial='hidden' animate='visible'
                    className='pb-16 text-7xl  tracking-tight lg:mt-16
                       lg:text-5xl  font-semibold ' >Hi, It's Abdelghani ECHCHKAF</motion.h1>
                    <motion.span variants={container(0.3)}
                    initial='hidden' animate='visible'
                    className="bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                    <motion.p
                    variants={container(0.8)}
                    initial='hidden' animate='visible'
                    className='my-2 max-w-xl py-6 font-light leading-8 tracking-tighter'>
                      {HERO_CONTENT}
                      
                    </motion.p>
                    <div className="flex gap-5 flex-col sm:flex-row">
                      <motion.a 
                      variants={container(1)}
                      initial='hidden' animate='visible'
                      className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-500 focus:outline-none focus:ring active:text-indigo-500"
                          href="/CV.pdf" target="_blank"
                        >
                          Download CV "Fr"</motion.a>  
                      <motion.a 
                      variants={container(1)}
                      initial='hidden' animate='visible'
                      className="inline-block rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-500 focus:outline-none focus:ring active:text-indigo-500"
                          href="/CV DEVELOPPER ENGN.pdf" target="_blank"
                        >
                          Download CV "Fr"</motion.a>  
                    </div>
                  
                 
                </div>
            </div>
            <div className=" m-auto h-[500px] lg:w-1/2 lg:p-8  ">
              <div className="  h-full flex justify-center ">
                <motion.img initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1}}
                className="w-auto rounded-xl" src={portt} alt="Abdelfettah MOSTAKIR" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
