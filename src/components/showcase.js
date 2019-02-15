import React, {Component} from 'react';
import "./showcase.scss";



class Showcase extends Component {

    render(){
        return(
                <div className="grid-container">
                   
                    <div className="grid-item-1"></div>
                    <div className="grid-item-2">
                    <img className="profile-image" src="https://via.placeholder.com/300x150/FF/" alt=""/>
                    </div>
                    <div className="grid-item-3"></div>
                    <div className="grid-item-4"></div>


                </div>
            
        )
    }
}


export default Showcase