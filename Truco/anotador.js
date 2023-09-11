var e1;
var e2;
var modalidad = 0;
var p2 = 0;
var p1 = 0;


$(document).ready(function() {

	$('#btn30').on('click', fnelegir30);
	$('#btn24').on('click', fnelegir24);
	$('#btni').on('click', fniniciar );
	$('#suma1').on('click', fnsuma1);
	$('#resta1').on('click', fnresta1);
	$('#suma2').on('click', fnsuma2);
	$('#resta2').on('click', fnresta2);


	$('#fin').on('click', fnfin);
function fnelegir30 () {
	modalidad = document.getElementById('btn30').value;
	console.log('Elegida la modalidad a '+ modalidad );}	

function fnelegir24 () {
	modalidad = document.getElementById('btn24').value;
	console.log('Elegida la modalidad a '+ modalidad );}

function fniniciar (){
	e1 = document.getElementById('team1').value;
    e2 = document.getElementById('team2').value;
    console.log('ver nombres de equipos '+ e1 + ' y ' + e2);
    document.getElementById('equipo1').value = e1;
    document.getElementById('equipo2').value = e2;
    document.getElementById('moda').value = modalidad;
    document.getElementById('puntos1').value = p1;
    document.getElementById('puntos2').value = p2;
    if ($('#pantalla1').hasClass('pant1')) {
    	$('#pantalla1').removeClass('pant1').addClass('pant2');
    	$('#pantalla2').removeClass('pant2').addClass('pant1');
    } }

function fnsuma1(){
	if (p1 != modalidad) { p1++;
	console.log('p1 vale '+ p1 + ' puntos');
    document.getElementById('puntos1').value = p1;}	
    else {
	alert('El equipo '+ e1 + ' gana');}
    fnfosforos1();}
function fnresta1(){
	if (p1 != modalidad){ p1--;
	console.log('p1 vale '+ p1 + 'puntos');
    document.getElementById('puntos1').value = p1;}
	else {
	alert('El equipo '+ e1 + ' gana');}
    fnfosforos1();}	
function fnsuma2(){
	if (p2 != modalidad) { p2++;
	console.log('p2 vale '+ p2 + ' puntos');
    document.getElementById('puntos2').value = p2; }	
    else {
	alert('El equipo '+ e2 + ' gana');}
    fnfosforos2()}
function fnresta2(){
	if (p2 != modalidad){p2--;
	console.log('p2 vale '+ p2 + ' puntos'); 
    document.getElementById('puntos2').value = p2; }
	else {
	alert('El equipo '+ e2 + ' gana');}
    fnfosforos2()}		
function fnfin(){
	console.log("Volvemos al principio...");
	modalidad = 0;
    p2 = 0;
    p1 = 0;
    if ($('#pantalla2').hasClass('pant1')) {
    	$('#pantalla2').removeClass('pant1').addClass('pant2');
    	$('#pantalla1').removeClass('pant2').addClass('pant1');
    } }

function fnfosforos1(){	
	ni= parseInt(p1/5);
	cf= (p1/5) - ni;
	cf = cf.toFixed(2);
	for(i=1; i<=ni; i++){   
			$('#a'+i).attr('src', '0.png');
			$('#a'+i).attr('src', '1.png');
			$('#a'+i).attr('src', '2.png');
			$('#a'+i).attr('src', '3.png');
			$('#a'+i).attr('src', '4.png');
			$('#a'+i).attr('src', '5.png');
		}
	if (cf == 0.2) {
     	$('#a'+i).attr('src', '1.png');
     } 
     if (cf == 0.4) {
     	$('#a'+i).attr('src', '2.png');
     }  
     if (cf == 0.6) {
     	$('#a'+i).attr('src', '3.png');
     } 
     if (cf == 0.8) {
     	$('#a'+i).attr('src', '4.png');				
	}
    
    }	  
function fnfosforos2(){	
	ni2= parseInt(p2/5);
	cf2= (p2/5) - ni2;
	cf2 = cf2.toFixed(2);
	for(b=1; b<=ni2; b++){   
			$('#b'+b).attr('src', '0.png');
			$('#b'+b).attr('src', '1.png');
			$('#b'+b).attr('src', '2.png');
			$('#b'+b).attr('src', '3.png');
			$('#b'+b).attr('src', '4.png');
			$('#b'+b).attr('src', '5.png');
		}
    if (cf2 == 0.2) {
     	$('#b'+b).attr('src', '1.png');
     } 
     if (cf2 == 0.4) {
     	$('#b'+b).attr('src', '2.png');
     }  
     if (cf2 == 0.6) {
     	$('#b'+b).attr('src', '3.png');
     } 
     if (cf2 == 0.8) {
     	$('#b'+b).attr('src', '4.png');				
	}
    }
})