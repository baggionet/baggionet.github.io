$(document).ready(function(){
    var ventana_ancho = $(window).width();
	if (ventana_ancho <= 767) {
		alert("llegamos al tamaño del telefon");
		$("#ventas").hide();
		$("#menu").hide();
		$("#fonmenu").removeClass("oculto")
		$("#fonmenu").addClass("col-xs-offset-6 col-xs-1")
	}
	
});