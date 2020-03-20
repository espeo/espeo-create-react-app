import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { Root } from '@core/root';
import { Meta } from '@server/Meta';

const server = express();

server.set('views', __dirname);
server.set('view engine', 'ejs');
server.use('/', express.static(path.join(__dirname, '..', 'dist')));

server.get('*', (req, res) => {
  const metaTags = renderToString(<Meta url={req.params[0]} />);

  const sheet = new ServerStyleSheet();

  const reactApp = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url}>
        <Root />
      </StaticRouter>,
    ),
  );

  const styleTags = sheet.getStyleTags();

  res.render('index', {
    reactApp,
    styleTags,
    metaTags,
  });
});

const port = process.env.PORT;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}`);
});
