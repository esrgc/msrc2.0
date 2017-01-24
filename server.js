/*
Startup code for msrc2.0
*/

var app = require('./app');
var port = require('./bin/config').port;

app.listen(port);
console.log('Server listening on port ' + port);
console.log('Server environment: ' + app.get('env'));