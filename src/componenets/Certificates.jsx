import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiSpring, SiRedis, SiDocker, SiJavascript, SiMysql, SiAngular, SiGithubactions, SiLaravel, SiSymfony } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';

import { animate, motion } from "framer-motion"
const iconvariants=(duration)=>({
    inital:{y:-1},animate:{y:[10,-10],transition:{
        duration: duration ,ease:"linear",repeat:Infinity,
        repeatType:"reverse",}
    }

})


const Certificates = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-80}}
        transition={{duration:1.5}}
         className='my-20 text-center text-4xl'>Certificates</motion.h2>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className="flex flex-wrap items-center justify-center gap-4">

            <motion.div 
            variants={iconvariants(3)}
            initial="inital"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAngular   className='text-7xl text-red-600'/>
            </motion.div>

           
        

     
           
          
        </motion.div>


    
    </div>
  )
}

 Certificates
