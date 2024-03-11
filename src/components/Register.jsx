import React from 'react'
import back_img from "../assets/signup.jpg"
import Time from './Time'

  
const Register = () => {
  return (
    <div className='h-[100vh] relative w-full '>
        <img src={back_img} alt="back_img"  className='absolute top-0 left-0 w-full h-[100%]'/>
        <div className='absolute top-0 '>
            <div className="text-[white] font-bold text-[20px] mt-[200px] ml-16">
                <p>Lorem ipsum dolor sit amet.</p>
                <h2 className='capitalize'>Register to Get it</h2>
                <div >
                    <Time/>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Register