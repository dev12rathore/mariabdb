var express = require('express');

var app = express();
const port = 80;

app.use('/', express.static('.'));


app.get('/home', function (req, res) {
	res.send('Hello World!, Yes this is an easteregg you persistent fool!');
});

app.get('/welcome', function (req, res) {
	res.send('callback, testing....');
});

app.listen(port, function () {
	console.log('Example app listening on port ' + process.env.EXPOSE_PORT + '!');
});
