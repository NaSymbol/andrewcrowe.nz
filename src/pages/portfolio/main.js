import React, {
    Component
} from 'react';
import "./main.scss";

import Layout from '../../components/layout'

function ShowcaseItems(props){
  return(
                <div className="list--item">
                            <img src="https://via.placeholder.com/500x250"/>
                            <div className="list--item--text">text</div>
                </div>
    
  )

}

class About extends Component{



    
    render() {
        return ( 
                <Layout>
                    <div className="title--">
                  <p>Portfolio Main</p>
                  </div>
                  <div className="filter">
                  
                  </div>

                  <div className="list">
                  <ShowcaseItems/>
                  <ShowcaseItems/>
                  <ShowcaseItems/>
                  <ShowcaseItems/>
                  <ShowcaseItems/>
                  <ShowcaseItems/>
                  <ShowcaseItems/>
                  <ShowcaseItems/>
                  <ShowcaseItems/>
                  </div>

                  
                </Layout>
        )
    }
}

export default About