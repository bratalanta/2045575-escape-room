import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import React from 'react'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
