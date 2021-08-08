import React, { Component } from "react";
import Cookies from "universal-cookie";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  textobuttonv: {
    color: "white",
  },
});

class EventosDestacados extends Component {
  state = {
    message: "",
  };

  async agregarFavorito(id, e) {
    e.preventDefault();
    let cookies = new Cookies();
    let iduser = cookies.get("id");
    let url_web = process.env.REACT_APP_URL_WEBSERVICE + "/events/setfavorito";
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: { id: iduser }, evento: { id } }),
    };
    let user = await fetch(url_web, requestOptions);
    let data = await user.json();
    this.setState({ message: data.error });
    window.alert("se agrego evento a tus favoritos ");
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container maxWidth="md">
          <h2>Eventos Destacados</h2>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Row xs={2} md={3} className="g-4">
            {this.props.cards.map((carditm) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="./images/background/6.jpg" />
                  <Card.Body>
                    <Card.Title>{carditm.nombre}</Card.Title>
                    <Card.Text> {carditm.descripcion} </Card.Text>
                    <Container fluid="md">
                      <Row className="justify-content-md-center justify-content-sm-center">
                        <Col>
                          <Button variant="outline-warning">
                            <Link to={`/eventparticipation/${carditm._id}`}>
                              Participar{" "}
                            </Link>
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            onClick={this.agregarFavorito.bind(
                              this,
                              carditm._id
                            )}
                            variant="outline-danger"
                          >
                            Favorito
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

EventosDestacados.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventosDestacados);
