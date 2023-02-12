const fs = require('fs');
const yaml = require('js-yaml');

// Load the YML file
let file = fs.readFileSync('file.yml', 'utf8');

// Parse the YML file into a JavaScript object
let obj = yaml.load(file);

// Load the JSON data
let data = require('./data.json');

// Update the values in the YML object using the JSON data
obj.key1 = data.key1;
obj.key2 = data.key2;

// Convert the updated YML object back to a string
let yml = yaml.dump(obj);

// Write the updated YML string back to the file
fs.writeFileSync('file.yml', yml);
