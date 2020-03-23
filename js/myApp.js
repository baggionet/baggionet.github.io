/*var myBody = document.body;
var largotexto = myBody.offsetHeight.toString();
var ancho = myBody.offsetWidth.toString();
console.log(ancho);
console.log(largotexto);
console.log("el largo del body es " +largotexto);
*/


//funcion que al hacer click en el boton inicio mustra el apartado inicio ocultando la ventana activa
function inicio(){
	let sobreMi = id("sobreMi");
	let buscador = id("buscador"); 
	sobreMi.className = "row";
	buscador.className = "oculto";
	let titulo = id("titulo");
	titulo.innerHTML = "Sobre Mi";
	let bascula = id("bascula");
	bascula.className = "oculto";
	
}
//Funcion que muestra el apartado BUSCADOR y oculta el resto.
function funcBuscador(){
	let sobreMi = id("sobreMi");
	sobreMi.className = "oculto";
	let titulo = id("titulo");
	titulo.innerHTML = "Mi Trabajo";
	let buscador = id("buscador");
	buscador.className = "row";
	let bascula = id("bascula");
	bascula.className = "oculto";
}
//Funcion que mostrara el apartado de BASCULA y ocultara el resto
function funcBascula(){
	let sobreMi = id("sobreMi");
	sobreMi.className = "oculto";
	let buscador = id("buscador");
	buscador.className = "oculto";
	let titulo = id("titulo");
	titulo.innerHTML = "Mi Trabajo";
	let bascula = id("bascula");
	bascula.className = "bascula";
}


/*Seccion para las funciones de la aplicacion 'Bascula */
var porGramos = 0;

var porPesos = 0;

//Funcion que agregara items a la tabla
function agregarItem(producto, gramos, total){
	var tabla = document.getElementsByTagName("table");
	var hilera = document.createElement("tr");
	var tds = new Array();
	//Agrega primer elemento td
	tds[0] = document.createElement("td");
	tds[0].innerHTML = producto;
	//console.log(tds[0]);
	hilera.appendChild(tds[0]);
	//tabla.appendChild(hilera);

	//Agrega segundo elemento td
	tds[1] = document.createElement("td");
	tds[1].innerHTML = gramos + " grs";
	hilera.appendChild(tds[1]);

	//agrega el signo de pesos
	tds[2] = document.createElement("td");
	tds[2].innerHTML = "$ ";
	hilera.appendChild(tds[2]);
	tabla[0].append(hilera);

	//Agrega tercero elemento td
	tds[3] = document.createElement("td");
	tds[3].className = "costo";
	tds[3].innerHTML = total;
	console.log(tds[3]);
	hilera.appendChild(tds[3]);
	tabla[0].append(hilera);
}
//funcion  que nos ayudara a calcular cuantos nos cuesta ciertos gramos de una fruta o verdura
function porgramos(){
	console.log(porGramos);
	var preciokilo = document.getElementById("preciokilo").value;
	var elSelect = id("preciokilo");
	var elOption = elSelect.options[elSelect.selectedIndex].text;
	var gramos = document.getElementById("solicitadog").value;
	var resultado;
	var resultado = (gramos * preciokilo) / 1000;
	porGramos = resultado + porGramos;
	id("solicitadog").value = "";
	agregarItem(elOption, gramos, resultado);
	
}
//funcion que nos ayudara a saber cuantos gramos se dan por x cantidad de pesos
function porpesos(){
	console.log(porPesos);
	var preciokilo = document.getElementById("preciokilo").value;
	var elSelect = id("preciokilo");
	var elOption = elSelect.options[elSelect.selectedIndex].text;
	var pesos = 0;
	pesos = document.getElementById("solicitadop").value;
	console.log(typeof(pesos));
	pesos = parseInt(pesos);
	console.log(pesos + " despues del paseint");
	var resultado;
	var resultado = (pesos * 1000 ) / preciokilo;
	porPesos = pesos + porPesos;
	resultado = Math.round(resultado);
	id("solicitadop").value = "";
	agregarItem(elOption, resultado, pesos);
	
}
function sumaTotal(){
	let res;
	let total = id("total");
	
	res = porPesos + porGramos;
	console.log(res);
	total.innerHTML = res.toFixed(2);
}

function borrar() {
	let tr = new Array;

}

document.getElementById("botonxgramos").addEventListener("click", porgramos);
document.getElementById("botonxpesos").addEventListener("click", porpesos);