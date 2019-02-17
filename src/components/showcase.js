import React, {Component} from 'react';
import "./showcase.scss";

import Tac from '../images/tictactoe3.png';
import Bill from '../images/BulletinBoardApp.png';
import AC from '../images/AndrewcroweNZ.png';
import Mock from '../images/mockUI.png';

class Showcase extends Component {

    render(){
        return(
            <div className="showcase-section">
            <h1>Project Showcase</h1>
                <div className="grid-container">
                   
                    <div className="grid-item-1">
                    <img  src={Tac} alt=""/>
                    </div>
                    <div className="grid-item-2">
                    <img  src={Bill} alt=""/>
                    </div>
                    <div className="grid-item-3">
                    <img  src={AC} alt=""/>
                    </div>
                    <div className="grid-item-4">
                    <img src={Mock} alt=""/>
                    </div>

                </div>
                </div>
            
        )
    }
}


export default Showcase