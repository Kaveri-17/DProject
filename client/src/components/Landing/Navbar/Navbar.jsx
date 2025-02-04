import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'; // Update the logo path if necessary
import './Navbar.css';

const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Programs', href: '/programs' },
    { name: 'Contact Us', href: '/contactus' },
    { name: 'Gallery', href: '/innovation' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setIsMenuOpen(false);
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, [location.pathname]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Company Logo" className="logo-img" />
                </Link>

                {/* Menu Icon for Mobile View */}
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? 'X' : '☰'}
                </div>

                {/* Navigation Links */}
                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`navbar-link ${location.pathname === item.href ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)} // Close the menu on click
                        >
                            {item.name}
                        </Link>
                    ))}
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="login-btn">
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="login-btn" onClick={() => setIsMenuOpen(false)}>
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
