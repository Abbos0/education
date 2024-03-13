import React from 'react'

// icons
import { FaFacebookF ,FaInstagram, FaLinkedinIn} from "react-icons/fa";


const DYMMY_DATA = [
    {
        id:1,
        email:false,
        title:"Top Products",
        action:['Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor',]
    },
    {
        id:2,
        email:false,
        title:"Quick Links",
        action:['Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor',]
    },
    {
        id:3,
        email:false,
        title:"Features",
        action:['Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor',]
    },
    {
        id:4,
        email:false,
        title:"Resources",
        action:['Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor','Lorem ipsum dolor',]
    },
    {
        id:5,
        email:true,
        title:"News letter",
        action:['Lorem ipsum dolor dolor dolor']
    },

]
const Footer = () => {
  return (
    <div className='bg-[#0c1a37] py-20'>
        <div className='w-[90%] m-auto flex flex-wrap gap-10 justify-between'>
            {DYMMY_DATA.map(item=>(
            <div key={item.id} className='text-[white] flex justify-start items-start flex-col gap-5'>
                <h1 className='md:text-[20px] text-[16px] font-bold'>{item.title}</h1>
                {item.action.map((act,key)=>(
                    <p  key={key} className='md:text-[18px] text-[14px] text-[#777]'>{act}</p>
                ))}
               {item.email ? 
                <div className='flex justify-center gap-1 items-center'>
                    <input type="email" className='border-none outline-none py-3 px-2 text-[#777] bg-[#0a2050]'placeholder='Your Email Address' />
                    <button className='border-none bg-[orange] py-[8px] px-2 font-bold  text-[#0a2050]'>Subscribe</button>
                </div>  

                :
                " "
            }
            </div>
            ))}
        </div>



        {/* copyright  */}
        <div  className='w-[90%] m-auto flex flex-wrap gap-10 justify-between mt-20 md:text-left text-center'>
            <div className='text-[white] font-bold text-[16px] md:text-[22px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, vero?</div>
            <div className='flex gap-2 justify-center items-center w-full sm:w-auto'>
                        <a href='#' className='border-[1px] border-solid border-[#0a2050] text-[white] bg-[#3e60aa] hover:text-[#3e60aa] hover:bg-[white] text-[14px] md:text-[16px] p-[10px] md:p-3'><FaFacebookF/></a>
                        <a href='#' className='border-[1px] border-solid border-[#0a2050] text-[white] bg-[#3e60aa] hover:text-[#3e60aa] hover:bg-[white] text-[14px] md:text-[16px] p-[10px] md:p-3' ><FaInstagram/></a>
                        <a href="#" className='border-[1px] border-solid border-[#0a2050] text-[white] bg-[#3e60aa] hover:text-[#3e60aa] hover:bg-[white] text-[14px] md:text-[16px] p-[10px] md:p-3'><FaLinkedinIn/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer