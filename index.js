const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((request, response) => {
  // if (request.url == "/") {
  //   fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //     if (err) throw err;
  //     response.writeHead(200, { "content-type": "text/html" });
  //     response.end(data);
  //   });
  // }
  // if (request.url == "/about") {
  //   fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
  //     if (err) throw err;
  //     response.writeHead(200, { "content-type": "text/html" });
  //     response.end(data);
  //   });
  // }
  // if (request.url == "/api/users") {
  //   const users = [
  //     { name: "Jhon doe", age: 40 },
  //     { name: "Osama El Zero", age: 30 },
  //   ];
  //   response.writeHead(200, { "Content-Type": "application/json" });
  //   response.end(JSON.stringify(users));
  // }
  //@ build file path
  let fileName = request.url == "/" ? "/index.html" : request.url;
  let filePath = path.join(__dirname, "public", fileName);

  //@ extension name
  let extname = path.extname(filePath);

  //@ initial header
  let contentType = "text/html";

  //@ check header
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
  //@ ReadFile
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // page not found
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
          if (err) throw err;
          response.writeHead(404, { "content-type": "text/html" });
          response.end(data);
        });
      } else {
        // server error
        response.writeHead(500);
        response.end(`Server Error ${err.code}`);
      }
    } else {
      // success
      response.writeHead(200, { "content-type": contentType });
      response.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server listen on prot: ${PORT}`);
});
