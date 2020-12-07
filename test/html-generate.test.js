const chai = require('chai');
const assert = chai.assert;
chai.use(require('chai-fs'));

const fs = require('fs');

const knownData = 'I like to ride my bicycle.';
const testHtml = './test/test.html';

function rmTestHtml() {
	try {
		fs.unlinkSync(testHtml + '1');
		fs.unlinkSync(testHtml);
	} catch {}
}

// TEMPLATE //
//////////////
// what i do
// fail

// pass
//////////////
// TEMPLATE //

// buffers https://www.tutorialkart.com/nodejs/node-js-convert-array-to-buffer/

describe('Memory', () => {
	// Put text into buffer
	// fail
	it('should not create clean buffer', () => {
		const buff1 = Buffer.allocUnsafe(10);
		assert.isDefined(buff1[0]);
	});
	// pass
	it('should create clean buffer', () => {
		const buff1 = Buffer.alloc(10);
		assert.equal(buff1[0], 0);
	});
	// fail
	it('should not write known values to a buffer', () => {
		const buff1 = Buffer.alloc(10);
		const len = buff1.write(knownData, 2, 5, 'utf8');
		const val = buff1[len - 1];
		assert.notEqual(val, 32);
	});
	// pass
	it('should write known values to a buffer', () => {
		const buff1 = Buffer.alloc(10);
		const len = buff1.write(knownData);
		const val = buff1[len - 1];
		assert.equal(val, 32);
	});
});

describe('Data to html', () => {
	// Before events
	// Delete test files
	before(() => {
		rmTestHtml();
	});
	// Create .html file

	// fail
	it('should not create an html file at a given location', () => {
		fs.writeFile(testHtml + '1', 'wot eva', (err) => {
			if (err) throw err;
		});
		assert.notPathExists(
			testHtml,
			'Error: File found at "./test/test.html" - delete and re-run.',
		);
	});
	// pass
	it('should create an html file at a given location', () => {
		fs.writeFile(testHtml, 'wot eva', (err) => {
			if (err) throw err;
		});
		assert.pathExists(testHtml, 'Error: File not found.');
	});

	// Write to .html file
	// fail
	it('should not write data in known format to test html file', () => {
		fs.writeFile(testHtml, knownData, 'utf8', (err) => {
			if (err) throw err;
		});
		fs.readFileSync(testHtml, (err, data) => {
			if (err) throw err;
			console.log(data);
			let checkContents = data;
			assert.notEqual(checkContents, knownData, 'Error: Data recognised');
		});
	});
	// pass
	it('should write and read data in known format to test html file', () => {
		fs.writeFile(testHtml, knownData, 'utf8', (err) => {
			if (err) throw err;
		});
		fs.readFile(testHtml, (err, data) => {
			if (err) throw err;
			let checkContents = data.toString('utf8');
			assert.equal(checkContents, knownData, 'Error: Data recognised');
		});
	});
	// fail
	it('should not append data to html file', () => {
		fs.appendFile(testHtml, '', (err) => {
			if (err) throw err;
		});
		fs.readFileSync(testHtml, (err, data) => {
			if (err) throw err;
			console.log(data);
			let checkContents = data;
			assert.notEqual(
				checkContents,
				knownData + knownData,
				'Error: Data recognised',
			);
		});
	});
	// pass
	it('should append data to html file', () => {
		fs.appendFile(testHtml, knownData, (err) => {
			if (err) throw err;
		});
		fs.readFileSync(testHtml, (err, data) => {
			if (err) throw err;
			console.log(data);
			let checkContents = data;
			assert.notEqual(
				checkContents,
				knownData + knownData,
				'Error: Data recognised',
			);
		});
	});
	// After events
	// Delete test files
	after(() => {
		rmTestHtml();
	});
});

fs.writeFile(testHtml + '2', knownData, 'utf8', (err) => {
	if (err) throw err;
});
fs.writeFile(testHtml + '3', knownData, 'ascii', (err) => {
	if (err) throw err;
});
fs.writeFile(testHtml + '4', knownData, 'base64', (err) => {
	if (err) throw err;
});
