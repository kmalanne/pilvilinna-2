import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from './containers/About';
import { Assortment } from './containers/Assortment';
import { Contact } from './containers/Contact';
import { Home } from './containers/Home';
import { OrderingAndDelivering } from './containers/OrderingAndDelivering';
import { SocialMedia } from './containers/SocialMedia';
import { routePaths } from './utils/routePaths';

const { ABOUT, ASSORTMENT, CONTACT, HOME, ORDERING, SOCIAL_MEDIA } = routePaths;

export const Routes = () => (
  <Switch>
    <Route path={HOME} exact component={Home} />
    <Route path={ABOUT} exact component={About} />
    <Route path={CONTACT} exact component={Contact} />
    <Route path={ASSORTMENT} exact component={Assortment} />
    <Route path={ORDERING} exact component={OrderingAndDelivering} />
    <Route path={SOCIAL_MEDIA} exact component={SocialMedia} />
    <Route component={Home} />
  </Switch>
);
