//window.addEventListener('load', function() {   
//})
function animeSliderNosotros() {
    $('.vertical-nosotros').animate( {"marginLeft":0,"opacity":"show"}, 200, "linear", function() {
        $('#slider-nosotros').animate( {"marginRight":0,"opacity":"show"}, 2000, "linear");
        $('.horizontal-text1-nosotros').animate( {"marginLeft":"10px","opacity":"show"}, 500, "linear", function(){
            $('.horizontal-text2-nosotros').animate( {"marginLeft":"18px","opacity":"show"}, 500, "linear", function(){
                $('.horizontal-text3-nosotros').animate( {"marginLeft":"15px","opacity":"show"}, 500, "linear", function(){
                    $('.horizontal-text4-nosotros').animate( {"marginLeft":"15px","opacity":"show"}, 500, "linear", function(){
                        $('.horizontal-text5-nosotros').animate( {"marginLeft":"15px","opacity":"show"}, 500, "linear", function(){
                            $('.recuadro-nosotros').slideDown("slow" ).css({"display": "flex"});
                        } );
                    } );
                } );
            } );
        } );
    });
}
function animeSliderHiphos() {
    $('.vertical-hiphos').animate( {"marginLeft":0,"opacity":"show"}, 200, "linear", function() {
        $("#slider-hiphos").animate( {"marginRight":0,"opacity":"show"}, 2000, "linear");
        console.log($("#slider-hiphos"))
        $('.horizontal-text1-hiphos').animate( {"marginLeft":"20px","opacity":"show"}, 500, "linear", function(){
            $('.horizontal-text2-hiphos').animate( {"marginLeft":"25px","opacity":"show"}, 500, "linear", function(){
                $('.horizontal-text3-hiphos').animate( {"marginLeft":"22px","opacity":"show"}, 500, "linear", function(){
                    $('.horizontal-text4-hiphos').animate( {"marginLeft":"20px","opacity":"show"}, 500, "linear", function(){
                        $('.horizontal-text5-hiphos').animate( {"marginLeft":"20px","opacity":"show"}, 500, "linear", function(){
                            $('.recuadro-hiphos').slideDown("slow" ).css({"display": "flex"});
                        } );
                    } );
                } );
            } );
        } );
    });
}
animeSliderNosotros()
animeSliderHiphos()
//slide down menu productos
$(document).ready(function () {
    $("#products").mouseenter(function() {
        console.log("si entro")
        $(".products").slideDown("slow")
    })
    $("#products").mouseleave(function() {
        console.log("si salio")
        $(".products").slideUp("slow")
    })
    
})

//control del boton que cambia idioma
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

