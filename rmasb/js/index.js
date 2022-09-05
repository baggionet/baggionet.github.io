window.addEventListener('load', function() {
    console.log('CARGADOS')
    //Array que contendra las imagenes
    var images = [];
    images[0] = 'img/BRAHAMAN.png';
    images[1] = 'img/Hoistein.png';
    images[2] = 'img/Granjero.png';
    //INdeximg tendra el valos de la imagen
    var indeximg = 0;
    //contendra el tiempo en que cambiaran las imagenes
    var time = 6000;
    //funcion que cambiara las iimagenes 
    
    function changeImg(){
        //var boxImg = document.getElementById('slider')
        //console.log(boxImg)
        //boxImg.style.backgroundImage = "url("+ images[indeximg] + ")";
        slider.src = images[indeximg]
        console.log(images[indeximg])
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
    iconos[0] = 'img/BRAHAMAN.png';
    iconos[1] = 'img/Hoistein.png';
    iconos[2] = 'img/Granjero.png';
    slider.src = iconos[indexIcons]
    console.log(iconos[indexIcons])
}
//Funcion que pondra a todos los points en amarillos y escondera los recuadros de informacion 
function loopArray(TheArray1, valor1, TheArray2, valor2){
    for (let index = 0; index < TheArray1.length; index++) {
        TheArray1[index].src = valor1;
    }
    for (let index = 0; index < TheArray2.length; index++) {
        console.log(TheArray2[index].src = valor2)
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




