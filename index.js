var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var server = http.Server(app);
var httpPort = 23443;

// parse application/json
app.use(bodyParser.json());

app.get("*", function(req, res) {
	res.send(req.body).end();
});

server.listen(httpPort, function() {
	console.log("Listening on *:" + httpPort);
});