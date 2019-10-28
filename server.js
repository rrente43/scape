var express = require('express');
var exphbs  = require('express-handlebars');
var mongoose = require("mongoose");
const cheerio =require("cheerio");
const axios = require('axios');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);