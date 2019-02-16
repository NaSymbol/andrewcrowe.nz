import React, {Component} from 'react';
import { Link } from "gatsby"
import "./cardSection.scss";





class CardSection extends Component {

render(){
    return(
        <div>
            <div className="card">
            <img  src="https://via.placeholder.com/300x150/008000/" alt=""/>
                <div className="card-text"></div> 
            </div>

            <div className="card">
            <img  src="https://via.placeholder.com/300x150/008000/" alt=""/>
                <div className="card-text"></div> 
            </div>

            <div className="card">
            <img  src="https://via.placeholder.com/300x150/008000/" alt=""/>
                <div className="card-text"></div> 
            </div>

        </div>

    )
}

}



export default CardSection