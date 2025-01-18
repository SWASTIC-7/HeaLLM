import React from 'react'
import Main from '../Components/Main'
import circle from '../assets/main.gif'
function Uplaod() {
  return (
    <div>
        <img src={circle} className='Circle'></img>
        <Main />
        <h1 className='Heading'>Upload Data</h1>
        <div className='Trainer_payment'>
            <h2 className='Hospital_h2'>Uploaded Data must of of this pdf type</h2>
            <a href="#" download>Download pdf</a>
            <input type='file' placeholder='Upload Data'></input>
            
            
        </div>
        
    </div>
  )
}

export default Uplaod