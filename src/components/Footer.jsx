import React from 'react'
import { FaFacebookSquare , FaInstagram , FaTwitter ,FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-[#90D4C5] text-[#2C7466] flex flex-col items-center justify-center text-center ' >
        <div className='pt-[4rem] pb-[5rem]'>
            <h3 className='text-3xl font-bold font-Barlow '>sunnyside</h3>
            <ul className='flex mt-[2rem] mb-[5rem] text-lg'>
                <li className='hover:text-white mx-[1.5rem]'><a href="#">About</a></li>
                <li className='hover:text-white mx-[1.5rem]'><a href="#">Services</a></li>
                <li className='hover:text-white mx-[1.5rem]'><a href="#">Projects</a></li>
            </ul>
            <ul className='flex  justify-center text-xl'>
                <li className='hover:text-white mx-[1rem]'><a href="#"><FaFacebookSquare /></a></li>
                <li className='hover:text-white mx-[1rem]'><a href="#"><FaInstagram /></a></li>
                <li className='hover:text-white mx-[1rem]'><a href="#"><FaTwitter /></a></li>
                <li className='hover:text-white mx-[1rem]'><a href="#"><FaPinterest /></a></li>
            </ul>
        </div>
        <div className='text-xs text-black'  >
        <p>Challenge by <a className='text-[#3e52a3] font-Barlow' href="https://www.frontendmentor.io/challenges" target="_blank">Frontend Mentor</a>. Coded by <a className='text-[#3e52a3] font-Barlow' href="https://www.frontendmentor.io/profile/alchermy" target="_blank">Thanawat</a>.</p>
        </div>
    </footer>
  )
}

export default Footer