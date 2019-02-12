import React, {
    Component
} from 'react';
// import Header from ''../components/header.js';
// import Header from 'components/header';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from './svgP.svg';
//import "./svg-function.js";
class Index extends Component {

    render() {
        return ( <
            div > < Header / >
            <
            object data = {
                logo
            }
            type = "image/svg+xml" >
            <
            img src = "yourfallback.jpg"
            alt = "" / >
            <
            /object> <
            Footer / > < /div>
        )
    }
}


export default Index