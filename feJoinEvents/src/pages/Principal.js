import React from 'react';
import Navbar from '../components/navbar.js';

class Principal extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div>
                    <Navbar />
                </div>
            </React.Fragment>
        );
    }
}
export default Principal;