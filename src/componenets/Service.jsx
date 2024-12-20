import React from 'react'
import { animate, motion } from "framer-motion"
const iconvariants=(duration)=>({
    inital:{y:-1},animate:{y:[10,-10],transition:{
        duration: duration ,ease:"linear",repeat:Infinity,
        repeatType:"reverse",}
    }

})
const Service = () => {
  return (
    <div className='border-b border-neutral-900 pb-12 '>
        <div className='flex flex-col items-center '>
        <motion.h2
        
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}className="my-20 text-sky-500 text-center text-4xl">Service </motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-200}}
        transition={{duration:1}}
        className="grid grid-cols-1 sm:w-5/6  xl:grid-cols-3 xl:min-w-full  md:grid-cols-2 xl:gap-12 md:gap-4 sm:gap-10  xxs:gap-8 xxss:gap-8  ">
            <div className= "  px-6 pt-6 border rounded-xl border-sky-500 ">
                <h3 className='text-[#04e2b7] text-4xl pb-5'>Back-End</h3>
                <p className='pb-5 font-medium text-xl'>We specialize in building robust and scalable server-side solutions that ensure your applications run smoothly and efficiently. Our expertise helps companies manage data effectively and improve performance.


                </p>
                <div className='px-6 pt-4 pb-6 pl-2 font-sm '>
                    <li>API Development
                    </li>
                    <li>Database Management
                    </li>
                    <li>Server-Side Logic
                    </li>
                    <li>Security & Authentication
                    </li>
                </div>
            </div>
            <div className='lg:translate-y-6 '>
                <div className= "  px-6 pt-6 border rounded-xl border-sky-500 ">
                    <h3 className='text-[#04e2b7] text-4xl pb-5 '>Front-End</h3>
                    <p className='pb-5 font-medium text-xl'>We craft visually appealing and user-friendly interfaces that enhance user experience and engagement. Our designs are responsive, intuitive, and optimized for performance.




                    </p>
                    <div className='px-6 pt-4 pb-6 pl-2 font-sm '>
                        <li>UI/UX Design
                        </li>
                        <li>Responsive Web Design
                        </li>
                        <li>Interactive Web Applications
                        </li>
                        <li>Cross-Browser Compatibility
                        </li>
                    </div>
                </div>
            </div>
            
            <div className= "  px-6 pt-6 border rounded-xl border-sky-500 ">
                <h3 className='text-[#04e2b7] text-4xl pb-5'>Other Services
                </h3>
                <p className='pb-5 font-medium text-xl'>
                We offer a range of additional services to support your business needs, from cloud solutions to ongoing maintenance and support.                </p>
                <div className='px-6 pt-4 pb-6 pl-2 font-sm '>
                    <li>Data Analyst</li>
                    <li>PowerBI
                    </li>
                    <li>Talend,XML,Modélisation.

                    </li>

                </div>
            </div>
           
        </motion.div>
        

        </div>
        
        
    </div>
  )
}

export default Service