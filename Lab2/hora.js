hoy = new Date();

console.log("=======Fecha Actual==========");
console.log(hoy);

console.log("======== Hora diferente formato =========");
  var hora = hoy.getHours();
  var minuto = hoy.getMinutes();
  var amPM = (hora > 11) ? "pm" : "am";
  if(hora > 12) {
    hora -= 12;
  } else if(hora == 0) {
    hora = "12";
  }if(minuto < 10) {
    minuto = "0" + minuto;}
  var respuesta1 = hora + ":" + minuto +" "+ amPM;
  console.log(respuesta1);
  var hora2 = hoy.getHours();
  var segundo2 = hoy.getSeconds();
  var respuesta2 = hora2+":"+minuto+":"+segundo2;
  console.log(respuesta2);
  var respuesta3 = hora+":"+minuto+":"+segundo2;
  console.log(respuesta3);

console.log("======== Dias Faltantes =========");
    var fechaInicio = new Date('2018-1-3').getTime();
    var fechaFin    = new Date('2018-1-6').getTime();
    var diff = fechaFin - fechaInicio;
    var rpta = diff/(1000*60*60*24) ;
    console.log(rpta);


console.log("======== Horas Faltantes dado una Fecha =========");
  calcular = new Date (" Apr 3 18:00:00:2018");
  segundos = (calcular - hoy) / 1000;
  minutos = segundos /60;
  horas = minutos / 60;
  horas = Math.round (horas);
  dias = horas / 24;
  dias = Math.round (dias);
  console.log ("Horas restantes:"+ horas);
