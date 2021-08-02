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
            {Array.from({ length: 8 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="./images/background/6.jpg" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
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
