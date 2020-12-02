const Joi = require('joi');
const express = require('express');
const app = express();


// Lets rock on web!!!

// As matter of fact, is better to have your code changes without restarting server.
// to make this real......

//  install -> sudo npm i -g nodemon
// And using .... nodemon instead.
// Enviroment Varablies
app.use(express.json());

const courses = [{
        id: 1,
        name: 'course1'
    },
    {
        id: 2,
        name: 'course2'
    },
    {
        id: 3,
        name: 'course3'
    },
    {
        id: 4,
        name: 'course4'
    },
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

// Now its time to make https POST requests.
app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);



    if (!req.body.name || req.body.name.length < 3) {
        // 400 status code , that means Bas Request
        res.status(400).send('Name is required and shoud be minimum 3 characters');
        // This validation code shoud be placed in the beginng of  your route hangler
        // So the node user has the option to user a node package that helps on get this done.
        // npm joi  
        return;
    }
    // Now lets create a new course object 
    const course = {
        id: courses.length + 1,
        name: req.body.name

    };
    courses.push(course);
    res.send(course);
});


app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found.') //404 - Object not found
    res.send(course);
});

// Query parameters are stored 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));