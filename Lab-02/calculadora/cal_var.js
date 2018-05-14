function meses_vars(req){
	var arreglo_parametros = [],
		parametros = [],
		valores = [];

	if (req.url.indexOf('?')>0) {
		var url_data = req.url.split('?');
		var arreglo_parametros = url_data[1].split('&');
	}

	for (var i =0; i<arreglo_parametros.length; i++) {
		var parametro = arreglo_parametros[i];
		var param_data = parametro.split('=');
		parametros[i] = param_data[0];
		valores[i] = param_data[1];
	}
	return{
		parametros: parametros,
		valores: valores
	};
}

module.exports.meses_vars = meses_vars;
module.exports.meses = {
	uno: '1 -31',
	dos: '1 - 28',
	tres: '1 -31',
	cuatro: '1 -30',
	cinco: '1 -31',
	seis: '1 -30',
	siete: '1 -31',
	ocho: '1 -31',
	nueve: '1 -30',
	diez: '1 -31',
	once: '1 -30',
	doce: '1 -31'
};
