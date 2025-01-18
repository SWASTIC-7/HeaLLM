import React from 'react'
import Main from '../Components/Main'
import circle from '../assets/main.gif'
import { client } from "./client";
import { ConnectButton } from "thirdweb/react";

function Hospital() {
  return (
    <div className='hospital'>
        <img src={circle} className='Circle'></img>
        <Main />
        <h1 className='Heading'>Register To Sell Data</h1>
        <div className='Trainer_payment'>
            <input type='text' placeholder='Enter Your Hospital Name'></input>
            <input type='text' placeholder='Enter Your Hospital Registration no.'></input>
            <ConnectButton client={client} />
            {/* <button>Connect Wallet</button> */}
        </div>
    </div>
  )
}

export default Hospital