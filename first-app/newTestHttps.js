const https = require("http");
//const meuHtml = require(".html");

const intro = {
	cabeca: "<h1>Bom Dia Familia<h1>",
	darBomDia: () => {
		console.log(`oi ${this.cabeca}`);
	},
};
const server = https.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Ola mundo");
		res.end();
	}

	if (req.url === "/API/") {
		res.write("Ola API");
		res.end();
	}

	if (req.url === "/listAll/") {
		res.write(`${this.intro.darBomDia()}`);
		res.end();
	}
});

server.listen(3000);
console.log("Listen on port 3000....");
