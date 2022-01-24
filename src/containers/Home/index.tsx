import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  faBirthdayCake,
  faCookie,
  faBreadSlice,
} from '@fortawesome/free-solid-svg-icons';
import { Carousel } from '../../components/Carousel';
import { ServiceItem } from '../../components/ServiceItem';
import bakerImage from '../../resources/anna.jpg';
import { AppRoute } from '../../utils/route';
import './index.css';

export const Home = () => {
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'home' });

  return (
    <div className="home">
      <div className="container-fluid">
        <h1>{tNS('title')}</h1>
        <p>{tNS('slogan')}</p>
        <NavLink className="pill-btn" to={AppRoute.Contact}>
          {tNS('contact')}
        </NavLink>
      </div>
      <Container className="baker-info-container">
        <Row>
          <Col className="baker-img-container" lg={6} md={12}>
            <Image src={bakerImage} alt="baker" fluid />
          </Col>
          <Col className="baker-info-text-container" lg={6} md={12}>
            <p>{tNS('info_1')}</p>
            <p>{tNS('info_2')}</p>
            <p className="baker-signature">Pilvilinnan Anna</p>
          </Col>
        </Row>
      </Container>
      <Container className="service-container">
        <Row className="service-title">
          <h2>{tNS('assortment_title')}</h2>
        </Row>
        <Row>
          <Col sm={12} md={4}>
            <ServiceItem
              icon={faBirthdayCake}
              title={tNS('assortment_choice_1_title')}
              text={tNS('assortment_choice_1_description')}
            ></ServiceItem>
          </Col>
          <Col sm={12} md={4}>
            <ServiceItem
              icon={faBreadSlice}
              title={tNS('assortment_choice_2_title')}
              text={tNS('assortment_choice_2_description')}
            ></ServiceItem>
          </Col>
          <Col sm={12} md={4}>
            <ServiceItem
              icon={faCookie}
              title={tNS('assortment_choice_2_title')}
              text={tNS('assortment_choice_2_description')}
            ></ServiceItem>
          </Col>
        </Row>
      </Container>
      <Container className="carousel-container">
        <Carousel
          items={[
            {
              text: tNS('testimonial_1'),
              author: 'Essi, Tampere',
            },
            {
              text: tNS('testimonial_2'),
              author: 'Mari, Ylöjärvi',
            },
            {
              text: tNS('testimonial_3'),
              author: 'Sanna, Pirkkala',
            },
            {
              text: tNS('testimonial_4'),
              author: 'Jonna, Nokia',
            },
          ]}
        ></Carousel>
      </Container>
    </div>
  );
};
