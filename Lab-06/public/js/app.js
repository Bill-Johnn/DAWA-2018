$(document).ready(function(){
	var socket = io();

	socket.on('listar',function(data){
		data = JSON.parse(data);
		for(var i=0,j=data.length; i<j; i++){
			fill(data[i]);
		}
	});
	
	socket.on('nuevo', function(data){
    fill(data);
	});

	socket.on('borrado', function(data){
    $('#'+data).remove();    
    return alert('Se elimino')
	});

	socket.on('actualizado', function(data){
    return alert('Actualizado');
    (data._id) ? '#66CC66' : '#DDDDDD'; 
    setTimeout('fata()',500); 
	});

	var fill = function(data){
		if($('#'+data._id).length==0){
			var $row = $('<tr id="'+data._id+'">');
			$row.append('<td>'+data._id+'</td>');
			$row.append('<td>'+data.first_name+'</td>');
			$row.append('<td>'+data.last_name+'</td>');
			$row.append('<td>'+data.timezone+'</td>');
			$row.append('<td>'+data.locale+'</td>');
			$row.append('<td>'+data.profile_pic+'</td>');
			$row.append('<td>'+data.premium+'</td>');
			$row.append('<td><button class="btn btn-success btn-sm" name="btnAct">Actualizar</td>');
			$row.append('<td><button class="btn btn-danger btn-sm" name="btnEli">Eliminar</td>');
			$row.data('data',data);

			$row.find('[name=btnAct]').click(function(){
				var data = $(this).closest('tr').data('data');
				$('#_id').val(data._id);
				$('#first_name').val(data.first_name);
				$('#last_name').val(data.last_name);
				$('#timezone').val(data.timezone);
				$('#locale').val(data.locale);
				$('#profile_pic').val(data.profile_pic);
				if(data.premium.toString() == 'true') $('#premium').val('true');
				else $('#active').val('false');
				$('.warning').removeClass('warning');
        $(this).closest('tr').addClass('warning');
			});

			$row.find('[name=btnEli]').click(function(){
				var _id = $(this).closest('tr').attr('id');
				if (confirm('Continuar con eliminacion de registro?')){
					socket.emit('eliminar',_id);
				}
			});

			$('table tbody').append($row);

		}else{
			var $row = $('#' + data._id);
			$row.find('td:eq(1)').html(data.first_name);
			$row.find('td:eq(2)').html(data.last_name);
			$row.find('td:eq(3)').html(data.timezone);
			$row.find('td:eq(4)').html(data.locale);
			$row.find('td:eq(5)').html(data.profile_pic);
			$row.find('td:eq(6)').html(data.premium.toString());
		}
	};

	$('#formulario').submit(function(e){
		e.preventDefault();
		var data = {
			_id: $('#_id').val(),
			first_name: $('#first_name').val(),
			last_name: $('#last_name').val(),
			timezone: $('#timezone').val(),
			locale: $('#locale').val(),
			profile_pic: $('#profile_pic').val(),
			premium: $('#premium').val(),
		};
		if(data._id==''){
			$('#_id').focus();
			return alert('Debe ingresar un ID!');
		}
		if(data.first_name==''){
			$('#first_name').focus();
			return alert('Debe ingresar un nombre!');
		}

		var accion = 'crear';
		if($('.warning').length>0) accion = 'actualizar';
		$('.warning').removeClass('warning');
		socket.emit(accion, data);
		$('#formulario').trigger('reset');
		return true;
	});
});