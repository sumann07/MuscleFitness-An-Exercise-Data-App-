import React from 'react'
import img from "../assests/home.png"

function Homebox() {
  return (
    <>
    <div className='homebox-container'>
        <div className='left-container'>
            <h3>Muscle & Fitness</h3>
            <h1>Sweat, Smile<br></br> and Repeat</h1>
            <h5>Checkout the most effectice exercise for you.</h5>
            <a href="#exer"><button>Explore</button></a>
        </div>
        <div className='right-container'>
            <img src={img} alt="home-img"/>
        </div>
    </div>
    </>
  )
}

export default Homebox