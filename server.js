var express = require("express");
// var exphbs  = require('express-handlebars');
// var mongoose = require("mongoose");
// const cheerio =require("cheerio");
// const axios = require('axios');

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// mongoose.connect(MONGODB_URI);

var PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router;
app.use(express.static(__dirname +"/public"));
app.use(router);
app.listen(PORT, function(){
    console.log("listening on port:"+ PORT);
});
