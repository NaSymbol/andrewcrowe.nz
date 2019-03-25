import React, {
    Component
} from 'react';
import Layout from '../../components/layout'
import "./template.scss";

class Template extends Component{


    
    render() {
        return ( 
            <Layout>
            <div className="template">
                <div>
                <img src={'https://via.placeholder.com/500x1200'} alt=""></img>
                </div>


                <div className="template--content">
                <h1>Portfolio Template</h1>


                <h2>Logo Development</h2>
                <p>
                Ut dignissim condimentum orci ac finibus. In mollis facilisis ullamcorper.
                </p>
                <p>
                In hac habitasse platea dictumst. Donec sit amet facilisis libero. Praesent est massa, eleifend vel tristique vel, fermentum et tortor. 
                Integer enim neque, elementum sed dolor ac, vehicula scelerisque ipsum. Nullam ac augue laoreet, consectetur dolor et, aliquet metus.In hac habitasse platea dictumst. Donec sit amet facilisis libero. Praesent est massa, eleifend vel tristique vel, fermentum et tortor. 
                Integer enim neque, elementum sed dolor ac, vehicula scelerisque ipsum. Nullam ac augue laoreet, consectetur dolor et, aliquet metus.
                </p>
                <p>
                In hac habitasse platea dictumst. Donec sit amet facilisis libero. Praesent est massa, eleifend vel tristique vel, fermentum et tortor. 
                Integer enim neque, elementum sed dolor ac, vehicula scelerisque ipsum. Nullam ac augue laoreet, consectetur dolor et, aliquet metus.
                </p>    
                <img src={'https://via.placeholder.com/500x250'} alt=""></img>
                <p>
                In hac habitasse platea dictumst. Donec sit amet facilisis libero. Praesent est massa, eleifend vel tristique vel, fermentum et tortor. 
                Integer enim neque, elementum sed dolor ac, vehicula scelerisque ipsum. Nullam ac augue laoreet, consectetur dolor et, aliquet metus.
                </p>  
                <img src={'https://via.placeholder.com/500x250'} alt=""></img>

                </div>
                
            </div>
 
          </Layout>

        )
    }
}

export default Template