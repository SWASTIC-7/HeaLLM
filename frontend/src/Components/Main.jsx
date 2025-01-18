import React from 'react'
import Nav from './Navbar'
import './Main.css'
import Line_2 from '../assets/Line_2.svg'
import Stat from './Status'

function Main() {
  return (
    <div className='Main'>
        
        <Nav />
        <Stat />
        <img src={Line_2} className='Line_2'></img>
        <img src={Line_2} className='Line_1'></img>
    </div>
  )
}

export default Main