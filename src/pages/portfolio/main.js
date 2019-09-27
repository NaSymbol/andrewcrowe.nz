import React, {
    Component
} from 'react';

import { Link } from "gatsby"

import "./main.scss";


// import dataFile from '../../../static/data';
import Layout from '../../components/layout'







import bullet from '../../images/portfolio/BulletinBoardApp.jpg';
import completeautomation from '../../images/portfolio/CALsite.jpg';
import taranakikarate from '../../images/portfolio/TKsite.jpg';
import tac from '../../images/portfolio/apptictactoe.jpg';
import moveAbroad from '../../images/portfolio/MoveAbroad.jpg';
import newsApp from '../../images/portfolio/newsApp.jpg';
import mockUI from '../../images/portfolio/mockUI.jpg';
import gardenAni from '../../images/portfolio/gardenAni.jpg';
import recipeApp from '../../images/portfolio/recipeApp.png';
import portfolioIMG from '../../images/portfolio/portfolio.png';


const dataFile = [{
    url: tac,
    text: "Tic Tac Toe App",
    demo: 'https://apptictactoe.herokuapp.com/',
    code: 'https://github.com/NaSymbol/tic-tac-toe',
    figma: 'https://www.figma.com/file/SKElDxkuOSNtlpqBmTcVLACs/Projects-tic-tac-toe?node-id=1%3A2',
    tech: 'React, CSS, create-react-app, Figma, git',
    casestudy: 'casestudy/tictactoeapp',
    showcase: false,
    web: true,
    react: true,
    app: true,
    UX: false
  },
  {
    url: recipeApp,
    text: "Mobile Recipe App",
    demo: '',
    figma: 'https://www.figma.com/file/fzaVq9tBHfUETIxhYhzToQRm/Projects-RecipeMobileApp?node-id=71%3A175',
    code: 'https://github.com/NaSymbol/RecipeMobileApp',
    // casestudy: 'casestudy/recipeapp',
    tech: 'React Native, Expo, Food2Fook API, git, Figma',
    showcase: true,
    web: false,
    react: true,
    UX: true
  

  },
  {
    url: bullet,
    text: "Bulletin Board App",
    demo: 'https://bulletin-board-app.herokuapp.com/',
    code: 'https://github.com/NaSymbol/bulletinboard',
    tech: 'React, SCSS, git, Figma',
    figma: 'https://www.figma.com/file/JX4PYu8qq9R8T2a1nAYnO5O4/Projects-BulletinBoard?node-id=62%3A94',
    // casestudy: 'casestudy/bulletinboard',
    showcase: true,
    web: true,
    react: true,
    UX: true

  },
  {
    url: newsApp,
    text: "News App",
    demo: 'https://news-app4.herokuapp.com/',
    code: 'https://github.com/NaSymbol/News-App',
    figma: '',
    tech: 'React, Html, CSS, Git, Responsive, newsapi.org, moment.js, grid, Figma, flex',
    // casestudy: 'casestudy/newspaper',
    web: false,
    react: true,
    showcase: true
  },
  {
    url: mockUI,
    text: "Vend.com Application Mock",
    demo: '',
    code: '',
    figma: 'https://www.figma.com/file/F9xRMBW1ckb3u1inZbrFd7xR/Mock-VendHQ?node-id=10%3A36',
    tech: 'Figma',
    web: false,
    react: false,
    UX: true
  },
  {
    url: taranakikarate,
    text: "Taranaki Karate",
    demo: 'http://taranakikarate.co.nz/',
    code: '',
    tech: 'Html & CSS',
    web: true,
    react: false
  },
  {
    url: completeautomation,
    text: "Complete Automation Ltd",
    demo: 'http://completeautomation.co.nz/',
    code: '',
    tech: 'Html & CSS',
    web: true,
    react: false
  },
  {
    url: moveAbroad,
    text: "MoveAbroad Australia",
    demo: '',
    code: '',
    tech: 'Html & CSS',
    web: true,
    react: false
  },
  {
    url: gardenAni,
    text: "Snap.svg Garden Animaton",
    demo: '',
    code: 'https://github.com/NaSymbol/Svg-Animation',
    tech: 'SVG, CSS animations, Snap.svg',
    web: true,
    react: false
  },
    {
    url: portfolioIMG,
    text: "Portfolio Site",
    demo: '',
    code: 'https://github.com/NaSymbol/andrewcrowe.nz',
    figma: 'https://www.figma.com/file/MPwfkStmmxGPhDA2lTOnjat6/Projects-AndrewCrowe.nz?node-id=1%3A2',
    web: true,
    react: true,

  }
  // {
  //   url: "https://via.placeholder.com/500x250",
  //   text: "text inside array 4",
  //   demo: 'http://www.pbtech.com',
  //   code: 'http://www.github.com',
  //   web: true,
  //   react: true
  // },
  ]


  // export default dataFile;





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


