var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/static_files', function(req, res){
   res.render('static_files');
});

app.listen(3000);