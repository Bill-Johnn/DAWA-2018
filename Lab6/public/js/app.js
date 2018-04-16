$(document).ready(function(){
  var socket = io();
  $('#formulario').submit(function (e){
    e.preventDefault();
    var data = {
      _id: $('#_id').val(),
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      timezone: $('#timezone').val(),
      locale: $('#locale').val(),
      profile_pic: $('#profile_pic').val()
    };
    if (data._id=='') {
      $('#_id').focus();
      return alert('Debe ingresar un DNI');
    }
    if (data.first_name=='') {
      $('#first_name').focus();
      return alert('DEbe ingresa un nombre!');
    }
    socket.emit('crear',data);
    $('#formulario').trigger('reset');
    return true;
  });
});
