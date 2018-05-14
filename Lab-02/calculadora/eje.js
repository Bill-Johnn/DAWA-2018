var http = require('http'),
fs = require('fs');

http.createServer(function(solicitud,respuesta){
   fs.readFile('./menu.html', function(error,html){


	respuesta.write(prodId);
	respuesta.write(html);
	respuesta.end();
   });
}).listen(8080);
