const path = require('path'); //Load a build in module.

let pathObj = path.parse(__filename);

console.log(pathObj);

const log = require('./logger');

log('message');

function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello("Eli Correia!!!");