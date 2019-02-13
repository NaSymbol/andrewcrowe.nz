import React, {Component} from 'react';
import "./Header.scss";
//import "./svg-functions";
//import "./snap.svg-min";

class Header extends Component{


    render(){
        return(
            <div className="container-fluid">
<nav className="nav-top">
<ul>
           <li>Portfolio</li>
           <li>Blog</li>
           <li>About</li>
           <li>Contact</li>
       </ul>
</nav>
    <div className="logo">

    </div>


</div>
        )

    }
}



export default Header