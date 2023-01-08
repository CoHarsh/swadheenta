import React from 'react'

// image
import gridbgcol1 from '../Assets/grids.png'
import eventhands from '../Assets/eventhands.png'
import { Link } from 'react-scroll'

import { useEffect } from 'react'
function Events() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);


  return (
    <>
    <div className='eventmainpage' id='event'>


        <img src={gridbgcol1} alt="gridbgevent" className="gridbgevent" />

        <img src={eventhands} alt="handsgettingwebsite" className='handsbgevnet' />

        <Link to='aboutusde' duration={1000} offset={50} smooth={true} > <h1 className='eventheading' >EVENTS</h1> </Link>


    </div>

    <div 
          className="apply-button" 
          data-hackathon-slug="YOUR-HACKATHON-SLUG" 
          data-button-theme="dark"
        ></div>
        </>
  )
}

export default Events