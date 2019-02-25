import React, {
    Component
} from 'react';
import "./main.scss";

import Layout from '../../components/layout'

function ShowcaseItems(props){
  return(
                <div className="list--item">
                  <a href={""}><img src={props.imageLocation}/></a>
                  <div className="list--item--text">{props.text}</div>
                </div>
    
  )

}

function FilterItems(props){
return(
  <div className="FilterItems">

<div>
  <div>All</div>
  <div>React</div>
  <div>React</div>
  <div>UI/UX</div>
  <div>Webs</div>
  <div>App</div>
</div>
  </div>

)

}

class About extends Component{

constructor(props){
super(props);
this.state = {
  items:[{
    url: "https://via.placeholder.com/500x250",
    text: "text inside array"
  },
  {
    url: "https://via.placeholder.com/500x250",
    text: "text inside array 2"
  },
  {
    url: "https://via.placeholder.com/500x250",
    text: "text inside array 3"
  }
  ],
  url: "https://via.placeholder.com/500x250",
  text: "text inside array 4"
}

}

    
    render() {
        return ( 
                <Layout>
                    <div className="title">
                  <h1>Portfolio Main</h1>
                  <h2>Showcasing a selection of projects</h2>
                  </div>
             <FilterItems/>

                  <div className="list">
                  <ShowcaseItems 
                  imageLocation="https://via.placeholder.com/500x250"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
                  />
         


                  {/*TODO: to build the list of items to display */}
                  {this.state.items.map((item) => 
                        <ShowcaseItems 
                        imageLocation={item.url}
                        text={item.text}         
                        />
                  )}
         
                  </div>


                  
                </Layout>
        )
    }
}

export default About