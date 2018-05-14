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
		}else if (valores==3) {
			html_string = html_string.replace('{tres}',datos['tres']);
		}else if (valores==4) {
			html_string = html_string.replace('{cuatro}',datos['cuatro']);
		}else if (valores==5) {
			html_string = html_string.replace('{cinco}',datos['cinco']);
		}else if (valores==6) {
			html_string = html_string.replace('{seis}',datos['seis']);
		}else if (valores==7) {
			html_string = html_string.replace('{siete}',datos['siete']);
		}else if (valores==8) {
			html_string = html_string.replace('{ocho}',datos['ocho']);
		}else if (valores==9) {
			html_string = html_string.replace('{nueve}',datos['nueve']);
		}else if (valores==10) {
			html_string = html_string.replace('{diez}',datos['diez']);
		}else if (valores==11) {
			html_string = html_string.replace('{once}',datos['once']);
		}else if (valores==12) {
			html_string = html_string.replace('{doce}',datos['doce']);
		}

		res.writeHead(200,{'Content-type':'text'});
		res.write(html_string);
		res.end();
	});
}).listen(8080);
