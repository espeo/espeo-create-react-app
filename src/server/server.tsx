import React from 'react';
import express from 'express';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import { Root } from '@core/root';
import { Html } from '@server/html';
import { createMetaTags } from '@server/metaTagsFactory';

const server = express();

server.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
server.use('/public', express.static(path.join(__dirname, '..', 'public')));

server.get('*', (req, res) => {
  const metaTags = createMetaTags(req);

  const appString = renderToString(
    <StaticRouter location={req.url}>
      <Root />
    </StaticRouter>,
  );

  const html = renderToStaticMarkup(
    <Html metaTags={metaTags} appString={appString} />,
  );

  res.send(`<!doctype html>${html}`);
});

const port = process.env.PORT;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}`);
});
