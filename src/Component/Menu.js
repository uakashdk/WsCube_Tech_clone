import React from 'react'
import Single from '../asset/single.png';
import Double from '../asset/double.png';
import Triple from '../asset/triple.png';
const Menu = () => {
  return (
    <div className=' max-w-[1240px] mx-auto py-[100px] px-2'>
      <div className=" md:grid grid-cols-3 gap-5">
         <div className=' shadow-2xl h-[500px] my-4 hover:scale-105 duration-500'>
            <img src={Single} alt="Single"  className=' h-[100px] w-[100px] text-center mx-[290px]  md:mx-[150px]' />
            <h1 className=' my-[20px]  md:text-[30px]  md:font-bold text-center'>Web Developement</h1>
            <h3 className=' my-[20px]  md:text-[40px]  md:font-bold text-center'>$149</h3>
            <p className='  md:text-[15px] text-center my-[20px]  md:font-bold'>Lorem ipsum dolor sit.</p>
            <p className='  md:text-[15px] text-center my-[20px]  md:font-bold'>Lorem ipsum dolor sit, amet  <br /> adipisicing  elit Expedita.</p>
            <p className='  md:text-[15px] text-center my-[20px]  md:font-bold'>Lorem ipsum dolor sit amet.</p>
            <button className=' w-[30%] bg-[#2699fb] text-black p-3 rounded my-2 mx-[240px] md:mx-[150px]'>Start Trial</button>
         </div>
         <div className=' shadow-2xl h-[500px] my-4 bg-gray-100 hover:scale-105 duration-500'>
            <img src={Double} alt="Double" className=' h-[100px] w-[100px] mx-[290px] md:mx-[150px]'/>
            <h1 className='my-[20px]  md:text-[30px]  md:font-bold text-center'> Digital Marketing</h1>
            <h3 className='my-[20px]  md:text-[40px]  md:font-bold text-center '>$149</h3>
            <p className=' md:text-[15px] text-center my-[20px]  md:font-bold'>Lorem ipsum dolor sit.</p>
            <p className=' md:text-[15px] text-center my-[20px]  md:font-bold'>Lorem ipsum dolor sit, amet <br /> adipisicing elit. Expedita.</p>
            <p className=' md:text-[15px] text-center my-[20px]  md:font-bold'>Lorem ipsum dolor sit amet.</p>
            <button className=' w-[30%] bg-black text-white p-3 rounded my-2 mx-[240px] md:mx-[150px]'>Start Trial</button>
         </div>
         <div className=' shadow-2xl h-[500px] my-4 hover:scale-105 duration-500'>
            <img src={Triple} alt="Triple" className='h-[100px] w-[100px] mx-[290px] md:mx-[150px]' />
            <h1 className='my-[20px]  md:text-[30px]  md:font-bold text-center'>App Developement</h1>
            <h3 className='my-[20px]  md:text-[40px]  md:font-bold text-center'>$149</h3>
            <p className=' md:text-[15px] text-center my-[20px]  md:font-bold'>Lorem ipsum dolor sit.</p>
            <p className=' md:text-[15px] text-center my-[20px]  md:font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita.</p>
            <p className=' md:text-[15px] text-center my-[20px]  md:font-bold'>Lorem ipsum dolor sit amet.</p>
            <button className=' w-[30%] bg-[#2699fb] text-black p-3 rounded my-2 mx-[240px]  md:mx-[150px]'>Start Trial</button>
         </div>
      </div>
    </div>
  )
}

export default Menu
