var express = require('express');
var app = express();
var root = __dirname;
var path = require('path');

app.use(express.static(root + '/src'));
app.use('/src', express.static(path.join(root, 'src')));


app.get('/', function(req, res) {
  res.sendFile(path.join(root + '/index.html'));
});

//
// app.get('/example', function(req, res) {
//   res.sendFile(path.join(root + '/example.html'));
// });
//
// app.get('/geo', function(req, res) {
//   res.sendFile(path.join(root + '/geolocation.html'));
// });

var server = app.listen(9292, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
