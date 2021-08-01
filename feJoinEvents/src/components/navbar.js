import React from 'react';
import './styles/style.css';
import Itmnavbar from './itmnavbar.js';


class Navbar extends React.Component {
    state = {
        items:[
            {
                "llink": "/contacto",
                "descrip": "Contacto"
            },
            {
                "llink": "/contacto2",
                "descrip": "Contacto2"
            }
        ]
    };

    render() {
        return (
            <header className="main-header">
                <div className="main-box">
        	        <div className="auto-container clearfix">
                        <div className="logo-box">
                            <div className="logo"><a href="index-2.html"><img src="images/logo.png" alt="" title=""></img></a></div>
                        </div>

                        <div className="nav-outer clearfix">
                            <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>

                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="navbar-header">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon flaticon-menu-button"></span>
                                    </button>
                                </div>
                                
                                <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                    {this.state.items.map((item) => {
                                        return( <Itmnavbar itm={item} />)
                                    })}
                                    </ul>
                                </div>
                            </nav>
                            
                            <div className="outer-box">
                                <div className="search-box-outer">
                                    <div className="search-box-btn"><span className="flaticon-search"></span></div>
                                </div>

                                <div className="btn-box">
                                    <a href="buy-ticket.html" className="theme-btn btn-style-one"><span className="btn-title">Get Tickets</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>

                    <div className="close-btn"><span className="icon flaticon-cancel-1"></span></div>

                    <nav className="menu-box">
                        <div className="nav-logo"><a href="index-2.html"><img src="images/logo-2.png" alt="" title=""></img></a></div>
                        <ul className="navigation clearfix"></ul>
                    </nav>
                </div>
            </header>
        )
    }
};

export default Navbar;