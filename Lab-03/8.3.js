(function() {
       var album_favorito = function (coleccion) {
           if (coleccion.length === 0) {
             return;
           }
           var mas_reproducido = coleccion[0].tocado,
               mas_indice = 0;
           var k = len = coleccion.length;
           for (var i = 0; i < k; i++) {
               if(coleccion[i].tocado > mas_reproducido){
                   mas_reproducido = coleccion[i].tocado
                   mas_indice = i
               }
           }
           return{ play: mas_reproducido, index : mas_indice };
       };
       var music = [ {album: 'ambivalente', tocado: 122 },
                     {album: 'arumina', tocado: 92},
                     {album: 'zoolook', tocado: 34},
                     {album: 'sub focus', tocado: 56},
                     {album: 'R.E.M', tocado: 67}]
       var fav = album_favorito(music)
       console.log("Tu album favorito fue tocado " + fav.play+ " veces")
   }());
