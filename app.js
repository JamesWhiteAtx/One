/// <refernce path="typings/tsd.d.ts" />

var express = require('express');
var server = express();


// app.get('/', function (req, res) {
//    res.send('hello squirrel butt');
// });

//  app.listen(3000, function () {
//     console.log('i am listening on port 3000'); 
//  });

server.use(express.static(__dirname + '/public'));
 
var port = 3000;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});