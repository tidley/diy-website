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

// Write to index.html
const fileName = 'index.html';
writeToFile(fullAdd(fileName));

function preBody() {
	// File headers
	build(html, DOCTYPE);
	build(html, HTML);
	build(html, HEAD);
	// Page Title
	const title = 'Dummies Guide to Crypto';
	build(html, TITLE);
	build(html, title);
	build(html, TITLE, 1);
	// Content header
	DOCHEADER.forEach((element) => {
		build(html, element);
	});
	build(html, HEAD, 1);
}

function body01() {
	// Start body
	build(html, BODY);
	// Footer
	footer();
	// End body
	build(html, BODY, 1);
}

function footer() {
	build(html, FOOTER);
}

function buildIt(html) {
	html.forEach((element) => {
		appendToFile(fullAdd(fileName), element);
	});
}

// Make it work
preBody();

body01();

buildIt(html);
