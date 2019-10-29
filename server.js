var express = require("express");
var exphbs  = require('express-handlebars');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// const cheerio =require("cheerio");
// const axios = require('axios');


var PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router;
app.use(express.static(__dirname +"/public"));
// 

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine","handlebars");
// 

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(db, function(err){
    if(error){
        console.log(error);
    }
    else{
        console.log("mongoose connection successful");
    }
});



app.listen(PORT, function(){
    console.log("listening on port:"+ PORT);
});