import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Root } from '@core/root';

hydrate(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById('root'),
);
