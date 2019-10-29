var scrape = require("../scripts/scrape");
var makeData = require("../scripts/date");

var Headline = require("../models/Headline");

module.exports ={
    fetch: function(cb){
        scrape(function(data){
            var articles = data;
            for (var i=0; i<articles.length; i++){
                articles[i].date = makeData();
                articles[i].saved = false;
            }
            Headline.collection.insertMany(articles,{ordered:false}, function(err, docs){
                cb(err, docs);
            });
        });
    }
}