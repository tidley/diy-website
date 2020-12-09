const projDir = './quick-site/';

function fullAdd(fileName) {
	return projDir + fileName;
}

// Buidl
function build(html, line, close) {
	if (close) {
		line = fin(line);
	}
	html[html.length] = line;
	return html;
}

function fin(open) {
	return '</' + open.split('<')[1];
}

module.exports = { fullAdd, build };
