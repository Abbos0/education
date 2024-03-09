import React from 'react'

// image
import home_img from "../assets/back.jpg"

const Home = () => {
  return (
    <div className='relative w-full h-[100vh] parda'>
         <img src={home_img} alt="home_img" className='absolute w-full h-[100vh] top-0 left-0'/> 
        <div className='absolute z-[2] w-full h-[100vh] flex flex-col gap-3 justify-center items-center'>
            <h1 className='text-[25px] md:text-[30px] lg:text-[40px] font-bold text-[white]'>Eng yuqori sifatdagi ta'lim</h1>
            <p className='w-[80%] md:w-[60%] text-center text-[white] text-[14px] md:text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit quod sapiente itaque alias dolorum voluptates dolor excepturi repellat veritatis.</p>
            <div className='flex gap-3'>
                <a href='/' className='capitalize text-[14px] md:text-[16px] px-5 py-2 md:px-7 md:py-3 bg-[#0a2050] text-[white] rounded-lg hover:bg-[#f3f3f3] hover:text-[#0a2050] transition-[1s]'>Learn more</a>
                <a href='/' className='capitalize text-[14px] md:text-[16px] px-5 py-2 md:px-7 md:py-3 bg-[orange] text-[white] rounded-lg hover:bg-[#f3f3f3] hover:text-[#0a2050] transition-[1s]'>visit courses</a>
            </div>
        </div>
    </div>
  )
}

export default Home