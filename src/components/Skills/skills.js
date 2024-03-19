import React from 'react';
import './skills.css';
import java from '../../assets/java.png';
import web from '../../assets/html.png';
import ML from '../../assets/ML.png';

const Skills = () =>{
    return (
        <section id='skills'>
            <span className='skillTitle'>What I Do</span>
            <span className='skillDesc'>A software engineering undergraduate student possesses proficiency in programming languages like Java, Python, or C++, 
            along with knowledge of Agile and Scrum methodologies. They excel in problem-solving, algorithm design, and debugging,
             while also demonstrating strong communication, teamwork, and time management skills. </span>
             <div className='skillBars'>
                <div className='skillBar'>
                    <img src={web} alt='' className="skillBarImg"/>
                    <div className='skillBarText'>
                        <h2>Web Development</h2>
                        <p>I am a skillful web developer proficient in various web 
                            technologies and frameworks</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={java} alt='' className="skillBarImg"/>
                    <div className='skillBarText'>
                        <h2>Java Programming</h2>
                        <p>I am a Java programmer with a growing proficiency in Java programming concepts.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={ML} alt='' className="skillBarImg"/>
                    <div className='skillBarText'>
                        <h2>Machine Learning</h2>
                        <p>I am a machine learning enthusiast, eager to delve deeper and proficient in fundamental concepts of machine learning.</p>
                    </div>
                </div>
             </div>
        </section>
    );
}

export default Skills;