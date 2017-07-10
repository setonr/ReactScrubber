var request = require("request");
var cheerio = require("cheerio");

var Article = require("./../models/Article");

module.exports = function(app) {
  app.get("*", function(req, res) {
    res.render("index");
  });
};