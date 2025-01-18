import React from 'react'
import { useNavigate } from 'react-router-dom'  
import './Landing.css'
import circle from '../assets/main.gif'
import line from '../assets/Line.svg'
import line_2 from '../assets/Line_3.svg'

import Main from './Main'
import image from '../assets/image.jpg'
import V1 from '../assets/v1.mp4'
import V2 from '../assets/v3.mp4'
function Landing() {
    const navigate = useNavigate()
    const handleHospital = () => {
        navigate('/hospital')
    }
    const handleTrainer = () => {
        navigate('/trainer')
    }
  return (
    <div className='Landing'>
       
        <img src={circle} alt='circle' className='Circle' />
        <Main />
        <h1 className='Heading'>
            SECURELY Transforming Healthcare Data into Innovation
        </h1>
        <h1 className='Heading_2'>
                    With The <br/>Help of a Phenomenal<br/> Technology - BLOCKCHAIN</h1>
        <div className='R_Hospital'>
            <div className='Blue_Left'>
                <h1>
                    WANT'S TO SELL YOUR DATA SECURELY?
                </h1>

            </div>
            {/* <img src={line_2} className='Border_1'></img> */}
            <div className='Image_Right'>
                {/* <img src={image}></img> */}
                <video src={V1} autoPlay loop muted />
                <div className='R_Hospital_Box'>
                    <h2>
                        Register as Hospital
                    </h2>
                    <img src={line_2}></img>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <button onClick={handleHospital}>Register</button>
                </div>
            </div>
        </div>
        {/* <img src={line}></img> */}
        <div className='R_Trainer'>
            <div className='Image_Left'>
                {/* <img src={image}></img> */}
                <video src={V2} autoPlay loop muted />
                <div className='R_Trainer_Box'>
                    <h2>
                        Register as Trainer
                    </h2>
                    <img src={line_2}></img>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <button onClick={handleTrainer}>Register</button>
                </div>
            </div>
            <div className='Blue_Right'>
                <h1>
                    WANT'S TO BUY DATA SECURELY?
                </h1>
            </div>
        </div>
        <div className='Footer'>
                <div className='Flexer'>
                    <div>
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li>INSTAGRAM</li>
                            <li>LINKEDIN</li>
                            <li>DISCORD</li>
                            <li>SLACK</li>
                        </ul>
                    </div>
                    <div>
                        <h3>CONTACT US</h3>
                        <ul>
                            <li>+91 0000000000</li>
                            <li>heallm@gmail.com</li>
                            <li>VAKASAKI, GHATGOPAR, EAST</li>
                        </ul>
                    </div>
                    <img src={circle}></img>
                </div>
        </div>
    </div>
  )
}

export default Landing