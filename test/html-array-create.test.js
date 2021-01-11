const chai = require('chai');
const assert = chai.assert;
chai.use(require('chai-fs'));

const {
    delFile,
    writeToFile,
    readFromFile,
    appendToFile,
} = require('../src/fileIO.js');

// TEMPLATE //
//////////////
// describe('this suite', () => {
// // fail
// it('should not do', () => {
// assert(true);
// });
// pass
// it('should do', async () => {
// await thing();
// assert(true);
// });
// });
//////////////
// TEMPLATE //

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
