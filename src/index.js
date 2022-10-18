import React from 'react';
import ReactDOM from 'react-dom/client';
import FlowersContext from './context/Flowers';
import './index.css'
import { Root } from './root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlowersContext>
      <Root />
    </FlowersContext>
  </React.StrictMode>
);