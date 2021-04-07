import React from 'react';
import Navbar from './Navbar';
import './Projects.css';
import Socialicon from './Socialicon';
const Projects=()=>{
    return(
        <div>
            <Navbar/>
            <div className="uncle">
                <div className="cusion">
                    <br/><br/>
                    <div className="beta">
                    <p className="project">afrozquraishi | projects</p><br/><br/>
                    <p className="main-para">
                    Hi! I am Afroz! I am studying in IIITM Gwalior.<br/><br/>
                    This is My project page.<br/><br/>
                    </p>
                    <hr/><br/>
                    <Socialicon/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;