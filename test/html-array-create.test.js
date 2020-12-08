const chai = require('chai');
const assert = chai.assert;
chai.use(require('chai-fs'));

const fs = require('fs');

// describe('this suite', () => {
// 	// fail
// 	it('should not do', () => {
// 		assert(true);
// 	});
// // 	pass
// 	it('should do', () => {
// 		assert(true);
// 	});
// });

const knownData = '<a href="index.html" id="logo">DummiesGuideTo.Crypto</a>';

describe('builds array of HTML strings', () => {
	// fail
	it('should not write something to an array', () => {
		const html = [];
		assert(html.length == 0);
	});
	// pass
	it('should write something to an array', () => {
		const html = [];
		html[html.length] = knownData;
		assert(html.length == 1);
	});
});
