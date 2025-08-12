import { useState } from 'react'
import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import About from './componenets/About'
import Technologies from './componenets/Technologies'
import Experience from './componenets/Experience'
import Projects from './componenets/Projects'
import Contact from './componenets/Contact'
import Service from './componenets/Service'
import Service from './componenets/Certificates'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900' >
      <div className=" fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      </div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <Certificates/>
        <Technologies/>
        <Experience />
        <Projects/>
        <Service/>
        
        
        <Contact/>
      </div>
      
    </div>
  )
}

export default App
