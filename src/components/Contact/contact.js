import React from 'react';
import './contact.css';

const Contact = () => {
    return(
        <section id='contactPage'>
           <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work 
                opportunities.</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name'/>
                    <input type='email' className='email' placeholder='Your Email'/>
                    <textarea  className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        <img src="" alt="Linkedin" className='link'/>
                        <img src="" alt="GitHub" className='link'/>
                        <img src="" alt="Instagram" className='link'/>
                        <img src="" alt="FaceBook" className='link'/>
                    </div>
                </form>
            </div> 
        </section>
    );
}

export default Contact;