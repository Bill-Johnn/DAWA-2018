(function (){
	var mayor = function(o1,o2){
		if(o1.tamano > o2.tamano){
			console.log(o1.tamano + ' es mayor');
		}else{
			console.log(o2.tamano + ' es mayor');
		}
	};

	var x = {tamano: 66};
	var y = {tamano: 99};
	mayor(x,y);
}());



