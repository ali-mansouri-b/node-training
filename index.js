var express = require('express');
const slowDown = require("express-slow-down");

var app = express();

// configure slow limiter with a time window of 10 minutes
// and maximum 3 requests
const limiter = slowDown({
  windowMs: 10 * 60 * 1000,  // 10 minutes
  delayAfter: 3,  // allows 3 requests per 10 minutes
  delayMs: (hits) => hits * 100, // Add 100 ms of delay to every request after 3rd request
});

app.use(limiter);

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);