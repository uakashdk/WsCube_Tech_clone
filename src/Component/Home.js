import React from 'react'
import Typed from 'react-typed';
const Home = () => {
  return (
    <div className=' bg-[#2699fb] w-full py-[100px]'>
      <div className=' max-w-[1240px] my-[100px] mx-auto text-center font-bold'>
          <div className=''>
            <h1 className=' text-xl md:text-3xl md:p-[24px]'>Learn with us</h1>
          </div>
          <div className=''>
            <h1 className=' text-white text-3xl md:text-[80px] md:p-[24px]'>Grow with us</h1>
          </div>
          <div className=' text-[20px] md:text-[50px] text-white md:p-[24px]'>
            Learn<Typed
                   className=' pl-3'
                    strings={['Web developement','Digital marketing','Ethical hacking']}
                    typeSpeed={100}
                    backSpeed={120}
                    loop={true}
                />
          </div>
          <button className=' bg-black text-white p-3 rounded'>Get Started</button>
      </div>
    </div>
  )
}

export default Home
