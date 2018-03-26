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
	tres: 'Marzo',
	cuatro: 'Abril',
	cinco: 'Mayo',
	seis: 'Junio',
	siete: 'Julio',
	ocho: 'Agosto',
	nueve: 'Setiembre',
	diez: 'Octubre',
	once: 'Noviembre',
	doce: 'Diciembre'
};