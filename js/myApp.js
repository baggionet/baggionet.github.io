/*var myBody = document.body;
var largotexto = myBody.offsetHeight.toString();
var ancho = myBody.offsetWidth.toString();
console.log(ancho);
console.log(largotexto);
console.log("el largo del body es " +largotexto);
*/
//var myvarr = 234;
//console.log(typeof myvarr);

//funcion que al hacer click en el boton inicio mustra el apartado inicio ocultando la ventana activa
function inicio(){
	var extracto = id("extracto");
	var experiencia = id("experiencia");
	var educacion = id("educacion");
	var cursos = id("cursos");
	extracto.className="oculto";
	experiencia.className="oculto";
	educacion.className="oculto";
	cursos.className="oculto";
	
	let sobreMi = id("sobreMi");
	let buscador = id("buscador");
	let une = id("unehs"); 
	sobreMi.className = "row";
	buscador.className = "oculto";
	let titulo = id("titulo");
	titulo.innerHTML = "Sobre Mi";
	let bascula = id("bascula");
	bascula.className = "oculto";
	une.className = "oculto";
	let ricrut19 = id("Ricrut19");
	ricrut19.className = "oculto";
	
}
//Funcion que muestra el apartado BUSCADOR y oculta el resto.
function funcBuscador(){
	let sobreMi = id("sobreMi");
	sobreMi.className = "oculto";
	let titulo = id("titulo");
	titulo.innerHTML = "Mi Trabajo > Buscador OXXO";
	let buscador = id("buscador");
	buscador.className = "row";
	let bascula = id("bascula");
	bascula.className = "oculto";
	let une = id("unehs");
	une.className= "oculto";
	let ricrut19 = id("Ricrut19");
	ricrut19.className = "oculto";
}
//Funcion que mostrara el apartado de BASCULA y ocultara el resto
function funcBascula(){
	let sobreMi = id("sobreMi");
	sobreMi.className = "oculto";
	let buscador = id("buscador");
	buscador.className = "oculto";
	let titulo = id("titulo");
	titulo.innerHTML = "Mi Trabajo > Bascula";
	let bascula = id("bascula");
	bascula.className = "bascula";
	let une = id("unehs");
	une.className = "oculto";
	let ricrut19 = id("Ricrut19");
	ricrut19.className = "oculto";
}
//Funcion que mostrara el apartado de unehs y ocultara el resto
function funcUne(){
	let sobreMi = id("sobreMi");
	sobreMi.className = "oculto";
	let buscador = id("buscador");
	buscador.className = "oculto";
	let titulo = id("titulo");
	titulo.innerHTML = "Mi Trabajo > UNEHS";
	let bascula = id("bascula");
	bascula.className = "oculto";
	let ricrut19 = id("Ricrut19");
	ricrut19.className = "oculto";
	let une = id("unehs");
	une.className = " row unehs";
}
//Funcion que mostrara el apartado de Ricrut19 y ocultara el resto
function funcricrut(){
	let sobreMi = id("sobreMi");
	sobreMi.className = "oculto";
	let buscador = id("buscador");
	buscador.className = "oculto";
	let titulo = id("titulo");
	titulo.innerHTML = "Mi Trabajo > Ricrut19";
	let bascula = id("bascula");
	bascula.className = "oculto";
	let une = id("unehs");
	une.className = "oculto";
	let ricrut19 = id("Ricrut19");
	ricrut19.className = "row";
}
/*Seccion para las funciones de la aplicacion 'Bascula */
var porGramos = 0;
var porPesos = 0;
//Funcion que agregara items a la tabla
function agregarItem(producto, gramos, total){
	var tabla = document.getElementsByTagName("table");
	var hilera = document.createElement("tr");
	hilera.className = "hilera";
	var tds = new Array();
	//Agrega primer elemento td
	tds[0] = document.createElement("td");
	tds[0].innerHTML = producto;
	
	hilera.appendChild(tds[0]);

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
	
	hilera.appendChild(tds[3]);
	tabla[0].append(hilera);
}
//funcion  que nos ayudara a calcular cuantos nos cuesta ciertos gramos de una fruta o verdura
function porgramos(){
	var resultado;
	var convertidoGramos;

	var preciokilo = document.getElementById("preciokilo").value;
	var elSelect = id("preciokilo");
	var elOption = elSelect.options[elSelect.selectedIndex].text;
	var gramos = document.getElementById("solicitadog").value;
	
	if (!/^([0-9])*$/.test(gramos)) {
		alert("El valor "+gramos+" no es un número");
		id("solicitadog").value = "";
	}else if(gramos == ""){
		alert("El campo esta vacio, ingresa un numero");
		}else{
			convertidoGramos = parseInt(gramos, 10);
			var resultado = (convertidoGramos * preciokilo) / 1000;
			porGramos = resultado + porGramos;
			id("solicitadog").value = "";
			agregarItem(elOption, convertidoGramos, resultado);
		}
	
}
//funcion que nos ayudara a saber cuantos gramos se dan por x cantidad de pesos
function porpesos(){
	var resultado;
	var convertidoPesos;
	var preciokilo = document.getElementById("preciokilo").value;
	var elSelect = id("preciokilo");
	var elOption = elSelect.options[elSelect.selectedIndex].text;
	var pesos = 0;
	pesos = document.getElementById("solicitadop").value;
	if (!/^([0-9])*$/.test(pesos)) {
		alert("El valor "+pesos+" no es un número");
		id("solicitadop").value = "";
	}else if(pesos == ""){
		alert("El campo esta vacio, ingresa un numero");
		}else{
			convertidoPesos = parseInt(pesos, 10);
			resultado = (convertidoPesos * 1000 ) / preciokilo;
			porPesos = convertidoPesos + porPesos;
			resultado = Math.round(resultado);
			id("solicitadop").value = "";
			agregarItem(elOption, resultado, convertidoPesos);
		}
		
}

function sumaTotal(){
	let res;
	let total = id("total");
	
	res = porPesos + porGramos;
	total.innerHTML = res.toFixed(2);
	
}

function borrar() {
	let tr = new Array;
	let padre = new Array;

	tr=document.getElementsByClassName("hilera");
	for (let i = tr.length -1; i >= 0; i--) {
		padre = tr[i].parentNode;
		padre.removeChild(tr[i]);
	}
	id("total").innerHTML = "";
	porGramos=0;
	porPesos=0;
}
/**
 * Funciones que contraeran los apartados del curriculum
 * 
 */
function extracto() {
	var extracto = id("extracto");
	var experiencia = id("experiencia");
	var educacion = id("educacion");
	var cursos = id("cursos");
	if (extracto.className == "extra") {
		extracto.className="oculto";		
	}else{
		extracto.className="extra";
	}
	experiencia.className="oculto";
	educacion.className="oculto";
	cursos.className="oculto";
}
function experiencia() {
	var experiencia = id("experiencia");
	var extracto = id("extracto");
	var educacion = id("educacion");
	var cursos = id("cursos");
	if (experiencia.className == "exper") {
		experiencia.className="oculto";
	}else{
		experiencia.className="exper";
	}
	extracto.className="oculto";
	educacion.className="oculto";
	cursos.className="oculto";
}
function educacion() {
	var educacion = id("educacion");
	var experiencia = id("experiencia");
	var extracto = id("extracto");
	var cursos = id("cursos");
	if (educacion.className == "edu") {
		educacion.className="oculto";
	}else{
		educacion.className="edu";
	}
	extracto.className="oculto";
	experiencia.className="oculto";
	cursos.className="oculto";
}
function cursos() {
	var cursos = id("cursos");
	var educacion = id("educacion");
	var experiencia = id("experiencia");
	var extracto = id("extracto");
	if (cursos.className == "cur") {
		cursos.className="oculto";
	}else{
		cursos.className="cur";
	}
	extracto.className="oculto";
	experiencia.className="oculto";
	educacion.className="oculto";
}
/**
 * Fuuncion que activa el velo en la imagen de unehs
 */
function myimgover() {
	var link =id("link");
	//var velo = id("velo");
	link.className="link";
	//velo.className="velo";
}
function myimgout() {
	var link =id("link");
	//var velo = id("velo");
	link.className="oculto";
	//velo.className="oculto";
}

document.getElementById("botonxgramos").addEventListener("click", porgramos);
document.getElementById("botonxpesos").addEventListener("click", porpesos);
document.getElementById("suma").addEventListener("click", sumaTotal);
document.getElementById("borrar").addEventListener("click", borrar);