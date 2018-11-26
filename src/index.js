import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { App } from './App';

function render(data) {
  const markup = renderToStaticMarkup(<App data={data} />);

  return `
    <html>
      <head>
        <title>React Static Site Generator Boilerplate</title>
      </head>
      <body>
        <div id="root">${markup}</div>
      </body>
    </html>`;
}

export default render;
