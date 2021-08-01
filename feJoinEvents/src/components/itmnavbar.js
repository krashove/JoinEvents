import React from 'react';
import './styles/style.css';

class itmNavBar extends React.Component {
    render(){
        return (
            <li><a href={this.props.itm.llink}>{this.props.itm.descrip}</a></li>
        );
    }
};

export default itmNavBar;