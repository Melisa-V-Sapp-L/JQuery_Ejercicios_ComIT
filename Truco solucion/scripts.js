var maximo = 30;
var puntos1 = 0;
var puntos2 = 0;


$(document).ready(function(){
	// pantalla 1
    $('#inicio').on('click', fnInicio);
    $('#a24').on('click', fnA24);
    $('#a30').on('click', fnA30);

    // pantalla 2
    $('#s1').on('click', function() { fnSumar(1); } )
    $('#r1').on('click', function() { fnRestar(1); } )





//  MIS FUNCIONES

	function fnA24() {
		maximo = 24;
		$('#a24').addClass('seleccionado');
		$('#a30').removeClass('seleccionado');


	}
	function fnA30() {
		maximo = 30;
		$('#a30').addClass('seleccionado');
		$('#a24').removeClass('seleccionado');
	}


    function fnInicio() {
    	ne1 = $('#eq1').val();
    	if( ne1 == "") { ne1 = "Nos"; }
    	$('#ne1').text(ne1);


    	$('#ne2').text( $('#eq2').val() );
    	$('#max').text( "A " + maximo );


        $('#pant1').removeClass('visible').addClass('oculto');
        $('#pant2').removeClass('oculto').addClass('visible');
    }



	function fnSumar(eq) {
		if (eq==1) {
			if (puntos1 < maximo) {
				puntos1++;	
			}
		}
		// eq2??
		mostrarFosforos(eq);

	}
	function fnRestar(eq) {
		if (eq==1) {
			if (puntos1 > 0) {
				puntos1--;	
			}
		}
		// eq2??
		mostrarFosforos(eq);
	}

	function mostrarFosforos(eq) {
		if (eq==1) {
			$('#p1').text(puntos1);
			pad = puntos1;
		}

		for (i=1; i<=6; i++) {
			// imagenes equipo 1: #p11 a la #p16
			if (maximo==24 && i==3) {
				// cuidado...
				// pad >= 2
				if (pad>=2) {
					$('#p'+eq+i).attr('src', '2.png');
					pad = pad-2;
				} else { // 1 0
					$('#p'+eq+i).attr('src', pad+'.png');
					pad=0;
				}	
			} else {
				if (pad >=5) {
					$('#p'+eq+i).attr('src', '5.png');
					pad = pad-5;
				} else {
					// 4 3 2 1 0
					$('#p'+eq+i).attr('src', pad+'.png');
					pad=0;
				}
			}

			

		}



	}


});