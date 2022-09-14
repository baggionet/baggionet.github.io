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
//Blocke de codigo que activa el submenu de productos
/*let ulProducts = document.getElementById("products")
ulProducts.addEventListener("mouseover", function(){
    let theProducts = document.getElementById("theProducts");
    theProducts.className = "products"
})
theProducts.addEventListener("mouseout", function(){
    theProducts.className = "products d-none"
}) */

