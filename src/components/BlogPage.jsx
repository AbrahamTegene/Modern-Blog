import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorSelection from './CategorSelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState ([]);
    const [currentpage, setCurrentpage] = useState (1);
    const pagesize = 12 // blogs per page
    const [selectCategory, setSelectCategory] = useState (null);
    const [activeCategory, setActiveCategory] = useState (null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `../../Api/blogsData.json?=${currentpage}&limit=${pagesize}`;

            //filter by category
            if (selectCategory) {
                url += `&category=${selectCategory}`;
            }
            
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs() 
    },  [currentpage, pagesize, selectCategory])

    //page chanage btn
   const handlePageChange = (pageNumber) => {
      setCurrentpage(pageNumber);
   }

   const handleCatagoryChange = (category) => {
      setSelectCategory(category);
      setCurrentpage(1);
      setActiveCategory(category);
   }


  return (
   <div>
     {/* Catagory Section */}
     <div>
      <CategorSelection onselectCategory={handleCatagoryChange} selectCategory={selectCategory} activeCategory={activeCategory}/>
     </div>
    

      {/* BlogCards Section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        {/* Blog card componet */}
         <BlogCards blogs={blogs} currentpage={currentpage} selectCategory={selectCategory} pagesize={pagesize}/>  

       {/* sidebar componet */}
        <div>
          <SideBar/>
        </div>
      </div>

       {/* Pagination Section */}
       <div>
          <Pagination onPageChange={handlePageChange} currentpage={currentpage} blogs={blogs} pagesize={pagesize}/> 
       </div>
   </div>
  )
}

export default BlogPage
