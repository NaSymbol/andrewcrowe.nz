import React, {Component} from 'react';
import "./Footer.css";


class Footer extends Component{


    render(){
        return(
            <footer>

            <div class="footerMain">
                <!-- profile section -->
                <div class="profileSection">
                    <img class="profile-image" src="../images/profileImage.png">
                    <div class="">
                        <p class="footer-text">Andrew Crowe is a web Developer from New Zealand. Has been working in web development for 11 years.</p>
                    </div>
                </div>
    
                <!-- social links -->
                <div class="socialLinks">
                    <p class="calltoAction"> Call me on <b>027 200 6439</b> or email <b>1@andrewcrowe.nz</b></p>
                    <!--
      <h5>Contact me to today</h5>
      <h5>Phone: 027 200 6439</h5>
      <h5>Email: 1@andrewcrowe.nz</h5>
    -->
                    <div class="link1">
                        <a href="https://nz.linkedin.com/in/nasymbol">
                            <img src="../images/linkedin.png">
                        </a>
                        <p>My Linkedin Account showcasing projects.</p>
                    </div>
    
                    <div class="link1">
                        <a href="http://codepen.io/NaSymbol/">
                            <img src="../images/codepen.png">
                        </a>
                        <p>My Codepen account with a display of different technologies.</p>
                    </div>
    
                    <div class="link1">
                        <a href="https://github.com/NaSymbol">
                            <img src="../images/github.png">
                        </a>
                        <p>Check out Github profile to see codeing examples.</p>
                    </div>
    
                    <div class="link1">
                        <a href="https://www.behance.net/NaSymbol">
                            <img src="../images/behance.png">
                        </a>
                        <p>My Behanced profile showcasing all graphic designs.</p>
                    </div>
    
                </div>
    
    
            </div>
            <!-- end of footerMain-->
    
    
            <!-- bottom footer section --->
            <div class="bottomSection">
                <p>Andrew Crowe Copyright 2018 all rights reserved</p>
            </div>
    
    
    
        </footer>
        )

    }
}



export default Footer