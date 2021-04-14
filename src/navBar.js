import React from 'react';

import YoutubeIcon from './img/youtube.png'
import MediumIcon from './img/medium.png'
import LinkedinIcon from './img/linkedin.png'
import GithubIcon from './img/github.png'

import Point from './img/point.png'

const redirectMe = (url) => {
        
    // Opens new tab 
    window.open(url);
    
}

function NavBar () {
    return (
        <>
            <div className = "block4">
            <div className = "NavBar">
                    <button onClick = {() => redirectMe('https://tks.life/profile/evan.lin#about')}
                        className = "Portfolio">Portfolio</button>
                    <button onClick = {() => redirectMe('https://www.youtube.com/channel/UCn9Ir-KFtIWSntk6RzGE1-A')}
                        className = "Youtube"> <img src = {YoutubeIcon}/></button>
                    <button onClick = {() => redirectMe('https://evxxan.medium.com/')}
                        className = "Medium"> <img src = {MediumIcon}/></button>
                    <button onClick = {() => redirectMe('https://www.linkedin.com/in/evan-lin-0b764b1a3/')}
                        className = "Linkedin"> <img src = {LinkedinIcon}/></button>
                    <button onClick = {() => redirectMe('https://github.com/eevaain')}
                        className = "Github"> <img src = {GithubIcon}/></button>
                <img src = {Point} className = "Pointer"/>
            </div>
            </div>
        </>
    );
}

export default NavBar;