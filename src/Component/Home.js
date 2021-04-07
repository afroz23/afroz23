import React from 'react';
import Profile from '../Images/afroz23.jpeg';
import { Link } from 'react-router-dom';
import './Home.css';

const Home=()=>{
    return(
        <div className="container">            
            <div className="avatar"> <img className="profile" alt="afroz's photos" src={Profile}></img> </div>
            <br/>
            <div className="main-parent">
            <div className="main-div">
            <p className="home">afrozquraishi | home</p>
                <p className="para-home">
                    <br/>Hi! I am Afroz! I am studying in IIIT Gwalior.<br/><br/>
                    I am a constant learner and this has helped me to keep myself productive and motivated.
                    <br/><br/>
                    There are multiple Internet properties that I have created and you can find something
                    interesting if you give <b>a minute to visit</b>.
                    <br/><br/>
                    In my free time, I learn new skills like React ,React Native ,Coding and also make Youtube
                     videos on Coding on my channel.
                    <br/><br/>
                </p>
            </div>
            <hr/>
                <ul className="nav-links">
                <li><Link className="link-to" exact activeClassName="active" to="/about">about</Link ></li>
                <li><Link className="link-to" exact activeClassName="active" to='/blog'>blog</Link ></li>
                <li ><Link className="link-to" exact activeClassName="active" to='/projects'>projects</Link ></li>
                <li>resume</li>
                </ul>
            </div>
            </div>
    );
}
export default Home;