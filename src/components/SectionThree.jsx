import React from 'react'


function SectionThree() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[50rem]'>
        <div className="left flex justify-center items-end bg-[url('/src/assets/img/mobile/image-graphic-design.jpg')] lg:bg-[url('/src/assets/img/desktop/image-graphic-design.jpg')] bg-cover bg-center  text-center pt-[30rem] pb-[4rem] px-[3rem] lg:px-[10rem] xl:px-[15rem] xl:pb-[5rem]">
            <div className='text-[#25564b]'>
                <h3 className='text-3xl font-bold'>Graphic Design</h3>
                <p className='text-lg mt-[2rem]'>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
            </div>
        </div>
        <div className="right flex justify-center items-end bg-[url('/src/assets/img/mobile/image-photography.jpg')] lg:bg-[url('/src/assets/img/desktop/image-photography.jpg')] bg-cover bg-center  text-center pt-[30rem] pb-[4rem] px-[2rem] lg:px-[17rem] lg:px-[10rem] xl:px-[15rem] xl:pb-[5rem]">
            <div className='text-[#19536b]'>
                <h3 className='text-3xl font-bold'>Photography</h3>
                <p className='text-lg mt-[2rem]'>Increase your credibillty by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </div>
    </div>
  )
}

export default SectionThree