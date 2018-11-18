//been getting error code ELIFECYCLE I'm having a hard time with express, and node.js. 
// I couldn't get this to work  


var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/add", function(req, res) {
res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);
require("./app/data/friends.js")(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

