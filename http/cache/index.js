var path = require('path');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.set({
    // 'Pragma': 'no-cache',
    // 'Cache-Control': 'no-cache',
    // 'Etag': String(Date.now())
  });
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/app.es', function(req, res) {
  res.set({
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Etag': String(Date.now()),
    'Content-Type': 'application/javascript; charset=UTF-8'
  });
  res.sendFile(path.resolve(__dirname, 'app.es'));
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
