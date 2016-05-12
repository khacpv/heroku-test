var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('It works');
});

var HTTP_PORT = process.env.PORT || 3000;
app.listen(HTTP_PORT, function(){
  console.log('listening at 0.0.0.0:' + HTTP_PORT);
});
