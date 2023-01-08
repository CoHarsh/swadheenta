import React from 'react'
import './Grids2.css'

function Grids2() {

    let menuItems = [];
    for (var i = 0; i < 77; i++) {
        menuItems.push(<span className='onegrid2'></span>);
    }

  return (
    <>
    <div className='startcontainer'>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </div>
    <div className='maincontainergrid2'> 
        {menuItems} 
    </div>
    <span className='emptygrid21'></span>
   </>
  ) 
}

export default Grids2