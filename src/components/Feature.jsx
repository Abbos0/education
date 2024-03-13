import React from 'react'
import Title from './Title'

// icons
import { FaGraduationCap,FaAward } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const DYMMY_DATA=[
    {
        id:1,
        title:'Scholarship Facility',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, distinctio! ',
        icon:<FaGraduationCap/>
    },
    {
        id:2,
        title:'Sell Online Course',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, distinctio! ',
        icon:<GrCertificate/>
    },
    {
        id:3,
        title:'Global Certification',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, distinctio!',
        icon:<FaAward/>
    }
]

const Feature = () => {
  return (
    <div id='about'>
        <Title title='Awesome Feature' description='Replenish man have thing gathering lights yielding shall you'/>
        <div className='flex  flex-wrap justify-center   gap-10 my-16 lg:px-10 md:px-8 sm:px-5 px-3'>
            {
            DYMMY_DATA.length === 0 ? "No Feature"
             : DYMMY_DATA.map((item,key)=>(

            <div className='flex flex-col text-[#0a2050] gap-3 w-full max-w-[300px] lg:max-w-[300px] xl:max-w-[350px] bg-[#f9f9f9] py-3 px-3 xl:px-5 shadow-lg' key={key}>
                <span className=' text-[35px] md:text-[45px]'>{item.icon}</span>
                <h1 className='text-[18px] md:text-[22px] font-bold'>{item.title}</h1>
                <p className='line-clamp-3 text-[14px] md:text-[18px]'>{item.description}</p>
                <p></p>
            </div>

                ))
            }
          
        </div>
    </div>
  )
}

export default Feature