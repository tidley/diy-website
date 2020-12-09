const fs = require('fs').promises;

function delFile(fileName) {
	try {
		fs.unlink(fileName);
	} catch (err) {
		return err.toString();
	}
}

async function writeToFile(fileName, contents, encoding = 'utf8') {
	await fs.writeFile(fileName, contents || '', encoding, (err) => {
		if (err) return err.toString();
	});
}

async function appendToFile(fileName, data) {
	await fs.appendFile(fileName, data, (err) => {
		if (err) return err.toString();
	});
}

async function readFromFile(fileName, encoding = 'utf8') {
	try {
		const data = await fs.readFile(fileName, encoding);
		return data;
	} catch (err) {
		return err.toString();
	}
}

module.exports = { delFile, writeToFile, readFromFile, appendToFile };
