import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Component
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Header />
    <SectionOne /> 
    <SectionTwo /> 
    <SectionThree /> 
    <Testimonials />
    <Gallery />
    <Footer />
    </>
  )
}

export default App
