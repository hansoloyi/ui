var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 5000, function() {
  console.log('App server is up on port 3000');
})
