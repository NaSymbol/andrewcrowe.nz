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
        <Layout>
            <div className="AboutSection">
            <h1> About Us </h1> 
            <p> Andrew Crowe is a Freelance Web Developer based in New Plymouth. He can design and develop websites, programmes and apps for local and international clients. </p> 
            <h2>Web Developer</h2>
            <ul>
                <li>Bachelor of Economics obtained from Canterbury University</li>
                <li>Previous experience and background in electrical automation</li>
                <li>Seasoned practitioner in web design, specialising in HTML, CSS and Javascript</li>
                <li>Web design and development since 2009</li>
            </ul>
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
     