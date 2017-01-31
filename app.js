var express = require('express');
var Client = require('mariasql');

var app = express();
const port = 80;

// declare the connection obj to mariadb
var c = new Client({
  host: 'foxley.co',
  db: "Guestbook",
  user: 'root',
  password: 'my-secret-pw'
});


app.get('/raw', function (req, res) {
	c.query('SELECT * FROM CUSTOMERS',
		function(err, rows) {
			if (err)
				throw err;
			console.dir(rows);
			res.send(rows);
		});
	c.end();
});

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
