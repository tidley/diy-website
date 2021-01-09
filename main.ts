import { funs } from './src/fun';

import { nav } from './src/navBar';

import { snips } from './src/snippe';

let html = [];

function goBuild(newLine: string, fin?: any) {
    if (fin) {
        html = funs.append(html, newLine, fin);
    } else {
        html = funs.append(html, newLine);
    }
}

function preBody() {
    // File headers
    goBuild(snips.DOCTYPE);
    goBuild(snips.HTML);
    goBuild(snips.HEAD);
    // Page Title
    const title = 'Dummies Guide to Crypto';
    goBuild(snips.TITLE);
    goBuild(title);
    goBuild(snips.TITLE, 1);
    // Content header
    snips.DOCHEADER.forEach((element) => {
        goBuild(element);
    });
    goBuild(snips.HEAD, 1);
}

const menuOptions = [
    ['index.html', 'Home'],
    ['#guides', 'Guides', 'openMenu()'],
    ['#contact', 'Contact', 'openMenu()'],
];

function body01() {
    // Start body
    goBuild(snips.BODY);
    // Nav manu
    goBuild(nav.makeMenu(menuOptions));
    // Footer
    footer();
    // End body
    goBuild(snips.BODY, 1);
}

function footer() {
    goBuild(snips.FOOTER);
}

// Compile sections
preBody();

body01();

// Write to index.html
const fileName = 'index.html';
funs.compile(fileName, html);

export { goBuild };
