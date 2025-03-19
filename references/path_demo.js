const path = require("path");

//* base file name

console.log(__filename);
console.log(path.basename(__filename));

//* directory name

console.log(path.dirname(__filename));

//* file extension

console.log(path.extname(__filename));

//* create Path object

console.log(path.parse(__filename));

//* concatenate path

console.log(path.join(__dirname, "test", "index.html"));
console.log(path.join(__dirname, "index.html"));
