#!/bin/bash

# Remove folders
rm -rf _site
rm -rf en
rm -rf fr
rm -rf index.html
rm -rf legal.html

# Run Jekyll serve
bundle exec jekyll build

# Copy en and fr folders to root
cp -r _site/en .
cp -r _site/fr .
cp -r _site/index.html .
cp -r _site/legal.html .