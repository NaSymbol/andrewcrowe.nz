import React, {Component} from 'react';
import { Link } from "gatsby"
import "./Header.scss";
//import "./svg-functions";
//import "./snap.svg-min";

class Header extends Component{


    render(){
        return(
            <div className="container-fluid">
<nav className="nav-top">
<ul>
           <li><Link to="portfolio/main">Portfolio</Link></li>
           {/* <li><Link to="blog/main">Blog</Link></li> */}
           <li> <Link to="about">About</Link></li>
           <li><Link to="contact">Contact</Link></li>
       </ul>
</nav>
<Link to="./">
    <div className="logo">

    </div>
    </Link>
    <nav className="menu--small">
                <div>
                    <div className="navMenu"></div>
                    <div className="navMenu"></div>
                    <div className="navMenu"></div>
                </div>
    </nav>  

</div>
        )

    }
}



export default Header