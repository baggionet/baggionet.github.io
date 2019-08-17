//alert("funcionando Ubicaciones");

var objeto = {"sucursales":[
    {"crPlaza" : "10QRI", "tienda": "La Estacion", "crTienda": "50QST", "ubicacion": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14908.198693228993!2d-100.7662484!3d20.9103211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b50491a058d73%3A0x9761d69618eb897!2sOXXO!5e0!3m2!1ses!2smx!4v1564988346300!5m2!1ses!2smx" width="360" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>', "direccion": "Calz. de la Estacion 116"},
    {"crPlaza" : "10QRI", "tienda": "San Isidro", "crTienda": "50SWI", "ubicacion": "https://goo.gl/maps/kLwLy4hgL4b3FLia9", "direccion": "CARRETERA FEDERAL LIBRE CELAYA-QUERETARO KM.13+700"},
    {"crPlaza" : "10QRI", "tienda": "Apaseo II", "crTienda": "50AII", "ubicacion": "https://goo.gl/maps/4B3uaMHtzUFB7jGBA", "direccion": "Carr. Panamericana Km. 30.5"},
    {"crPlaza" : "10QRI", "tienda": "16 de Septiembre", "crTienda": "50FPH", "ubicacion": "https://goo.gl/maps/YN6mCb2ZpAvhdH1n7", "direccion": "16 DE SEPTIEMBRE 302-A"},
    {"crPlaza" : "10QRI", "tienda": "Apaseo Centro", "crTienda": "50FVD", "ubicacion": "https://goo.gl/maps/ybXK1SgJQY7717cC6", "direccion": "5 DE MAYO 118"},
    {"crPlaza" : "10QRI", "tienda": "Apaceo", "crTienda": "50QAP", "ubicacion": "https://goo.gl/maps/r9epxDfCpw7qSGny8", "direccion": "Carr. Panamericana 802"},
    {"crPlaza" : "10QRI", "tienda": "Brujas Cel", "crTienda": "501JA", "ubicacion": "https://goo.gl/maps/eCERbNX417NfbE1N6", "direccion": "Carretera Federal de Cuota 45-D, Cuerpo A KM 26 +294 LOCAL 1"},
    {"crPlaza" : "10QRI", "tienda": "Brujas Qro", "crTienda": "50ZB0", "ubicacion": "https://goo.gl/maps/LXyiza1LTFdbVVp4A", "direccion": "Carretera Federal de Cuota 45-D CUERPO B	KM 26+708 LOCAL 1"},
    {"crPlaza" : "10QRI", "tienda": "FuentesBalvanera", "crTienda": "50VYY", "ubicacion": "https://goo.gl/maps/gkohMGX3LjSU5bKW8", "direccion": "AV. PASEO DE CORDOBA	1151"},
    {"crPlaza" : "10QRI", "tienda": "Castillo", "crTienda": "50HYI", "ubicacion": "https://goo.gl/maps/oPsaLAZQMy6EE8ue7", "direccion": "Libramiento Sur Poniente KM 19+800"},
    {"crPlaza" : "10QRI", "tienda": "La Norita", "crTienda": "50O94", "ubicacion": "https://goo.gl/maps/1tqTT9u5wRxPL8N29", "direccion": "CARRETERA CUOTA #45,QUERETARO IRAPUATO km 9 + 850 local 1"},
    {"crPlaza" : "10QRI", "tienda": "ESTANCIA GEO", "crTienda": "50PJS", "ubicacion": "https://goo.gl/maps/Abq1N1RFUtfAeMKv9", "direccion": "PASEO DE LA ESTANCIA	700"},
    {"crPlaza" : "10QRI", "tienda": "Plaza Ponty", "crTienda": "50Y6N", "ubicacion": "https://goo.gl/maps/g2YFXsbD6ngfaVGY8", "direccion": "AV. PASEO DE LA ESTANCIA	1011 LOCAL 10"},
    {"crPlaza" : "10QRI", "tienda": "Rancho Nuevo", "crTienda": "50FNW", "ubicacion": "https://goo.gl/maps/mCsKfeTTRHUeDu818", "direccion": "CARRETERA CELAYA-QUERETARO L 1 MZA 2"},
    {"crPlaza" : "10QRI", "tienda": "Trebol Libre", "crTienda": "50HJC", "ubicacion": "https://goo.gl/maps/bwaD4RRMHnqjXaTt5", "direccion": "CARRETERA DE CUOTA QUERETARO-IRAPUATO KM 33"},
    {"crPlaza" : "10QRI", "tienda": "Trebol Cuota", "crTienda": "50JDH", "ubicacion": "https://goo.gl/maps/ksJogHFcUSxG7mYt5", "direccion": "CARRETERA DE CUOTA QUERETARO.IRAPUATO KM 33"},
    {"crPlaza" : "10QRI", "tienda": "La Concepcion", "crTienda": "50Q3E", "ubicacion": "https://goo.gl/maps/hpmE6RkxZaox8doq8", "direccion": "NICOLAS DE SAN LUIS MONTAÑEZ	276"},
    {"crPlaza" : "10QRI", "tienda": "El Molino", "crTienda": "50SMT", "ubicacion": "https://goo.gl/maps/Y2mjnTP2vFjyCqpu6", "direccion": "ACCESO SUR 101"},
    {"crPlaza" : "10QRI", "tienda": "Las Alamedas", "crTienda": "503ID", "ubicacion": "https://goo.gl/maps/yyfFAwiSDKppez1X6", "direccion": "Fundación 100 local 17"},
    {"crPlaza" : "10QRI", "tienda": "Guillermo Prieto", "crTienda": "504MN", "ubicacion": "https://goo.gl/maps/b7ALwFdsJhYh3jhR7", "direccion": "GUILLERMO PRIETO	602 INTERIOR LOCAL 2"},
    {"crPlaza" : "10QRI", "tienda": "Celaya Cuota", "crTienda": "50B4P", "ubicacion": "https://goo.gl/maps/vJPaiBztJ3QpohNBA", "direccion": "AUTOPISTA CELAYA - SALAMANCA	KM40+600L3"}
]};
for (let conta = 0; conta < objeto.sucursales.length; conta++) {
    objeto.sucursales[conta].tienda = objeto.sucursales[conta].tienda.toLowerCase();
    //console.log(objeto.sucursales[conta].tienda);

    
}




