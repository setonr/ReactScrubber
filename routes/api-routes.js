var request = require("request");
var cheerio = require("cheerio");

var Article = require("./../models/Article");

module.exports = function(app) {
  //query MongoDB for saved articles
  app.get("api/saved", function(req, res) {
   
  });

  //use to save article to the database
  app.post("api/saved", function(req, res) {

  });

  //delete a saved article in db
  app.delete("api/saved", function(req, res) {

  });

};