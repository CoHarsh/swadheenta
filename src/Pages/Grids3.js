import React from 'react'
import './Grids3.css'

// image fetch
import devfoliowhite from '../Assets/deiw1.png'
import polygonwhite from '../Assets/peiw1.png'
import fileiconlogo from '../Assets/feiw2.png'
function Grids2() {

    let menuItems = [];
    for (var i = 0; i < 50; i++) {
        menuItems.push(<span className='onegrid3'></span>);
    }

  return (
    <>
    <div className='startcontainer3'>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    
        <div className='maincontainergrid3'> 
            {menuItems} 
       
        <div className='sponsortmaincontainer' id="sponsors">
            <h1 className='sponsorstitle'>SPONSORS</h1>    
            <div className='sponsorscontainer' >

                <div className='sponsorscard'>
                    <img src={devfoliowhite} alt="logo" className='sponsorresizelogo' />
                    {/* socials */}
                    <div className='socialinsponsors'>
                    We are pleased to introduce you to our sponsor <a href='https://devfolio.co' target='_blank'>Devfolio</a> who are at the forefront of the hacker movement helping organizers host awesome community hackathons and enabling a thriving developer ecosystem around excellent products.
                    </div>

                </div>

                <div className='sponsorscard'>
                    <img src={polygonwhite} alt="logo" className='sponsorresizelogo' />
                    {/* socials */}
                    <div className='socialinsponsors'>
                    It's our pleasure to introduce you to our sponsor <a href='https://polygon.technology/' target='_blank'>Polygon</a>. Polygon provides scalable & instant Ethereum transactions using sidechains simplifying interactions between users and the decentralized world.
                    </div>

                </div>

                <div className='sponsorscard'>
                    <img src={fileiconlogo} alt="logo" className='sponsorresizelogo' />
                    {/* socials */}
                    <div className='socialinsponsors'>
                    We're pleased to introduce you to our sponsor <a href="https://filecoin.io" target="_blank" >Filecoin</a> , an open-source cloud storage marketplace, protocol, and cryptocurrency.
                    </div>

                </div>

            </div>

            </div>
    </div>
    </div>



   </>
  ) 
}

export default Grids2