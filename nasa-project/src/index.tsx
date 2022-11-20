import React from 'react';
import ReactDOM from 'react-dom/client';

import Welcome from './components/Welcome/Welcome';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="page">
      <Welcome></Welcome>
      <div className='space'></div>
    </div>
  </React.StrictMode>
);
