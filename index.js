var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('pages/index');
});


app.listen(0110);
console.log('0110 is the magic port');