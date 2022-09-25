//slide down menu productos
$(document).ready(function () {
    $("#products").mouseenter(function() {
        $(".products").slideDown("slow")
    })
    $("#products").mouseleave(function() {
        $(".products").slideUp("slow")
    })
    
})
function animeSlider1() {
    //$(".recuadro").delay(500).animate({"marginLeft": "100px", "opacity":"show"}, 500, "linear")
    $('.vertical').animate( {"marginLeft":0,"opacity":"show"}, 200, "linear", function() {
        $('#slider').animate( {"marginRight":0,"opacity":"show"}, 2000, "linear")
        $('.horizontal-text1').animate( {"marginLeft":0,"opacity":"show"}, 500, "linear", function(){
            $('.horizontal-text2').animate( {"marginLeft":0,"opacity":"show"}, 500, "linear", function(){
                $('.horizontal-text3').animate( {"marginLeft":"-2px","opacity":"show"}, 500, "linear", function(){
                    $('.horizontal-text4').animate( {"marginLeft":"-3px","opacity":"show"}, 500, "linear", function(){
                        $('.horizontal-text5').animate( {"marginLeft":"2px","opacity":"show"}, 500, "linear", function(){
                            $('.recuadro').slideDown("slow" ).css({"display": "flex"});
                            
                        } );
                    } );
                } );
            } );
        } );
    });
}
function animeSlider2() {
    $('.vertical-lechero').animate( {"marginLeft":0,"opacity":"show"}, 200, "linear", function() {
        $('#slider2').animate( {"marginRight":0,"opacity":"show"}, 2000, "linear")
        $('.horizontal-text1-lechero').animate( {"marginLeft":0,"opacity":"show"}, 500, "linear", function(){
            $('.horizontal-text2-lechero').animate( {"marginLeft":0,"opacity":"show"}, 500, "linear", function(){
                $('.horizontal-text3-lechero').animate( {"marginLeft":"-2px","opacity":"show"}, 500, "linear", function(){
                    $('.horizontal-text4-lechero').animate( {"marginLeft":"-3px","opacity":"show"}, 500, "linear", function(){
                        $('.horizontal-text5-lechero').animate( {"marginLeft":"2px","opacity":"show"}, 500, "linear", function(){
                            $('.recuadro-lechero').slideDown("slow" ).css({"display": "flex"});
                        } );
                    } );
                } );
            } );
        } );
    });
}
function animeSlider3() {
    $('.vertical-granjero').animate( {"marginLeft":0,"opacity":"show"}, 200, "linear", function() {
        $('#slider3').animate( {"marginRight":0,"opacity":"show"}, 2000, "linear")
        $('.horizontal-text1-granjero').animate( {"marginLeft":0,"opacity":"show"}, 500, "linear", function(){
            $('.horizontal-text2-granjero').animate( {"marginLeft":0,"opacity":"show"}, 500, "linear", function(){
                $('.horizontal-text3-granjero').animate( {"marginLeft":"-2px","opacity":"show"}, 500, "linear", function(){
                    $('.horizontal-text4-granjero').animate( {"marginLeft":"-3px","opacity":"show"}, 500, "linear", function(){
                        $('.horizontal-text5-granjero').animate( {"marginLeft":"2px","opacity":"show"}, 500, "linear", function(){
                            $('.recuadro-granjero').slideDown("slow" ).css({"display": "flex"});
                        } );
                    } );
                } );
            } );
        } );
    });
}
function ocultarSlider1(){
    $('#slider').css( {"display": "none", "marginRight":"100px"} );
    $('.vertical').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text1').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text2').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text3').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text4').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text5').css( {"display": "none", "marginLeft":"-80px"} );
    $('.recuadro').css( {"display": "none"} );
}
function ocultarSlider2(){
    $('#slider2').css( {"display": "none", "marginRight":"100px"} );
    $('.vertical-lechero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text1-lechero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text2-lechero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text3-lechero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text4-lechero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text5-lechero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.recuadro-lechero').css( {"display": "none"} );
}
function ocultarSlider3(){
    $('#slider3').css( {"display": "none", "marginRight":"100px"} );
    $('.vertical-granjero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text1-granjero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text2-granjero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text3-granjero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text4-granjero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.horizontal-text5-granjero').css( {"display": "none", "marginLeft":"-80px"} );
    $('.recuadro-granjero').css( {"display": "none"} );
}
// :::::::::::::::::::: funciones para los slider :::::::::::::::::::::::::
function slaider1(){
    //se obtienen los id y los elementos con la classe
    ocultarSlider2()
    ocultarSlider3()
    var divImg = document.getElementsByClassName("background-slider")
    var li1 = document.getElementById("1")
    var li2 = document.getElementById("2")
    var li3 = document.getElementById("3")
    //Se ejecuta los styles para poner el border top del li
    li1.style.borderTop = "solid 1px white";
    li2.style.borderTop = "solid 0px white";
    li3.style.borderTop = "solid 0px white";
    
    //Se cambia las clases name en cada elemento
    divImg[0].className = "background-slider"
    divImg[1].className = "background-slider d-none"
    divImg[2].className = "background-slider d-none"
    animeSlider1()
    
}
function slaider2(){
    ocultarSlider3()
    ocultarSlider1()
    //se obtienen los id y los elementos con la classe
    var divImg = document.getElementsByClassName("background-slider")
    var li1 = document.getElementById("1")
    var li2 = document.getElementById("2")
    var li3 = document.getElementById("3")
    //Se ejecuta los styles para poner el border top del li
    li1.style.borderTop = "solid 0px white";
    li2.style.borderTop = "solid 1px white";
    li3.style.borderTop = "solid 0px white";
    //Se cambia las clases name en cada elemento
    divImg[1].className = "background-slider"
    divImg[2].className = "background-slider d-none"
    divImg[0].className = "background-slider d-none"
    animeSlider2()
}
function slaider3(){
    ocultarSlider2()
    ocultarSlider1()
    //se obtienen los id y los elementos con la classe
    var divImg = document.getElementsByClassName("background-slider")
    var li1 = document.getElementById("1")
    var li2 = document.getElementById("2")
    var li3 = document.getElementById("3")
    //Se ejecuta los styles para poner el border top del li
    li1.style.borderTop = "solid 0px white";
    li2.style.borderTop = "solid 0px white";
    li3.style.borderTop = "solid 1px white";
    //Se cambia las clases name en cada elemento
    divImg[2].className = "background-slider"
    divImg[0].className = "background-slider d-none"
    divImg[1].className = "background-slider d-none"
    animeSlider3()
}
//Control del slaider
window.addEventListener('load', function() {
    console.log('CARGADOS')
    slaider1()
    //INdeximg tendra el valor de la imagen
    var indeximg = 0;
    //contendra el tiempo en que cambiaran las imagenes
    var time = 5000;
    function changeImg(){
        //console.log(indeximg)
        if(indeximg === 0 ){
            //animeSlider1()
            slaider1()
        } 
        if(indeximg == 1){
            slaider2()
        }
        if(indeximg == 2){
            slaider3()
        }
        if (indeximg < 2) {
            indeximg++;
        }else{
            indeximg = 0
        }
    }
    setInterval(changeImg, time)
})
function selectSlider(id) {
    
    if(id == 1 ){
        slaider1()
    }
   if(id == 2){
        slaider2()
    }
    if(id == 3){
        slaider3()
    }
}
//Funcion que pondra a todos los points en amarillos y escondera los recuadros de informacion 
function loopArray(TheArray1, valor1, TheArray2, valor2){
    for (let index = 0; index < TheArray1.length; index++) {
        TheArray1[index].src = valor1;
    }
    for (let index = 0; index < TheArray2.length; index++) {
        TheArray2[index].className = valor2;
    }
}
//funcion que activa el point seleccionado y habilita su cuadro de informacion
function pointMap(id){
    //Declaracion de variables 
    let imgAmarrilla = "img/point1.png"
    var addrsNone = "address d-none"
    //Se obtiene los array de los elementos
    var imgArray = document.getElementsByClassName("markers")
    var adrArray = document.getElementsByClassName("address")
    //Se ejecuta la funcion que cambiara a amarillos los points del mapa
    loopArray(imgArray, imgAmarrilla, adrArray, addrsNone  )
    // obteniendo el id del elemento
    var elId = id.slice(-1)
    var addrMasId = "addr" + elId
   //Obteniendo los Id de los elementos clickiados
    var markerNo = document.getElementById(id);
    var address = document.getElementById(addrMasId);
    //cambiando el icono seleccionado de amarillo por el azul
    markerNo.src = "img/point4.png"
    //Haciendo visible el recuadro de la informacion del points seleccionado
    address.className = "address"
}

function menumovil() {
    //var menuMovil = document.getElementById("menu-movil")
    var icon = document.getElementsByTagName("i")
    console.log(icon)  
}
//funciones para el menu responsivo
var icon = document.getElementsByTagName("i")
    //console.log(icon[0])
//Activa el menu principal movil
icon[0].addEventListener("click", function () {
    var menuMovil = document.getElementById("menu-movil")
    var principal = document.getElementById("principal")
    icon[0].className = "bi bi-list d-none"
    icon[1].className = "bi bi-x-lg"
    menuMovil.className = "menu-movil activo-prinicipal"
    principal.className = "menu-principal activo-prinicipal"
})
icon[1].addEventListener("click", function () {
    var menuMovil = document.getElementById("menu-movil")
    var principal = document.getElementById("principal")
    var products = document.getElementById("products")
    icon[0].className = "bi bi-list "
    icon[1].className = "bi bi-x-lg d-none"
    menuMovil.className = "menu-movil"
    principal.className = "menu-principal d-none"
    console.log(products.className)
    if(products.className == "products-movil"){
        products.className = "products-movil d-none"
    }
})
function actProducts(){
    var menuMovil = document.getElementById("menu-movil")
    var principal = document.getElementById("principal")
    var products = document.getElementById("products")
    menuMovil.className = "menu-movil activo-products"
    principal.className = "menu-principal d-none"
    products.className = "products-movil"
}
function backPrincipal(){
    var menuMovil = document.getElementById("menu-movil")
    var principal = document.getElementById("principal")
    var products = document.getElementById("products")
    menuMovil.className = "menu-movil activo-prinicipal"
    principal.className = "menu-principal activo-prinicipal"
    products.className = "products-movil d-none"
}
//Blocke de codigo que activa el submenu de productos
/*let ulProducts = document.getElementById("products")
ulProducts.addEventListener("mouseover", function(){
    let theProducts = document.getElementById("theProducts");
    theProducts.className = "products"
})
theProducts.addEventListener("mouseout", function(){
    theProducts.className = "products d-none"
}) */

//Funcion que cambia las imagenes y link a la derecha
function changeRigth(){
    let newImg = [];
    newImg[0] = "img/bioEnergyNew.png";
    newImg[1] = "img/hiPhosNew.png";
    newImg[2] = "img/bioHydraNew.png";
    newImg[3] = "img/tropiPhosnew.png";
    let newLink = [];
    newLink[0] = "#";
    newLink[1] = "#";
    newLink[2] = "#";
    newLink[3] = "#";
    for (let index = 0; index < 4; index++) {
        var imgId = document.getElementById("techImg"+index)
        var linkId = document.getElementById("techlink"+index)
        imgId.src = newImg[index]
        linkId.href = newLink[index]
    }
    var linkl = document.getElementById("btnleft")
    var linkr = document.getElementById("btnrigth")
    linkr.style.color = "rgb(225, 222, 222)"
    linkl.style.color = "white"
}
//Funcion que cambia las imagenes y link a la izquierda
function changeleft(){
    let newImg = [];
    newImg[0] = "img/bioEnergy.webp";
    newImg[1] = "img/hiPhos.webp";
    newImg[2] = "img/bioHydra.webp";
    newImg[3] = "img/tropiPhos.webp";
    let newLink = [];
    newLink[0] = "pbioenergy.html";
    newLink[1] = "phiphos.html";
    newLink[2] = "pbiohydra.html";
    newLink[3] = "pganatec.html";
    for (let index = 0; index < 4; index++) {
        var imgId = document.getElementById("techImg"+index)
        var linkId = document.getElementById("techlink"+index)
        imgId.src = newImg[index]
        linkId.href = newLink[index]
    }
    var linkl = document.getElementById("btnleft")
    var linkr = document.getElementById("btnrigth")
    linkl.style.color = "rgb(225, 222, 222)"
    linkr.style.color = "white"
}


