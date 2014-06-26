var express = require('express');
var swig  = require('swig');
var app = express();

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.get('/', function(req, res){
    res.render('home/index', {});
});

app.listen(3000);
