var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("./models/Article");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));


//MongoDB configuration
var MONGODB = process.env.MONGODB_URI || "mongodb://localhost/react_db";
mongoose.connect(MONGODB);
var db = mongoose.connection;

db.on("error", function(err) {
	console.log("Mongoose Error: ", err);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});


//Routes

//Default route
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

//Find all saved articles
app.get("/api/saved", function(req, res) {
	Article.find({}).sort([["date", "ascending"]
		]).exec(function(err, doc) {
			if (err) {
				console.log(err);
			} else {
				er.send(doc);
			}
		});
});

//Post route to save articles to db
app.post("/api/saved", function(req, res) {
	console.log(req.body);
	Article.create({
		title: req.body.title,
		url: req.body.url,
		date: Date.now()
	}, function(err) {
      if (err) {
      	console.log(err);
      } else {
      	res.send("Article saved successfully!");
      }
	});
});


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});