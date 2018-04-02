var Hoy=new Date();
var Nav=new Date(Hoy.getFullYear(), 11, 25);
var mseg_dia=1000*60*60*24;
var dias
    if (Hoy.getMonth()==11 && Hoy.getDate()>25) {
        Nav.setFullYear(Nav.getFullYear()+1);
      }
    dias = Math.ceil((Nav.getTime()-Hoy.getTime())/(mseg_dia));
    if (dias == 0) {
      console.log("Feliz Navidad");
    }
    console.log("Faltan "+dias+" días hasta Navidad");
