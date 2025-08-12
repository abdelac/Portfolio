import React from 'react'
import { SiAngularjs } from 'react-icons/si'
import { motion } from "framer-motion"

const iconvariants = (duration) => ({
  initial: { y: -1 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Certificates = () => {
  return (
    <div className='border-b border-neutral-800 pb-12'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 1 }}
        className='my-10 text-center text-2xl'
      >
        Certificates
      </motion.h2>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconvariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-2 border-neutral-800 p-3"
        >
          <SiAngularjs className='text-5xl text-red-600' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Certificates
