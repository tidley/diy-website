import { fileFuns } from './fileIo';

const projDir = './quick-site/';

function fullAdd(fileName: string): string {
    console.log('fileName;', fileName);
    return projDir + fileName;
}

function fin(open: string): string {
    return '</' + open.split('<')[1];
}

const funs = {
    append: (html: Array<string>, line: string, close?: any): Array<string> => {
        if (close) {
            line = fin(line);
        }
        html[html.length] = line;
        return html;
    },

    //
    compile: (fileName: string, contentArray: Array<string>) => {
        let newStr = '';
        contentArray.forEach((element: string) => {
            newStr += element;
        });
        fileFuns.writeToFile(fullAdd(fileName), newStr);
    },
};

export { funs };
