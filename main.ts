import { delFile, writeToFile, readFromFile, appendToFile } from './src/fileIo';

import { append, compile } from './src/fun';

import { makeMenu } from './src/navBar';

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
    html = append(html, newLine, fin);
  } else {
    html = append(html, newLine);
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

const menuOptions = [
  ['index.html', 'Home'],
  ['#guides', 'Guides', 'openMenu()'],
  ['#contact', 'Contact', 'openMenu()'],
];

function body01() {
  // Start body
  goBuild(BODY);
  // Nav manu
  goBuild(makeMenu(menuOptions));
  // Footer
  footer();
  // End body
  goBuild(BODY, 1);
}

function footer() {
  goBuild(FOOTER);
}

// Compile sections
preBody();

body01();

// Write to index.html
const fileName = 'index.html';
compile(fileName, html);

export { goBuild };
