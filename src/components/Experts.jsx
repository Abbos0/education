import React from 'react'
import Title from "./Title"
import expert_1 from "../assets/pro1.webp"
import expert_2 from "../assets/pro2.webp"
import expert_3 from "../assets/pro3.webp"
import expert_4 from "../assets/pro4.webp"

//icons
import { FaFacebookF ,FaInstagram, FaLinkedinIn} from "react-icons/fa";

const DYMMY_DATA = [
    {
        id:1,
        img:expert_1,
        name:"Ema Irnik",
        skill:"Python & Algorithm Expert",
        facebook:'',
        instagram:'',
        linkedIn:''
    },
    {
        id:2,
        img:expert_2,
        name:"Jason",
        skill:"Data Analysis Expert",
        facebook:'',
        instagram:'',
        linkedIn:''
    },
    {
        id:3,
        img:expert_3,
        name:"Maalik",
        skill:"Full Stack Developer",
        facebook:'',
        instagram:'',
        linkedIn:''
    },
    {
        id:4,
        img:expert_4,
        name:"Jennifer",
        skill:"Design Expert",
        facebook:'',
        instagram:'',
        linkedIn:''
    },
]

const Experts = () => {
    
  return (
    <div className='my-10' id='blog'>
        <Title title='Community Experts' description='Replenish man have thing gathering lights yielding shall you'/>
        <div className='flex flex-wrap justify-center items-center gap-5 my-5'>
          {DYMMY_DATA.map(item=>(
            <div key={item.id} className='max-w-[300px] w-full flex flex-col items-center justify-center p-3 py-10 bg-[#fbfbec] shadow-lg'>
                <div>
                    <img src={item.img} alt="Experts" />
                </div>
                <div className='flex flex-col justify-center items-center gap-4 mt-2'>
                    <h1 className='text-[#0a2050] text-[18px] md:text-[20px] font-bold'>{item.name}</h1>
                    <p className='text-[14px] md:text-[18px] '>{item.skill}</p>
                    <div className='flex gap-2'>
                        <a href={item.facebook} className='border-[1px] border-solid border-[#0a2050] text-[#0a2050] hover:text-[white] hover:bg-[#0a2050] text-[14px] md:text-[16px] p-[5px] md:p-2'><FaFacebookF/></a>
                        <a href={item.instagram} className='border-[1px] border-solid border-[#0a2050] text-[#0a2050] hover:text-[white] hover:bg-[#0a2050] text-[14px] md:text-[16px] p-[5px] md:p-2' ><FaInstagram/></a>
                        <a href={item.linkedIn} className='border-[1px] border-solid border-[#0a2050] text-[#0a2050] hover:text-[white] hover:bg-[#0a2050] text-[14px] md:text-[16px] p-[5px] md:p-2'><FaLinkedinIn/></a>
                    </div>
                </div>
            </div>
          ))}
            

        </div>
    </div>
  )
}

export default Experts