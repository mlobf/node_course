//Event Argument
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (arg) =>{
    console.log('Listener called', arg);
});

emitter.emit('messageLogged', {id:1, url: 'http://'});

// Ex, Raise: logging (data: message)