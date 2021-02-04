// lest get ready for action.

const { response } = require("express");
const express = require("express");
const app = express();
const courses = [
	{
		id: 1,
		name: "course1",
		id: 2,
		name: "course2",
	},
];

app.get("/", (req, res) => {
	res.send("Hello by Word!");
});

app.get("/api/courses", (req, res) => {
	res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
	const course = courses.find((c) => c.id === parseInt(req.params.id));
});

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}....`));
