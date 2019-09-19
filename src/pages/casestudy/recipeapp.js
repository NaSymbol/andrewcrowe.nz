
import React, {
    Component
} from 'react';
import Layout from '../../components/layout';


import "./ticTacToeApp.scss";

import figma1 from '../../images/casestudy/tictactoe/figma1.png';
import figma2 from '../../images/casestudy/tictactoe/figma2.png';
import figma3 from '../../images/casestudy/tictactoe/figma3.png';
import figma4 from '../../images/casestudy/tictactoe/figma4.png';
import figma5 from '../../images/casestudy/tictactoe/figma5.png';
import conclusion1 from '../../images/casestudy/tictactoe/conclusion1.png';
import cypressTest from '../../images/casestudy/tictactoe/cypress-test-views.mp4';
class TicTacToeApp extends Component{

    
constructor(props){
    super(props);
    
    this.state = {
        title: 'Mobile Recipe App',
        description: 'The purpose of this app is that it allows two players to play Tic Tac Toe against each other. This project was base on the tutorial from the React.JS main website and then built upon it. The figma link is the UI/UX of the app with prototyping. The Github links to the code where you can download the code and run it for yourself. ',
        figma: 'https://www.figma.com/file/SKElDxkuOSNtlpqBmTcVLACs/Projects-tic-tac-toe?node-id=1%3A2',
        github: 'https://github.com/NaSymbol/tic-tac-toe',
        demo: 'https://apptictactoe.herokuapp.com/',
        UIimage: 'https://via.placeholder.com/150',
        figmaImages: [{image: figma1, id: 1},{image: figma2, id: 2},{image: figma3, id: 3},{image: figma4, id: 4},{image: figma5, id: 5}],
        conclusionDescr: 'Finishing off the app and upload it to the server. Below is a link to the demo of the app working. Where you can go and test out how the app works.',
        UIDescr: 'The UI and UX were built in Figma which allows for prototype the app. The below images show the building of each component to be used in the development of the prototype. The protoype shows how a user would ',
        conclusionImage: conclusion1
    }

}

    
    render() {
        return ( 
            <Layout>
            <div className="casestudy">
                <div className='section-block introduction'>
                    <h1 className="title">{this.state.title}</h1>
                    <h2 className='section-heading'>Description</h2>
                    <p className="description">
                        {this.state.description}
                    </p>

                    {/* <div>
                    <h3>Technologie used:</h3>
                    <ul>
                        <li>End to End: Cypress</li>
                        <li>create-react-app</li>
                        <li>Testing: Jest.IO, Enzyme</li>

                    </ul>
                    </div> */}
                
                
                <div className="links center-items">
                    <a target="_blank" rel="noopener" className='button button--code' href={this.state.github}><p>Github</p></a>
                    <a target="_blank" rel="noopener" className='button button--demo' href={this.state.demo}><p>Demo</p></a>
                    <a target="_blank" rel="noopener" className='button button--code' href={this.state.figma}><p>Figma</p></a>
                </div>

                </div>

                <div className="section-block UIUX">
                        <p className='section-heading'>UI/UX</p>
                        <div className="section">
                        {/* <img src={this.state.UIimage}/> */}
                        <p>
                            {this.state.UIDescr}
                        </p>
                        </div>
                        <div className="section-images">
                        {this.state.figmaImages.map((item)=>{
                            return <img key={item.id} src={item.image}/>
                        })
                        }
                        </div>
                        
                </div>

                {/* <div className='section-block userStories'>
                <p className='section-heading'>User Stories</p>
                <div className=''>
                <div className='user-story-item'>
                        <p className='user-story-title'>user story</p>                    
                        <img src={this.state.UIimage}/>
                </div>
              
                <div className='user-story-item'>
                        <p className='user-story-title'>user story</p>                    
                        <img src={this.state.UIimage}/>       
                </div>
                </div>
                </div> */}



                <div className="section-block conclusion-section">
                    <p className='section-heading'>Conclusion</p>
                    <div className="">
                    <img src={this.state.conclusionImage}/>
                    {/* video section */}
                                {/* <video controls>
                <source src={cypressTest} type="video/mp4" />
            </video> */}
                        <p>
{this.state.conclusionDescr}
                        </p>
                        <a target="_blank" rel="noopener" className='button button--demo' href={this.state.demo}><p>Demo</p></a>
                    </div>

                </div>
            </div>
        
          </Layout>

        )
    }
}

export default TicTacToeApp