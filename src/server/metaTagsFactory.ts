import { MetaHTMLAttributes } from 'react';
import { routesConfig } from '@core/config/routes';
import { matchPath } from 'react-router-dom';
import { Request } from 'express';

export const createMetaTags = (
  req: Request,
): MetaHTMLAttributes<HTMLMetaElement>[] => {
  const encodedUrl = req.params[0];

  if (matchPath(encodedUrl, routesConfig.home)) {
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

  if (matchPath(encodedUrl, routesConfig.details)) {
    const articleTitle = encodedUrl.split('/')[2];
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
