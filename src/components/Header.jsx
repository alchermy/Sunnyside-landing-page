import React from 'react'
import Nav from './Nav'
import imgArrow from '/src/assets/img/icon-arrow-down.svg'

function Header() {
  return (
    <header className='h-[100vh] w-full bg-[url("/src/assets/img/mobile/image-header.jpg")] md:bg-[url("/src/assets/img/desktop/image-header.jpg")] bg-cover bg-center text-center' >
        <Nav />
        <h1 className='text-7xl uppercase text-white font-bold mt-[4rem] tracking-widest font-[900]'>We are Creatives</h1>
        <div className='flex justify-center mt-[8rem]'>
            <img src={imgArrow} alt="icon-arrow-down" className='w-fit h-[9rem]'  />
        </div>
        
    </header>
  )
}

export default Header