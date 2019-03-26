import React, {
    Component
} from 'react';
import "./main.scss";
import bullet from '../../images/BulletinBoardApp.png';
import completeautomation from '../../images/portfolio/CALsite.png';
import taranakikarate from '../../images/portfolio/TKsite.png';
import tac from '../../images/portfolio/apptictactoe.png';
import moveAbroad from '../../images/portfolio/MoveAbroad.png';
import newsApp from '../../images/portfolio/newsApp.png';
import mockUI from '../../images/portfolio/mockUI.png';
import gardenAni from '../../images/portfolio/gardenAni.png';


import Layout from '../../components/layout'

function ShowcaseItems(props){
  return(
                <div className="list--item">
                  <a ><img src={props.imageLocation}/></a>
                  <div className="list--item--text">
                  <a className="button button--code" href={props.code}>Code</a>
                  <a className="button button--demo" href={props.demo}>Demo</a>
                  <div>{props.text}</div>
                  </div>
                </div>
    
  )

}



class About extends Component{

constructor(props){
super(props);

this.state = {
  listItem: 'showcase',
  items:[{
    url: tac,
    text: "Tic Tac Toe App",
    demo: 'https://apptictactoe.herokuapp.com/',
    code: 'https://github.com/NaSymbol/tiktac-toe',
    tech: 'react, gatsby',
    showcase: true,
    web: true,
    react: true,
    app: true,
    UX: false
  },
  {
    url: bullet,
    text: "Bulletin Board App",
    demo: 'https://bulletin-board-app.herokuapp.com/',
    code: 'https://github.com/NaSymbol/bulletinboard',
    showcase: true,
    web: true,
    react: true,
    UX: true

  },
  {
    url: newsApp,
    text: "News App",
    demo: '',
    code: 'https://github.com/NaSymbol/News-App',
    web: false,
    react: true,
    showcase: true
  },
  {
    url: mockUI,
    text: "Vend.com Application Mock",
    demo: 'http://www.pbtech.com',
    code: 'http://www.github.com',
    web: false,
    react: false,
    UX: true
  },
  {
    url: taranakikarate,
    text: "Taranaki Karate",
    demo: 'http://taranakikarate.co.nz/',
    code: '',
    web: true,
    react: false
  },
  {
    url: completeautomation,
    text: "Complete Automation Ltd",
    demo: 'http://completeautomation.co.nz/',
    code: '',
    web: true,
    react: false
  },
  {
    url: moveAbroad,
    text: "MoveAbroad Australia",
    demo: '',
    code: '',
    web: true,
    react: false
  },
  {
    url: gardenAni,
    text: "Snap.svg Garden Animaton",
    demo: '',
    code: '',
    web: true,
    react: false
  },
  // {
  //   url: "https://via.placeholder.com/500x250",
  //   text: "text inside array 4",
  //   demo: 'http://www.pbtech.com',
  //   code: 'http://www.github.com',
  //   web: true,
  //   react: true
  // },
  ]

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
             <div className="FilterItems">
             <div>
             <div onClick={() => this.handleTest('showcase')
              }>Showcase</div>
             <div onClick={() => this.handleTest('all')
              }>All</div>
             <div onClick={() => this.handleTest('react')
              }>React</div>
                 <div onClick={() => this.handleTest('web')
              }>Web</div>
                  <div onClick={() => this.handleTest('UX/UI')
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
                        />
                  )}
         
                  </div>


                  
                </Layout>
        )
    }
}

export default About