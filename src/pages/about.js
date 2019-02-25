import React, {
    Component
} from 'react';



import Layout from '../components/layout';
import "../pages/about.scss";
import ContactSection from '../components/contactSection';
class About extends Component {



    render() {
        return ( 
        <Layout >
            <div className="AboutSection">
            <h1> About me < /h1> 
            <h2> Lorem ipsum dolor sit amet</h2> 
            <p> consectetur adipiscing elit.Aenean iaculis porta urna ac vestibulum.Mauris ut erat cursus, interdum ligula </p>
            <img src={'https://via.placeholder.com/400x300'} alt=""></img>
            <p>vitae, ullamcorper mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis vitae turpis nisi.Morbi eleifend ligula maximus tempor faucibus.In in orci non metus congue efficitur.Morbi sit amet nibh a eros dignissim posuere eget vel erat.In sit amet vulputate mauris, a tincidunt nulla.Nam eleifend ullamcorper nunc, in dignissim lorem venenatis vel.In enim lectus, faucibus vitae consectetur faucibus, laoreet in libero.Integer a blandit leo, ac luctus augue.Mauris luctus interdum tellus a elementum.Maecenas blandit metus sodales urna aliquet lacinia.Proin vel blandit arcu. </p> 
   

            </div>
            <ContactSection/>
            </Layout>
        )
    }
}

export default About
     