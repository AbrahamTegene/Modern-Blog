import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to our Blogs</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-Primary'>Start Your Blog Today and Join a Community of writers and Reeeaders who are Passionate about 
            Sharing Thair Stores and Ideas. We Offer everything You need to get Started,from Gelpful tips and tutorials
        </p>
        <div>
            <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center'>Learn More 
            <FaArrowRight className='mt-1 ml-2' /></Link>
        </div>
        </div>
    </div>
  )
}

export default Banner
