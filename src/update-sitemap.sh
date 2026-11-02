#!/bin/bash
# Use "bash src/update-sitemap.sh"

set -eu

npm run --silent generate:sitemap > docs/sitemap.xml
d=`date +"%Y/%m/%d %k:%M:%S %z"`
git add docs/sitemap.xml
git diff --cached --exit-code --quiet || git commit -m "Sitemap update at $d"
