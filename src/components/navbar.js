import React from 'react';
import logo from "../assests/logo-3.png";
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className="navbar nav-logo">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="" width="100" height="50" class="d-inline-block align-text-top" />
                    </Link>
                    <div className="d-flex second-cont">
                        <Link className="tag"to="/" >Home</Link>
                        <a className="tag"href="#exer">Exercise</a>
                        <Link className="tag" to="/about">Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar