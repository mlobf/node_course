// Lets rock on web!!!

// As matter of fact, is better to have your code changes without restarting server.
// to make this real......

//  install -> sudo npm i -g nodemon
// And using .... nodemon instead.
// Enviroment Varablies
const express = require('express');

const app = express();

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'},
];

// This method takes two arguements, first url path, second (request, response)
app.get('/', (req, res) => {
    res.send('Hello Word !!!!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

/*
app.post();
app.put();
app.delete();
*/
// PORT
// /api/courses/1
// How to implementing a route like this?
/*app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});
*/
app.post('/api/courses',(req, res)=> {

});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c =>c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found.')//404 - Object not found
    res.send(course);
});

// Query parameters are stored 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));