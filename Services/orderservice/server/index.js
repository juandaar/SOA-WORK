console.log('—'.repeat(80));

var app = require('./app.js');
var http = require('http');

process.on('unhandledRejection', error => {
	console.error('custom unhandledRejection', error);
	//res.status(500).send({ status: 'error' });
	//return;
});

require('./../persistence/mongo')('mongodb://localhost:27017/NewTecDataBase');

var port = process.env.PORT || 5000;
http.createServer(app).listen(port, function() {
	console.log('xyz backend started: ' + port);
	console.log('—'.repeat(80));
});