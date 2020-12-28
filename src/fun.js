"use strict";
exports.__esModule = true;
var projDir = './quick-site/';
function fullAdd(fileName) {
    console.log('fileName;', fileName);
    return projDir + fileName;
}
exports.fullAdd = fullAdd;
function build(html, line, close) {
    if (close) {
        line = fin(line);
    }
    html[html.length] = line;
    return html;
}
exports.build = build;
function fin(open) {
    return '</' + open.split('<')[1];
}
