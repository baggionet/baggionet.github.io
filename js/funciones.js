
// estas 3 lineas al iniciar la pagina pondra automaticamente el tamaño del velo segun el tamaño del body
var largo = document.body;
var largotexto = largo.offsetHeight.toString();
var ancho = largo.offsetWidth;
document.getElementById("elVelo").style.height = largotexto + "px";
console.log(ancho);
if (ancho < 768) 
	{
		moviles();
	}
//largoVelo.style.height = largo.offsetHeight;
//alert("esto es lo largo de la ventana " + largotexto + " px" );

function moviles()
{
	var img_1 = document.getElementById("img1");
	var img_2 = document.getElementById("img2");
	var img_3 = document.getElementById("img3");
	var img_4 = document.getElementById("img4");

	img1.className = "visible-xs-block col-xs-8 col-xs-offset-2";
	img2.className = "visible-xs-block col-xs-8 col-xs-offset-2";
	img2.className = "visible-xs-block col-xs-8 col-xs-offset-2";
	img4.className = "visible-xs-block col-xs-8 col-xs-offset-2";	
		
}
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

function verImagen () {
	//var evento = elEvento || window.event;
	var menuimg_1 = document.getElementById("menu-img1");
	var menuimg_2 = document.getElementById("menu-img2");
	var menuimg_3 = document.getElementById("menu-img3");
	var menuimg_4 = document.getElementById("menu-img4");

	var img_1 = document.getElementById("img1");
	var img_2 = document.getElementById("img2");
	var img_3 = document.getElementById("img3");
	var img_4 = document.getElementById("img4");		
	console.log(this.id);
/* ------------------Este if muestra la imagen 1 junto con la felcha 1*/	
	if (this.id == "item1") 
		{
			menuimg_1.className="menu-subitem col-lg-3 col-md-3 col-sm-3";
			menuimg_2.className="oculto col-xs-6 col-xs-offset-3";
			menuimg_3.className="oculto";
			menuimg_4.className="oculto";

			img_1.className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 col-xs-6 col-xs-offset-3";
			img_2.className = "oculto";
			img_3.className = "oculto";	
			img_4.className = "oculto";
		};

/* ------------------Este if muestra la imagen 1 junto con la felcha 1*/	
	if (this.id == "item2") 
		{
			menuimg_1.className="oculto";
			menuimg_2.className="menu-subitem col-lg-3 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-3 col-sm-offset-3 ";
			menuimg_3.className="oculto";
			menuimg_4.className="oculto";

			img_1.className="oculto col-xs-6 col-xs-offset-3";
			img_2.className = "col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 col-xs-6 col-xs-offset-3";
			img_3.className = "oculto col-xs-6 col-xs-offset-3";	
			img_4.className = "oculto col-xs-6 col-xs-offset-3";
		};

/* ------------------Este if muestra la imagen 1 junto con la felcha 1*/	
	if (this.id == "item3") 
		{
			menuimg_1.className = "oculto";
			menuimg_2.className = "oculto";
			menuimg_3.className = "menu-subitem col-lg-3 col-lg-offset-6 col-md-3 col-md-offset-6 col-sm-3 col-sm-offset-6";
			menuimg_4.className = "oculto";

			img_1.className = "oculto col-xs-6 col-xs-offset-3";
			img_2.className = "oculto col-xs-6 col-xs-offset-3";
			img_3.className = "col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 col-xs-6 col-xs-offset-3";	
			img_4.className = "oculto col-xs-6 col-xs-offset-3";
		};
 
/* ------------------Este if muestra la imagen 1 junto con la felcha 1*/	
	if (this.id == "item4") 
		{
			menuimg_1.className="oculto";
			menuimg_2.className="oculto";
			menuimg_3.className="oculto";
			menuimg_4.className="menu-subitem col-lg-3 col-lg-offset-9 col-md-3 col-md-offset-9 col-sm-3 col-sm-offset-9";

			img_1.className="oculto col-xs-6 col-xs-offset-3";
			img_2.className = "oculto col-xs-6 col-xs-offset-3";
			img_3.className = "oculto col-xs-6 col-xs-offset-3";	
			img_4.className = "col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 col-xs-6 col-xs-offset-3";
		};


	}

document.getElementById("item1").onclick = verImagen;
document.getElementById("item2").onclick = verImagen;
document.getElementById("item3").onclick = verImagen;
document.getElementById("item4").onclick = verImagen;

document.getElementById("remover").onclick = cerrarVelo;//Esta linea llama a la funcion "cerrarVelo" Al hacer click en el elemento con id "remover".
document.getElementById("menu").onclick=hideMenu;//Esta linea llama a la funcion "hideMenu" Al hacer click en el elemento con id "menu".
//alert( window.innerWidth + " x " + window.innerHeight);