import React from 'react'
import cimg from "../assests/contact.jpeg";

function About() {
  return (
    <>
    <div id="contact">
        <div className="container contact-row">
            <div className=" contact-left-col">
                <h1>Sign Up to join our <br></br>learning community</h1>
                <form>
                    <input type="text" placeholder="Enter Name"/>
                    <input type="email" placeholder="Enter Email"/>
                    <input type="passworrd" placeholder="Enter Password"/>
                    <div className="btn-box">
                        <button className="btn">
                            Sign Up
                           </button>
                           <button className="btn">
                            Start Free Trail
                           </button>
                    </div>
                    
                </form>
                 
            </div>
            <div className=" contact-right-col">
                <img src={cimg} alt="contact-ig"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default About