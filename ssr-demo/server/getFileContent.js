const { readFileSync } = require('fs');
const { resolve } = require('path');
const reactComponent = require('./react-component').default;
const { createElement } = require('react');
const { renderToString } = require('react-dom/server');

const cache = {};
const getFileContent = (path) => {
  let filename = 'index.html';
  if (path !== '/') {
    const pathArr = path.split('/');
    if (!pathArr.length) {
      return null;
    }

    filename = pathArr.slice(-1);
  }

  if (!cache[filename]) {
    try {
      cache[filename] = readFileSync(resolve(`./dist/${filename}`)).toString();
      if (filename === 'index.html') {
        const componentAsAString = renderToString(createElement(reactComponent));
        cache[filename] = cache[filename].replace('%REACT%', componentAsAString);
      }
    } catch (error) {
      return false;
    }
  }

  return cache[filename];
};

module.exports = getFileContent;
