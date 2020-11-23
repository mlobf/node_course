// Lets have some fun 
console.log("")

console.log('To install a npm package you Shall Do This :')
console.log("")
console.log(" npm i nameOfPackage")
console.log("")


let _ = require('./npm-demo/node_modules/underscore');

// Core module 
// File or Folder
// node_modules

let result = _.contains([1,2,3], 2);

console.log(result);
console.log("=======>");
console.log('To install a specif version just do:')
console.log('npm i nameOfPackege@versionNumber')




// How to hide the node modules I should put on git ignore 