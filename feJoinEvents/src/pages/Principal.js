import React from "react";
import Navibar from "../components/navibar.js";
import EventosDestacados from "../components/EventosDestacados.js";

class Principal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Navibar />
        </div>
        <div>
          <EventosDestacados />
        </div>
      </React.Fragment>
    );
  }
}
export default Principal;
