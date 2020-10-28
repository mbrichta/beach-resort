import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import { RiMenu3Line } from 'react-icons/ri'


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <button type="button" className="nav-btn" onClick={handleToggle}>
                        <RiMenu3Line className="nav-icon" />
                    </button>
                </div>
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}