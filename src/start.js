const { funs } = require('./fun.js');

const { nav } = require('./navBar.js');

const { snips } = require('./snippe.js');

let html = [];

function goBuild(newLine, fin) {
    if (fin) {
        html = funs.append(html, newLine, fin);
    } else {
        html = funs.append(html, newLine);
    }
}

function preBody(values) {
    // File headers
    goBuild(snips.DOCTYPE);
    goBuild(snips.HTML);
    goBuild(snips.HEAD);
    // Page Title
    goBuild(snips.TITLE);
    goBuild(values.A1);
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

// Get values from sheets
async function getVals() {
    let title = '';
}

function coreFun(values) {
    // Compile sections
    preBody(values);

    body01();
    // Write to index.html
    const fileName = 'index.html';
    funs.compile(fileName, html);
}

// export { goBuild };

module.exports = coreFun;
