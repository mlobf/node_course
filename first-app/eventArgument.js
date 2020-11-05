//Event Argument
const EventEmitter = require('events');
const emitter = new EventEmitter();


// This is a tech witch allows pass data ...
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

//Raise an event
emitter.emit('messageLogged', {
    id: 1,
    url: 'http://'
});

// Ex, Raise: logging (data: message)

// Try to raise an event "logging" (data:message)
const log = require('./logger');
log('message');
