window.addEventListener("load",function(){
	document.getElementById("boron").addEventListener("click",desordenar);
	document.getElementById("boronEmpezar").addEventListener("click",ordenar);
	ordenar();
 });

 //se le asigna una posicion predeterminada al cuadro blanco
	var vacio = {id: "F4C3", src: "img/12.gif"};



function desordenar(){
		//cogemos todas las imagenes ordenadas
	listaDesordenada=[];
		// Vamos a crear varias funciones
		// Variables globales
		
		// Desordenar imagenes (para empezar)
			var lista = [1,2,3,4,5,6,7,8,9,10,11];
			lista = lista.sort(function() {return Math.random() - 0.5});
			//alert (lista);
			cont = 0;
			for (i=1; i <= 4; i++) {
				for (j=1; j <= 3; j++) {
					elemento = "F" + i.toString() + "C" + j.toString();
					if (elemento != "F4C3")	{
						document.getElementById(elemento).src = "img/"+lista[cont]+ ".gif";
						listaDesordenada.push(document.getElementById(elemento).src);
					}
					cont++;
				}
			}
			document.getElementById("F4C3").src = "img/12.gif";
			vacio = {id: "F4C3", src: "img/12.gif"};
			  document.getElementById("tabla").addEventListener("click",Adyacentes)

		}
			// Intercambiar imagenes 
			function Cambiar(entrada) {
				if (vacio.id=="F4C3"){
					i = vacio.id;
					var aux = document.getElementById(i);
					aux.src = entrada.toElement.src;
					entrada.toElement.src = "img/12.gif";
					vacio = entrada;
				}else{
					i = vacio.toElement.id;
					var aux = document.getElementById(i);
					aux.src = entrada.toElement.src;
					entrada.toElement.src = "img/12.gif";
					vacio = entrada;
				}
				for (i = 0; i<listaDesordenada.length;i++){
					if (listaDesordenada[i].includes(listaOrdenada[i])){
						document.getElementById("ganador").innerHTML="<h1>HAS GANADO !!!</h1>";
					}
				}
			}
		
		// Solo permirtir adyacentes a la pieza vacia
		function Adyacentes(entrada){
			if (vacio.id == "F4C3"){
				elemento1 = vacio.id;
				elemento2=entrada.toElement.id;
				//elemento2 = entrada.toElement.id;
				i = parseInt(elemento1.charAt(1));
				j = parseInt(elemento1.charAt(3));
				x = parseInt(elemento2.charAt(1));
				y = parseInt(elemento2.charAt(3));
				switch (Math.abs(i - x)) {
					case 0:
						if (Math.abs(j - y) == 1) {
							Cambiar(entrada);
						}
						break;
					case 1:
						if (j == y) {
							Cambiar(entrada);
						}
						break;
					case 2:
						if(j-y>=4){
							alert('MOVIMIENTO NO VALIDO');
						}
						break;
					case 3:
						if (j-y ==2){
						alert('MOVIMIENTO NO VALIDO');
						break;
						}
				}
			}else{
				elemento1 = vacio.toElement.id;
				elemento2=entrada.toElement.id;
				//elemento2 = entrada.toElement.id;
				i = parseInt(elemento1.charAt(1));
				j = parseInt(elemento1.charAt(3));
				x = parseInt(elemento2.charAt(1));
				y = parseInt(elemento2.charAt(3));
				switch (Math.abs(i - x)) {
					case 0:
						if (Math.abs(j - y) == 1) {
							Cambiar(entrada);
						}
						break;
					case 1:
						if (j == y) {
							Cambiar(entrada);
						}
						break;
					case 2:
						if(j-y>=4){
							alert('MOVIMIENTO NO VALIDO');
						}
						break;
					case 3:
						if (j-y ==2){
						alert('MOVIMIENTO NO VALIDO');
						}
						break;
				}
			}
		}


function ordenar(){
	var lista = [1,2,3,4,5,6,7,8,9,10,11];
	listaOrdenada = [];
		//Ordenar Imagenes;
			cont = 0;
			for (i=1; i <= 4; i++) {
				for (j=1; j <= 3; j++) {
					elemento = "F" + i.toString() + "C" + j.toString();
					if (elemento != "F4C3")	{
						document.getElementById(elemento).src = "img/"+lista[cont]+ ".gif";
						listaOrdenada.push(document.getElementById(elemento).src);
					}
					cont++;
				}
			}
			document.getElementById("F4C3").src = "img/12.gif";
			vacio = {id: "F4C3", src: "img/12.gif"};
	 document.getElementById("tabla").removeEventListener("click",Adyacentes)

}
		

