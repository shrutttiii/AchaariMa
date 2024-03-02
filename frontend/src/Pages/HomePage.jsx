import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import "./HomePage.css";
import bgimg from "../Components/Assets/bgimg.jpg";
export const HomePage = () => {
  return (
    <div>
        <Navbar/>
        
        <div className='background-image' >
            <img src={bgimg} alt='' width='100%'/>
            <p>AchaariMa</p> 
        </div>
    </div>
  )
}
