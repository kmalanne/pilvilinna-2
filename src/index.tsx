import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { ScrollToTop } from './components/ScrollToTop';
import './i18n';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <React.Suspense fallback="...">
        <App />
      </React.Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
