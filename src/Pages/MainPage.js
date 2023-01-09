import React from 'react'
import { Link } from 'react-scroll'

// image 
// import mainbg from '../Assets/retrowave.png'

function MainPage() {
  return (
    <div>

        <div className='introtext'>
            <h1 className='mainheadtext'>Swadheenta'23</h1>
            <Link to='event' smooth={true} offset={10} duration={1000} ><h1 className='mainheadsubtext'>A Tech Odyssey</h1></Link>
        </div>
        <div className='mainbgimage'></div>

    </div>

  )
}

export default MainPage