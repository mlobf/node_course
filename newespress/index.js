"use strict";
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello word !");
});

app.get("/api/courses", (req, res) => {
	res.send([1, 2, 3, 4, 5]);
});

app.listen(3000, () => {
	console.log("Listen at port 3000....");
});

//app.post();
//app.put();
//app.delete();
