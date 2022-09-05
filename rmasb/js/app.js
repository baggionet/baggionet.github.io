var stateToggle = true;
function toggleChange() {
    var toggle = document.getElementById("toggle");    
    if (stateToggle) {
        toggle.src = "img/toggleEs.png"
        stateToggle = false
    } else {
        toggle.src = "img/toggleEn.png"
        stateToggle = true
    }
}

function menumovil() {
    //var menuMovil = document.getElementById("menu-movil")
    var icon = document.getElementsByTagName("i")
    console.log(icon)  
}

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