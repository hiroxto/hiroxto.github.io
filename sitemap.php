<?php
/*
Sitemap generator
Use:php sitemap-github.php > sitemap-github.xml
*/

function get_url($file) {
  return "https://hiroto-k.github.io{$file}";
}

function get_time($file) {
  $headers = get_headers(get_url($file));
  $header = array_values(array_filter($headers, function ($s) {
    return preg_match("/Last-Modified:\s+(.+)/i", $s) === 0 ? false : true;
  }));
  preg_match("/Last-Modified:\s+(.+)/i", $header[0], $matches);
  return date("Y-m-d", strtotime($matches[1]));
}

function get_apigen_pages($file) {
  $url = get_url($file);
  $content = file_get_contents($url);
  preg_match_all('/<a href="(.+)">/', $content, $m);
  $m = $m[1];
  array_pop($m);
  $urls = array_map(function ($u) use ($file) {
    return $file.$u;
  }, $m);
  return $urls;
}

$sites = [
  [
    "loc" => get_url("/"),
    "lastmod" => get_time("/"),
    "changefreq" => "monthly",
    "priority" => "1.0",
  ],
  [
    "loc" => get_url("/Anime-push/"),
    "lastmod" => get_time("/Anime-push/"),
    "changefreq" => "monthly",
    "priority" => "0.8",
  ],
  [
    "loc" => get_url("/hk_sub_/"),
    "lastmod" => get_time("/hk_sub_/"),
    "changefreq" => "monthly",
    "priority" => "0.8",
  ],
  [
    "loc" => get_url("/HkApps/"),
    "lastmod" => get_time("/HkApps/"),
    "changefreq" => "monthly",
    "priority" => "0.8",
  ],
  [
    "loc" => get_url("/SaveTweet/"),
    "lastmod" => get_time("/SaveTweet/"),
    "changefreq" => "monthly",
    "priority" => "0.5",
  ],
  [
    "loc" => get_url("/ShortURL/"),
    "lastmod" => get_time("/ShortURL/"),
    "changefreq" => "monthly",
    "priority" => "0.5",
  ],
  [
    "loc" => get_url("/EncryptionHelper/"),
    "lastmod" => get_time("/EncryptionHelper/"),
    "changefreq" => "monthly",
    "priority" => "0.4",
  ],
  [
    "loc" => get_url("/MP3-Downloader/"),
    "lastmod" => get_time("/MP3-Downloader/"),
    "changefreq" => "monthly",
    "priority" => "0.8",
  ],
  [
    "loc" => get_url("/Tw-Cron/"),
    "lastmod" => get_time("/Tw-Cron/"),
    "changefreq" => "monthly",
    "priority" => "0.5",
  ],
  [
    "loc" => get_url("/TeamGraphicalGraphics/"),
    "lastmod" => get_time("/TeamGraphicalGraphics/"),
    "changefreq" => "monthly",
    "priority" => "0.4",
  ],
  [
    "loc" => get_url("/CC-Lemon/"),
    "lastmod" => get_time("/CC-Lemon/"),
    "changefreq" => "monthly",
    "priority" => "0.4",
  ],
];

foreach (["StringBuilder"] as $name) {
  foreach (get_apigen_pages("/{$name}/") as $link) {
    $sites[] = [
      "loc" => get_url($link),
      "lastmod" => get_time($link),
      "changefreq" => "yearly",
      "priority" => "0.6",
    ];
  }
}

$sitemap = new DOMDocument("1.0", "UTF-8");
$sitemap->preserveWhiteSpace = false;
$sitemap->formatOutput = true;
$urlset = $sitemap->appendChild($sitemap->createElement("urlset"));
$urlset->setAttribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
foreach ($sites as $site) {
    $url = $urlset->appendChild($sitemap->createElement("url"));
    foreach($site as $key => $value){
        if(is_string($key) && is_string($value)){
            $url->appendChild($sitemap->createElement($key, $value));
        }
    }
}
echo $sitemap->saveXML();