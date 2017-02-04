var express    = require('express');

var app        = express();

var PORT       = process.env.PORT || 3000;

var middleware = require('./modules/middleware/middleware.js');

console.log(middleware);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send('About us !');
});






app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server started: [' + PORT + ']');
});