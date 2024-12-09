import './navbar.css';
import logo from './img/logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import {useRef} from "react";
// https://www.youtube.com/watch?v=amf18mxNX18
export default function Navbar() {
    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle('responsive_nav');
    }

    return <nav style = {{backgroundColor:'#0e192b'}} className = "nav text-white fixed flex top-0 left-0 w-full px-16 py-6 justify-between items-center z-100">
        <img src = {logo} alt = "logo" className = "h-12" />

        <div className = "flex content-center">
            <ul ref = {navRef}>
                <li><a href = "#home">HOME</a></li>
                <li><a href = "#exp">EXPERIENCE</a></li>
                <li><a href = "#edu">EDUCATION</a></li>
                <li><a href = "#certs">CERTIFICATIONS</a></li>
                <li><a href = "#projects">PROJECTS</a></li>
                <li><a href = "#skills">SKILLS</a></li>
                <li><a href = "#contact">CONTACT</a></li>
                <button className = 'nav-btn nav-close-btn' onClick = {showNavbar}>
                    <FaTimes />
                </button>
                
            </ul>
            <button className = 'nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </div>

        
        

        
    </nav>
}