import React from 'react'
import Hero from '../asset/laptop.jpg'
const Experts = () => {
  return (
    <div className=' max-w-[1240px] p-2 my-10  mx-auto  md:grid grid-cols-3'>
      <div className=' col-span-1   md:w-[80%] text-center'>
        <img src={Hero} alt=" Laptop"  className=' inline'/>
      </div>
      <div className='   col-span-2 flex flex-col justify-center'>
        <h1 className=' text-[#00df9a] font-bold my-2'>Learn from Experts</h1>
        <p className=' my-2 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores corrupti doloribus reprehenderit ratione porro error. Repudiandae quas recusandae atque quos porro at provident, dolor ad laudantium, animi beatae consequuntur aspernatur.</p>
        <button className=' w-[30%] bg-black text-white p-3 rounded my-2'>Get Started</button>
      </div>
    </div>
  )
}

export default Experts
