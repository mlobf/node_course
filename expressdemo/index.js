// Lets rock on web!!!

// As matter of fact, is better to have your code changes without restarting server.
// to make this real......

const express = require('express');

const app = express();
// This method takes two arguements, first url path, second (request, response)
app.get('/', (req, res) => {
    res.send('Hello Word !!!!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

/*
app.post();
app.put();
app.delete();
*/

app.listen(3000, () => console.log('Listening on port 3000'));