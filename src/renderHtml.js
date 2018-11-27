import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { App } from './App';
import assetManifest from '../dist/manifest.json';

function render() {
  const markup = renderToStaticMarkup(<App />);

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
  return `<script type="text/javascript" src="../${
    assets['main.js']
  }"></script>`;
}

export default render;
