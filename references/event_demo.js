const EventEmitter = require("events");

//* create event class
class MyEmitter extends EventEmitter {};

//* init an object
const myEmitter = new MyEmitter()

//* Event listener 

myEmitter.on("event", () => {console.log("Event fired!!")});

//*Init event

myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");


//! real life example logger.js file