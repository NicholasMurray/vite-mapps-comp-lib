# vite-mapps-comp-lib-repo

## Vite

cd /packages/vite-mapps-comp-lib && npm run build

## Storybook

cd /packages/vite-mapps-comp-lib && npm run storybook

## Yalc

### Publish locally

cd cd /packages/vite-mapps-comp-lib && yalc publish

### Install locally

yalc add vite-mapps-comp-lib

### SCSS

import of styles/index.scss in lib/index.js allows the compilation of 
GOVUk, MOJ and HODS styles into one css file located in the dist folder, this 
can be used instead of individual installation of pattern library styles into 
consuming application
