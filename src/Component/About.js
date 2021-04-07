import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Socialicon from './Socialicon';

const About=()=>{
    return(
        <div>
            <Navbar/>
            <div className="parent-div">
                <div className="child-div"><br/><br/>
                <p className="about">afrozquraishi | about</p ><br/><br/>
                <p className="para-about">
                I am a fourth-year student at IIIT Gwalior. Currently pursuing a dual degree (B-Tech + Mtech) in
                 information technology. With experience in developing and deploying web apps written with MERN.
                <br/><br/>
                I have created and you can find something interesting if you give <b>a minute to read</b>.
                <br/><br/>
                Apart from my interest in various fields of Tech, I like to do my part in making this world a 
                better place. Currently, I am the Member of the social service club of our college Rotaract Club 
                of Youth IIITM, Gwalior. Where our motto is, “Spread smile to earn smile”. I am also Teacher Student Gyan Movement 
                <br/>It is part of a group of students trying to make quality education available to those without the right means and opportunity.
                <br/>Worked as personality development mentor for local students of Gwalior.
                <br/>• Currently taking classes on Mathematics for 9th class students.
                <br/><br/>
                You can reach me out at any of the mentioned social apps.
                <br/><br/>
                </p> 
                <Socialicon/>
                </div>
            </div>
        </div>
    );
}
export default About;