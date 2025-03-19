const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {

  log(message) {
    // call event
    this.emit('message', {id: uuid.v4(), message})
  }
}

// module.exports = Logger;


// const Logger = require("./logger");
const fs = require("fs");
const path = require("path");
const logger = new Logger();

logger.on("message", (data) => {
  let dir = path.join(__dirname, "logs");
  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, (err) => {
      if (err) throw err;
    });
  }
  let string = `Id: ${data.id} & Message Is: ${data.message}`;
  if (!fs.existsSync(path.join(dir, "log.txt"))) {
    fs.writeFileSync(path.join(dir, "log.txt"), string);
    // fs.writeFile(path.join(dir, "log.txt"), string, (err) => {
    //   if (err) throw err;
    // });
  } else {
    fs.appendFile(path.join(dir, "log.txt"), string, (err) => {
      if (err) throw err;
    });
  }
});

logger.log("hello world\n");
logger.log("Hi\n");
logger.log("explain: logger file {id, message} is the data in this file\n");
logger.log("new log is here\n");