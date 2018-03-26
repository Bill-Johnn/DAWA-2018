var http = require('http'),
	fs = require('fs')
	mes = require('./meses_var.js'),
	p = mes.meses_vars,
	datos = mes.meses;

http.createServer(function(req,res){
	fs.readFile('./menu.html',function(err,html){
		var html_string = html.toString();

		var respuesta = p(req),
		parametros = respuesta['parametros'],
		valores = respuesta['valores'];

		for (var i=0; i<parametros.length; i++){
			 var html_string = html_string.replace('{'+parametros[i]+'}', valores[i]);
		}

		if (valores==1) {
			html_string = html_string.replace('{uno}',datos['uno']);
		}else if (valores==2) {
			html_string = html_string.replace('{dos}',datos['dos']);
		}

		res.writeHead(200,{'Content-type':'text'});
		res.write(html_string);
		res.end();
	});
}).listen(8080);