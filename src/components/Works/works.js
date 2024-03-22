import React from 'react';
import './works.css';
import work1 from '../../assets/python.png';
import work2 from '../../assets/java.png';
import work3 from '../../assets/ecourse.png';
import work5 from '../../assets/pngegg (1).png';


const Works = () => {
    return(
        <section id="works">
        <div className='container'>
            <h1 className='heading'>Projects</h1>
            <span className='skillDesc'>
You may access the respective GitHub repositories of the provided projects by clicking on the corresponding blocks, where you can also explore additional projects.</span>
            <div className='box-container'>
                <a href='https://github.com/Dinuk002/Subscription_predeiction_ML_Model'><div className='box'>
                    <img src={work1} alt='cover'/>
                    <h3>python</h3>
                    <p>This is a ML model for subscription predictions.</p>
                    
                </div></a>
                <a href='https://github.com/Dinuk002/Online-Shopping-Java'><div className='box'>
                <img src={work2} alt='cover'/>
                    <h3>Java Swing</h3>
                    <p>This is a online shopping management interface.</p>
                    
                </div></a>
                <a href='https://github.com/Dinuk002/E-course_Website-'><div className='box'>
                <img src={work3} alt='cover'/>
                    <h3>HTML, CSS, JS</h3>
                    <p>This is a website created for purchasing online courses.</p>
                    
                </div></a>
                <a href='https://github.com/Dinuk002'><div className='box'>
                <img src={work2} alt='cover'/>
                    <h3>Java</h3>
                    <p>This is a theatre booking system with multiple features.</p>
                   
                </div></a>
                <a href='https://github.com/Dinuk002/TO-DO-APP'><div className='box'>
                <img src={work5} alt='cover'/>
                    <h3>Dart</h3>
                    <p>This is a simple to do list app created using flutter.</p>
                    
                </div></a>
                <a href='https://github.com/foodlens'><div className='box'>
                <img src={work5} alt='cover'/>
                    <h3>Dart</h3>
                    <p>An food AI Powered Food Analysis Companion Application</p>
                    
                </div></a>
            </div>
            

 
           
     
        </div>
        </section>
        
    );
}

export default Works;