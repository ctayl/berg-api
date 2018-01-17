var express = require('express');

var app = express();
var PORT = 3306;

app.listen(PORT, function(err) {
    if (err) throw err;
    console.log(`listening on port ${PORT}`);
});