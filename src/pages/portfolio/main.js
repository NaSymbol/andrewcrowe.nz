import React, {
    Component
} from 'react';

import { Link } from "gatsby"

import "./main.scss";


import dataFile from './data';
import Layout from '../../components/layout'

function ShowcaseItems(props){
  return(
                <div className="list--item">
                  <a ><img src={props.imageLocation}/></a>
                  <div className="list--item--text">
                  {props.code ? <a target="_blank" rel="noopener" className="button button--code" href={props.code}>Code</a> : ''}
                  {props.demo ? <a target="_blank" rel="noopener" className="button button--demo" href={props.demo}>Demo</a> : ''}
                  {/* todo - should display case button if it has a case study  */}
                  {props.casestudy ? <Link className="button button--code" to={props.casestudy}>Case Study</Link> : ''}
                  {/* Figma link  */}
                  {props.figma ? <a target="_blank" rel="noopener" className="button button--demo" href={props.figma}>Figma</a>  : ''}
                  <div>{props.text}</div>
                  <div>Tech Used: {props.tech}</div>
                  </div>
                </div>
    
  )

}



class About extends Component{

constructor(props){
super(props);

this.state = {
  listItem: 'showcase',
  items: dataFile

}

// testing
this.handleTest = this.handleTest.bind(this);
}


//Handles the change from filter items
handleTest(text){
  this.setState({
    listItem: text
  });
}


    
    render() {


        return ( 
                <Layout>
                    <div className="title">
                  <h1>Portfolio Main</h1>
                  <h2>Showcasing a selection of projects</h2>
                  </div>


             {/* Filter Items List*/}
             {/* must add conditonal render so that it stays displayed when clicked */}
             <div className="FilterItems">
             <div>
             <div className={this.state.listItem === 'showcase'? 'ActiveItems' : 'nonActive'} onClick={() => this.handleTest('showcase')
              }>Showcase</div>
             <div className={this.state.listItem === 'all'? 'ActiveItems' : 'nonActive'} onClick={() => this.handleTest('all')
              }>All</div>
             <div className={this.state.listItem === 'react'? 'ActiveItems' : 'nonActive'} onClick={() => this.handleTest('react')
              }>React</div>
                 <div className={this.state.listItem === 'web'? 'ActiveItems' : 'nonActive'} onClick={() => this.handleTest('web')
              }>Web</div>
                  <div className={this.state.listItem === 'UX/UI'? 'ActiveItems' : 'nonActive'} onClick={() => this.handleTest('UX/UI')
              }>UX/UI</div>
     
              </div>
              </div>



                  <div className="list">
        
                  {/*TODO: to build the list of items to display */}
                  {this.state.items.filter((box) => {
                     if(this.state.listItem === 'showcase'){
                      return box.showcase
                    }
                     if(this.state.listItem === 'web'){
                       return box.web
                     }
                     if(this.state.listItem === 'react'){
                       return box.react
                     }
                     if(this.state.listItem === 'UX/UI'){
                       return box.UX
                     }
                      return (true
                      )
                  }
                  ).map((item) => 
                        <ShowcaseItems 
                        imageLocation={item.url}
                        text={item.text}
                        code={item.code}
                        demo={item.demo}      
                        tech={item.tech} 
                        case={item.case}
                        casestudy={item.casestudy} 
                        figma={item.figma}
                        />
                  )}
         
                  </div>


                  
                </Layout>
        )
    }
}

export default About