import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import Banner from '../components/images/background/1.jpg';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: 'Nombre*',
    userlastname: 'Apellidos*',
    useremil: 'Email*',
    userpassword: 'Contraseña*'};

    this.handleChange = this.handleChange.bind(this);
  }

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

  crearUser = async () =>{
    let url_web = process.env.REACT_APP_URL_WEBSERVICE + '/users/createuser'
    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre: this.state.username,
      apellido: this.state.userlastname,
      email: this.state.useremil,
      password: this.state.userpassword })
    }

    let user = await fetch( url_web, requestOptions)
    let data = await user.json();

    let cookies = new Cookies();
    cookies.set('name', data.newUser.name,{path: "/"})

    window.location.href="./" 
  };

  render(){
      return(
          <React.Fragment>
            <section className="page-title" style={{backgroundImage: `url(${Banner})`}}>
              <div className="auto-container">
                  <h1>registrate</h1>
                  <ul className="bread-crumb clearfix">
                      <li><Link to="/">Home</Link></li>
                      <li>registrate</li>
                  </ul>
              </div>
            </section>

            <section className="register-section">
              <div className="auto-container">
                <div className="form-box">
                  <div className="box-inner">
                    <h1>Welcome to JoinEvents</h1>
                    <div className="styled-form login-form">
                      <form onSubmit={this.handleSubmit}>
                        <div className="clearfix">
                          <div className="form-group pull-left">
                            <span className="adon-icon"><span className="fa fa-user"></span></span>
                            <input onChange={this.handleChange} 
                                  type="text" 
                                  name="username"  
                                  value={this.state.username} />
                          </div>
                          <div className="form-group pull-right">
                            <span className="adon-icon"><span className="fa fa-user"></span></span>
                            <input onChange={this.handleChange} 
                                  type="text" 
                                  name="userlastname"  
                                  value={this.state.userlastname} />
                          </div>
                        </div>
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
                          <div className="pull-left">
                              <input type="checkbox" id="remember-me"/><label className="remember-me" for="remember-me">&nbsp; Acepta terminos y condiciones</label>
                          </div>
                        </div>
                        <div className="clearfix">
                          <div className="form-group social-icon-one pull-left">
                            <button onClick={this.crearUser} type="button" className="theme-btn btn-style-two">
                              <span className="btn-title">Register</span>
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
                            <label className="remember-me"><Link to="./login">¿Ya tienes una cuentas? Ingresa</Link></label>
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
export default Register;