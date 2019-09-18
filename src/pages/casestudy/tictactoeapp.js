
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
        title: 'Tic Tac Toe App',
        description: 'Quisque tortor ante, fringilla vel laoreet nec, blandit eu ante. Nulla a sagittis ligula. Morbi non auctor urna. Suspendisse rhoncus justo vitae dui finibus finibus. Nulla tristique tincidunt vehicula. Maecenas luctus, mauris ultricies semper blandit, mi neque gravida nisi, lobortis sollicitudin dui massa ut mi. Vivamus accumsan vel purus dignissim tempus.',
        figma: 'www.figma.com',
        github: 'www.github.com',
        demo: 'www.stuff.co.nz',
        UIimage: 'https://via.placeholder.com/150',
        figmaImages: [figma1, figma2, figma3, figma4, figma5]


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
                        {this.state.description}         hello 
                    </p>
                
                
                <div className="links center-items">
                    <a className='button button--code' href={this.state.github}><p>Github</p></a>
                    <a className='button button--demo' href={this.state.demo}><p>Demo</p></a>
                    <a className='button button--code' href={this.state.figma}><p>Figma</p></a>
                </div>

                </div>

                <div className="section-block UIUX">
                        <p className='section-heading'>UI/UX</p>
                        <div className="section">
                        {/* <img src={this.state.UIimage}/> */}
                        <p>
                        Quisque tortor ante, fringilla vel laoreet nec, blandit eu ante. Nulla a sagittis ligula. Morbi non auctor urna. Suspendisse rhoncus justo vitae dui finibus finibus. Nulla tristique tincidunt vehicula. Maecenas luctus, mauris ultricies semper blandit, mi neque gravida nisi, lobortis sollicitudin dui massa ut mi. Vivamus accumsan vel purus dignissim tempus.
                        </p>
                        </div>
                        {this.state.figmaImages.map((item)=>{
                            return <img src={item}/>
                        })
                        }
                        
                </div>

                <div className='section-block userStories'>
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




                </div>
                <div className="section-block">
                    <p className='section-heading'>Conclusion</p>
                    <div className="section">
                    <img src={conclusion1}/>
                    {/* video section */}
                                {/* <video controls>
                <source src={cypressTest} type="video/mp4" />
            </video> */}
                        <p>
Finishing off the app and upload it to the server. Below is a link to the demo of the app working.
                        </p>
                        <a className='button button--demo' href={this.state.demo}><p>Demo</p></a>
                    </div>

                </div>
            </div>
        
          </Layout>

        )
    }
}

export default TicTacToeApp