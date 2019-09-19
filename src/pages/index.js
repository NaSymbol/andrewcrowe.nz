import React, {
    Component
} from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
// import logo from './svgP.svg';
import "./index.scss";
import Showcase from '../components/showcase';
import ContactSection from '../components/contactSection';
import Helmet from 'react-helmet'
import SvgGarden from '../components/svg-garden/svg-garden'

// import CardSection from '../components/cardSection';

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

      
            <SvgGarden/>

            <Showcase/>
            <ContactSection/>
             <Footer / > < /div>
        )
    }
}


export default Index


// exports.onInitialClientRender = () => {
//     require("./index.scss");
//   };
