import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './index.css';

export const Home = () => (
  <div className="home">
    <Jumbotron>
      <h1>Herkkuja Pilvilinnasta</h1>
      <p>Makeat ja suolaiset tarjoiltavat tilauksesta</p>
      <p>
        <a className="pill-btn" href="contact">
          Ota yhteyttä
        </a>
      </p>
    </Jumbotron>
  </div>
);
