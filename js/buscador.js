//alert("funcionando");
//Esta linea escucha cuando se le da click al boton buscar y ejecuta la funcion "validacion()"
document.getElementById("buscar").addEventListener("click", validacion);
document.getElementById("regreso").addEventListener("click", regresar);
//funcion que sustituye "getElementById"
function id (elId){
    let id = document.getElementById(elId);
    return id;
}

/*funcion que valida si el campo esta vacio o lleva una cadena de texto 
 *y si es lo ultimo ejecuta la funcion "busqueda()" 
*/
function validacion(){
    let f = document.getElementById("busqueda").value;
    //alert(f);
    if (f == "") {

        alert("Ingresa la tienda a buscar");
    } else {
        //alert("buscando "  + f);
        busqueda();
    }
}

/* funcion que realiza la busqueda de la tienda y muestra el resultado 
 * en pantalla
 *
 * 
*/ 
function busqueda(){
    let nombre;
    //let crTienda;
    let valor = document.getElementById("busqueda").value;
    valor = valor.toLowerCase();
   //alert(valor);
    for(let conta = 0; conta < objeto.sucursales.length; conta++){
        console.log(conta);
        console.log(objeto.sucursales[conta].tienda);
        if(objeto.sucursales[conta].tienda == valor){
            document.getElementById("busqueda").value = "";
            let nav = id("nav");
            nav.className = "oculto";
            nombre = objeto.sucursales[conta].tienda;
            //crTienda = objeto.sucursales[conta].crTienda;
            let mapa = objeto.sucursales[conta].ubicacion;
            //alert(mapa);
            let conten = id("contenido");
            conten.className = "row contenido";
            document.getElementById("nombre").innerHTML = " " + nombre;
            //document.getElementById("crTienda").innerHTML = crTienda;
            document.getElementById("mapa").innerHTML = mapa;
        }
    }
}

/*
*Funcion que tendra la tarea de regresar a la
*pagina principal
*/
function regresar(){
    let conten = id("contenido");
    conten.className = "oculto";

    let nav = id("nav");
    nav.className = "navbar navbar-expand-md navbar-dark";
}