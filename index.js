var express = require('express');
var app = express();

var things = require('./things.js');

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(3000);