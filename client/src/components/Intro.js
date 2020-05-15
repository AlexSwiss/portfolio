import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Intro = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="6" sm="4">Alexander</Col>
      </Row>
      <Row>
        <Col xs="6" sm="4">Hello!</Col>
      </Row>
      <Row>
        <Col sm="4">I am a Golang Backend engineer and i am passionate about solving problems</Col>
        <Col sm="4"></Col>
      </Row>
    </Container>
  );
}

export default Intro;