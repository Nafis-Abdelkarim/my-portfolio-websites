import React from "react";
import './Navbar.css'

function Navbar() {

    return(
        <div className="Navbar-container">
            <div className="logo">
                <span>NEFIS Abdelkrim</span>
            </div>
            <div className="menu-items">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#About-me">About me</a></li>
                    <li><a href="#our-services">Our services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar