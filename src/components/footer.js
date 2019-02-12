import React, {Component} from 'react';
//import "./Footer.css";
import "./Footer.scss";

import behanced from '../images/behance.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import codePen from '../images/codePen.png';
import profile from '../images/profileImage.png';


class Footer extends Component{


    render(){
        return(
            <footer>

            <div className="footerMain">
                <div className="profileSection">
                    <img className="profile-image" src={profile} alt=""/>
                    <div className="">
                        <p className="footer-text">Andrew Crowe is a web Developer from New Zealand. Has been working in web development for 11 years.</p>
                    </div>
                </div>
    
                <div className="social">
                    <p className="calltoAction"> Call me on <b>027 200 6439</b> or email <b>1@andrewcrowe.nz</b></p>

                    <div className="link1">
                        <a href="https://nz.linkedin.com/in/nasymbol">
                            <img src={linkedin} alt=""/>
                        </a>
                        <p>My Linkedin Account showcasing projects.</p>
                    </div>
    
                    <div className="link1">
                        <a href="http://codepen.io/NaSymbol/">
                            <img src={codePen} alt=""/>
                        </a>
                        <p>My Codepen account with a display of different technologies.</p>
                    </div>
    
                    <div className="link1">
                        <a href="https://github.com/NaSymbol">
                            <img src={github} alt=""/>
                        </a>
                        <p>Check out Github profile to see codeing examples.</p>
                    </div>
    
                    <div className="link1">
                        <a href="https://www.behance.net/NaSymbol">
                            <img src={behanced} alt=""/>
                        </a>
                        <p>My Behanced profile showcasing all graphic designs.</p>
                    </div>
    
                </div>
    
    
            </div>
    
    
            <div className="bottomSection">
                <p>Andrew Crowe Copyright 2018 all rights reserved</p>
            </div>
    
    
    
        </footer>
        )

    }
}



export default Footer