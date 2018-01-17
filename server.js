var express = require('express');

var app = express();
var PORT = process.env.PORT || 3300;

var bp = require('body-parser');

var routes = require('./controller/controller');
app.use(routes);

app.listen(PORT, function(err) {
    if (err) throw err;
    console.log(`listening on port ${PORT}`);
});

