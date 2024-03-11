import React from 'react'

const Title = ({title="No Title",description="No Description"}) => {
  return (
    <div className='w-[80%] m-auto text-center text-[#0a2050] my-10 px-2'>
        <h1 className='capitalize text-[25px] sm:text-[30px] md:text-[40px] font-bold'>{title}</h1>
        <p className='text-[14px] md:text-[18px]'>{description}</p>
    </div>
  )
}

export default Title