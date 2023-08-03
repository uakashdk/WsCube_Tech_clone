import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' bg-[#2699fb] p-4'>
      <div className=" max-w-[1240px] mx-auto  md:flex justify-between py-[50px]">
       <div className=' m-2'>
        <h1 className=' capitalize  text-[20px] md:text-[40px] font-bold text-white'>Want to learn Latest I.T skills?</h1>
        <span className=' text-white'>Sign up  to our newsletter and stay up to date. </span>
       </div>
       <div className=' m-2'>
        <input type="text" className=' rounded mb-2 p-3 mr-2 text-slate-300' placeholder='Email' />
        <button className=' bg-black text-white p-3 rounded'>Notify Me</button>
        <br />
        <p className=' text-white'>we care about the protection of your data. Read our <br /> <a href="#" className=' text-black'> Privacy Policy </a></p>
       </div>
      </div>
    </div>
  )
}

export default NewsLetter

