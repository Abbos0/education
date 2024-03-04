// import React from 'react'

// const Navbar = () => {
//   return (
//   <div className='containerr h-[100px] w-full text-[#0800ff] flex justify-between items-center bg-[white] px-[10px]'>
//       <div>
//         Abbos
//       </div>
//       <div>
//           <nav>
//               <ul className='flex justify-center  gap-10 text-[20px]'>
//                 <li><a href="">Home</a></li>
//                 <li><a href="">About</a></li>
//                 <li><a href="">Menu</a></li>
//                 <li><a href="">Contact</a></li>
//               </ul>
//           </nav>
//       </div>
//       <div className='hidden'>boss</div>
//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import { HiMiniBars2 } from "react-icons/hi2";
import { MdOutlineCancel } from "react-icons/md";
// import Symbole from "../assets/symbole.png"
// import { Fade, Zoom } from 'react-reveal'

// import Translate from '../utils/Translate';
// import { setLanguage } from '../redux/navbarSlice'

// import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {


    // const language =useSelector(state=> state.Navbar) shu yerdfa e'tiborli bo'ling navbar kickkina
    // console.log(language);

    // const {language} = useSelector(state=> state.navbar)
    // console.log(language);
    // const dispatch = useDispatch()
    const [toggle,setToggle] = useState(false)
  return (
    <nav className='containerr z-10 fixed w-full h-[80px] backdrop-blur bg-[white] flex justify-between items-center'>
      <div className='flex'> 
            <p className='font-bold md:text-[25px] text-[20px]'>Education </p>
            {/* <img src='' alt="Symbole" className='md:w-[35px] w-[25px]' /> */}
      </div>
          <ul className={`flex md:flex-row flex-col gap-6 text-[#6b7688] font-[600] uppercase md:bg-[transparent] md:w-auto md:static bg-[white]  w-[50%] ${toggle ? 'right-0' : 'right-[-100%]'} top-[80px] md:h-auto  absolute transition-[1s] md:p-0 p-10 text-[14px]`}>
                <li><a href="#home" className='links' onClick={()=>setToggle(false)}>Home</a></li>
                <li><a href="#skills" className='links' onClick={()=>setToggle(false)}>Blog</a></li>
                <li><a href="#works" className='links' onClick={()=>setToggle(false)}></a>Course</li>
                <li><a href="#contact" className='links' onClick={()=>setToggle(false)}></a>Contact</li>  
          </ul>
        <div className='flex md:gap-5 gap-2 text-[18px]   md:text-[12px]'>
            {/* <div onClick={()=>dispatch(setLanguage('ru'))} className={`cursor-pointer ${language === 'ru' ? 'text-[blue] ': 'text-[#6b7688] '}`}>RU</div>
            <div onClick={()=>dispatch(setLanguage('en'))} className={`cursor-pointer ${language === 'en' ? 'text-[blue] ': 'text-[#6b7688] '}`}>ENG</div> */}
        </div>

        {/* bars  */}
        <div className='p-1 bg-[#313bac] text-[white] rounded-full md:text-[25px] md:hidden block' onClick={()=>setToggle(!toggle)}>
            {toggle ? <MdOutlineCancel /> : <HiMiniBars2/>} 
        </div>
    </nav>
  )
}

export default Navbar

