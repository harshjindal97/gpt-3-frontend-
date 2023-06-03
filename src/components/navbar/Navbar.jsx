import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import "./navbar.css";

const Navbar = () => {
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar_links'>
                <div className='gpt3__navbar_links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='gpt3__navbar_links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgp3">What is gpt</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button className='gpt3__navbar-sing-button'>Sing Up</button>
            </div>
        </div>
    )
}

export default Navbar
