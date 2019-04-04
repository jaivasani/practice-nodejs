const EventEmitter = require('events');

const Logger = require('./logger');

// Creating a object from the logger class
const logger = new Logger();

// Register a listener
// Note: listener should be declared before raising the event
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// Calling the log method which is in the Logger class
logger.log('Hello World Message');