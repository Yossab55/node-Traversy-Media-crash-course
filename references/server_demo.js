const http = require("http");

//* create a server

http
  .createServer((request, response) => {
    response.write("hello world");
    response.end();
  })
  .listen(5000, "localhost", () => {
    console.log("server listening");
  });
