import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full bg-[#2699fb] h-[300px] mx-auto'>
      <footer className='  md:grid grid-cols-4 gap-[40px] mx-auto'>
      <div className=' text-white '>
        <h1 className=' text-3xl text-black  mx-[50px] font-bold my-4'>WsCube Tech</h1>
        <p className=' mx-[40px] my-4'>Lorem ipsum dolor sit amet consectetur,<br />elit. Ab minus commodi dolores voluptatem tempore. Modi</p>
        <ul className=' flex gap-3 mx-[30px]'>
            <li><FaFacebook size={30} className=' gap-2'/></li>
            <li><FaInstagram size={30}/></li>
            <li><FaTwitter size={30}/></li>
            <li><FaGithub size={30}/></li>
        </ul>
        </div>
        <div className=' mx-[90px] my-[40px]'>
            <h2 className=' text-[blue] text-[20px]'>Solutions</h2>
            <ul>
                <li className=' my-2'>Analaytics</li>
                <li className=' my-2'>Marketing</li>
                <li className=' my-2'>Commerce</li>
                <li className=' my-2'>Insight</li>
            </ul>
        </div>
        <div className=' my-[40px]'>
            <h2 className=' text-[blue] text-[20px]'>Support</h2>
            <ul>
                <li className=' my-2'>Pricing</li>
                <li className=' my-2'>Documentation</li>
                <li className=' my-2'>Guides</li>
                <li className=' my-2'>API Status</li>
            </ul>
        </div>
        <div className=' my-[40px]'>
            <h2 className=' text-[blue] text-[20px]'>Company</h2>
            <ul>
                <li className=' my-2'>About</li>
                <li className=' my-2'>Blogs</li>
                <li className=' my-2'>Jobs</li>
                <li className=' my-2'>Press</li>
                <li className=' my-2'>Career</li>
            </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
