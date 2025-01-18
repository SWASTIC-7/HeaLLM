import React from 'react'
import Main from '../Components/Main'
import circle from '../assets/main.gif'
import './Pages.css'

function Trainer() {
  return (
    <div>
        <img src={circle} className='Circle'></img>
        <Main />
        <h1 className='Heading'>Make Payment to get Data</h1>
        <div className='Trainer_payment'>
            <input type='text' placeholder='Enter Your Name'></input>
            <h2>Amount to be paid is: 2eth</h2>
            <button>Pay</button>
        </div>
    </div>
  )
}

export default Trainer