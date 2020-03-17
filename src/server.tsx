import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import { StaticRouter } from 'react-router';
import { Root } from '@core/root';

const server = express();

server.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

server.get('*', (req, res) => {
  const appString = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Root />
    </StaticRouter>,
  );

  const html = `
    <!doctype html>
    <html>
      <body>
        <div id="root">${appString}</div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>`;

  res.send(html);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}`);
});
