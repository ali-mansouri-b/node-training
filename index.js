const express = require('express');
const app = express();

app.get(/^\/things\/(\d{5})$/, function(req, res){
   res.send('id: ' + req.params[0]);
});
app.listen(3000);