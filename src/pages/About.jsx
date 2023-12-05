import React from 'react'
import aboutImg from '../assets/about.png';
import { motion } from "framer-motion"
//varriants
import { fadeIn } from './variants';

const About = () => {
  return (
  <div>
       <div className='py-40 bg-black text-center text-white px-4'>
         <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About us page</h2>
       </div>
   
       <div className='px-4 md:px-14 max-w-s mx-auto my-8 space-y-10' id='about'>

{/* 1st About PART*/}

<div className='flex flex-col md:flex-row justify-between items-center gap-8'>
   <motion.div
   variants={fadeIn("right",0.2)}
   initial='hidden'
   whileInView={'show'}
   viewport={{once:false, amount:0.2}}  className='md:w-1/2'>
      <img src={aboutImg} alt="" />
   </motion.div>
   {/* About paragraph and Button */}
   <motion.div
       variants={fadeIn("up",0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.3}}  
       className='md:w-2/5 '>

       <h2 className='md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal '>We have been improving our product
        <span className='text-secondary '> for many years. </span></h2>
       <p className='text-lg  text-tartiary mb-7'>A good example of a paragraph contains a topic conclusion.
       There are many different kinds of animals that live in Ethiopia.</p>
       <button className=' bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Get Started</button>
   </motion.div>
</div>


</div>

  </div>

  
  )
}

export default About
