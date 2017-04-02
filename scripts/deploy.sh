#!/usr/bin/env bash
if [ "$TRAVIS" = "true" ]
then
  # git need this, on Travis-CI nobody is defined
  git config --global user.name "Travis CI" && \
  git config --global user.email "travis@travis-ci.org"
fi

cd dist && \
$(npm bin)/rimraf .git
git init && \
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push --force https://github.com/nordsoftware/nordsoftware.github.io.git master
