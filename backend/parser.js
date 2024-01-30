const fs = require("fs");
function parseCSVtoJSON(csvFilePath) {
    csvData = fs.readFileSync(csvFilePath,'utf-8')

    const lines = csvData.split('\n');
    const headers = lines[0].split(',');

    const result = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(',');
        const obj = {};

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }

        result.push(obj);
    }
    

    return result;
}
  

module.exports = {parseCSVtoJSON }