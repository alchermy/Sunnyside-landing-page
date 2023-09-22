import React from 'react'
import imgTransform from '../assets/img/desktop/image-transform.jpg'

function SectionOne() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2	'>
        <div className="left flex justify-center items-center p-[4rem]">
            <div className='text-center lg:text-left '>
                <h3 className='text-5xl font-bold text-[#23303e] '>Transform your <br /> brand</h3>
                <p className='text-lg text-gray-500 my-[2rem] w-[28rem] lg:w-[29rem] '>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href="#" className='mt-[2rem] text-[#23303e]  font-bold hover:underline decoration-[#fad400] decoration-4 '>LEARN MORE</a>
            </div>
        </div>
        <div className="right">
            <img className='w-full' src={imgTransform } alt="Transform your brand" />
        </div>
    </div>
  )
}

export default SectionOne