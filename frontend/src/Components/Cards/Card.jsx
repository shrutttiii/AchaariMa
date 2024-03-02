import React from 'react'
import pickle from "../Assets/pickle.jpeg";
export const Card = () => {
  return (
    <div className='card'>
    <img src={pickle} alt=''></img>
    <h3> Mango pickle </h3>
    <p>description</p>
    </div>
  )
}
