import React from 'react';
import { Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import {
  faBirthdayCake,
  faCookie,
  faBreadSlice,
} from '@fortawesome/free-solid-svg-icons';
import { ServiceItem } from '../../components/ServiceItem';
import bakerImage from '../../resources/anna.jpg';
import './index.css';

export const Home = () => (
  <div className="content home">
    <Jumbotron>
      <h1>Pilvilinnan leipomo</h1>
      <p>Hyvää mieltä ja herkullisia hetkiä</p>
      <p>
        <a className="pill-btn" href="contact">
          Ota yhteyttä
        </a>
      </p>
    </Jumbotron>
    <Container className="baker-info-container">
      <Row>
        <Col className="baker-img-container" lg={6} md={12}>
          <Image src={bakerImage} alt="baker" fluid />
        </Col>
        <Col className="baker-info-text-container" lg={6} md={12}>
          <p>
            Rakkaudesta leivonnaisiin, herkullisiin hetkiin ja juhliin. Olen
            itseoppinut leipuri, joka syksyllä 2018 teki loikan makeaan
            tuntemattomaan ja ryhtyi yrittäjäksi, kakkuleipuriksi ja
            juhlasuunnittelijaksi. Olen aina halunnut ilahduttaa muita ja leivon
            niin makeat kuin suolaiset leivonnaiset suurella sydämellä.
            Leivonnaisten maku on itselleni se tärkein tekijä ja erityisen
            paljon olen saanut positiivista palautetta juuri kakkujeni mausta.
            Aitoja makuja, ei liian makeaa ja juuri sopivan kosteaa. Siinä
            reseptini täydelliseen kakkuun.
          </p>
          <p className="baker-signature">Pilvilinnan Anna</p>
        </Col>
      </Row>
    </Container>
    <Container className="service-container">
      <Row className="service-title">
        <h2>Valikoimani</h2>
      </Row>
      <Row>
        <Col sm={12} md={4}>
          <ServiceItem
            icon={faBirthdayCake}
            title={'Kakut'}
            text={
              'Täytekakut, kreemikakut ja moussekakut haluamillasi koristeluilla.'
            }
          ></ServiceItem>
        </Col>
        <Col sm={12} md={4}>
          <ServiceItem
            icon={faBreadSlice}
            title={'Suolaiset'}
            text={
              'Voileipäkakut, saaristolaisleivät ja muut suolaiset toiveesta.'
            }
          ></ServiceItem>
        </Col>
        <Col sm={12} md={4}>
          <ServiceItem
            icon={faCookie}
            title={'Muut herkut'}
            text={'Kuppikakut, pilvet, cookiet, macaronit ja muut pikkuherkut.'}
          ></ServiceItem>
        </Col>
      </Row>
    </Container>
  </div>
);
