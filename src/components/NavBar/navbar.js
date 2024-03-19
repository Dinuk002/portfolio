import react from 'react';
import './navbar.css';
import { Link } from 'react-scroll'; 
import React, { useState } from 'react';


const Navbar = () =>{
    const [showMenue,setShowMenue] = useState(false);
    return(
        <nav className="navbar">
            <img src='' alt='Logo' className='logo'/>
            <div className="desktopMenue">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenueListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenueListItem">Skills</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenueListItem">Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenueListItem">Contact Me</Link>
            </div>
            <button className="desktopMenueBtn" onclick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
            <img src='' alt=''className='desktopMenueImg'/>Contact Me
            </button>

                        <img src='' alt='Logo' className='mobMenue' onClick={()=>setShowMenue(!showMenue)}/>
            <div className="navMenue" style={{display: showMenue? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenue(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenue(false)}>Skills</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenue(false)}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenue(false)}>Contact Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;