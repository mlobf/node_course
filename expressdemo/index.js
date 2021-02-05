// lest get ready for action.
const Joi = require("joi");
const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
	{
		id: 1,
		name: "course1",
	},
	{
		id: 2,
		name: "course2",
	},
	{
		id: 3,
		name: "course3",
	},
];

app.get("/", (req, res) => {
	res.send("Hello by Word!");
});

app.get("/api/courses", (req, res) => {
	res.send(courses);
});

app.put("/api/course/:id", (req, res) => {
	const course = courses.find((c) => c.id === parseInt(req.params.id));

	if (!course)
		res.status(404).send("The course with the given ID was not found");

	const schema = {
		name: Joi.string().min(3).required(),
	};

	const { error } = validateCourse(request.body);
	if (error) {
		res.status(400).send(result.error);
		return;
	}

	course.name = req.body.name;

	res.send(course);
});

function validateCourse(course) {
	const schema = {
		name: Joi.string().min(3).required(),
	};
	return Joi.valid(req.body, schema);
}

app.get("/api/courses/:id", (req, res) => {
	const course = courses.find((c) => c.id === parseInt(req.params.id));
	if (!course)
		res.status(404).send("The course with the given ID was not found");
	res.send(course);
});

app.post("/api/courses", (req, res) => {
	const schema = {
		name: Joi.string().min(3).required(),
	};

	const result = Joi.valid(req.body, schema);
	if (result.error) {
		res.status(400).send(result.error);
		return;
	}

	const course = {
		id: courses.length + 1,
		name: req.body.name,
	};
	courses.push(course);
	res.send(course);
});

// NEVER TRUST WHAT CLIENT SEND YOU BY DEFAULT, THIS IS A NORM OF MARKET

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));
