var express = require('express');
var app = express();
var port = 3000;

// app.set('view engine', 'pug');
// app.set('views', './views');

// express.static(root, );
app.use(express.static('public'));



app.get('/', function(req, res) {
	res.send('index.html');
});

app.listen(port, function() {
	console.log('Server listening on port 3000' + port);
});