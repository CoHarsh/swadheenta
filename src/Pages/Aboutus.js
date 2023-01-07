import React from 'react'

// image
import carsunbg from '../Assets/carsunbg.png'

function Aboutus() {
  return (
    <div className='aboutmainpage'>
        <img src={carsunbg} alt='carsunbg' className='carsunbgabout' />
        <h1 className='aboutusheading'>ABOUT US</h1>
    </div>
  )
}

export default Aboutus