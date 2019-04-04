const EventEmitter = require('events');;

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
    
        // Raised an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

// Sending the Logger class
module.exports = Logger;