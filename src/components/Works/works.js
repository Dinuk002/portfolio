import React from 'react';
import './works.css';
import work1 from '../../assets/Screenshot (52).png';


const Works = () => {
    return(
        <section id="works">
        <div className='container'>
            <h1 className='heading'>Projects</h1>
            <div className='box-container'>
                <a href=''><div className='box'>
                    <img src={work1} alt='image'/>
                    <h3>Html</h3>
                    <p>This is a html project</p>
                    
                </div></a>
                <a href=''><div className='box'>
                <img src={work1} alt='image'/>
                    <h3>Html</h3>
                    <p>This is a html project</p>
                    
                </div></a>
                <a href=''><div className='box'>
                <img src={work1} alt='image'/>
                    <h3>Html</h3>
                    <p>This is a html project</p>
                    
                </div></a>
                <a href=''><div className='box'>
                <img src={work1} alt='image'/>
                    <h3>Html</h3>
                    <p>This is a html project</p>
                   
                </div></a>
                <a href=''><div className='box'>
                <img src={work1} alt='image'/>
                    <h3>Html</h3>
                    <p>This is a html project</p>
                    
                </div></a>
                <a href=''><div className='box'>
                <img src={work1} alt='image'/>
                    <h3>Html</h3>
                    <p>This is a html project</p>
                    
                </div></a>
            </div>
            

 
           
     
        </div>
        </section>
        
    );
}

export default Works;