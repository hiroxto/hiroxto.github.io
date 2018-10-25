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
const createUrlElement = (url, lastmod, changefreq, priority) => {
  return {
    url,
    lastmod,
    changefreq,
    priority,
  };
};

getLastModified(getUrl('/'))
  .then((lastModified) => {
    const date = new Date(lastModified);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  });

console.log(convert.js2xml(sitemap, options));
