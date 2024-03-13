import React from 'react'

const Form = () => {
  return (
    <div className='flex  bg-[transparent] w-full justify-center items-center md:px-0 px-5'>
        <form className='bg-[white] flex flex-col  max-w-[400px] md:gap-10 gap-5 p-5 w-full justify-center items-center rounded-[10px]'>
            <h18 className='font-bold md:text-[25px] text-[18px]'>Create Free Account Now!</h18>
            <input type="text" className='outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px] ' placeholder='Name'/>
            <input type="email" className='outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px] ' placeholder='Email Address'/>
            <input type="tel" className='outline-none border-[2px] border-solid border-[#8137a0] md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[350px] md:text-[16px] text-[14px] ' placeholder='Phone Number'/>
            <input type="submit" className='bg-[orange] outline-none border-[2px] border-solid border-[orange] text-[white] cursor-pointer md:px-[5px] px-[2px] md:py-[10px] py-[6px] w-full max-w-[200px] hover:bg-[white] hover:text-[orange] self-start rounded-[4px] font-bold text-[14px] md:text-[18px]' value="Visit Courses" />
        </form>
    </div>
  )
}

export default Form