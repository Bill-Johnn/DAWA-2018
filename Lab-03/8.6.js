function esPrimo(numero){
  var d = 0, i = 1;
    while(i<=numero){
      if (numero%i==0){
          d=d+1;}
            i=i+1;
          }
      if(d==2){
         console.log('primo');
        }else{
          console.log('No primo');
        }

     }
  for (var k = 1; k <= 200 ; k++) {
     console.log(k +' es '+esPrimo(k))
   }
