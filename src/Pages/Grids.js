import React from 'react'

function Grids() {

    let menuItems = [];
    for (var i = 0; i < 80; i++) {
        menuItems.push(<span className='onegrid'></span>);
    }

  return (
    <>
    <div className='emptygrid'></div>
    <div className='maincontainergrid'> 
    {menuItems} 
    </div>
    <span className='emptygrid'></span>
   </>
  ) 
}

export default Grids