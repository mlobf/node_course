// When you use node to work with files, the first thing to do is
//  import the module.
//  The second is use aSync function.

//Working with files with node.
const fs = require('fs');
/*
const files = fs.readdirSync('./');
console.log(files);
*/
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

