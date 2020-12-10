const {
	delFile,
	writeToFile,
	readFromFile,
	appendToFile,
} = require('./src/fileIO.js');

const { fullAdd, build } = require('./src/funs.js');

const {
	DOCTYPE,
	HTML,
	HEAD,
	TITLE,
	DOCHEADER,
	BODY,
	FOOTER,
} = require('./src/snippets.js');

let html = [];

function goBuild(newLine, fin = null) {
	html = build(html, newLine, fin);
}

function preBody() {
	// File headers
	goBuild(DOCTYPE);
	goBuild(HTML);
	goBuild(HEAD);
	// Page Title
	const title = 'Dummies Guide to Crypto';
	goBuild(TITLE);
	goBuild(title);
	goBuild(TITLE, 1);
	// Content header
	DOCHEADER.forEach((element) => {
		goBuild(element);
	});
	goBuild(HEAD, 1);
}

function body01() {
	// Start body
	goBuild(BODY);
	// Footer
	footer();
	// End body
	goBuild(BODY, 1);
}

function footer() {
	goBuild(FOOTER);
}

// Make it work
preBody();

body01();

makeIt(html);

// Write to index.html
const fileName = 'index.html';
function makeIt(contentArray) {
	let newStr = '';
	contentArray.forEach((element) => {
		newStr += element;
	});
	writeToFile(fullAdd(fileName), newStr);
}
