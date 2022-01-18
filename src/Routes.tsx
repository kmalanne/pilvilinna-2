import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Assortment } from './containers/Assortment';
import { Contact } from './containers/Contact';
import { Home } from './containers/Home';
import { OrderingAndDelivering } from './containers/OrderingAndDelivering';
import { AppRoute } from './utils/route';

export const AppRoutes = () => (
  <div className="content">
    <Routes>
      <Route path={AppRoute.Home} element={<Home />} />
      <Route path={AppRoute.Contact} element={<Contact />} />
      <Route path={AppRoute.Assortment} element={<Assortment />} />
      <Route path={AppRoute.Ordering} element={<OrderingAndDelivering />} />
    </Routes>
  </div>
);
