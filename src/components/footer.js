import React from 'react'
import fimg from "../assests/logo-3.png";

function Footer() {
  return (
    <>
    <div className='text-center' style={{background:"grey",padding:"20px 0"}}>
        <img  style={{height:"40px", width:"150px"}}src={fimg} alt="footer-img"/>
        <p>All copyright reserved.</p>
    </div>
    </>
  )
}

export default Footer