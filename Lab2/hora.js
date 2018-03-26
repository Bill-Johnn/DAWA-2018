/*var http = require('http');

http.createServer(function(req,res){
	


	var actual = new Date(),
	 	hora = actual.getHours(),
	 	minuto = actual.getMinutes();

	 	console.log(hora + ":" + minuto);
		res.end();
}).listen(8080);*/

var moment = require('moment');
var fulldate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log('full date:' + fulldate);