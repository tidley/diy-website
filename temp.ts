import { sheetApi } from './src/google_api_2';

// Get values from sheets
async function getVals() {
    let title = await sheetApi.getVals('A1');
    console.log(title);
}
getVals();
