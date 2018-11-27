import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ServerLocation } from '@reach/router';

import { App } from '../src/App';
import assetManifest from '../dist/manifest.json';

// renderHtml() is called by static-site-generator-webpack-plugin for each route it finds
function renderHtml(data) {
  const markup = renderToStaticMarkup(
    <ServerLocation url={data.path}>
      <App />
    </ServerLocation>
  );

  return `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Boilerplate for statically generated sites with React" />

        <title>static-site-generator</title>

        ${preloadLinks(assetManifest)}
        ${scriptTags(assetManifest)}
        ${linkTags(assetManifest)}
      </head>
      <body>
        <div id="root">${markup}</div>
      </body>
    </html>
  `;
}

function preloadLinks(assets) {
  return `<link rel="preload" as="script" href="${assets['main.js']}"/>`;
}

function linkTags(assets) {
  return Object.keys(assets)
    .filter(assetName => assetName.endsWith('.css'))
    .reduce((links, assetName) => {
      links += `<link rel="stylesheet" href="${assets[assetName]}" />`;
      return links;
    }, '');
}

function scriptTags(assets) {
  return Object.keys(assets)
    .filter(assetName => assetName.endsWith('.js'))
    .reduce((scripts, assetName) => {
      scripts += `<script defer type="text/javascript" src="${
        assets[assetName]
      }"></script>`;

      return scripts;
    }, '');
}

export default renderHtml;
