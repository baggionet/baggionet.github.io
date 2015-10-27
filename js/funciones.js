
// estas 3 lineas al iniciar la pagina pondra automaticamente el tamaño del velo segun el tamaño del body
var largo = document.body;
var largotexto = largo.offsetHeight.toString();
document.getElementById("elVelo").style.height = largotexto + "px";

//largoVelo.style.height = largo.offsetHeight;
//alert("esto es lo largo de la ventana " + largotexto + " px" );


/*Funciones para distintas cosas.
if (largo.offsetWidth > 768) {
	alert("cambioi la resolucion");*/

//+++++++++++++++++++++++++++++++ funcion que habilita y deshabilita el menu cuando estamos en dispositivos pequeños +++++++++++++++++++++++//
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

//++++++++++++++++++++++++++++++++ Funcion que cierra la etiqueta DIV.velo ++++++++++++++++++++++++++++++++++++++++++++//
function cerrarVelo () {
	var velo = document.getElementById("elVelo");
	velo.className = "oculto";
}

//++++++ Funcion que habilita el boton "Ver mas.." que habilitara detalles de la imagen en la seccion "Mi trabajo"  +++++++++++++++++++++++++//

function verDetalles (elEvento) {
	var evento = elEvento || window.event;
	var boton = document.getElementById("boton1-xs");
	console.log(evento.type);
	if (evento.type == "mouseover") 
		{
			boton.className = "boton btn btn-primary col-xs-4 col-xs-offset-4 visible-xs-block";
		}
	else
		{
			boton.className = "oculto";
		}
	}

document.getElementById("img1").onmouseout = verDetalles;
document.getElementById("img1").onmouseover = verDetalles;
document.getElementById("remover").onclick = cerrarVelo;//Esta linea llama a la funcion "cerrarVelo" Al hacer click en el elemento con id "remover".
document.getElementById("menu").onclick=hideMenu;//Esta linea llama a la funcion "hideMenu" Al hacer click en el elemento con id "menu".
//alert( window.innerWidth + " x " + window.innerHeight);