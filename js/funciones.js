
//alert("funciona");

function hideMenu(){
	elMenu = document.getElementById('ulMenu');

	elMenu.className = "visible-xs-block";
	
}

document.getElementById("menu").onclick=hideMenu;