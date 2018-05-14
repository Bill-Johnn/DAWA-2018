var express = require('express')
var app = express()

app.use('/',express.static('web'))

app.get('/', function (req, res) {
    res.send('Hola mundo! en Express :)')
})


app.use(function (req, res, next) {
    res.status(404).send(error)
})

app.listen(3000, function (){
    console.log('Escuchando en puerto 3000!')
});
