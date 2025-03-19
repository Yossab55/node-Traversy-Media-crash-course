const fs = require("fs");
const path = require("path");

//* create a folder

if (!fs.existsSync(path.join(__dirname, "text"))) {
  fs.mkdir(path.join(__dirname, "text"), {}, function (err) {
    if (err) console.log(err);
  });
}

//* delete a folder

if (fs.existsSync(path.join(__dirname, "text.txt"))) {
  fs.rmdirSync(path.join(__dirname, "text.txt"));
}

//* check folder existsSync

console.log(fs.existsSync(path.join(__dirname, "text")));

//* create & write on file

fs.writeFile(
  path.join(__dirname, "text", "hello.txt"),
  "hello world form fs_demo by node .js\n",
  (err) => {
    if (err) throw err;
    console.log("file created and written on ...");
    // to avoid over write
    fs.appendFile(
      path.join(__dirname, "text", "hello.txt"),
      "hello from append",
      (err) => {
        if (err) throw err;
        console.log("file created and written on ...");
      }
    );
  }
);

//* readfile
fs.readFile(
  path.join(__dirname, "text", "hello.txt"),
  "utf8", // encoding character
  function (err, data) {
    if (err) console.log(err);
    console.log(data);
  }
);
