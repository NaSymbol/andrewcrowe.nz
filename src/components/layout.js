import React from "react"
import Footer from "./Footer";
import Header from "./header";


export default ({ children }) => (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )