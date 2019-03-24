import React, { Component } from "react"
import Footer from "./Footer";
import Header from "./header";

class Contact extends Component{
    constructor(props){

    }


    render(){

        return(
            <form action="https://getform.io/f/c77c429b-86f7-4ec0-ae1e-c34b2c515a83 " method="POST">
            <label>
              Full Name:
              <textarea name="fullName"/>
            </label>
            <label>
              Email:
              <textarea name="email" />
            </label>
            <label>
              Phone:
              <textarea name="phone"/>
            </label>
            <label>
              Message:
              <textarea name="message"/>
            </label>
            <input type="submit" value="Submit" />
          </form>


        )
    }




}


export default Contact