"use strict";
const express = require("express");
const Joi = require("joi");

const app = express();
app.use(express.json());

const arr = [
	{ id: 1, name: "course1" },
	{ id: 2, name: "course2" },
	{ id: 3, name: "course3" },
];

app.get("/", (req, res) => {
	res.send("Hello word !");
});

// To get all the courses
app.get("/api/courses", (req, res) => {
	res.send(arr);
});

//To get a single course
app.get("/api/courses/:id", (req, res) => {
	const course = arr.find((c) => c.id === parseInt(req.params.id));
	if (!course)
		res.status(404).send("The course with the given id was not found");
	res.send(course);
});

// Now the POST request
// To validate the input use this node pack  npm joi
app.post("/api/courses", (req, res) => {
	const schema = {
		name: Joi.string().min(3).required(),
	};
	const result = Joi.valid(req.body, schema);

	if (result.error) {
		// Return 400
		res.status(400).send(result.error);
	}

	const course = {
		id: arr.length + 1,
		name: req.body.name,
	};
	arr.push(course);
	res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  
	//Look up the course
	// If not exist, return 404
	// Validate the course,
	// If invalid , return 404
	// Update the course .
	// Return the updated course to the client

});

// PORT -> environment variable -> the value is set outside application
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listen at port ${port}`);
});

//app.post();
//app.put();
//app.delete();
