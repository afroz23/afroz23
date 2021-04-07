import React from 'react';
import './Socialicon.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
const  Socialicon=()=>{
    return (
        <div>
            <div className="social-icons">
                    <TwitterIcon className="sicons"/>
                    <LinkedInIcon className="sicons"/>
                    <GitHubIcon className="sicons"/>
                    <YouTubeIcon className="sicons"/>
                    <InstagramIcon className="sicons"/>
            </div>
        </div>
    );
}
export default Socialicon;