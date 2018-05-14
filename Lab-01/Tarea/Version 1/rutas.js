// ==========================================================
//libreria http, ayuda con los proocolos http
var http = require('http'),
//Se comunica con el sistema de archivos de la computadora
fs = require('fs');

var index = fs.readFileSync('./index.html');
var nosotros = fs.readFileSync('./nosotros.html');

//Creamos un servidor
http.createServer(function(solicitud,respuesta){
//se lee el archivo cada ves que tengamos una peticion
	respuesta.write(index);
	respuesta.write(nosotros);
	respuesta.end();
}).listen(8080);
 // ==========================================================
/*var http = require('http');
var port = 8080;

fs = require('fs');
var index = fs.readFileSync('./index.html');

var manejador = function(solicitud,respuesta){
	respuesta.write(index);
	respuesta.end();
};

var servidor = http.createServer(manejador);
servidor.listen(8080);*/
// ==========================================================