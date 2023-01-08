import React from 'react'
import { Link } from 'react-scroll'

// image
import carsunbg from '../Assets/carsunbg.png'

function Aboutus() {
  return (
    <>
    <div className='aboutmainpage' id='aboutusde'>
        <img src={carsunbg} alt='carsunbg' className='carsunbgabout' />
        <h1 className='aboutusheading'>ABOUT US</h1>
    </div>
        <Link to='sponsors' duration={1000} offset={-50} smooth={true} >Go</Link>
        </>
  )
}

export default Aboutus