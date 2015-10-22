
// estas 3 lineas al iniciar la pagina pondra automaticamente el tamaño del velo segun el tamaño del body
var largo = document.body;
var largotexto = largo.offsetHeight.toString();
document.getElementById("elVelo").style.height = largotexto + "px";

//largoVelo.style.height = largo.offsetHeight;
//alert("esto es lo largo de la ventana " + largotexto + " px" );


/*Funciones para distintas cosas.
if (largo.offsetWidth > 768) {
	alert("cambioi la resolucion");*/


//funcion que habilita y deshabilita el meno cuando estamos en dispositivos pequeños
function hideMenu(){
	elMenu = document.getElementById('ulMenu');
	//
	if (elMenu.className == "oculto") 
		{
			elMenu.className = "visible-xs-block col-xs-4";
		} 
	else
		{
			elMenu.className = "oculto";
		}
	
	

	
	
}


//Funcion que cierra la etiqueta DIV.velo 
function cerrarVelo () {
	var velo = document.getElementById("elVelo");
	velo.className = "oculto";
}

document.getElementById("remover").onclick = cerrarVelo;
document.getElementById("menu").onclick=hideMenu;
//alert( window.innerWidth + " x " + window.innerHeight);