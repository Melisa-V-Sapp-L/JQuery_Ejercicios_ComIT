color = [ 'Verde', 'Rojo', 'Azul', 'Negro'] ;
		lista = ['color1', 'color2', 'color3', 'color4'];

		for (var i = 0, o = {}, l = color.length; i < l; i++) {
			o[color[i]] = lista[i];

			console.log();

			document.write('<button id="'+ lista[i]+'">Cambiame a '+ color[i] +' </button><br> ' );
		}

	$().ready(function(){
        $("#color1").click(function(){
        $("#color1").css("background-color", "green");
        $("#color1").text('Cambiame a Rojo');
        });
        });

        $().ready(function(){
        $("#color2").click(function(){
        $("#color2").css("background-color", "red");
        $("#color2").text('Cambiame a Amarillo');
        });
        });

        $().ready(function(){
        $("#color3").click(function(){
        $("#color3").css("background-color", "blue");
        $("#color3").text('Cambiame a Verde');
        });
        });

        $().ready(function(){
        $("#color4").click(function(){
        $("#color7").css("background-color", "black");
        $("#color4").text('Cambiame a Gris');
        });
        });