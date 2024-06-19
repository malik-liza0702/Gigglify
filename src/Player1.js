import React from 'react'

import  './Player.css'
import Sidebar from './Sidebar';
import Body from './Body';
import  Footer from './Footer'

function Player1() {
  return (
    <div className="player1">
        <div className='player__body'>
        

        <Sidebar/>
        <Body/>
        

        </div>
        <Footer/>
        
      
    </div>
  )
}

export default Player1
