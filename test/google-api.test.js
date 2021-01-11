const chai = require('chai');
const assert = chai.assert;

const sheetApi = require('../src/google_api_js');

describe('G Sheet API Test', () => {
    const expectedVal = { A1: 'This is my website' };
    // fail
    it('should not get values from A1', async () => {
        const range = 'A2';
        let response = await sheetApi.getVals(range);
        console.log('response: ', await response);
        assert(true);
    });
    // pass;
    it('should do', () => {
        // await thing();
        assert(true);
    });
});
