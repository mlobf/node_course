// Using the OS module of NODE JS.
const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

//console.log(totalMemory, freeMemory);

//Templete String
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
