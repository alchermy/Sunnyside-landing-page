import React from 'react'
import imgEmily from '../assets/img/image-emily.jpg'
import imgThomas from '../assets/img/image-thomas.jpg'
import imgJennie from '../assets/img/image-jennie.jpg'


const userData = [
    {
        img: imgEmily,
        content: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were alyways hit.',
        name: 'Emily R.',
        position: 'Marketing Director'
    },
    {
        img:imgThomas ,
        content: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience",
        name: 'Thomas S.',
        position: 'Chief Operating Officer'
    },
    {
        img: imgJennie ,
        content: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name: 'Jennie F.',
        position: 'Business Owner'
    }

]

function Testimonials() {
  return (
    <div className='text-center py-[5rem] px-[3rem] lg:pt-[7rem] lg:px-[5rem] xl:py-[10rem] xl:px-[15rem]'>
        <h3 className='uppercase text-2xl tracking-[.40em] text-[#a7abae]'>Client Testimonials</h3>
        <div className='grid grid-cols-1  lg:grid-cols-3 text-center lg:gap-[5rem] '>
            {userData.map((data , key)=>(
                <div key={data.name} className='pt-[6rem]'>
                    <img src={data.img} alt={data.name} className='inline-block rounded-full w-[100px]'/>
                    <p className='py-[3rem] text-gray-500  px-[2rem]'>{data.content}</p>
                    <h4 className='font-[900] text-[#23303e] font-Fraunces '>{data.name}</h4>
                    <p className='text-gray-500 text-[#a7abae]'>{data.position}</p>
                </div>
            ))}
        </div>
        

    </div>
  )
}

export default Testimonials