"use strict";
exports.__esModule = true;
var fileIo_1 = require("./fileIo");
var projDir = './quick-site/';
function fullAdd(fileName) {
    console.log('fileName;', fileName);
    return projDir + fileName;
}
exports.fullAdd = fullAdd;
function append(html, line, close) {
    if (close) {
        line = fin(line);
    }
    html[html.length] = line;
    return html;
}
exports.append = append;
function fin(open) {
    return '</' + open.split('<')[1];
}
function compile(fileName, contentArray) {
    var newStr = '';
    contentArray.forEach(function (element) {
        newStr += element;
    });
    fileIo_1.writeToFile(fullAdd(fileName), newStr);
}
exports.compile = compile;
