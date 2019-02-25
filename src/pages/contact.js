import React, {
    Component
} from 'react';
import Layout from '../components/layout';
import ContactSection from '../components/contactSection';
import "./contact.scss";
class Contact extends Component{


    
    render() {
        return ( 
            <Layout>
            <div className="ContactPage">
                <div>
                <h1>Contact Me</h1>
                <h2>Please contact me on the below details or use the form and i will get back to you.</h2>
                <p><b>Email:</b> 1@andrewcrowe.nz</p>
                <p><b>Phone:</b> (64) 027 200 6439</p>
                </div>
                
            </div>
            <ContactSection></ContactSection>
          </Layout>

        )
    }
}

export default Contact