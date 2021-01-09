"use strict";
exports.__esModule = true;
exports.funs = void 0;
var fileIo_1 = require("./fileIo");
var projDir = './quick-site/';
function fullAdd(fileName) {
    console.log('fileName;', fileName);
    return projDir + fileName;
}
function fin(open) {
    return '</' + open.split('<')[1];
}
var funs = {
    append: function (html, line, close) {
        if (close) {
            line = fin(line);
        }
        html[html.length] = line;
        return html;
    },
    compile: function (fileName, contentArray) {
        var newStr = '';
        contentArray.forEach(function (element) {
            newStr += element;
        });
        fileIo_1.fileFuns.writeToFile(fullAdd(fileName), newStr);
    }
};
exports.funs = funs;
