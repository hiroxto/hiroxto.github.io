'use strict';

import convert from 'xml-js';
import axios from 'axios';

const freq = {
  always: 'always',
  hourly: 'hourly',
  daily: 'daily',
  weekly: 'weekly',
  monthly: 'monthly',
  yearly: 'yearly',
  never: 'never',
};

const convertXmlOptions = {
  compact: true,
  spaces: 2,
  indentText: true,
};

const sitemap = {
  _declaration: {
    _attributes: {
      version: '1.0',
      encoding: 'utf-8',
    },
  },
  urlset: {
    _attributes: {
      xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    },
    url: [
    ],
  },
};

const getUrl = path => {
  return `https://hiroxto.github.io${path}`;
};

const getLastModified = async url => {
  const response = await axios.get(url);
  const headers = response.headers;

  return headers['last-modified'];
};

const createUrlElement = (path, changefreq, priority) => {
  return {
    loc: getUrl(path),
    lastmod: null,
    changefreq,
    priority,
  };
};

const urls = [
  createUrlElement('/', freq.monthly, '1.0'),
  createUrlElement('/anime-push/', freq.yearly, '0.8'),
  createUrlElement('/hk_sub_/', freq.yearly, '0.4'),
  createUrlElement('/trysail-blog-notification/', freq.yearly, '0.8'),
  createUrlElement('/trysail-blog-notification/plugin.html', freq.yearly, '0.4'),
  createUrlElement('/console-wrapper/', freq.yearly, '0.8'),
  // createUrlElement('/SaveTweet/', freq.yearly, '0.4'),
  // createUrlElement('/ShortURL/', freq.yearly, '0.4'),
  createUrlElement('/twitter-r4s/', freq.yearly, '0.4'),
  // createUrlElement('/CC-Lemon/', freq.yearly, '0.4'),
];

const values = urls.map(el => {
  return getLastModified(el.loc).then(lastModified => {
    const date = new Date(lastModified);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    el.lastmod = `${year}-${month}-${day}`;

    return el;
  });
});

Promise
  .all(values)
  .then(() => {
    sitemap.urlset.url = urls;
    console.log(convert.js2xml(sitemap, convertXmlOptions));

    return sitemap;
  })
  .catch(e => {
    console.error(e);
    process.on('exit', () => process.exit(1));
  });
