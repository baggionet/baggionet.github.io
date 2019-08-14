
// estas 3 lineas al iniciar la pagina pondra automaticamente el tamaño del velo segun el tamaño del body
var largo = document.body;
var largotexto = largo.offsetHeight.toString();
var ancho = largo.offsetWidth.toString();
document.getElementById("elVelo").style.height = largotexto + "px";
console.log(ancho);
console.log(largotexto);
//elNav = document.getElementById("nav");
largoNav=elNav.offsetHeight.toString();
console.log("el largo del van es " +largoNav);

/*if (ancho <= 768) 
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

	img_1.className = "col-xs-8 col-xs-offset-2";
	img_2.className = "col-xs-8 col-xs-offset-2";
	img_2.className = "col-xs-8 col-xs-offset-2";
	img_4.className = "col-xs-8 col-xs-offset-2";	
		
}
/*Funciones para distintas cosas.
if (largo.offsetWidth > 768) {
	alert("cambioi la resolucion");*/

//+++++++++++++++++++++++++++++++ funcion que habilita el menu cuando estamos en dispositivos pequeños +++++++++++++++++++++++//
	function showMenu(){
		elMenu = document.getElementById('ulMenu');
		elNav = document.getElementById("nav");
		Menu = document.getElementById("menu");
		closeMenu = document.getElementById("close-menu");

		Menu.className = "oculto;"
		elMenu.className = "visible-xs-block col-xs-8";
		elNav.className = "col-xs-8 menu-largo";
		closeMenu.className = "col-xs-1 col-xs-offset-10 icon-menu4 menu-on visible-xs-block";

		elNav.style.height = largotexto + "px";

		/*var scrollEventHandler = function()
		{
  			window.scroll(0, window.pageXOffset);
		}

		window.addEventListener("scroll", scrollEventHandler, false);*/
	}

//+++++++++++++++++++++++++++++++ funcion que deshabilita el menu cuando estamos en dispositivos pequeños +++++++++++++++++++++++//
	function hideMenu(){
		elMenu = document.getElementById('ulMenu');
		elNav = document.getElementById("nav");
		Menu = document.getElementById("menu");
		closeMenu = document.getElementById("close-menu");
		console.log(largotexto + "px");

		Menu.className = "col-xs-1 icon-menu3 menu-off visible-xs-block";
		elMenu.className = "oculto";
		elNav.className = "col-lg-12 col-md-12 col-sm-12";
		closeMenu.className = "oculto";
		elNav.style.height = 72 + "px";
	}

//+++++Funcion que mostrara el DIV de detalles cuando cliqueen en la imagen del trabajo++++++++
function detalles()
{
	console.log(this.id + " Este es el ID de la imagen que se le dio click");
	var t_detalle1 = document.getElementById("trabajo1");
	var t_detalle2 = document.getElementById("trabajo2");
	var t_detalle3 = document.getElementById("trabajo3");
	var t_detalle4 = document.getElementById("trabajo4");
	var Spv = document.getElementById("spv");
	var Decorint = document.getElementById("decorint");

	if (this.id == "img1" ) {t_detalle1.className = "velo-detalles col-lg-12 col-md-12 col-sm-12 col-xs-12";}
	if (this.id == "img2" ) {t_detalle2.className = "velo-detalles col-lg-12 col-md-12 col-sm-12 col-xs-12";}
	if (this.id == "img3" ) {t_detalle3.className = "velo-detalles col-lg-12 col-md-12 col-sm-12 col-xs-12";}
	if (this.id == "img4" ) {t_detalle4.className = "velo-detalles col-lg-12 col-md-12 col-sm-12 col-xs-12";}
	if (this.id == "img1_1" ) {t_detalle1.className = "velo-detalles col-lg-12 col-md-12 col-sm-12 col-xs-12";}
	if (this.id == "img2_2" ) {t_detalle2.className = "velo-detalles col-lg-12 col-md-12 col-sm-12 col-xs-12";}
	if (this.id == "img3_3" ) {t_detalle3.className = "foco3 velo-detalles col-lg-12 col-md-12 col-sm-12 col-xs-12";}
	if (this.id == "img4_4" ) {t_detalle4.className = "foco4 velo-detalles col-lg-12 col-md-12 col-sm-12 col-xs-12";}
}

//++++++++++++++++++++++++++++++++ Funcion que cierra la etiqueta DIV.velo ++++++++++++++++++++++++++++++++++++++++++++//
function cerrarVelo () {
	console.log(this.id + " Este es el ID de la X que se le dio click");
	var velo = document.getElementById("elVelo");
	var t_detalle1 = document.getElementById("trabajo1");
	var t_detalle2 = document.getElementById("trabajo2");
	var t_detalle3 = document.getElementById("trabajo3");
	var t_detalle4 = document.getElementById("trabajo4");

	if (this.id == "remover") {velo.className = "oculto";}
	if (this.id == "cerrarv1") {t_detalle1.className = "oculto";}
	if (this.id == "cerrarv2") {t_detalle2.className = "oculto";}
	if (this.id == "cerrarv3") {t_detalle3.className = "oculto";}
	if (this.id == "cerrarv4") {t_detalle4.className = "oculto";}
	
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
/* ------------------Este if muestra la imagen 1 junto con la flecha 1*/	
	if (this.id == "item1") 
		{
			menuimg_1.className="menu-subitem col-lg-3 col-md-3 col-sm-3";
			menuimg_2.className="oculto col-xs-6 col-xs-offset-3";
			menuimg_3.className="oculto";
			menuimg_4.className="oculto";

			img_1.className="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 visible-lg-block visible-md-block visible-sm-block";
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
			img_2.className = "col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 visible-lg-block visible-md-block visible-sm-block";
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

			img_1.className = "oculto";
			img_2.className = "oculto";
			img_3.className = "col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 visible-lg-block visible-md-block visible-sm-block";	
			img_4.className = "oculto";
		};
 
/* ------------------Este if muestra la imagen 1 junto con la felcha 1*/	
	if (this.id == "item4") 
		{
			menuimg_1.className="oculto";
			menuimg_2.className="oculto";
			menuimg_3.className="oculto";
			menuimg_4.className="menu-subitem col-lg-3 col-lg-offset-9 col-md-3 col-md-offset-9 col-sm-3 col-sm-offset-9";

			img_1.className="oculto";
			img_2.className = "oculto";
			img_3.className = "oculto";	
			img_4.className = "col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 visible-lg-block visible-md-block visible-sm-block";
		};


	}

document.getElementById("item1").onclick = verImagen;
document.getElementById("item2").onclick = verImagen;
document.getElementById("item3").onclick = verImagen;
document.getElementById("item4").onclick = verImagen;

document.getElementById("remover").onclick = cerrarVelo;//Esta linea llama a la funcion "cerrarVelo" Al hacer click en el elemento con id "remover".
document.getElementById("cerrarv1").onclick = cerrarVelo;//Esta linea llama a la funcion "cerrarVelo" Al hacer click en el elemento con id "remover".
document.getElementById("cerrarv2").onclick = cerrarVelo;//Esta linea llama a la funcion "cerrarVelo" Al hacer click en el elemento con id "remover".
document.getElementById("cerrarv3").onclick = cerrarVelo;//Esta linea llama a la funcion "cerrarVelo" Al hacer click en el elemento con id "remover".
document.getElementById("cerrarv4").onclick = cerrarVelo;//Esta linea llama a la funcion "cerrarVelo" Al hacer click en el elemento con id "remover".

document.getElementById("img1").onclick = detalles;
document.getElementById("img1_1").onclick = detalles;
document.getElementById("img2").onclick = detalles;
document.getElementById("img2_2").onclick = detalles;
document.getElementById("img3").onclick = detalles;
document.getElementById("img3_3").onclick = detalles;
document.getElementById("img4").onclick = detalles;
document.getElementById("img4_4").onclick = detalles;


document.getElementById("menu").onclick=showMenu;//Esta linea llama a la funcion "hideMenu" Al hacer click en el elemento con id "menu".
//alert( window.innerWidth + " x " + window.innerHeight);
document.getElementById("close-menu").onclick=hideMenu;
//funciones que escondera el menu movil cuando se le de click a alguno de sus items.
document.getElementById("ma").onclick=hideMenu;
document.getElementById("me").onclick=hideMenu;
document.getElementById("mi").onclick=hideMenu;
document.getElementById("mo").onclick=hideMenu;