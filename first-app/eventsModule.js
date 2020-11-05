//Events Module

//The EventEmmiter is a Class, and by convention
//      must has Uppercase the first Letter.
//      A CLASS is container for properties and
//      methods.

const EventEmitter = require('events');

// Now lets create an instance of this class.
const emitter = new EventEmitter(); //This is the an object.

//Register a listener.
emitter.on('messageLogged', function () {
    console.log('Listener called');
});

//Raise an event
// Important, this Raise must be places after the listener. The Listerner will be called recursively.
emitter.emit('messageLogged'); // Emit means "make a noise - signalling a event is happening"