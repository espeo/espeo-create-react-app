import express from 'express';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import { Root } from '@core/root';
import { Html } from './html';

const server = express();

server.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
server.use('/public', express.static(path.join(__dirname, '..', 'public')));

server.get('*', (req, res) => {
  const appString = renderToString(
    <StaticRouter location={req.url}>
      <Root />
    </StaticRouter>,
  );

  const html = renderToStaticMarkup(<Html appString={appString} />);

  res.send(`<!doctype html>${html}`);
});

const port = process.env.PORT;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}`);
});
