"use strict";
exports.__esModule = true;
exports.goBuild = void 0;
var fun_1 = require("./src/fun");
var navBar_1 = require("./src/navBar");
var snippe_1 = require("./src/snippe");
var html = [];
function goBuild(newLine, fin) {
    if (fin) {
        html = fun_1.funs.append(html, newLine, fin);
    }
    else {
        html = fun_1.funs.append(html, newLine);
    }
}
exports.goBuild = goBuild;
function preBody() {
    // File headers
    goBuild(snippe_1.snips.DOCTYPE);
    goBuild(snippe_1.snips.HTML);
    goBuild(snippe_1.snips.HEAD);
    // Page Title
    var title = 'Dummies Guide to Crypto';
    goBuild(snippe_1.snips.TITLE);
    goBuild(title);
    goBuild(snippe_1.snips.TITLE, 1);
    // Content header
    snippe_1.snips.DOCHEADER.forEach(function (element) {
        goBuild(element);
    });
    goBuild(snippe_1.snips.HEAD, 1);
}
var menuOptions = [
    ['index.html', 'Home'],
    ['#guides', 'Guides', 'openMenu()'],
    ['#contact', 'Contact', 'openMenu()'],
];
function body01() {
    // Start body
    goBuild(snippe_1.snips.BODY);
    // Nav manu
    goBuild(navBar_1.nav.makeMenu(menuOptions));
    // Footer
    footer();
    // End body
    goBuild(snippe_1.snips.BODY, 1);
}
function footer() {
    goBuild(snippe_1.snips.FOOTER);
}
// Compile sections
preBody();
body01();
// Write to index.html
var fileName = 'index.html';
fun_1.funs.compile(fileName, html);
