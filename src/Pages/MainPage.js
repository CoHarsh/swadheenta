import React from 'react'
import { Link } from 'react-scroll'

// image 
import mainbg from '../Assets/retrowave.png'

function MainPage() {
  return (
    <div>

        <div>
            <h1 className='mainheadtext'>Swadheenta'23</h1>
            <Link to='event' smooth={true} offset={150} duration={1000} ><h1 className='mainheadsubtext'>A Tech Odyssey</h1></Link>
            <img src = {mainbg} alt = "mainbg" className='mainbgimage'/>
        </div>

        {/* Goto events</Link> */}

    </div>
  )
}

export default MainPage