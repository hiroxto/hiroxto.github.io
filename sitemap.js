'use strict';

const convert = require('xml-js');

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
const getLastModified = url => {
};
const createUrlElement = (url, lastmod, changefreq, priority) => {
  return {
    url,
    lastmod,
    changefreq,
    priority,
  };
};

console.log(convert.js2xml(sitemap, options));
