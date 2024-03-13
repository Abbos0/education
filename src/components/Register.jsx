import React, { useEffect, useState } from 'react'
import back_img from "../assets/signup.jpg"
import Form from './Form'


const Register = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setDate(new Date());
      }, 1000);
  
      return () => {
        clearInterval(interval);
       };
      },  
  []);
  return (
    <div className='h-[100vh] relative w-full parda' id='contact'>
        <img src={back_img} alt="back_img"  className='absolute top-0 left-0 w-full h-[100%]'/>
        <div className='absolute top-0 left-0 w-full flex lg:flex-row flex-col  h-[100vh] justify-center md:gap-0 gap-10 md:justify-around items-center z-10'>
        <div>
            <div className='text-[white] text-center md:text-left'>
                <p className='md:text-[20px] text-[18px]'>Get 100 Online Courses for free</p>
                <h2 className='capitalize text-[30px] md:text-[40px] font-[900]'>Register to Get it</h2>
                <div className='flex justify-center gap-5 mt-[40px]'>
                    <p className='p-3 md:p-5 text-[white]  backdrop-blur text-center text-[15px] md:text-[20px] rounded-[10px]'>
                        <span>{date.getDate()}</span>
                        <p>Days</p>
                    </p>
                    <p className='p-3 md:p-5 text-[white] backdrop-blur text-center text-[15px] md:text-[20px] rounded-[10px]'>
                        <span>{String(date.getHours()).padStart(2, '0')}</span>
                        <p>Hours</p>
                    </p>
                    <p className='p-3 md:p-5 text-[white] backdrop-blur text-center text-[15px] md:text-[20px] rounded-[10px]'>
                        <span>{String(date.getMinutes()).padStart(2, '0')}</span>
                        <p>Mins</p>
                    </p>
                    <p className='p-3 md:p-5 text-[white] backdrop-blur text-center text-[15px] md:text-[20px] rounded-[10px]'>
                        <span>{String(date.getSeconds()).padStart(2, '0')}</span>
                        <p>Secs</p>
                    </p>
                </div>
            </div>
            <div></div>
        </div>
        <div>
            <Form/>
        </div>
        </div>
       
    </div>
  )
}

export default Register