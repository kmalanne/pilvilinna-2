import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import {
  faBirthdayCake,
  faCookie,
  faBreadSlice,
} from '@fortawesome/free-solid-svg-icons';
import { ServiceItem } from '../../components/ServiceItem';
import './index.css';

export const Home = () => (
  <div className="content home">
    <Jumbotron>
      <h1>Herkkuja Pilvilinnasta</h1>
      <p>Makeat ja suolaiset tarjoiltavat tilauksesta</p>
      <p>
        <a className="pill-btn" href="contact">
          Ota yhteyttä
        </a>
      </p>
    </Jumbotron>
    <Container className="service-container">
      <Row className="service-title">
        <h2>Palvelumme</h2>
      </Row>
      <Row>
        <Col>
          <ServiceItem
            icon={faBirthdayCake}
            title={'Kakut'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          ></ServiceItem>
        </Col>
        <Col>
          <ServiceItem
            icon={faBreadSlice}
            title={'Suolaiset'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          ></ServiceItem>
        </Col>
        <Col>
          <ServiceItem
            icon={faCookie}
            title={'Muut herkut'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          ></ServiceItem>
        </Col>
      </Row>
    </Container>
  </div>
);
