document.getElementById("buscar").addEventListener("click", validacion);


function validacion(){
    let f = document.getElementById("busqueda").value;
    //alert(f);
    if (f == "") {

        alert("Ingresa la tienda a buscar");
    } else {
        //alert("buscando "  + f);
        document.getElementById("busqueda").innerHTML = "";
        busqueda();
    }
}

function busqueda(){
    
    let valor = document.getElementById("busqueda").value;
   //alert(valor);
    for(let conta = 0; conta < objeto.sucursales.length; conta++){
        console.log(conta);
        console.log(objeto.sucursales[conta].tienda);
        if(objeto.sucursales[conta].tienda == valor){
            let mapa = objeto.sucursales[conta].ubicacion;
            //alert(mapa);
            document.getElementById("mapa").innerHTML = mapa;
        }
        
    }

    
}