import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai'

const Navbar = () => {
    const [Toggle,setToggle]=useState(false);
    const Links=[
        {
            id:1,
            Link:'home',
        },
        {
            id:2,
            Link:'company',
        },
        {
            id:3,
            Link:'resource',
        },
        {
            id:4,
            Link:'about',
        },
        {
            id:5,
            Link:'contact',
        },
    ]
  return (
    <div className=' bg-[#2699fb] p-4'>
       <div className=' max-w-[1240px] py-[12px]  mx-auto '>
        <div className=' flex justify-between items-center'>
           <div>
            <h1 className=' text-3xl font-bold'>WsCube Tech</h1>
           </div>
            <ul className=' hidden md:flex  gap-5 text-white'>
                {Links.map(({id,Link})=>{
                    return(
                    <li key={id} className=' px-4 capitalize py-6  cursor-pointer'>{Link}</li>
                    )})}
            </ul>     
            {
                Toggle?<AiOutlineCloseCircle onClick={()=> setToggle(!Toggle)} className=' text-white text-2xl md:hidden block'/>:<AiOutlineMenu onClick={()=>setToggle(!Toggle)} className=' text-white text-2xl md:hidden block'/> 
            }   
              {/* <AiOutlineMenu onClick={()=>setToggle(!Toggle)} className=' text-white text-2xl md:hidden block'/> */}
              {/* <AiOutlineCloseCircle onClick={()=> setToggle(!Toggle)} className=' text-white text-2xl md:hidden block'/> */}
            {/* Mobile responsive */}
           <ul className={` duration-500 md:hidden  text-white fixed bg-black top-[92px] w-full h-screen 
           ${Toggle?' left-0': 'left-[-100%]'}
           `
           }>
                {Links.map(({id,Link})=>{
                    return(
                    <li key={id} className=' px-4 capitalize py-6  cursor-pointer'>{Link}</li>
                    )})}
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Navbar
