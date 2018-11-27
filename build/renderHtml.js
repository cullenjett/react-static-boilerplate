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
    <html>
      <head>
        <title>React Static Site Generator Boilerplate</title>
      </head>
      <body>
        <div id="root">${markup}</div>

        ${scriptTags(assetManifest)}
      </body>
    </html>
  `;
}

function scriptTags(assets) {
  return Object.keys(assets)
    .filter(assetName => assetName.endsWith('.js'))
    .reduce((scripts, assetName) => {
      scripts += `<script type="text/javascript" src="${
        assets[assetName]
      }" defer></script>`;

      return scripts;
    }, '');
}

export default renderHtml;
