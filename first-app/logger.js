// Logger JS
// In your modules you can export an single function or an object.



let url = 'http://mylogger.oi/log';

function log(message) {
    //Send a HTTP request
    console.log(message);
}


module.exports = log;