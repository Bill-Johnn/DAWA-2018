/*var http = require('http'),
//Se comunica con el sistema de archivos de la computadora
fs = require('fs');

var index = fs.readFileSync('./index.html');
var nosotros = fs.readFileSync('./nosotros.html');

http.createServer(function(solicitud,respuesta){
//se lee el archivo cada ves que tengamos una peticion
	respuesta.write(index);
	respuesta.write(nosotros);
	respuesta.end();
}).listen(8080);*/

var http = require('http');
fs = require('fs');
var cont = fs.readFileSync('./cont.html');

var manejador = function(solicitud,respuesta){
	respuesta.write(cont);

	respuesta.end();
};

var servidor = http.createServer(manejador);
servidor.listen(8080);