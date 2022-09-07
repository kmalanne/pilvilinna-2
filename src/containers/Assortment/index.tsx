import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import { Banner } from '../../components/Banner';
import { Gallery } from '../../components/Gallery';
import './index.css';

const getImages = () => {
  let images = [];
  for (let i = 1; i < 17; i++) {
    images.push({
      previewURL: `/images/gallery-${i}.jpg`,
      thumbnailURL: `/images/gallery-thumbnail-${i}.jpg`,
    });
  }

  return images;
};

export const Assortment = () => {
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'assortment' });

  return (
    <section className="assortment" aria-labelledby="assortment-title">
      <Banner imgUrl="/images/banner-1.jpg" text={tNS('banner')}></Banner>
      <Container>
        <h2 id="assortment-title">{tNS('title')}</h2>
        <div className="item-header">
          <p>
            {tNS('unique_cake_title')} <span>{tNS('price_from')} 90€</span>
          </p>
        </div>
        <p>{tNS('unique_cake_description_1')}</p>
        <ul>
          <li>
            10-12 {tNS('person')} <strong>90,00€</strong>
          </li>
          <li>
            18-20 {tNS('person')} <strong>120,00€</strong>
          </li>
          <li>
            25-30 {tNS('person')} <strong>140,00€</strong>
          </li>
        </ul>
        <p>{tNS('unique_cake_description_2')}</p>
        <ul>
          <li>{tNS('unique_cake_choice_1')}</li>
          <li>{tNS('unique_cake_choice_2')}</li>
          <li>{tNS('unique_cake_choice_3')}</li>
          <li>{tNS('unique_cake_choice_4')}</li>
          <li>{tNS('unique_cake_choice_5')}</li>
          <li>{tNS('unique_cake_choice_6')}</li>
          <li>{tNS('unique_cake_choice_7')}</li>
          <li>{tNS('unique_cake_choice_8')}</li>
          <li>{tNS('unique_cake_choice_9')}</li>
        </ul>
        <div className="item-header">
          <p>
            {tNS('mousse_cake_title')} <span>{tNS('price_from')} 65€</span>
          </p>
        </div>
        <p>{tNS('mousse_cake_description')}</p>
        <ul>
          <li>
            {tNS('circa')} 10 {tNS('person')} <strong>65,00€</strong>
          </li>
          <li>
            {tNS('circa')} 15 {tNS('person')} <strong>85,00€</strong>
          </li>
        </ul>
        <div className="item-header">
          <p>
            {tNS('chocolate_cake_title')} <span>80€</span>
          </p>
        </div>
        <p>{tNS('chocolate_cake_description_1')}</p>
        <p>
          {tNS('chocolate_cake_description_2')} <strong>7,90€</strong>
        </p>
        <div className="item-header">
          <p>
            {tNS('cupcake_title')} <span>50€</span>
          </p>
        </div>
        <p>
          {tNS('cupcake_description_1')} <strong>+5-10€</strong>
        </p>
        <p>{tNS('cupcake_description_2')}</p>
        <ul>
          <li>{tNS('cupcake_choice_1')}</li>
          <li>{tNS('cupcake_choice_2')}</li>
          <li>{tNS('cupcake_choice_3')}</li>
          <li>{tNS('cupcake_choice_4')}</li>
          <li>{tNS('cupcake_choice_5')}</li>
          <li>{tNS('cupcake_choice_6')}</li>
          <li>{tNS('cupcake_choice_7')}</li>
          <li>{tNS('cupcake_choice_8')}</li>
          <li>{tNS('cupcake_choice_9')}</li>
        </ul>
        <div className="item-header">
          <p>
            {tNS('meringue_title')} <span>0,80€/{tNS('pcs')}</span>
          </p>
        </div>
        <ul>
          <li>{tNS('meringue_choice_1')}</li>
          <li>{tNS('meringue_choice_2')}</li>
          <li>{tNS('meringue_choice_3')}</li>
          <li>{tNS('meringue_choice_4')}</li>
          <li>{tNS('meringue_choice_5')}</li>
        </ul>
        <div className="item-header">
          <p>
            {tNS('cookie_title')} <span>1,50€/kpl</span>
          </p>
        </div>
        <ul>
          <li>{tNS('cookie_choice_1')}</li>
          <li>{tNS('cookie_choice_1')}</li>
        </ul>
        <div className="item-header">
          <p>
            {tNS('macaron_title')} <span>40€</span>
          </p>
        </div>
        <p>{tNS('macaron_description')}</p>
        <ul>
          <li>{tNS('macaron_choice_1')}</li>
          <li>{tNS('macaron_choice_2')}</li>
          <li>{tNS('macaron_choice_3')}</li>
          <li>{tNS('macaron_choice_4')}</li>
          <li>{tNS('macaron_choice_5')}</li>
          <li>{tNS('macaron_choice_6')}</li>
          <li>{tNS('macaron_choice_7')}</li>
          <li>{tNS('macaron_choice_8')}</li>
        </ul>
        <div className="item-header">
          <p>
            {tNS('sandwich_cake_title')} <span>{tNS('price_from')} 105€</span>
          </p>
        </div>
        <p>{tNS('sandwich_cake_description')}</p>
        <ul>
          <li>
            {tNS('sandwich_cake_choice_1')} <strong>110€</strong>
          </li>
          <li>
            {tNS('sandwich_cake_choice_2')} <strong>110€</strong>
          </li>
          <li>
            {tNS('sandwich_cake_choice_3')} <strong>110€</strong>
          </li>
          <li>
            {tNS('sandwich_cake_choice_4')} <strong>125€</strong>
          </li>
          <li>
            {tNS('sandwich_cake_choice_5')} <strong>125€</strong>
          </li>
          <li>
            {tNS('sandwich_cake_choice_6')} <strong>110€</strong>
          </li>
        </ul>
        <div className="item-header">
          <p>{tNS('bread_title')}</p>
        </div>
        <p>
          {tNS('bread_description')} <strong>9,00€</strong> {tNS('pcs')}
        </p>
        <div className="info-text-container">
          <p>
            <strong>{tNS('info_1')}</strong>
          </p>
          <p>{tNS('info_2')}</p>
          <p>{tNS('info_3')}</p>
        </div>
      </Container>
      <Container className="gallery-container">
        <h2 className="sr-only">Cake gallery</h2>
        <Gallery images={getImages()}></Gallery>
      </Container>
    </section>
  );
};
