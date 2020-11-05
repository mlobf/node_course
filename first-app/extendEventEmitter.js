console.log('==========  Lesson 21 ========');

// On real world app, I will create a Class with all methods's emit and use them on my app
const EventEmitter = require('events');
const emitter = new EventEmitter();

let url = 'http://mylogger.oi/log';

function log(message) {
    //Send an HTTP request
    console.log(message);
    //Raise an Event
    emitter.emit('messageLogged', {
        id: 1,
        url: 'http://'
    });

}

module.exports = log;