import React from 'react'
import imgStandout from '../assets/img/desktop/image-stand-out.jpg'

function SectionTwo() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2	'>
        <div className='left order-2 lg:order-1 '>
            <img className='w-full' src={imgStandout} alt="Transform your brand" />
        </div>
        <div className="right order-1 lg:order-2 flex justify-center items-center p-[4rem]">
            <div className='text-center lg:text-left flex flex-col items-center lg:items-start '>
                <h3 className='text-5xl font-bold w-[23rem] lg:w-[31rem]  text-[#23303e] '>Stand out to the right audience</h3>
                <p className='text-lg text-gray-500 my-[2rem] w-[25rem] lg:w-[29rem] '>Using a collaborative formula of designers, researchers, photographers, videographeres, and copywriter, we'll build and extend your brand in digital places. </p>
                <a href="#" className='mt-[2rem] text-[#23303e]  font-bold hover:underline decoration-[#fe7867] decoration-4'>LEARN MORE</a>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo