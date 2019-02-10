import React, {Component} from 'react';
// import Header from ''../components/header.js';
// import Header from 'components/header';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from './svgP.svg';

class Index extends Component {

    render(){
        return(
            <div> <Header/>{logo}hello andy <Footer/></div>
        )
    }
}


export default Index


