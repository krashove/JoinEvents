import React from 'react'
import Cookies from "universal-cookie";

import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import profile from "../components/images/profile/foto_perfil.jpg";
import Preloader from "../components/preloader";
import Favoritos from '../components/Favoritos';
import EventosCreados from '../components/EventosCreados';
//import Button from "@material-ui/core/Button";

class InfoUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            eventos: [], 
            load: false,
            usuario:{
                nombre: 'defautl',
                apellido: 'default',
                email: 'default'
            }
        };
    }

    async componentDidMount(){
        let cookies = new Cookies()
        const tokenuser = cookies.get("token")
        const tipoUser = cookies.get("tipoUser")
        let url_web = process.env.REACT_APP_URL_WEBSERVICE + '/users/getinfo'
        let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: tokenuser })
        }
    
        let user = await fetch( url_web, requestOptions)
        let data = await user.json()
    
        this.setState({usuario: data.usuario})
        
        if(tipoUser==="proveedor"){
            url_web = process.env.REACT_APP_URL_WEBSERVICE + '/events/listProveedor'
            requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ proveedor: {id: data.usuario._id} })
            }
        }else{
            url_web = process.env.REACT_APP_URL_WEBSERVICE + '/events/obtieneFavoritos'
            requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user: {id: data.usuario._id} })
            }
        }
        
        user = await fetch( url_web, requestOptions)
        data = await user.json()
        if(data.eventos.length > 0 ){
            this.setState({eventos: data.eventos})
        }
        else{
            this.setState({eventos: []})
        }
        this.setState({load: true})

        console.log(data)
    }

    render(){
        let cookies = new Cookies()
        let tipeuser = cookies.get("tipoUser")
        return(
            <React.Fragment>
                {(this.state.load === false) ? 
                    <Preloader />
                :
                <React.Fragment>
                    <GridContainer justifyContent="center">
                        <GridItem xs={12} sm={12} md={6}>
                            <div className={this.props.classes.profile}> 
                                <div>
                                    <img src={profile} alt="..." className={this.props.imageClasses} />
                                </div>
                                <div className={this.props.classes.name}>
                                    <h3 className={this.props.classes.title}> {this.state.usuario.email} </h3>
                                    <h6>{this.state.usuario.nombre} {this.state.usuario.apellido}</h6>
                                </div>
                            </div>
                        </GridItem>
                    </GridContainer>
                    <div className={this.props.classes.description}>
                        <p>
                        Este es tu espacio, disfruta de tus eventos
                        favoritos las veces que quieras, con solo presionar un botón.{" "}
                        </p>
                    </div>
                    {(tipeuser==='proveedor'?
                        <div>
                            < EventosCreados creados={this.state.eventos} />
                        </div>
                    :
                        <div>
                            < Favoritos creados={this.state.eventos} />
                        </div>
                    )}
                    
                    
                </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default InfoUser;

/*{
                img: "../images/background/11.jpg",
                titulo: "Blockchain",
                detalles:
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,itaque distinctio. Facilis doloremque debitis minima dolorum.",
            },*/