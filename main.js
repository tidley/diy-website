"use strict";
exports.__esModule = true;
var fun_1 = require("./src/fun");
var navBar_1 = require("./src/navBar");
var snippe_1 = require("./src/snippe");
var html = [];
function goBuild(newLine, fin) {
    if (fin) {
        html = fun_1.append(html, newLine, fin);
    }
    else {
        html = fun_1.append(html, newLine);
    }
}
exports.goBuild = goBuild;
function preBody() {
    // File headers
    goBuild(snippe_1.DOCTYPE);
    goBuild(snippe_1.HTML);
    goBuild(snippe_1.HEAD);
    // Page Title
    var title = 'Dummies Guide to Crypto';
    goBuild(snippe_1.TITLE);
    goBuild(title);
    goBuild(snippe_1.TITLE, 1);
    // Content header
    snippe_1.DOCHEADER.forEach(function (element) {
        goBuild(element);
    });
    goBuild(snippe_1.HEAD, 1);
}
var menuOptions = [
    ['index.html', 'Home'],
    ['#guides', 'Guides', 'openMenu()'],
    ['#contact', 'Contact', 'openMenu()'],
];
function body01() {
    // Start body
    goBuild(snippe_1.BODY);
    // Nav manu
    goBuild(navBar_1.makeMenu(menuOptions));
    // Footer
    footer();
    // End body
    goBuild(snippe_1.BODY, 1);
}
function footer() {
    goBuild(snippe_1.FOOTER);
}
// Compile sections
preBody();
body01();
// Write to index.html
var fileName = 'index.html';
fun_1.compile(fileName, html);
