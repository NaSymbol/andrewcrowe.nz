import React from "react"
import Footer from "./footer";
import Header from "./header";


export default ({ children }) => (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )