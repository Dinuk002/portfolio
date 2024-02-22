import react from 'react';
import './navbar.css';
import { Link } from 'react-scroll'; 


const Navbar = () =>{
    return(
        <nav className="navbar">
            <img src='' alt='Logo' className='logo'/>
            <div className="desktopMenue">
                <Link className="desktopMenueListItem">Home</Link>
                <Link className="desktopMenueListItem">About</Link>
                <Link className="desktopMenueListItem">Clients</Link>
                <Link className="desktopMenueListItem">Portfolio</Link>
            </div>
            <button className="desktopMenueBtn">
            <img src='' alt=''className='desktopMenueImg'/>Contact Me
            </button>
        </nav>
    );
}

export default Navbar;