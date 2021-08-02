import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/images/background/5.jpg';

class Forget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {useremil: 'Emai Address*',
    userpassword: 'Enter Password'};

    this.handleChange = this.handleChange.bind(this);
  }
  handleClick = e => {
    console.log('Button was clicked');
  };

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  iniciarSession = async () =>{
    let url_web = process.env.REACT_APP_URL_WEBSERVICE + '/users/login'
    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: { email: this.state.useremil, password: this.state.userpassword } })
    }

    let user = await fetch( url_web, requestOptions)
    let data = await user.json();

    window.location.href="./"
  };

  render(){
      return(
          <React.Fragment>
            <section className="page-title" style={{backgroundImage: `url(${Banner})`}}>
              <div className="auto-container">
                  <h1>Recuperar contraseña</h1>
                  <ul className="bread-crumb clearfix">
                      <li><Link to="/">Home</Link></li>
                      <li>Recuperar</li>
                  </ul>
              </div>
            </section>

            <section className="register-section">
              <div className="auto-container">
                <div className="form-box">
                  <div className="box-inner">
                    <h1>Reset Password</h1>
                    <div className="styled-form login-form">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <span className="adon-icon"><span className="fa fa-envelope"></span></span>
                          <input onChange={this.handleChange} 
                                  type="email" 
                                  name="useremil"  
                                  value={this.state.useremil} />
                        </div>
                        <div className="form-group">
                          <span className="adon-icon"><span className="fa fa-unlock"></span></span>
                          <input onChange={this.handleChange} 
                                  type="password" 
                                  name="userpassword" 
                                  value={this.state.userpassword}/>
                        </div>
                        <div className="clearfix">
                          <div className="form-group pull-left">
                            <button onClick={this.iniciarSession} type="button" className="theme-btn btn-style-two">
                              <span className="btn-title">Reset</span>
                            </button>
                          </div>
                        </div>
                        <div className="social-divider">
                          <div className="center-divider">
                            <span>or</span>
                          </div>
                        </div>
                        <div className="clearfix">
                          <div className="form-group social-icon-one pull-left">
                            <label className="remember-me"><Link to="./register">¿Desea Registrarse?</Link></label>
                          </div>
                          <div className="form-group social-icon-one pull-right">
                            <Link to="./forget" className="remember-me">¿Se olvido su contraseña?</Link>
                          </div>
                        </div>          
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </React.Fragment>
      );
  }
}
export default Forget;