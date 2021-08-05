import React, { Component } from "react";

import Navibar from "../components/navibar.js";
import NotesIcon from "@material-ui/icons/Notes";
import EventoDetalles from "../components/EventoDetalle.js";

export default class EventDetails extends Component {
  state = {
    evento: {
      img: "./images/background/11.jpg",
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
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Navibar route="Detalles del Evento" iconRoute={<NotesIcon />} />
        </div>
        <div>
          <EventoDetalles card={this.state.evento} />
        </div>
      </React.Fragment>
    );
  }
}
