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
                <h1>Contact Us</h1>
                <p>
                    For new online business enquiries please phone Andrew on +64 027 200 6439 or you can email him directly on 1@andrewcrowe.nz                </p>
                <p>
                    The Contact Form would also be a great way as that is directly connected to my email address.
                </p>
                <p>
                    Alternatively, for more information on how we can help you with your online business, please fill in the Contact Us form below.
                </p>
                <p>
                    NOTE: In the “Subject” box, you could put “A brief outline of the services you require,” or leave it blank.
                </p>
                </div>
                
            </div>
            <ContactSection></ContactSection>
          </Layout>

        )
    }
}

export default Contact