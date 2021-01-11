"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.sheetApi = void 0;
var fs = require('fs');
var readline = require('readline');
var google = require('googleapis').google;
// If modifying these scopes, delete token.json.
var SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
var TOKEN_PATH = '/home/tom/code/BITS/diy-website/src/auth/token.json';
// Return item type: https://stackoverflow.com/questions/43523645/return-json-object-with-typescript-function
var range = 'Sheet1!A1:E';
var sheetApi = {
    // Load client secrets from a local file.
    getVals: function (range) { return __awaiter(void 0, void 0, void 0, function () {
        var values;
        return __generator(this, function (_a) {
            fs.readFile('/home/tom/code/BITS/diy-website/src/auth/credentials.json', function (err, content) {
                if (err)
                    return console.log('Error loading client secret file:', err);
                // Authorize a client with credentials, then call the Google Sheets API.
                values = authorize(JSON.parse(content), getPageLayout, range);
                console.log(values);
            });
            return [2 /*return*/, values];
        });
    }); }
};
exports.sheetApi = sheetApi;
/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback, args) {
    var _a = credentials.installed, client_secret = _a.client_secret, client_id = _a.client_id, redirect_uris = _a.redirect_uris;
    var oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, function (err, token) {
        if (err)
            return getNewToken(oAuth2Client, callback, args);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client, args);
    });
}
/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback, args) {
    var authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter the code from that page here: ', function (code) {
        rl.close();
        oAuth2Client.getToken(code, function (err, token) {
            if (err)
                return console.error('Error while trying to retrieve access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), function (err) {
                if (err)
                    return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client, args);
        });
    });
}
var spreadsheetId = '1NeAxYc-9ZC0kouAcsKtBiHMJOCmd657QyePYdJpYyuU';
/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function getPageLayout(auth, range) {
    return __awaiter(this, void 0, void 0, function () {
        var sheets, values, valCount;
        return __generator(this, function (_a) {
            sheets = google.sheets({ version: 'v4', auth: auth });
            values = {};
            valCount = 1;
            sheets.spreadsheets.values.get({
                spreadsheetId: spreadsheetId,
                range: range
            }, function (err, res) {
                if (err)
                    return console.log('The API returned an error: ' + err);
                var rows = res.data.values;
                if (rows.length) {
                    rows.forEach(function (element) {
                        values['A' + valCount] = element[0];
                        values['B' + valCount] = element[1];
                        values['C' + valCount] = element[2];
                        values['D' + valCount++] = element[3];
                    });
                    console.log(values);
                    // rows.map((row) => {
                    //     console.log(
                    //         `${row[0]}, ${row[1]}, ${row[2]}, ${row[3]}, ${row[4]}`,
                    //     );
                    // });
                }
                else {
                    console.log('No data found.');
                }
            });
            return [2 /*return*/, values];
        });
    });
}
