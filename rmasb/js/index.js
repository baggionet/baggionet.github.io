
window.addEventListener('load', function() {
    console.log('CARGADOS')
    var divImg = document.getElementsByClassName("background-slider")
    
    //Array que contendra las imagenes
    /*var images = [];
    images[0] = 'img/BRAHAMAN1.webp';
    images[1] = 'img/Hoistein.webp';
    images[2] = 'img/Granjero.webp';*/
    //INdeximg tendra el valor de la imagen
    var indeximg = 0;
    //contendra el tiempo en que cambiaran las imagenes
    var time = 3000;
    //funcion que cambiara las iimagenes 
    
    function changeImg(){
       
        console.log(indeximg)
        if(indeximg === 0){
            console.log("se activa " + indeximg)
            divImg[indeximg].className = "background-slider"
            divImg[1].className = "background-slider d-none"
            divImg[2].className = "background-slider d-none"
        }
       if(indeximg == 1){
            console.log("se activa " + indeximg)
            divImg[indeximg].className = "background-slider"
            divImg[2].className = "background-slider d-none"
            divImg[0].className = "background-slider d-none"
        }
        if(indeximg == 2){
            console.log("se activa " + indeximg)
            divImg[indeximg].className = "background-slider"
            divImg[0].className = "background-slider d-none"
            divImg[1].className = "background-slider d-none"
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
    var indexIcons = id;
    var iconos = [];
    iconos[0] = 'img/BRAHAMAN.webp';
    iconos[1] = 'img/Hoistein.webp';
    iconos[2] = 'img/Granjero.webp';
    slider.src = iconos[indexIcons]
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



