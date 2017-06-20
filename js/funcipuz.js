/*Crear un puzzle de 4x4 en matriz
metodos: desordenar
		 empezar juego
		 pulsado (parametro la casilla)
			- devuelve true o false (si es true, altera posiciones y actualiza posicion de hueco)
		 imprimir el vector
		 Victoria, comprueba true o false que todo esta ordenado
		 definir un constructor y varios prototype.
*/

//constructor

function juegoPuzzle (filas,columnas){
	this.columnas=columnas || 5; //si no le paso parametros, coloca un valor por defecto 0 
	this.filas=filas || 5 ;
	this.valores=[];
	this.hueco=(this.filas*this.columnas)-1;
		
}

juegoPuzzle.prototype.iniciar = function (){
	var i=0;
	for (i=0;i<this.columnas*this.filas-1;i++){
		this.valores.push(i);
	}
	this.valores.sort(function (){return Math.random()-0.5}); // random tiene valores 0--1 sin tocarse, asi lo que hace es desordenar
	this.valores.push("");
}

juegoPuzzle.prototype.imprime = function(){
	var i, j, texto, salida;
	for (i=o;i<this.filas;i++){
		texto="";
		for (j=o;j<this.columnas;j++){
			texto+=this.valores[i*this.columnas+j];		//conseguimos una cadena de texto.	
		}
		//saluda ="";
		salida+=texto+((i!==(filas-1)?"\n":""); //condicional en linea

	}
}


juegoPuzzle.prototype.dibujaCuadros = function (){
	
}