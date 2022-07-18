var express = require('express');
var path = require('path');
var app = express();

var abPath = path.join(__dirname, 'public');

const root = express.static(abPath);
app.use(root);

app.listen(3000, () => {
  console.log('Listening on server 3000!');
});
