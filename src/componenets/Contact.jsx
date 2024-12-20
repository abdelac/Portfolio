import React from 'react'
import { CONTACT } from '../constants'
import { animate, motion } from "framer-motion"

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 flex flex-col items-center'>
      
        <motion.h2 
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:0.5}}
          className='mt-20 mb-10 text-center text-4xl'>Contact Us</motion.h2>
          {/*<div className="flex  justify-center ">
            <div className=" tracking-tighter">
                <motion.p 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className='my-4'> {CONTACT.address} </motion.p >
                <motion.p
                  whileInView={{opacity:1,x:0}}
                  initial={{opacity:0,x:100}}
                  transition={{duration:1}} className='my-4'> {CONTACT.phoneNo} </motion.p>
                <a href="" className='border-b'>{CONTACT.email}</a>

            </div>
          </div>*/}
      <div className="bg-gray-800 border border-blue-500 rounded-lg p-10  text-center ">
        <h2 className="text-blue-500 text-2xl mb-4"></h2>
        <p className="text-lg mb-2">Email:abdelraniechkaf@gmail.com</p>
        <p className="text-lg mb-2">Phone: +212-708-066-103</p>
        <p className="text-lg">Address: Casablanca</p>
      </div>
    </div>
    
  )
}

export default Contact