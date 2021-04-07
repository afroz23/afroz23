import React, { useState } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import DehazeIcon from '@material-ui/icons/Dehaze';
 
function Navbar(){
    const [open,setOpen]=useState(false);
        return (
            <div>
            <nav className="main-nav">
                <h1><NavLink className="logo" exact activeClassName="active" to="/">home</NavLink></h1>
                
                <ul className="nav-links" style={{ transform: open ? "translateX(0px)" : ""}}>
                <li><NavLink exact activeClassName="active" to="/about">about</NavLink></li>
                <li><NavLink exact activeClassName="active" to='/blog'>blogs</NavLink></li>
                <li><NavLink exact activeClassName="active" to='/projects'>projects</NavLink></li>
                <li>resume</li>
                </ul>
 
                <DehazeIcon onClick={()=> setOpen(!open)} className="fas fa-bars"/>
                <CloseIcon className="fas fa-times"/>     
            </nav>
            </div>
        );
    }

export default Navbar;