
import React, {
    Component
} from 'react';
import Layout from '../../components/layout';

import mockUI from '../../images/portfolio/mockUI.jpg';

import "./ticTacToeApp.scss";
class TicTacToeApp extends Component{

    
constructor(props){
    super(props);
    
    this.state = {
        title: 'Tic Tac Toe App',
        description: 'this is the description',
        figma: 'www.figma.com',
        github: 'www.github.com',
        demo: 'www.stuff.co.nz',
        UIimage: 'https://www.placehold.it/400x100'


    }

}

    
    render() {
        return ( 
            <Layout>
            <div className="ContactPage">
                <div>
                <h1 className="title">{this.state.title}</h1>
                <p className="description">
                    {this.state.description}         hello 
                </p>
                
                <div className="links">
                    <a href={this.state.github}><p>Github</p></a>
                    <a href={this.state.demo}><p>Demo</p></a>
                    <a href={this.state.figma}><p>Figma</p></a>
                </div>

                <div className="UIUX">
                <img src={mockUI}/>
                <p>
                    this is text for UI/UX
                </p>
                </div>
                <div className='userStories'>
                <img src={mockUI}/>
                <img src={mockUI}/>

                </div>
            </div>
        </div>
          </Layout>

        )
    }
}

export default TicTacToeApp