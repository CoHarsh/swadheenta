import React from 'react'
import { Link } from 'react-scroll'

// image
import carsunbg from '../Assets/carsunbg.png'

function Aboutus() {
  return (
    <>
    <div className='aboutmainpage' id='aboutusde'>
        <Link to='sponsors' duration={1000} offset={-50} smooth={true} ><h1 className='aboutusheading'>ABOUT US</h1></Link>
    </div>
        </>
  )
}

export default Aboutus