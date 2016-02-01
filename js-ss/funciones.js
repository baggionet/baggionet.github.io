//alert("message");
$(document).ready(function(){
//Funcion que fijara el menu al inicio cuando se haga scroll hacia arriba.
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		if (barra > 100)
		{
			$("header").css({
				'position' : 'fixed',
				'z-index' : '1000',
				'background-color' : '#fff',
				//'padding-top' : '12px',
				'padding-bottom' : '0'
			});
			$('.logo').css({
				'marginTop' : '10px'
			});
			$('#img-logo').attr('src','img/logohssazul.png');
			$('nav').css({
				'marginTop' : '0',
				'marginBottom' : '0',
				'border-bottom' : 'none'
			});
			$('.menu').css({
				'color' : '#06308e'
			});
		}
		else 
		{
			$("header").css({
				'position' : 'relative',
				'z-index' : '0',
				'background' : 'none'
			});
			$('.logo').css({
				'marginTop' : '20px'
			});
			$('nav').css({
				'marginTop' : '30px',
				'marginBottom' : '10px'
			});
			$('.menu').css({
				'color' : '#fff'
			});
			$('#img-logo').attr('src','img/logohssblanco.png');
		}
	});
//Funcion que cambiara automaticamente las fotos del apartado quienes somos


});