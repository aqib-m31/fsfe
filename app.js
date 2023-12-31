const http = require('http');
http.createServer(function (req, res){
	res.write('<h1>On the way to be a full snack engineer!</h1>');
	res.end();
}).listen(3000);
console.log('Server Started on port 3000.');
