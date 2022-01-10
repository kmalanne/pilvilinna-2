import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './containers/About';
import { Assortment } from './containers/Assortment';
import { Contact } from './containers/Contact';
import { Home } from './containers/Home';
import { OrderingAndDelivering } from './containers/OrderingAndDelivering';
import { SocialMedia } from './containers/SocialMedia';
import { routePaths } from './utils/routePaths';

const { ABOUT, ASSORTMENT, CONTACT, HOME, ORDERING, SOCIAL_MEDIA } = routePaths;

export const AppRoutes = () => (
  <div className="content">
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={ABOUT} element={<About />} />
      <Route path={CONTACT} element={<Contact />} />
      <Route path={ASSORTMENT} element={<Assortment />} />
      <Route path={ORDERING} element={<OrderingAndDelivering />} />
      <Route path={SOCIAL_MEDIA} element={<SocialMedia />} />
    </Routes>
  </div>
);
