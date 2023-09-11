$(document).ready(function(){

	var cuentaVotos=0;
	var cuentaValores=0;
	var prom=0;

	$('#e1').on('click', function() { fnClick(1); } );
	$('#e2').on('click', function() { fnClick(2); } );
	$('#e3').on('click', function() { fnClick(3); } );
	$('#e4').on('click', function() { fnClick(4); } );
	$('#e5').on('click', function() { fnClick(5); } );
	
	$('img').on('mouseover', function() { fnPintar(this.id) } );
	$('img').on('mouseout', function() { fnSalir(this.id) } );



	/* MIS FUNCIONES */
	function fnClick(n) {
		console.log("click en " + n);
		cuentaVotos++;
		cuentaValores += n;
		prom = cuentaValores/cuentaVotos;

		console.log("Valor: " + cuentaValores);
		console.log("Votos: " + cuentaVotos);
		console.log("Prome: " + prom);

		pintaVotos();

	}

	function fnPintar(id) {
		console.log("pintar con " + id);
		nro = id;   //  "e4"
		nro = nro.replace('e',''); // "4"
		nro = parseInt(nro) // 4

		$('img').attr('src', 'img/ev_n.png');
		for (i=1; i<=nro; i++) {
			$('#e'+i).attr('src', 'img/ep_n.png');
		}
	}


	function fnSalir(id) {
		console.log("salir con " + id);	
		pintaVotos();
		
	}

	function pintaVotos() {
		$('img').attr('src', 'img/ev_n.png');
		// pinto segun el promedio
		// --> 1 2 3 4 5
		// -->   3.3333333333
				// prom = 4.6666666
				ec = parseInt(prom); // 4
				resto = prom - ec;   // 4.66 - 4 = 0.66
		for (i=1; i<=ec; i++) {
			$('#e'+i).attr('src', 'img/ec_n.png');
		}
		//console.log("i vale: " + i);
		if ( resto >= 0.5 ) {
			$('#e'+i).attr('src', 'img/em_n.png');
		}
		
	};

});