var array = [3,7,2,8,2,782,7,29,1,3,0,34];
function quicksort(ordenar) {
    if (ordenar.length == 0)
        return [];

    var izq = [],
        derec = [],
        met = ordenar[0];

    for (var i = 1; i < ordenar.length; i++) {
        if(ordenar[i] < met)
            izq.push(ordenar[i])
        else
            derec.push(ordenar[i]);
    }

    return quicksort(izq).concat(met, quicksort(derec));
}
console.log('====== Desordenado ======');
console.log(array);
console.log('====== Ordenado ======');
console.log(quicksort(array));
