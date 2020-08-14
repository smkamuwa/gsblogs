---
title: How It Works Gridsome
featuredImage: uploads/maxresdefault.jpg
---
Gridsome generates static html that hydrates into a Vue SPA once loaded in the browser. This means you can build both static websites & dynamic apps with Gridsome.

Gridsome builds one .html file and one .json file for every page. After first page load it only uses the .json files to prefetch and load data for the next pages. It also builds a .js bundle for each page that needs it (code splitting).

It uses vue-router for SPA routing, and vue-meta for managing <head>.

Gridsome adds a 57kB min gzip JS bundle size by default.(vue.js, vue-router, vue-meta and some for image lazy loading).