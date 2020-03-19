//alert("funcionando");

//Esta linea escucha cuando se le da click al boton buscar y ejecuta la funcion "validacion()"
document.getElementById("buscar").addEventListener("click", validacion);
document.getElementById("regreso").addEventListener("click", regresar);
//funcion que sustituye "getElementById"
function id (elId){
    let id = document.getElementById(elId);
    return id;
}
/*
*Funcion que ayuda a eleiminar acentos, tildes, y cualquier caracter estraños
*
*/
var normalize = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
      to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};
 
  for(var i = 0, j = from.length; i < j; i++ )
        mapping[ from.charAt( i ) ] = to.charAt( i );
        //console.log(from.charAt( i ));
 
        return function( str ) {
            var ret = [];
            for( var i = 0, j = str.length; i < j; i++ ) {
                var c = str.charAt( i );
                if( mapping.hasOwnProperty( str.charAt( i ) ) )
                    ret.push( mapping[ c ] );
                else
                    ret.push( c );
            }      
            return ret.join( '' );
  }
 
})();
    
/*funcion que valida si el campo esta vacio o lleva una cadena de texto 
 *y si es lo ultimo ejecuta la funcion "busqueda()" 
*/
function validacion(){
    let f = document.getElementById("busqueda").value;
    //let seleccionado = document.getElementById("seleccion").value;
    //console.log(seleccionado);
    //alert(f);
    if (f == "") {
        alert("Ingresa la tienda a buscar");
    } else {
        ubicacion();
    }


}

/*
 *Funcion que al presionar el boton "si" agregara alguna sucursal que no este en la base de datos
 * 
*/
function si() {
    let f = document.getElementById("busqueda").value;
    document.getElementById("busqueda").value = "";
    var body_message = 'Agregar sucursal OXXO ' + f;
    //console.log(body_message);
    var email = 'baggio_2@hotmail.com';
    var subject = 'Agregar sucursal ' + f; 

    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;
    //console.log(mailto_link);

    win = window.open(mailto_link, 'emailWindow');
    //if (win && win.open && !win.closed)

        //win.close();

    no();
    //window.location.href = "mailto:celaya2.sigma@gmail.com" ;
    //alert(f);
}

/*
 *Funcion que al presionar el boton "no" regresara a la pantalla principal
 * 
*/
function no(){
    document.getElementById("busqueda").value = "";
    add = id("agregar");
    add.className = "oculto";
}

/*
 *Funcion que agregara alguna sucursal que no este en la base de datos
 * 
*/ 
function agregar(){
    //alert("se agrego");
    let s;
    let n;
    add = id("agregar");
    s = id("si");
    n = id("no");
    add.className = "col-md-12 agregar";
    s.addEventListener("click", si);
    n.addEventListener("click", no);
}

/* funcion que realiza la busqueda de la tienda y muestra el numero  
 * telefonico asignado a la tienda en pantalla
 *
*/ 
function telefono() {
    let nombre;
    let cr;
    let telefono;
    let nav;
    let conten;
    /* Variable que toma el valor del input que ingresan el nombre de la tienda a buscar*/
    let valor = id("busqueda").value;
    console.log(valor);
    valor = valor.toLowerCase();
    valor = normalize(valor);
    //recorremos la base de datos para encontrar la tienda.
    for (let conta = 0; conta < objeto.telefonos.length; conta++) {
        if (objeto.telefonos[conta].tienda == valor) {
            nombre = objeto.telefonos[conta].tienda;
            cr = objeto.telefono[conta].cr;
            yelefono = objeto.telefonos[conta].telefono;
        }
    }
    document.getElementById("busqueda").value = "";
    nav = id("nav");
    nav.className = "oculto";
    conten = id("contenido");
    conten.className = "row contenido";
    telefono = id("telefono");
    telefono.className = "col-md-12 telefono";

}


/* funcion que realiza la busqueda de la tienda y muestrara el mapa  
 * en pantalla
 *
*/ 
function ubicacion(){
    let nombre;
    let nav;
    let conten;
    let mapanew;
    let mapaold;
    let mapa;
    let divmapa;
    //let crTienda;
    let valor2;
    let valor = document.getElementById("busqueda").value;
    valor = valor.toLowerCase();
    valor = normalize(valor);
    //console.log(normalize(valor));
    //recorremos la BD para encontrar la tienda
    for(let conta = 0; conta < objeto.sucursales.length; conta++){
        if(objeto.sucursales[conta].tienda == valor){
            nombre = objeto.sucursales[conta].tienda;
            mapanew = objeto.sucursales[conta].ubicacionnew;
            mapaold = objeto.sucursales[conta].ubicacionold;
        }
    }

    if (mapanew != "") {
        mapa = mapanew;
    }else if (mapaold != "") {
        valor2 = valor.toUpperCase();
        mapa = "<a href=" + "'" + mapaold + "' target='_blank'" + ">Ubicacion de tienda OXXO " + valor2 + "</a>";
    }else{
        mapa = "Aun no tenemos la Ubicacion";
    }



    if (nombre == valor) {
        document.getElementById("busqueda").value = "";
        nav = id("formulario");
        nav.className = "oculto";
        conten = id("contenido");
        conten.className = "contenido";
        divmapa = id("mapa");
        divmapa.className = 'col-md-12 mapa';
        document.getElementById("nombre").innerHTML = " " + nombre.toUpperCase();
        document.getElementById("mapa").innerHTML = mapa;
    }else{
        agregar();
    }
}

/*
*Funcion que tendra la tarea de regresar a la
*pagina principal
*/
function regresar(){
    let conten = id("contenido");
    conten.className = "oculto";
    let divmapa = id("mapa");
    divmapa.className = 'oculto';
    //telefono = id('telefono');
    //telefono.className = 'oculto';
    let form = id("formulario");
    form.className = "form-inline my-2 my-0 col-12 formulario";
    
}

/*
 * Funcion que ejecutara la funcion que corresponda ya sea,
 * ubicacion() -- que buscara la ubicacion de la tienda y mostrara el mapa
 * telefono() -- que buscara el numero telefonico de telmex que tiene asignado la tienda

function busqueda(seleccion) {
    if (seleccion == "ubicacion") {
        ubicacion();
    } 
    if(seleccion == "telefono"){
        telefono();
    }
}*/
/*
*
*
*/
