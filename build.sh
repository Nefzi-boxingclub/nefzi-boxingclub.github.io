#!/bin/bash

# Remove folders
rm -rf _site
rm -rf en
rm -rf fr
rm -rf index.html
rm -rf legal.html

# Run Jekyll serve
bundle exec jekyll build

# Copy and fr folders to root
mkdir en/
mkdir fr/
cp -r _site/en/index.html en/
cp -r _site/fr/index.html fr/
cp -r _site/index.html .
cp -r _site/legal.html .