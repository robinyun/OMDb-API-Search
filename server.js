var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  console.log(req);
  res.send('IMDB SEARCH HELLO');
});

app.listen(3000, function(){
  console.log('server is running!!!');
});
