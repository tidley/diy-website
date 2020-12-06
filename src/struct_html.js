const snips = require('./snippets.js');

let html = [];

const DOCTYPE = '<!DOCTYPE html>';
const HTML = '<html>';
const HEAD = '<head>';

const title = 'Dummies Guide to Crypto';

// Attributes
build(DOCTYPE);
build(HTML);

// Head
build(HEAD);
build(snips.HEADER);
build(HEAD, 1);

//**Body */
// Header

// Footer
build(snips.FOOTER);

// Buidl
function build(line, close) {
	if (close) {
		line = fin(line);
	}
	html[html.length] = line;
}

function fin(open) {
	return '</' + open.split('<')[1];
}

console.log(html.toString());
