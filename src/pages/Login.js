import React from 'react';
import { Link } from 'react-router-dom';
import cookies from 'universal-cookie';

import Banner from '../components/images/background/5.jpg';

class Login extends React.Component {
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
    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*' },
      mode: 'no-cors',
      body: JSON.stringify({ user: { email: this.state.useremil, password: this.state.userpassword } })
    }
    console.log(requestOptions)
    let user = await fetch('http://localhost:3200/users/login', requestOptions)
    console.log(user)
    /*let data = user.json();

    cookies.set('token', data.user.token,{path: "/"})
    cookies.set('name', data.user.name,{path: "/"})
    cookies.set('tipoUser', data.user.tipoUser,{path: "/"})

    window.location.href="./"*/
  };

  render(){
      return(
          <React.Fragment>
            <section className="page-title" style={{backgroundImage: `url(${Banner})`}}>
              <div className="auto-container">
                  <h1>login</h1>
                  <ul className="bread-crumb clearfix">
                      <li><Link to="/">Home</Link></li>
                      <li>login</li>
                  </ul>
              </div>
            </section>

            <section className="register-section">
              <div className="auto-container">
                <div className="form-box">
                  <div className="box-inner">
                    <h1>Login Now</h1>
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
                              <span className="btn-title">Login Now</span>
                            </button>
                          </div>
                          <div className="form-group social-icon-one pull-right">
                            <input type="checkbox" id="remember-me"/>
                            <label className="remember-me" htmlFor ="remember-me">&nbsp; Remember Me</label>
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
export default Login;