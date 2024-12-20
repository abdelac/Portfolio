import React from 'react'
import { PROJECTS } from '../constants'
import { animate, motion } from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-sky-500 text-center text-4xl'>Recent Work</motion.h2>
            {PROJECTS.map((proj,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center' >
                    <motion.div 
                     whileInView={{opacity:1,x:0}}
                     initial={{opacity:0,x:-100}}
                     transition={{duration:1}}
                    className="lg:w-1/4 ">
                        <img   src={proj.image} alt={proj.title} width={200} max-height={150}
                        className='mb-6 rounded w-3/4' />
                    </motion.div>
                        <motion.div
                         whileInView={{opacity:1,x:0}}
                         initial={{opacity:0,x:100}}
                         transition={{duration:1}}
                        className="w-full max-w-xl lg:3/4">
                            <h6 className='mb-2 font-semibold'> {proj.title} </h6>
                            <p className='mb-4 text-neutral-400'> {proj.description} </p>
                            {proj.technologies.map((tech,i,dex)=>(
                            <span key={index} className='mr-2 mt-4 rounded bg-neutral-900
                            px-2 py-1 text-sm font-medium text-sky-600'> {tech} </span>
                          ))}
                        </motion.div>
                </div>

            ))} 

    </div>
  )
}

export default Projects