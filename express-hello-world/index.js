var express = require('express');
var app = express();

app.use((req, res) => {

  res.send('I hope this works');
});

app.listen(3500, () => {
});
