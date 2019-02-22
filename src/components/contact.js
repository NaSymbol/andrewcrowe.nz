import React, { Component } from "react"
import Footer from "./Footer";
import Header from "./header";

class Contact extends Component{
    constructor(props){

    }


    render(){

        return(
            <form>
            <label>
              Full Name:
              <textarea />
            </label>
            <label>
              Email:
              <textarea />
            </label>
            <label>
              Phone:
              <textarea />
            </label>
            <label>
              Message:
              <textarea />
            </label>
            <input type="submit" value="Submit" />
          </form>


        )
    }




}


export default Contact