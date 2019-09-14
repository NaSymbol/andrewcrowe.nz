import React, {Component} from 'react';
import { Link } from "gatsby"
import "./Header.scss";
//import "./svg-functions";
//import "./snap.svg-min";

class Header extends Component{
constructor(props) {
    super(props);
    this.state = {
        mobileMenu: true,
    }
    this.showMenu = this.showMenu.bind(this);
}

showMenu(){
    this.setState({
        mobileMenu: !this.state.mobileMenu
    })

}

    render(){
        return(
            <div className="container-fluid">


<Link to="./">
    <div className="logo">

    </div>
    </Link>
    <nav className="menu--small" onClick={()=> this.showMenu()}>
                <div>
                    <div className="navMenu"></div>
                    <div className="navMenu"></div>
                    <div className="navMenu"></div>
                </div>

    </nav>  
<nav className={"nav-top " + (this.state.mobileMenu ? "active" : "not-active") }>
<ul>
           <li><Link to="portfolio/main">Portfolio</Link></li>
           {/* <li><Link to="blog/main">Blog</Link></li> */}
           <li> <Link to="about">About</Link></li>
           <li><Link to="contact">Contact</Link></li>
       </ul>
</nav>


</div>
        )

    }
}



export default Header