import React, { Component } from "react";

import Navibar from "../components/navibar.js";
import NotesIcon from "@material-ui/icons/Notes";

export default class EventDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Navibar route="Detalles del Evento" iconRoute={<NotesIcon />} />
        </div>
        <div></div>
      </React.Fragment>
    );
  }
}
