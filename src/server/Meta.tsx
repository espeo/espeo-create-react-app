import React, { FC, MetaHTMLAttributes, Fragment } from 'react';
import { routesConfig } from '@core/config/routes';
import { matchPath } from 'react-router-dom';

const getMetaTags = (url: string): MetaHTMLAttributes<HTMLMetaElement>[] => {
  if (matchPath(url, routesConfig.home)) {
    const title = 'Search worldwide news';
    return [
      {
        property: 'description',
        content: title,
      },
      {
        name: 'og:title',
        content: title,
      },
    ];
  }

  if (matchPath(url, routesConfig.details)) {
    const articleTitle = url.split('/')[2];
    return [
      {
        property: 'description',
        content: articleTitle,
      },
      {
        name: 'og:title',
        content: articleTitle,
      },
    ];
  }

  return [];
};

export const Meta: FC<{ url: string }> = ({ url }) => (
  <Fragment>
    {getMetaTags(url).map(m => (
      <meta key={`${m.name}-${m.property}`} {...m} />
    ))}
  </Fragment>
);
