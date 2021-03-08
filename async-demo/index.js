"use strict";

console.log("Before");

getUser(1, (user) => {
	console.log("User", user);
	//Get the repositories
	getRepositories(user.gitHubUserName, (repos) => {
		console.log("Repos", repos);
	});
});

console.log("After");

function getUser(id, callback) {
	setTimeout(() => {
		console.log("Reading a user from a database...");
		callback({ id: id, gitHubUserName: "mosh" });
	}, 2000);
}

// Convert the function below
function getRepositories(username, callback) {
	setTimeout(() => {
		console.log(`Calling GitHub API for ${username}`);
		callback(["repo1", "repo2", "repo3"]);
	}, 2000);
}

// Callbacks
// Promises
// Async/await
