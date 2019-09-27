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
    //alert(f);
    if (f == "") {

        alert("Ingresa la tienda a buscar");
    } else {
        //alert("buscando "  + f);
        busqueda();
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
function no() {
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
    add.className = "row justify-content-center";
    s.addEventListener("click", si);
    n.addEventListener("click", no);
}

/* funcion que realiza la busqueda de la tienda y muestra el resultado 
 * en pantalla
 *
*/ 
function busqueda(){
    let nombre;
    let nav;
    let conten;
    let mapa;
    //let crTienda;
    let valor = document.getElementById("busqueda").value;
    valor = valor.toLowerCase();
    valor = normalize(valor);
    //console.log(normalize(valor));
    for(let conta = 0; conta < objeto.sucursales.length; conta++){
        //console.log(conta);
        //console.log(objeto.sucursales[conta].tienda);
        if(objeto.sucursales[conta].tienda == valor){
            nombre = objeto.sucursales[conta].tienda;
            mapa = objeto.sucursales[conta].ubicacion;
        }
    }
    if (nombre == valor) {
        document.getElementById("busqueda").value = "";
        nav = id("nav");
        nav.className = "oculto";
        conten = id("contenido");
        conten.className = "row contenido";
        document.getElementById("nombre").innerHTML = " " + nombre;
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

    let nav = id("nav");
    nav.className = "navbar navbar-expand-md navbar-dark";
    WriteToAFile()
}

/*
*
*
*/
