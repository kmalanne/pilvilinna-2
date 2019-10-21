import React from 'react';
import { Routes } from './Routes';
import { Navigation } from './components/Navigation';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  );
};
