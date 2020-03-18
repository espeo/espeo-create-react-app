/* eslint-disable react/no-danger */
import React, { FC } from 'react';

export const Html: FC<{ appString: string }> = ({ appString }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Create Espeo App</title>
      <base href="/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#fff" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Espeo CRA" />
      <link rel="icon" sizes="192x192" href="/public/images/icon-192x192.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="Espeo CRA" />
      <link rel="apple-touch-icon" href="/public/images/icon-192x192.png" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta
        name="msapplication-TileImage"
        content="/public/images/icon-192x192.png"
      />
      <link rel="icon" type="image/x-icon" href="/public/images/favicon.ico" />
      <link rel="manifest" href="/public/manifest.json" />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: appString }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            if (!('serviceWorker' in navigator)) {
            console.log('Service worker not supported');
            return;
            }
            navigator.serviceWorker
            .register('service-worker.js')
            .then(function(registration) {
                console.log('SW successfully registered');
            })
            .catch(function(error) {
                console.log('registration failed', error);
            });
        })();`,
        }}
      />
      <script src="/dist/bundle.js" />
      <noscript>JavaScript is not available.</noscript>
    </body>
  </html>
);
