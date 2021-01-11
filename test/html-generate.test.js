const chai = require('chai');
const assert = chai.assert;
chai.use(require('chai-fs'));

const {
    delFile,
    writeToFile,
    readFromFile,
    appendToFile,
} = require('../src/fileIo.js');

// TEMPLATE //
//////////////
// describe('this suite', () => {
// // fail
// it('should not do', () => {
// assert(true);
// });
// // pass
// it('should do', async () => {
// await thing();
// assert(true);
// });
// });
//////////////
// TEMPLATE //

const knownData = 'I like to ride my bicycle.';
const testHtml = './test.html';

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

describe('Create file', () => {
    // Before events
    // Delete test files
    before(() => {
        rmTestFiles();
    });

    // Create .html file
    // fail
    it('should not create an html file at a given location', () => {
        const failFile = testHtml + '1';
        writeToFile(failFile);
        assert.notPathExists(
            testHtml,
            'Error: File found at ' + failFile + ' - delete and re-run.',
        );
    });

    // pass
    it('should create an html file at a given location', () => {
        writeToFile(testHtml);
        assert.pathExists(testHtml, 'Error: File not found.');
    });
});

describe('Write to file', () => {
    // Write to .html file
    // fail
    //"utf8" | "ascii" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" |
    it('should not write data in known format to test html file', async () => {
        await writeToFile(testHtml, knownData, 'base64');
        let data = await readFromFile(testHtml);
        assert.notDeepEqual(data, knownData, 'Error: Data recognised');
    });

    // pass
    it('should write and read data in known format to test html file', async () => {
        await writeToFile(testHtml, knownData);
        let data = await readFromFile(testHtml);
        assert.deepEqual(data, knownData, 'Error: Data recognised');
    });

    // fail
    it('should not append data to html file', async () => {
        await appendToFile(testHtml, '');
        let data = await readFromFile(testHtml);
        assert.notEqual(data, knownData + knownData, 'Error: Data recognised');
    });

    // pass
    it('should append data to html file', async () => {
        await appendToFile(testHtml, knownData);
        let data = await readFromFile(testHtml);
        assert.equal(data, knownData + knownData, 'Error: Data recognised');
    });

    // After events
    // Delete test files
    after(() => {
        rmTestFiles();
    });
});
