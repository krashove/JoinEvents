import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/images/background/5.jpg';

class Forget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {useremil: 'Emai Address*', message: true};

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

  resetPassword = async () =>{
    let url_web = process.env.REACT_APP_URL_WEBSERVICE + '/users/recuperaPassword'
    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: this.state.useremil })
    }

    let user = await fetch( url_web, requestOptions)
    let data = await user.json();

    this.setState({message:false})
  };

  regresaLogin = async () => {
    window.location.href="./login"
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
                      {this.state.message ? 
                        <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <span className="adon-icon"><span className="fa fa-envelope"></span></span>
                            <input onChange={this.handleChange} 
                                    type="email" 
                                    name="useremil"  
                                    value={this.state.useremil} />
                          </div>
                          <div className="clearfix">
                            <div className="form-group pull-left">
                              <button onClick={this.resetPassword} type="button" className="theme-btn btn-style-two">
                                <span className="btn-title">Reset</span>
                              </button>
                            </div>
                            <div className="form-group pull-right">
                              <button onClick={this.regresaLogin} type="button" className="theme-btn btn-style-two">
                                <span className="btn-title">Cancelar</span>
                              </button>
                            </div>
                          </div>      
                        </form>
                        :
                        <div>
                          Se le envio correo al {this.state.useremil} para restablecer su contraseña
                        </div>
                      }
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