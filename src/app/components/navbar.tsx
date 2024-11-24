"use client";

// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import "./navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <Link href="/">
                        <Image src="/logo1.png" alt="Logo" width={130} height={60} />
                    </Link>
                    <h1 className="navbar-heading">Milk Shake Factory</h1>
                </div>
                <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`menu ${isOpen ? 'active' : ''}`}>
                    <li onClick={closeMenu}>
                        <Link href="/">Home</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link href="/menu">Menu</Link>
                    </li>
                    <li onClick={closeMenu}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}