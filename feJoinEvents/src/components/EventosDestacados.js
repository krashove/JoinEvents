import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

export default class EventosDestacados extends Component {
  render() {
    return (
      <div>
        <Container>
          <h2>Eventos Destacados</h2>
        </Container>
        <Container fluid="sm">
          <Row xs={2} md={4} className="g-4">
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
                          <Button variant="outline-warning">Participar</Button>
                        </Col>
                        <Col>
                          <Button variant="outline-danger">Favorito</Button>
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
