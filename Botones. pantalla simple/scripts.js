console.log('hola');



$(document).ready( function(){

	$('#btn1').on('click', fnBtn1 );
	$('#btn2').on('click', fnBtn2 );
	$('#btn3').on('click', fnBtn3 );
	$('#btn4').on('click', fnBtn4 );
	$('input').on('click', fnInput );



/* MIS FUNCIONES */
function fnInput() {
	txt = this.id;
	txt = txt.replace('btn','');
	$('#mensaje').html('boton apretado <b>' + txt + '</b>');
}

function fnBtn1() {
	// verde - rojo
	// hasClass
	//$('#mensaje').text('boton 1');
	if ( $('#btn1').hasClass('rojo') ) {
		$('#btn1').removeClass('rojo').addClass('verde').val('Cambiame a rojo');
	} else {
		$('#btn1').removeClass('verde').addClass('rojo').val('Cambiame a verde');
	}
}
function fnBtn2() { 
	// similar a 1
	//$('#mensaje').text('boton 2');
}
function fnBtn3() {
	// similar a 1
	//$('#mensaje').text('boton 3');
}
function fnBtn4() {
	//$('#mensaje').text('boton 4');
	if ( $('body').hasClass('gris') ) {
		$('body').removeClass('gris').addClass('negro');
		$('#btn4').val('Cambiar fondo a gris');
	} else {
		$('body').removeClass('negro').addClass('gris');
		$('#btn4').val('Cambiar fondo a negro');
	}
}






});


