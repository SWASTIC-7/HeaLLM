import React from 'react'
import line from '../assets/Line.svg'
import './Status.css'
import border from '../assets/border.svg'

function Status() {
  return (
    <div className='Status'>
        <img src={line} className='Top'></img>
        <div className='Details'>
            <div className='detail'>
                <h2>Live Status</h2>
                <div className='live'></div>
                {/* <img src={border}></img> */}
            </div>
            <div className='detail'>
                <h2>Number of hospital registered:</h2>
                <h2>Data</h2>
                {/* <img src={border}></img> */}
            </div>
            <div className='detail'>
                <h2>Number of active dataset:</h2>
                <h2>Data</h2>
                {/* <img src={border}></img> */}
            </div>
            <div className='detail'>
                <h2>Number of model trained:</h2>
                <h2>Data</h2>
            </div>
        </div>
        <img src={line} className='Bottom'></img>
    </div>
  )
}

export default Status