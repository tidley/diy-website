import {
  delFile,
  writeToFile,
  readFromFile,
  appendToFile,
} from './src/file-io';

import { fullAdd, build } from './src/fun';

import {
  DOCTYPE,
  HTML,
  HEAD,
  TITLE,
  DOCHEADER,
  BODY,
  FOOTER,
} from './src/snippe';

let html = [];

function goBuild(newLine: string, fin?: any) {
  if (fin) {
    html = build(html, newLine, fin);
  } else {
    html = build(html, newLine);
  }
}

function preBody() {
  // File headers
  goBuild(DOCTYPE);
  goBuild(HTML);
  goBuild(HEAD);
  // Page Title
  const title = 'Dummies Guide to Crypto';
  goBuild(TITLE);
  goBuild(title);
  goBuild(TITLE, 1);
  // Content header
  DOCHEADER.forEach((element) => {
    goBuild(element);
  });
  goBuild(HEAD, 1);
}

function body01() {
  // Start body
  goBuild(BODY);
  // Footer
  footer();
  // End body
  goBuild(BODY, 1);
}

function footer() {
  goBuild(FOOTER);
}

// Make it work
preBody();

body01();

makeIt(html);

// Write to index.html
const fileName = 'index.html';
function makeIt(contentArray: Array<string>) {
  let newStr = '';
  contentArray.forEach((element: string) => {
    newStr += element;
  });
  writeToFile(fullAdd(fileName), newStr);
}
