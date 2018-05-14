var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
producto = require('./models/prod'),
user = require('./models/user');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended:true
}));

app.set('view engine','jade');

app.get('/',function(req,res){
	res.send("Hola mundo");
});

app.get('/login',function(req,res){
	res.render('login');
});

app.get('/table',function(req,res){
	res.render('table');
});

app.get('/producto/create',function(req,res){
	res.render('create');
});

app.get('/producto',producto.show);
app.post('/producto',producto.create);
app.post('/producto/update', producto.update);
app.post('/producto/delete', producto.delete);

app.post('/login',user.validar);

app.listen(9090,function(){
	console.log("Iniciando!")
});
