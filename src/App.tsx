import React from 'react';
import { AppRoutes } from './Routes';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  );
};
