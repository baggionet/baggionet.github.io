//funcion que sustituye "getElementById"

let latienda;

function id (elId){
    let id = document.getElementById(elId);
    return id;
}

/*Se declara la clase con sus metodos y propiedades */
class Tienda {
    constructor(nombre, cr, telefono, mapanew, mapaold){//constructor del objeto
        this.nombre = nombre;
        this.cr = cr;
        this.telefono = telefono;
        this.mapanew = mapanew;
        this.mapaold = mapaold;
    }

    mostrarweb(){//metodo del objeto que mostrara los datos en la web
        let mapa, setMapa;
        let n = id("nombre");
        n.innerHTML = this.nombre;
        let c = id("cr");
        c.innerHTML = this.cr;
        let t = id("telefono");
        t.innerHTML = this.telefono;

        if (this.mapanew != "") {
            mapa = this.mapanew;
        }else if (this.mapaold != "") {
            mapa = "<a href=" + "'" + this.mapaold + "' target='_blank'" + ">Ubicacion de tienda OXXO " +  "</a>";
        }else{
            mapa = "Aun no tenemos la Ubicacion";
        }

        setMapa = id("mapa");
        setMapa.innerHTML = mapa;
    }
    destructor(){
        this.nombre = "";
        this.cr = "";
        this.telefono = "";
        this.mapanew = "";
        this.mapaold = "";
        
    }
    
    
}

/*
*Funcion que ayuda a eleiminar acentos, tildes, y cualquier caracter estraños
*
*/
let mapping;
var normalize = (function() {

    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
      to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};
 
  for(var i = 0, j = from.length; i < j; i++ )
        mapping[ from.charAt( i ) ] = to.charAt( i );
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
    let f = id("busqueda").value;
    let b;
    for(let conta = 0; conta < objeto.sucursales.length; conta++){
        if(f  == objeto.sucursales[conta].tienda){
            b = objeto.sucursales[conta].tienda;
        }
    }
    console.log(b);
    if (b == undefined || f == "") {
        console.log("ejecutandose undefined");
        nodb(f);
    }else{
        console.log("ejecutandose mostrar");
        mostrar(b);//ejecuta la funcion mostrar 
        //console.log(f + " se busca");
    }
}
/*funcion  
 * 
*/
function mostrar(busqueda){
    let nombre, nombremayusculas, mapanew, mapaold, cr, telefono;
    let b = normalize(busqueda);
    // se obtiene la informacion de la bd con el nombre de la tienda en ubicaciones

    for(let conta = 0; conta < objeto.sucursales.length; conta++){
        if(objeto.sucursales[conta].tienda == b){
            nombre = objeto.sucursales[conta].tienda;
            cr = objeto.sucursales[conta].cr;
            mapanew = objeto.sucursales[conta].ubicacionnew;
            mapaold = objeto.sucursales[conta].ubicacionold;
            telefono = objeto.sucursales[conta].telefono;
        }
    }
        nombremayusculas = nombre.toUpperCase();
        console.log(nombremayusculas);
        latienda = new Tienda(nombremayusculas, cr, telefono, mapanew, mapaold);
        //muestra los DIV donde ira el contenido de la informacion
        let nav = id("nav");
        let nota = id("nota");
        let contenido = id("contenido");
        let elMapa = id("elMapa");
        let elRegreso = id("elRegreso");
        nav.className = "oculto";
        nota.className = "oculto";
        contenido.className = "row contenido";
        elMapa.className = "row mapa";
        elRegreso.className = "row titulo";
        id("busqueda").value = "";
        
        latienda.mostrarweb();
}//fin funcion mostrar

function nodb(name){
    console.log(name);
    let nav = id("nav");
    let contenido = id("contenido");
    let elregreso = id("elRegreso");
    let direccion = id("direccion");
    let datos = id("datos");
    let nodb = id("nobd");
    let ne1 = id("nombrene");
    let ne2 = id("noencontrado");
    nav.className = "oculto";
    contenido.className = "row contenido";
    elregreso.className = "row titulo";
    direccion.className = "oculto";
    datos.className = "oculto";
    nodb.className = "direccion col-12";
    id("busqueda").value = "";
    name = name.toUpperCase();
    
    ne1.innerHTML = "OXXO: " + name;
    ne2.innerHTML = " NO SE ENCONTRO EN LA BASE DE DATOS";
}



/*funcion que regresa a la pantalla principal
* 
*/
function regresar() {
    //obtenemos los DIV a modificar
    let nota = id("nota");
    let contenido = id("contenido");
    let regresar = id("elRegreso");
    let elMapa = id("elMapa");
    let nav = id("nav");
    let direccion = id("direccion");
    let dato = id("datos");
    let nobd = id("nobd");

    
    contenido.className = "oculto";
    regresar.className = "oculto";
    elMapa.className = "oculto";
    direccion.className = "direccion col-4 ";
    dato.className = "direccion col-8";
    nobd.className = "oculto";

    nav.className = "row nav nav1 navbar navbar-expand-md navbar-dark";
    nota.className ="nota";
    
}


//Esta linea escucha cuando se le da click al boton buscar y ejecuta la funcion "validacion()"
id("buscar").addEventListener("click", validacion);
id("elRegreso").addEventListener("click", regresar);
//alert("conecto");
