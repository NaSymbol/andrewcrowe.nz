import React, {
    Component
} from 'react';
import "./main.scss";



import Layout from '../../components/layout'

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

                  {/* image and text for each portfolio piece */}
                    <div className="list--item">
                            <div> logo</div>
                            <div>text</div>
                    </div>
                {/* image and text for each portfolio piece */}
                <div className="list--item">
                            <div> logo</div>
                            <div className="list--item--text">text</div>
                    </div>
                                    {/* image and text for each portfolio piece */}
                                    <div className="list--item">
                            <div> logo</div>
                            <div>text</div>
                    </div>

                  </div>
                </Layout>
        )
    }
}

export default About