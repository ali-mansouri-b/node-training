var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public'));

app.get('/', function(req, res){
   res.render('form');
});

// handle form submission
app.post('/', function(req, res){
   // read the number entered by the user
   const number = parseInt(req.body.number);
   
   // compute square of the number
   const square = Math.pow(number, 2);

   // return the result
   res.render('form', { result: square });
});
app.listen(3000);