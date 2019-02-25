import React, {Component} from 'react';
import "./contactSection.scss";


class ContactSection extends Component {

    render(){
        return(
            <div className="container">
            <div className="contact-section-heading">
            <h1>Contact Form</h1>
            </div>
            <form>
          
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

              <label for="lname">Phone Number</label>
              <input type="text" id="lname" name="lastname" placeholder="Your phone number.."/>
              
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
              
              <input type="submit" value="Submit"/>


          
            </form>
          </div>
            
        )
    }
}


export default ContactSection