const express = require('express');
const app = express();

app.get(/^\/things\/(\d{5})$/, function(req, res){
   const id = req.url.match(/^\/things\/(\d{5})$/)[1];
   res.send('id: ' + id);
});

//Other routes here
app.get('/*splat', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000, () => {
   console.log('Server running on http://localhost:3000');
});
