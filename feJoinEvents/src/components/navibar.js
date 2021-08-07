import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

import "./styles/style.css";
import "./styles/navibar.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import IconButton from "@material-ui/core/IconButton";
import Container from "react-bootstrap/Container";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const cerrarSession = () => {
  let cookies = new Cookies();
  cookies.remove("token", { path: "/" });
  cookies.remove("name", { path: "/" });
  cookies.remove("tipoUser", { path: "/" });
  cookies.remove("id", { path: "/" });

  window.location.href = "./";
};

function Navibar(props) {
  const classes = useStyles();

  let cookies = new Cookies();
  let tipeuser = cookies.get("tipoUser");
  if (!tipeuser) {
    tipeuser = "default";
  }
  let usuario = cookies.get("name");
  //let id = cookies.get("id");

  return (
    <Navbar collapseOnSelect expand="lg" bg="lg">
      <AppBar position="relative">
        <Toolbar>
          <Navbar.Brand href="/">
            <img
              className="navibar-logo"
              src="./images/JoinEvents-logo-3.png"
              alt=""
            />
          </Navbar.Brand>
          {props.iconRoute}
          <Nav>
            <Typography variant="h6" color="inherit" noWrap>
              {props.route} &nbsp;&nbsp;
            </Typography>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Buscar Evento / Categoria"
                    className="mr-2"
                    aria-label="Buscar"
                    onChange={props.handleChange}
                  />
                  <Button className="theme-btn btn-style-one">
                    <span className="btn-title">Buscar</span>
                    &nbsp;&nbsp;&nbsp;
                  </Button>
                </Form>
              </Nav>
              {tipeuser === "default" ? (
                <Nav>
                  <IconButton
                    variant="outlined"
                    color="secondary"
                    size="small"
                    component="span"
                  >
                    <Link to="/login">Log-In</Link>
                    <PersonIcon />
                  </IconButton>
                  <IconButton color="secondary" size="small" component="span">
                    <Link to="/register">Registrarse</Link>{" "}
                    <AssignmentIndIcon />
                  </IconButton>
                </Nav>
              ) : (
                <Nav>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      variant="secondary"
                    >
                      <PersonIcon className={classes.icon} />
                      {usuario} &nbsp;▾
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href={`/profile`}>Mi Perfil</Dropdown.Item>
                      {tipeuser === "proveedor" ? (
                        <React.Fragment>
                          <Dropdown.Item href="/genevento">
                            Crear Evento
                          </Dropdown.Item>
                          <Dropdown.Item href="/profile">
                            Mis Eventos
                          </Dropdown.Item>
                        </React.Fragment>
                      ) : (
                        <Dropdown.Item href="/profile">Favoritos</Dropdown.Item>
                      )}
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={cerrarSession}>
                        Cerrar Sesión
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Toolbar>
      </AppBar>
    </Navbar>
  );
}
// Boton Usuario
//              <Nav>
//                <Dropdown>
//                  <Dropdown.Toggle
//                    id="dropdown-button-dark-example1"
//                    variant="secondary"
//                  >
//                    <PersonIcon className={classes.icon} />
//                    Usuario &nbsp;▾
//                  </Dropdown.Toggle>
//
//                  <Dropdown.Menu variant="dark">
//                    <Dropdown.Item href="#/action-1">Mi Perfil</Dropdown.Item>
//                    <Dropdown.Divider />
//                    <Dropdown.Item href="#/action-2">
//                      Cerrar Sesión
//                    </Dropdown.Item>
//                  </Dropdown.Menu>
//                </Dropdown>
//              </Nav>

// {/* <div className="auto-container clearfix">
//     <div className="logo-box">
//       <div className="logo">
//         <a href="index-2.html">
//           <img src="images/JoinEvents-logo-3.png" alt="" title=""></img>
//         </a>
//       </div>
//     </div>

//     <div className="nav-outer clearfix">
//       <div className="mobile-nav-toggler">
//         <span className="icon flaticon-menu"></span>
//       </div>

//       <nav className="main-menu navbar-expand-md navbar-light">
//         <div className="navbar-header">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="icon flaticon-menu-button"></span>
//           </button>
//         </div>

//         <div
//           className="collapse navbar-collapse clearfix"
//           id="navbarSupportedContent"
//         >
//           <ul className="navigation clearfix">
//             {this.state.items.map((item) => {
//               return <Itmnavbar itm={item} />;
//             })}
//           </ul>
//         </div>
//       </nav>

//       <div className="outer-box">
//         <div className="search-box-outer">
//           <div className="search-box-btn">
//             <span className="flaticon-search"></span>
//           </div>
//         </div>

//         <div className="btn-box">
//           <a href="buy-ticket.html" className="theme-btn btn-style-one">
//             <span className="btn-title">Get Tickets</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div> */}

export default Navibar;
