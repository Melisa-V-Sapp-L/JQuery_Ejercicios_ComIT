var votos = 0;
var puntos = 0;
var calificacion = 0;

$(document).ready( function(){


	$('#star1').on('mouseover', fniluminar1)
	$('#star2').on('mouseover', fniluminar2)
	$('#star3').on('mouseover', fniluminar3)
	$('#star4').on('mouseover', fniluminar4)
	$('#star5').on('mouseover', fniluminar5)

		function fniluminar1(){
		$('.imagen1').attr("src" , "ep_n.png");
		$('.imagen2').attr("src" , "ev_n.png");
		$('.imagen3').attr("src" , "ev_n.png");
		$('.imagen4').attr("src" , "ev_n.png");
		$('.imagen5').attr("src" , "ev_n.png");
	}

	    function fniluminar2(){
	    $('.imagen1').attr("src" , "ep_n.png");	
		$('.imagen2').attr("src" , "ep_n.png");
		$('.imagen3').attr("src" , "ev_n.png");
		$('.imagen4').attr("src" , "ev_n.png");
		$('.imagen5').attr("src" , "ev_n.png");
	}

	    function fniluminar3(){
	    $('.imagen1').attr("src" , "ep_n.png");	
		$('.imagen2').attr("src" , "ep_n.png");	
		$('.imagen3').attr("src" , "ep_n.png");
		$('.imagen4').attr("src" , "ev_n.png");
		$('.imagen5').attr("src" , "ev_n.png");
	}
	    function fniluminar4(){
	    $('.imagen1').attr("src" , "ep_n.png");	
		$('.imagen2').attr("src" , "ep_n.png");	
		$('.imagen3').attr("src" , "ep_n.png");	
		$('.imagen4').attr("src" , "ep_n.png");
		$('.imagen5').attr("src" , "ev_n.png");
	}
	    function fniluminar5(){
	    $('.imagen1').attr("src" , "ep_n.png");	
		$('.imagen2').attr("src" , "ep_n.png");	
		$('.imagen3').attr("src" , "ep_n.png");	
		$('.imagen4').attr("src" , "ep_n.png");	
		$('.imagen5').attr("src" , "ep_n.png");
	}				


$('#star1').on('mouseout',fnapagar1);
$('#star2').on('mouseout',fnapagar2);
$('#star3').on('mouseout',fnapagar3);
$('#star4').on('mouseout',fnapagar4);
$('#star5').on('mouseout',fnapagar5);

function fnapagar1(){
		$('.imagen1').attr("src" , "ev_n.png");
		$('.imagen2').attr("src" , "ev_n.png");
		$('.imagen3').attr("src" , "ev_n.png");
		$('.imagen4').attr("src" , "ev_n.png");
		$('.imagen5').attr("src" , "ev_n.png");
		}
	function fnapagar2(){
		$('.imagen1').attr("src" , "ep_n.png");
		$('.imagen2').attr("src" , "ev_n.png");
		$('.imagen3').attr("src" , "ev_n.png");
		$('.imagen4').attr("src" , "ev_n.png");
		$('.imagen5').attr("src" , "ev_n.png");
		}
	function fnapagar3(){
		$('.imagen1').attr("src" , "ep_n.png");
		$('.imagen2').attr("src" , "ep_n.png");
		$('.imagen3').attr("src" , "ev_n.png");
		$('.imagen4').attr("src" , "ev_n.png");
		$('.imagen5').attr("src" , "ev_n.png");
		
		}
	function fnapagar4(){
		$('.imagen1').attr("src" , "ep_n.png");
		$('.imagen2').attr("src" , "ep_n.png");
		$('.imagen3').attr("src" , "ep_n.png");
		$('.imagen4').attr("src" , "ev_n.png");
		$('.imagen5').attr("src" , "ev_n.png");
		
		}
	function fnapagar5(){
		$('.imagen1').attr("src" , "ep_n.png");
		$('.imagen2').attr("src" , "ep_n.png");
		$('.imagen3').attr("src" , "ep_n.png");
		$('.imagen4').attr("src" , "ep_n.png");
		$('.imagen5').attr("src" , "ev_n.png");
		
		}

$('#star1').on('click',fnsumar1);

function fnsumar1(){
   	puntos++;
   	console.log('Hay '+puntos+' puntos');
   }
$('#star2').on('click',fnsumar2);

function fnsumar2(){
   	puntos+=2;
   	console.log('Hay '+puntos+' puntos');
   }
$('#star3').on('click',fnsumar3);
function fnsumar3(){
   	puntos+=3;
   	console.log('Hay '+puntos+' puntos');
   }
$('#star4').on('click',fnsumar4);
function fnsumar4(){
   	puntos+=4;
   	console.log('Hay '+puntos+' puntos');
   }
$('#star5').on('click',fnsumar5);
function fnsumar5(){
   	puntos+=5;
   	console.log('Hay '+puntos+' puntos');
   }


$('#star1, #star2, #star3, #star4, #star5').on('click',fncalificacion);
function fncalificacion(){
	votos++;
   	console.log('Hay '+votos+' votos');

	calificacion = puntos / votos;
	console.log('La calificacion es de '+calificacion);


}


});		