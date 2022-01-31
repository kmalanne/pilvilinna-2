import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import { Banner } from '../../components/Banner';
import { Gallery } from '../../components/Gallery';
import './index.css';

const images = [
  {
    previewURL: '/images/pilvilinnanleipomo-1.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-1.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-2.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-2.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-3.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-3.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-4.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-4.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-5.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-5.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-6.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-6.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-7.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-7.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-8.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-8.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-9.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-9.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-10.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-10.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-11.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-11.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-12.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-12.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-13.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-13.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-14.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-14.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-15.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-15.jpg',
  },
  {
    previewURL: '/images/pilvilinnanleipomo-16.jpg',
    thumbnailURL: '/images/pilvilinnanleipomo-16.jpg',
  },
];

export const Assortment = () => {
  const { t } = useTranslation();
  const tNS = (key: string) => t(key, { ns: 'assortment' });

  return (
    <section className="assortment" aria-labelledby="title">
      <Banner imgUrl="/images/banner-1.jpg" text={tNS('banner')}></Banner>
      <Container>
        <h2 id="title">{tNS('title')}</h2>
        <div className="item-header">
          <p>
            {tNS('unique_cake_title')} <span>{tNS('price_from')} 70€</span>
          </p>
        </div>
        <p>{tNS('unique_cake_description_1')}</p>
        <ul>
          <li>
            7-9 {tNS('person')} <strong>70,00€</strong>
          </li>
          <li>
            10-12 {tNS('person')} <strong>75,00€</strong>
          </li>
          <li>
            18-20 {tNS('person')} <strong>100,00€</strong>
          </li>
          <li>
            25-30 {tNS('person')} <strong>125,00€</strong>
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
        </ul>
        <div className="item-header">
          <p>
            {tNS('mousse_cake_title')} <span>{tNS('price_from')} 50€</span>
          </p>
        </div>
        <p>{tNS('mousse_cake_description')}</p>
        <ul>
          <li>
            {tNS('circa')} 10 {tNS('person')} <strong>50,00€</strong>
          </li>
          <li>
            {tNS('circa')} 15 {tNS('person')} <strong>75,00€</strong>
          </li>
        </ul>
        <div className="item-header">
          <p>
            {tNS('chocolate_cake_title')} <span>65€</span>
          </p>
        </div>
        <p>{tNS('chocolate_cake_description_1')}</p>
        <p>
          {tNS('chocolate_cake_description_2')} <strong>7,90€</strong>
        </p>
        <div className="item-header">
          <p>
            {tNS('cupcake_title')} <span>45€</span>
          </p>
        </div>
        <p>
          {tNS('cupcake_description_1')} <strong>+5€</strong>
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
            {tNS('meringue_title')} <span>0,75€/{tNS('pcs')}</span>
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
            {tNS('cookie_title')} <span>1,20€/kpl</span>
          </p>
        </div>
        <ul>
          <li>{tNS('cookie_choice_1')}</li>
          <li>{tNS('cookie_choice_1')}</li>
        </ul>
        <div className="item-header">
          <p>
            {tNS('macaron_title')} <span>1,50€/kpl</span>
          </p>
        </div>
        <p>
          {tNS('macaron_description')} <strong>36€</strong>
        </p>
        <ul>
          <li>{tNS('macaron_choice_1')}</li>
          <li>{tNS('macaron_choice_2')}</li>
          <li>{tNS('macaron_choice_3')}</li>
          <li>{tNS('macaron_choice_4')}</li>
          <li>{tNS('macaron_choice_5')}</li>
          <li>{tNS('macaron_choice_6')}</li>
          <li>{tNS('macaron_choice_7')}</li>
        </ul>
        <div className="item-header">
          <p>
            {tNS('sandwich_cake_title')} <span>{tNS('price_from')} 100€</span>
          </p>
        </div>
        <p>{tNS('sandwich_cake_description')}</p>
        <ul>
          <li>
            {tNS('sandwich_cake_choice_1')} <strong>100€</strong>
          </li>
          <li>
            {tNS('sandwich_cake_choice_2')} <strong>100€</strong>
          </li>
          <li>
            {tNS('sandwich_cake_choice_3')} <strong>100€</strong>
          </li>
          <li>
            {tNS('sandwich_cake_choice_4')} <strong>110€</strong>
          </li>
          <li>
            {tNS('sandwich_cake_choice_5')} <strong>110€</strong>
          </li>
          <li>
            {tNS('sandwich_cake_choice_6')} <strong>100€</strong>
          </li>
        </ul>
        <div className="item-header">
          <p>{tNS('bread_title')}</p>
        </div>
        <p>
          {tNS('bread_description')} <strong>7,00€</strong> {tNS('pcs')},{' '}
          <strong>12,00€</strong> 2 {tNS('pcs')}
        </p>
        <div className="info-text-container">
          <p>
            <strong>{tNS('info_1')}</strong>
          </p>
          <p>{tNS('info_2')}</p>
          <p>{tNS('info_3')}</p>
          <p>{tNS('info_4')}</p>
        </div>
      </Container>
      <Container className="gallery-container">
        <h2 className="sr-only">Cake gallery</h2>
        <Gallery images={images}></Gallery>
      </Container>
    </section>
  );
};
