var http = require('http'),
	urls = require('url'),
	fs   = require('fs'),
	port = 6699;

http.createServer(function(req, res){
	url = urls.parse(req.url).pathname;
	router(rutas , url, res);
}).listen(port);

function router(rutas, url, res){
	if (typeof rutas[url] == 'function') {
		return rutas[url](res);
	}else {
		res.write('<h1>Error 404, pagina no encontrada</h1>');
		res.end;
	}
}

var rutas = {};
rutas['/'] = inicio;
rutas['/nos.html'] = nosotros;

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
