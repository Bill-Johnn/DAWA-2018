var http = require('http'),
	urls = require('url'),
	fs   = require('fs'),
	port = 8080;

http.createServer(function(req, res){
	//obtenemos el pathname de la url que accede el usuario
	url = urls.parse(req.url).pathname;
	//console.log(url);
	//enrutamos luego de obtener la url de usuario
	router(rutas , url, res);
}).listen(port);

function router(rutas, url, res){
//comprobamos que la ruta que el usuario quiera 
	//ingresar exista
	if (typeof rutas[url] == 'function') {
		return rutas[url](res);
	}else {
		res.write('<h1>Error 404, pagina no encontrada</h1>');
		res.end;
	}
}

//creamos una variable rutas y la convertimos a objeto
var rutas = {};
//pasamos funciones
rutas['/'] = inicio;
rutas['/nos.html'] = nosotros;
rutas['/nues.html'] = nuestros_servicios;
rutas['/cacli.html'] = catalogo_cliente;
rutas['/cont.html'] = contactenos;

function inicio(res){
	fs.readFile('./ini.html',function(error,ini){
	res.write(ini);
	res.end();
   	});
}
function nosotros(res){
	fs.readFile('./nos.html',function(error,nos){
	res.write(nos);
	res.end();
	});
}
function nuestros_servicios(res){
	fs.readFile('./nues.html',function(error,nues){
	res.write(nues);
	res.end();
	});
}
function catalogo_cliente(res){
	fs.readFile('./cacli.html',function(error,cacli){
	res.write(cacli);
	res.end();
	});
}
function contactenos(res){
	fs.readFile('./cont.html',function(error,cont){
	res.write(cont);
	res.end();
	});
}