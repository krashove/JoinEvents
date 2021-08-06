import React, { Component } from "react";

import Navibar from "../components/navibar.js";
import Preloader from "../components/preloader";
import NotesIcon from "@material-ui/icons/Notes";
import EventoDetalles from "../components/EventoDetalle.js";

export default class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evento: {
        img: "../images/background/11.jpg",
        fecha: "05/08",
        titulo: "Blockchain",
        detalles:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, excepturi optio vel esse at reiciendis ut nesciunt hic modi voluptatum quae facilis quo, itaque distinctio. Facilis doloremque debitis minima dolorum.",
        precio: "$1.99",
        origen: "TEDx",
        hora: "20:00",
        plataforma: "Amazon Prime",
        twitter: "https://twitter.com/TEDx",
      },
      load: false
    };
  }

  async componentDidMount(){
    let url_web = process.env.REACT_APP_URL_WEBSERVICE + '/events/getinfo'
    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                  'token': 'acbacnaic' },
      body: JSON.stringify({ evento: { id: this.props.parametros.id } })
    }

    let user = await fetch( url_web, requestOptions)
    let data = await user.json()

    console.log(data)

    this.setState({evento: {  img: data.evento.imagen,
                              fecha: data.evento.fechaInicio,
                              titulo: data.evento.nombre,
                              detalles: data.evento.descripcion,
                              precio: data.evento.precio,
                              origen: data.proveedor.nombre,
                              plataforma: data.proveedor.plataforma
                            }})
    this.setState({load: true})
  }

  render() {
    //this.componentDidMount()
    return (
      <React.Fragment>
        {(this.state.load === false) ? 
            <Preloader />
        :
        <React.Fragment>
          <div>
            <Navibar route="Detalles del Evento" iconRoute={<NotesIcon />} />
          </div>
          <div>
            <EventoDetalles card={this.state.evento} /> 
          </div>
        </React.Fragment>
        }
      </React.Fragment>
    );
  }
}
