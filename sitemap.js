'use strict';

const convert = require('xml-js');
const axios = require('axios');

const changefreq = {
  yearly: 'yearly',
  monthly: 'monthly',
};

const options = {
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
  return `https://hiroto-k.github.io${path}`;
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
    changefreq: changefreq,
    priority: priority,
  };
};

const urls = [
  createUrlElement('/', changefreq.monthly, '1.0'),
  createUrlElement('/train-number-calc.html', changefreq.monthly, '0.8'),
  createUrlElement('/anime-push/', changefreq.yearly, '0.8'),
  createUrlElement('/hk_sub_/', changefreq.yearly, '0.4'),
  createUrlElement('/trysail-blog-notification/', changefreq.yearly, '0.8'),
  createUrlElement('/trysail-blog-notification/plugin.html', changefreq.yearly, '0.4'),
  createUrlElement('/console-wrapper/', changefreq.yearly, '0.8'),
  createUrlElement('/SaveTweet/', changefreq.yearly, '0.4'),
  createUrlElement('/ShortURL/', changefreq.yearly, '0.4'),
  createUrlElement('/twitter-r4s/', changefreq.yearly, '0.4'),
  createUrlElement('/CC-Lemon/', changefreq.yearly, '0.4'),
];

const values = urls.map(el => {
  return getLastModified(el.loc).then(lastModified => {
    const date = new Date(lastModified);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    el.lastmod = `${year}-${month}-${day}`;
  });
});

Promise.all(values).then(
  () => {
    sitemap.urlset.url = urls;
    console.log(convert.js2xml(sitemap, options));
  },
  e => console.error(e)
);
