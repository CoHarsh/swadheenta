import React from 'react'

// image 
import mainbg from '../Assets/retrowave.png'

function MainPage() {
  return (
    <div>

        <div>
            <h1 className='mainheadtext'>Swadheenta'23</h1>
            <h1 className='mainheadsubtext'>A Tech Odyssey</h1>
            <img src = {mainbg} alt = "mainbg" className='mainbgimage'/>
        </div>



    </div>
  )
}

export default MainPage