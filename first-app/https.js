const https = require("http");

const server = https.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Hello World!!");
		res.end();
	}

	if (req.url === "/api/courses/") {
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}
}); //This is a callback method

server.listen(3000);

console.log("Listening  on port 3000 ...");
