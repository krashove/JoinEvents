import React from "react";
import Cookies from "universal-cookie";

import Navibar from "../components/navibar.js";
import EventosDestacados from "../components/EventosDestacados.js";
import Album from "../components/album.js";
import Preloader from "../components/preloader.js";

import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

class Principal extends React.Component {
  state = {
    normales: [],
    destacados: [],
    searchBar: "",
    load: false,
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
    this.setState({ load: true });
  }

  render() {
    const { normales, searchBar, destacados } = this.state;
    const normalFilteredEvents = normales.filter((normalEvent) =>
      normalEvent.nombre.toLowerCase().includes(searchBar.toLowerCase())
    );
    const destacFilteredEvents = destacados.filter((destacEvent) =>
      destacEvent.nombre.toLowerCase().includes(searchBar.toLowerCase())
    );

    return (
      <React.Fragment>
        {!this.state.load ? (
          <Preloader />
        ) : (
          <React.Fragment>
            <div>
              <Navibar route="Home" iconRoute={<MeetingRoomIcon />} />
            </div>
            <div>
              <Album cards={normalFilteredEvents} />
            </div>
            <div>
              <EventosDestacados cards={destacFilteredEvents} />
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default Principal;
