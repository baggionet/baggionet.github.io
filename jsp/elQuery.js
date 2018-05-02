$(document).ready(function(){
	// estas 3 lineas al iniciar la pagina pondra automaticamente el tamaño del velo segun el tamaño del body
	var body = document.body;
	var largoBody = body.offsetHeight.toString();
	var anchoBody = body.offsetWidth.toString();
	//document.getElementById("elVelo").style.height = largotexto + "px";
	console.log(anchoBody);
	console.log(largoBody);
	//elNav = document.getElementById("nav");
	//largoNav=elNav.offsetHeight.toString();
	//console.log("el largo del van es " +largoNav);
	//elNav.offsetHeight.toString();


   
	/*if (anchoBody <= 767) {
		//alert("llegamos al tamaño del telefon");
		$("#ventas").hide();
		$("#menu").hide();
		$("#fonmenu").removeClass("oculto")
		$("#fonmenu").addClass("col-xs-offset-6 col-xs-1")
	}*/
	
});