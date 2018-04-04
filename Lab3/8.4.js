(function(){
    function Sumar() {
        var total = 0;
        return {
           agregar : function(valor){total += valor},
           obtenerSumaActual: function () {return total}
           }
         }
	var s1 = Sumar();
	var s2 = Sumar();

	s1.agregar(10);
	s1.agregar(20);

	s2.agregar(30);
	s2.agregar(5);

	console.log(s1.obtenerSumaActual());
	console.log(s2.obtenerSumaActual());
}());
