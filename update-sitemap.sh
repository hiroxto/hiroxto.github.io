#!/bin/bash
# Use "bash update-sitemap.sh"
php sitemap.php > sitemap.xml
d=`date +"%Y/%m/%d"`
git add sitemap.xml
git commit -m "Update at $d"