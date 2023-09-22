import React from 'react'
import imgMilk from '../assets/img/desktop/image-gallery-milkbottles.jpg'
import imgOrange from '../assets/img/desktop/image-gallery-orange.jpg'
import imgCone from '../assets/img/desktop/image-gallery-cone.jpg'
import imgSugar from '../assets/img/desktop/image-gallery-sugarcubes.jpg'

function Gallery() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 '>
        <img src={imgMilk} alt="Milk" />
        <img src={imgOrange} alt="Orange" />
        <img src={imgCone} alt="Cone" />
        <img src={imgSugar} alt="Sugar" />
        
    </div>
  )
}

export default Gallery