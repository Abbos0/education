import React from 'react'
import Title from "../components/Title"
import StarRatings from 'react-star-ratings'

import course_1 from "../assets/c1.jpg"
import course_2 from "../assets/c2.jpg"
import course_3 from "../assets/c3.jpg"
import course_4 from "../assets/c4.jpg"
import course_5 from "../assets/c5.jpg"
import course_6 from "../assets/c6.jpg"

const DYMMY_DATA = [
    {
        id:1,
        title:"Javascript Beginners Course",
        updated:'21/8/21',
        price:'49.99',
        rating:4.5,
        image:course_1,
    },
    {
        id:2,
        title:"HTML & CSS Beginners Course",
        updated:'21/10/22',
        price:'49.99',
        rating:3.5,
        image:course_2,
    },
    {
        id:3,
        title:"Python Beginners Course",
        updated:'22/10/21',
        price:'20.99',
        rating:2,
        image:course_3,
    },
    {
        id:4,
        title:"Web Design Crash Course",
        updated:'21/8/21',
        price:'49.99',
        rating:4.5,
        image:course_4,
    },
    {
        id:5,
        title:"Web Development Crash Course",
        updated:'21/8/21',
        price:'49.99',
        rating:3,
        image:course_5,
    },
    {
        id:6,
        title:"Angular Beginners Course",
        updated:'21/8/21',
        price:'33.99',
        rating:4.5,
        image:course_6,
    },
]

const Courses = () => {
  return (
    <div>
        <Title title='Our popular courses' description='Replenish man have thing gathering lights yielding shall you'/>
        <div className='flex flex-wrap justify-center gap-5 max-w-[1240px] my-16 w-full m-auto'>
            {
                DYMMY_DATA.length === 0 ? "No Courses..." 
                :
                DYMMY_DATA.map((item,key)=>(
              
        <div className='w-[300px] shadow-lg' key={key}>
                {/* card image  */}
                <div><img src={item.image} alt="course_img" className='w-full h-[200px]'/></div>

                {/* card footer */}
                <div className='px-3 py-5 relative'>
                    <div className='flex justify-center items-center text-[white] absolute top-[-40px] right-[20px] rounded-full w-[80px] h-[80px] bg-[#3254bb]'>$49.99</div>
                    <p className='text-[#a5a4a4]'>Updated &nbsp;&nbsp; {item.updated}</p>
                    <h2 className='text-[18px] font-bold text-[#0a2050]'>{item.title}</h2>
                    <div className='flex justify-start gap-2'>
                    <StarRatings

        rating={item.rating}
        starDimension="18px"
        starSpacing="1px"
        starRatedColor='gold'
      />
                        <p className='text-[#a5a4a4]'>({item.rating})</p>
                    </div>
                </div>
        </div>
              
              ))
            }

        </div>
    </div>
  )
}

export default Courses