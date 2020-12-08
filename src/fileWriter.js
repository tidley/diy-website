const fs = require('fs');

function delFile(fileName) {
	try {
		fs.unlinkSync(fileName);
	} catch (err) {
		return err.toString();
	}
}

async function makeFile(fileName, contents = '') {
	fs.writeFileSync(fileName, contents, (err) => {
		if (err) return err;
	});
}

module.exports = { delFile, makeFile };
