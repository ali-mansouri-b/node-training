const express = require('express');
const app = express();

app.get('/things/:id', (req, res) => {
  const id = req.params.id;

  if (/^\d{5}$/.test(id)) {
    res.send(`Valid ID: ${id}`);
  } else {
    res.status(400).send('Invalid ID. Must be exactly 5 digits.');
  }
});

app.get('/*splat', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
