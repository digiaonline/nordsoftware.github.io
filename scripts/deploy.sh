#!/usr/bin/env bash

cd dist && \
$(npm bin)/rimraf .git
git init && \
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push --force git@github.com:nordsoftware/nordsoftware.github.io.git master
