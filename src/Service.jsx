import React from 'react'

const Service = () => {
    const services =[
        { id: 1, 
          title:"Refreshing Design",
          descroption:"Our Membership Management Softare provides full automation of membership renewals and payment",
          image:"src/assets/membership.png"} ,
         { id: 2, 
           title:"New Blogs Hosted",
           descroption:"Our membership management software provides full automation of membership renewals and payments",
           image:"src/assets/associations.png"} ,
         { id: 3,
           title:"Content Creation",
           descroption:"Our membership management software provides full automation of membership renewals and payments",
           image:"src/assets/groups.png"},
         { id: 4,
            title:"Highking and Fun",
            descroption:"Our membership management software provides full automation of membership renewals and payments",
            image:"src/assets/groups.png"},
          { id: 5,
              title:"Sky Diving",
              descroption:"Our membership management software provides full automation of membership renewals and payments",
              image:"src/assets/associations.png"},
          { id: 6,
                title:"Socal Service or Charity",
                descroption:"Our membership management software provides full automation of membership renewals and payments",
                image:"src/assets/membership.png"},
    ]
      return (
         <div>
            <div className='py-40 bg-black text-center text-white px-4'>
                 <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Services page</h2>
            </div>
    
              {/*Service cards*/}
    
              <div className='mt-20 md:w-1/2 mx-auto text-center'>
                   <h4 className=' text-center text-2xl text-orange-500'>Our Services</h4>
                    <h1 className='text-6xl text-black font-semibold mb-3'>What We Offer </h1>
                    <p className='text-gray-500 text-semibold text-sm'>There are Many variation of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, harum nam odit beatae unde iure eligendi aliquam magni omnis.</p>
    
                </div>
    
               {/* cards */}
               <div className='mt-20 mb-20  grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
                   {
                    services.map(service => <div key={service.id}
                       className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer
                        hover:-translate-y-5 hover:border-b-4 hover:border-orange-700 transition-all duration-300 flex
                         items-center justify-center h-full'>
                        <div>
                            <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl  rounded-br-3xl' >
                                <img src={service.image} alt="" className='-ml-5'/></div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralDGrey'>{service.descroption}</p>
                        </div>
    
                    </div>)
                   }
               </div>
        </div>
        
      )
}

export default Service
