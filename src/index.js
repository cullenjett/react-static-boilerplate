function render(locals) {
  return `<html><body><h1>${locals.greet} from ${
    locals.path
  }</h1><p>${JSON.stringify(locals.assets)}</p></body></html>`;
}

module.exports = render;
