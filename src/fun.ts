const projDir = './quick-site/';

function fullAdd(fileName: string): string {
  return projDir + fileName;
}

function build(html: Array<string>, line: string, close?: any): Array<string> {
  if (close) {
    line = fin(line);
  }
  html[html.length] = line;
  return html;
}

function fin(open: string): string {
  return '</' + open.split('<')[1];
}

export { fullAdd, build };
