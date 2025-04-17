const express = require('express');
const app = express();
const rateLimit = require("express-rate-limit");

// configure rate limiter with a time window of 10 minutes
// and maximum 3 requests
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 3,
});

app.use(limiter);

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);