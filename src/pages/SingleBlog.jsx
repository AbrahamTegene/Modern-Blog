import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaClock, FaUser } from "react-icons/fa6";
import SideBar from '../components/SideBar';


const SingleBlog = () => {
  const data = useLoaderData();
  const {  title, image, category, author, published_date, reading_time, content } = data[0];

  return (
    <div>
       <div className="py-40 bg-black text-center text-white px-4">
         <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Single Blog page</h2>
      </div>

       {/* Blog details */}
       <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
          <div className='lg:w-3/4 mx-auto'>
            <div>
             <img src={image} alt="" className='w-full mx-auto rounded'/>
            </div>
            
            {/* blog details */}
          <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
          <p className='mb-3 text-gray-600'> <FaUser className='inline-flex items-center mr-2' />{author} | {published_date}</p>
          <p className='mb-3 text-gray-600'> <FaClock className='inline-flex items-center mr-2'/> {reading_time}</p>
          <p className='text-base text-gray-500 mb-6'>{content}</p>


          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorum fugit magnam praesentium quia unde numquam, impedit sunt sint nobis cum soluta tenetur totam earum? Molestiae vitae maiores nulla illum!</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex eum error? Inventore, doloremque corporis molestiae quae adipisci in quas facere aut dolorem, odio unde dolor commodi! Ut, repellendus vero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam expedita fuga dolorum. Ipsum debitis aliquam culpa quo magnam pariatur, quaerat reiciendis quod dolore reprehenderit excepturi. Tempore tenetur officia quibusdam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam expedita fuga dolorum. Ipsum debitis aliquam culpa quo magnam pariatur, quaerat reiciendis quod dolore reprehenderit excepturi. Tempore tenetur officia quibusdam?</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam expedita fuga dolorum. Ipsum debitis aliquam culpa quo magnam pariatur, quaerat reiciendis quod dolore reprehenderit excepturi. Tempore tenetur officia quibusdam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis numquam expedita fuga dolorum. Ipsum debitis aliquam culpa quo magnam pariatur, quaerat reiciendis quod dolore reprehenderit excepturi. Tempore tenetur officia quibusdam?</p>
          </div>

          </div>
          <div className='lg:w-1/2'>
            <SideBar/>
          </div>
      </div> 
    </div>
  );
};

export default SingleBlog;
