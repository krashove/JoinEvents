import React from "react";
import Navibar from "../components/navibar.js";
import EventosDestacados from "../components/EventosDestacados.js";
import Album from "../components/album.js";
import Cookies from "universal-cookie";

import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

class Principal extends React.Component {
  state = {
    normales: [],
    destacados: [],
  };

  async componentDidMount() {
    let cookies = new Cookies();
    let tipeuser = cookies.get("tipoUser");
    if (!tipeuser) {
      tipeuser = "default";
    }

    let url_web =
      process.env.REACT_APP_URL_WEBSERVICE + "/events/listDisponibles";
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };

    let user = await fetch(url_web, requestOptions);
    let data = await user.json();

    this.setState({ normales: data.eventos });

    url_web =
      process.env.REACT_APP_URL_WEBSERVICE + "/events/listDisponiblesDestado";
    requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };

    user = await fetch(url_web, requestOptions);
    data = await user.json();

    this.setState({ destacados: data.eventos });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Navibar route="Home" iconRoute={<MeetingRoomIcon />} />
        </div>
        <div>
          <Album cards={this.state.normales} />
        </div>
        <div>
          <EventosDestacados cards={this.state.destacados} />
        </div>
      </React.Fragment>
    );
  }
}
export default Principal;
