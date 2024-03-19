import React from 'react';
import './intro.css';
import bg from '../../assets/portf.png'
import { Link } from 'react-scroll'; 

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
            <span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Dinuk</span></span><span className="roles"> Software Engineering Undergraduate</span>

               <p className="introPara">Embrace opportunities for rapid learning and dedicated collaboration
               ,<br/> eagerly contributing to the company's success and absorbing insights<br/> from seasoned professionals. 
               Demonstrate unwavering confidence to<br/> postively impact as a Software Engineer.</p>  
               
            </div> 
            <img src={bg} alt="profile" className="bg"></img> 
        </section>
    )
}

export default Intro;