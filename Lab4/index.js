var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
	res.send('Hola Bill! en Express 🙂')
})

app.post('/', function(req, res) {
	res.send('Llamada POST misma url')
})

app.put('/user', function(req, res) {
	res.send('Recibimos un PUT en /user')
})

app.delete('/user', function(req, res) {
	res.send('Recibimos un DELETE en /user')
})

app.listen(3000, function() {
	console.log('aplicacion de ejemplo escuchando en el puerto 3000!')
});
