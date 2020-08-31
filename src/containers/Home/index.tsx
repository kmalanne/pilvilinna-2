import React from 'react';
import { Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  faBirthdayCake,
  faCookie,
  faBreadSlice,
} from '@fortawesome/free-solid-svg-icons';
import { Carousel } from '../../components/Carousel';
import { ServiceItem } from '../../components/ServiceItem';
import bakerImage from '../../resources/anna.jpg';
import { routePaths } from '../../utils/routePaths';
import './index.css';

export const Home = () => (
  <div className="content home">
    <Jumbotron>
      <h1>Pilvilinnan leipomo</h1>
      <p>Unelmia ja haaveita, jotka maistuvat makealta.</p>
      <NavLink className="pill-btn" to={routePaths.CONTACT}>
        Ota yhteyttä
      </NavLink>
    </Jumbotron>
    <Container className="baker-info-container">
      <Row>
        <Col className="baker-img-container" lg={6} md={12}>
          <Image src={bakerImage} alt="baker" fluid />
        </Col>
        <Col className="baker-info-text-container" lg={6} md={12}>
          <p>
            Juhlat tulossa? Vievätkö arjen kiireet mennessään tai tunnetko
            epävarmuutta leipojana? Haluatko, että juhlasi tarjottavat ovat
            maukkaita ja kauniita katsoa? Silloin kannattaa ottaa yhteyttä
            Pilvilinnan leipomoon. Maailmanlaajuisen kakkutrendin luojana
            loihdin sinun kakku- ja muut tarjoilutoiveet todeksi. Leipomoni on
            erikoistunut pieniin perhejuhliin kuten ristiäiset, syntymäpäivät,
            rippijuhlat ja valmistujaiset. Näihin juhliin voit tilata minulta
            joko pelkästään kakun tai kaikki kahvipöydän tarjottavat.
            Leivonnaiset toteutetaan aina yksilöllisesti toiveiden mukaan. Voit
            kysyä minulta apuja myös muihin juhlajärjestelyihin, jolloin sinun
            tehtäväksesi jää vain juhlista nauttiminen.
          </p>
          <p>
            {' '}
            Juuri halu tehdä asiakkaiden makeista unelmista totta johti
            siirtymään harrastelijasta yrittäjäksi 2018. Itse oppineena
            leipurina leivon tilauksesta aina suurella sydämellä ja erityisesti
            makuun panostaen, ulkonäköä kuitenkaan unohtamatta. Aitoja makuja,
            ei liian makeaa ja sopivan kosteaa, siinä reseptini täydelliseen
            kakkuun. Hyvää mieltä ja herkullisia hetkiä sinulle toivoen
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
            text={'Täytekakut ja moussekakut haluamillasi koristeluilla.'}
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
    <Container className="carousel-container">
      <Carousel
        items={[
          {
            text:
              'Hurmaavia ja herkullisia kakkuja kaikenlaisiin juhliin. Kokemuksella voin antaa vilpittömän suosituksen Pilvilinnan leipomolle &#128522;',
            author: '- Asiakas 1',
          },
          {
            text: 'Hyvä työnjälki. Saatiin mitä piti ja enemmänkin.',
            author: '- Asiakas 2',
          },
          {
            text: 'On kyllä hyvät ja maukkaat tuotteet - suosittelen!',
            author: '- Asiakas 3',
          },
        ]}
      ></Carousel>
    </Container>
  </div>
);
