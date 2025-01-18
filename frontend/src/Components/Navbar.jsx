import React from 'react'
import './Navbar.css'
import line from '../assets/Line.svg'
import logo from '../assets/logo.jpeg'

function Navbar() {
  return (
    <div className='Navbar'>
            <div className='Logo'> 
                HeaLLM
            </div>
            
                <ul>
                    <li>HOME</li>
                    <li>COMMUNITY</li>
                    <li>MARKETPLACE</li>
                    <li>ABOUT</li>
                </ul>
            
            <img src={line}></img>
    </div>
  )
}

export default Navbar