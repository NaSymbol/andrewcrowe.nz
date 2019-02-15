import React, {
    Component
} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from './svgP.svg';
import "./index.scss";
import Showcase from '../components/showcase';
import Helmet from 'react-helmet'

//import "./svg-function.js";
class Index extends Component {

    render() {
        return ( <
            div > 
            <Helmet
            title="Andrew Crowe | Freelancer | Front End Developer"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
          <script src='https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js'></script>

          </Helmet>
            
            
            
            < Header / >
            <
            object className="svg-animation" data = {
                logo
            }
            type = "image/svg+xml" >
            <
            img src = "yourfallback.jpg"
            alt = "" / >
            <
            /object>
            <Showcase/>
             <Footer / > < /div>
        )
    }
}


export default Index