"use strict";
exports.__esModule = true;
var file_io_1 = require("./src/file-io");
var fun_1 = require("./src/fun");
var snippe_1 = require("./src/snippe");
var html = [];
function goBuild(newLine, fin) {
    if (fin) {
        html = fun_1.build(html, newLine, fin);
    }
    else {
        html = fun_1.build(html, newLine);
    }
}
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
function body01() {
    // Start body
    goBuild(snippe_1.BODY);
    // Footer
    footer();
    // End body
    goBuild(snippe_1.BODY, 1);
}
function footer() {
    goBuild(snippe_1.FOOTER);
}
// Make it work
preBody();
body01();
// Write to index.html
var fileName = 'index.html';
makeIt(fileName, html);
function makeIt(fileName, contentArray) {
    var newStr = '';
    contentArray.forEach(function (element) {
        newStr += element;
    });
    file_io_1.writeToFile(fun_1.fullAdd(fileName), newStr);
}
