import convert from 'xml-js';

const freq = {
  always: 'always',
  hourly: 'hourly',
  daily: 'daily',
  weekly: 'weekly',
  monthly: 'monthly',
  yearly: 'yearly',
  never: 'never',
} as const;

type ChangeFrequency = (typeof freq)[keyof typeof freq];

interface SitemapUrl {
  loc: string;
  lastmod: string | null;
  changefreq: ChangeFrequency;
  priority: string;
}

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
    url: [] as SitemapUrl[],
  },
};

const getUrl = (path: string): string => {
  return `https://hiroxto.github.io${path}`;
};

const getLastModified = async (url: string): Promise<string> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`);
  }

  const lastModified = response.headers.get('last-modified');
  if (!lastModified || Number.isNaN(Date.parse(lastModified))) {
    throw new Error(`Invalid Last-Modified header for ${url}`);
  }

  return lastModified;
};

const createUrlElement = (
  path: string,
  changefreq: ChangeFrequency,
  priority: string,
): SitemapUrl => {
  return {
    loc: getUrl(path),
    lastmod: null,
    changefreq,
    priority,
  };
};

const urls = [
  createUrlElement('/', freq.yearly, '1.0'),
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
    process.exitCode = 1;
  });
