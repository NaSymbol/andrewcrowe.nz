import React, {Component} from 'react';
import "./showcase.scss";



class Showcase extends Component {

    render(){
        return(
            <div className="showcase-section">
                <div className="grid-container">
                   
                    <div className="grid-item-1">
                    <img  src="https://via.placeholder.com/150x300/0000FF/" alt=""/>
                    </div>
                    <div className="grid-item-2">
                    <img  src="https://via.placeholder.com/300x150/FF0000/" alt=""/>
                    </div>
                    <div className="grid-item-3">
                    <img  src="https://via.placeholder.com/150x150/008000/" alt=""/>
                    </div>
                    <div className="grid-item-4">
                    <img src="https://via.placeholder.com/150x150/FFFFFF/" alt=""/>
                    </div>

                </div>
                </div>
            
        )
    }
}


export default Showcase