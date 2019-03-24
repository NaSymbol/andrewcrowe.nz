import React, {
    Component
} from 'react';



import Layout from '../components/layout';
import "../pages/about.scss";
import ContactSection from '../components/contactSection';
import AboutMeM from '../images/about-me-mountain2.jpeg';
class About extends Component {



    render() {
        return ( 
        <Layout >
            <div className="AboutSection">
            <h1> About Me < /h1> 
            <h2> A brief introduction about me and what i've done.</h2> 
            <p> 
            Over the last ten years, I have confidently designed websites for several different projects. I am confident and efficient with coding websites and applications using modern HTML, CSS and JavaScript.
            </p>
            <img src={AboutMeM} alt=""></img>
            <p>
                
            </p> 
   

            </div>
            <ContactSection/>
            </Layout>
        )
    }
}

export default About
     