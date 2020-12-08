const chai = require('chai');
const assert = chai.assert;
chai.use(require('chai-fs'));

const fs = require('fs');

const { delFile, makeFile } = require('../src/fileWriter.js');

// TEMPLATE //
//////////////
// describe('this suite'), () = {
// // fail
// it('should not do', () => {
// assert(true);
// });
// pass
// it('should do', () => {
// assert(true);
// });
// });
//////////////
// TEMPLATE //

const knownData = 'I like to ride my bicycle.';
const testHtml = './test/test.html';

function rmTestFiles() {
	delFile(testHtml + '1');
	delFile(testHtml);
}

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
		rmTestFiles();
	});

	// Create .html file

	// fail
	it('should not create an html file at a given location', async () => {
		await makeFile(testHtml + '1', knownData);
		assert.notPathExists(
			testHtml,
			'Error: File found at "./test/test.html" - delete and re-run.',
		);
	});
	// fail
	it('should not create an html file at a given location - wrong permissions', async () => {
		const _root = '/test.html';
		const _err = await makeFile(_root);
		console.log('_err', _err);
		assert.notPathExists(
			_root,
			'Error: File found at "./test/test.html" - delete and re-run.',
		);
		assert.notEqual(_err, undefined);
	});
	// pass
	it('should create an html file at a given location', async () => {
		const _err = await makeFile(testHtml);
		console.log('_err', _err);
		assert.pathExists(testHtml, 'Error: File not found.');
		assert.equal(_err, undefined);
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
		rmTestFiles();
	});
});
