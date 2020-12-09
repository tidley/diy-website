const DOCTYPE = '<!DOCTYPE html>';
const HTML = '<html>';
const HEAD = '<head>';
const TITLE = '<title>';

const DOCHEADER = [
	"<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
	"<meta http-equiv='content-type' content='text/html; charset=utf-8' />",
	"<meta name='description' content='' />",
	"<meta name='keywords' content='' />",
	"<link rel='stylesheet' href='css/main.min.css'>",
];

const BODY = '<body>';

const FOOTER =
	"<footer id='footer'><p>Built with love &#10084</p><ul class='icons'></ul></footer>";

module.exports = { DOCTYPE, HTML, HEAD, TITLE, DOCHEADER, BODY, FOOTER };
