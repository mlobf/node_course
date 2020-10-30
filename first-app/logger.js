// Logger JS

let url ='http://mylogger.oi/log';

function log(message) {
    //Send a HTTP request
    console.log(message);
}


module.exports.log = log;