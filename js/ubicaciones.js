//alert("funcionando Ubicaciones");

var objeto = {"sucursales":[
    {"tienda": "La Estacion",       "ubicacion": '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14908.198693228993!2d-100.7662484!3d20.9103211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b50491a058d73%3A0x9761d69618eb897!2sOXXO!5e0!3m2!1ses!2smx!4v1564988346300!5m2!1ses!2smx" width="330" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>', "direccion": "Calz. de la Estacion 116"},
    {"tienda": "San Isidro",        "ubicacion": "https://goo.gl/maps/kLwLy4hgL4b3FLia9",       "direccion": "CARRETERA FEDERAL LIBRE CELAYA-QUERETARO KM.13+700"},
    {"tienda": "Apaseo II",         "ubicacion": "https://goo.gl/maps/4B3uaMHtzUFB7jGBA",       "direccion": "Carr. Panamericana Km. 30.5"},
    {"tienda": "16 de Septiembre",  "ubicacion": "https://goo.gl/maps/YN6mCb2ZpAvhdH1n7",       "direccion": "16 DE SEPTIEMBRE 302-A"},
    {"tienda": "Apaseo Centro",     "ubicacion": "https://goo.gl/maps/ybXK1SgJQY7717cC6",       "direccion": "5 DE MAYO 118"},
    {"tienda": "Apaceo",            "ubicacion": "https://goo.gl/maps/r9epxDfCpw7qSGny8",       "direccion": "Carr. Panamericana 802"},
    {"tienda": "Brujas Cel",        "ubicacion": "https://goo.gl/maps/eCERbNX417NfbE1N6",       "direccion": "Carretera Federal de Cuota 45-D, Cuerpo A KM 26 +294 LOCAL 1"},
    {"tienda": "Brujas Qro",        "ubicacion": "https://goo.gl/maps/LXyiza1LTFdbVVp4A",       "direccion": "Carretera Federal de Cuota 45-D CUERPO B	KM 26+708 LOCAL 1"},
    {"tienda": "FuentesBalvanera",  "ubicacion": "https://goo.gl/maps/gkohMGX3LjSU5bKW8",       "direccion": "AV. PASEO DE CORDOBA	1151"},
    {"tienda": "Castillo",          "ubicacion": "https://goo.gl/maps/oPsaLAZQMy6EE8ue7",       "direccion": "Libramiento Sur Poniente KM 19+800"},
    {"tienda": "La Norita",         "ubicacion": "https://goo.gl/maps/1tqTT9u5wRxPL8N29",       "direccion": "CARRETERA CUOTA #45,QUERETARO IRAPUATO km 9 + 850 local 1"},
    {"tienda": "ESTANCIA GEO",      "ubicacion": "https://goo.gl/maps/Abq1N1RFUtfAeMKv9",       "direccion": "PASEO DE LA ESTANCIA	700"},
    {"tienda": "Plaza Ponty",       "ubicacion": "https://goo.gl/maps/g2YFXsbD6ngfaVGY8",       "direccion": "AV. PASEO DE LA ESTANCIA	1011 LOCAL 10"},
    {"tienda": "Rancho Nuevo",      "ubicacion": "https://goo.gl/maps/mCsKfeTTRHUeDu818",       "direccion": "CARRETERA CELAYA-QUERETARO L 1 MZA 2"},
    {"tienda": "Trebol Libre",      "ubicacion": "https://goo.gl/maps/bwaD4RRMHnqjXaTt5",       "direccion": "CARRETERA DE CUOTA QUERETARO-IRAPUATO KM 33"},
    {"tienda": "Trebol Cuota",      "ubicacion": "https://goo.gl/maps/ksJogHFcUSxG7mYt5",       "direccion": "CARRETERA DE CUOTA QUERETARO.IRAPUATO KM 33"},
    {"tienda": "La Concepcion",     "ubicacion": "https://goo.gl/maps/hpmE6RkxZaox8doq8",       "direccion": "NICOLAS DE SAN LUIS MONTAÑEZ	276"},
    {"tienda": "El Molino",         "ubicacion": "https://goo.gl/maps/Y2mjnTP2vFjyCqpu6",       "direccion": "ACCESO SUR 101"},
    {"tienda": "Las Alamedas",      "ubicacion": "https://goo.gl/maps/yyfFAwiSDKppez1X6",       "direccion": "Fundación 100 local 17"},
    {"tienda": "Guillermo Prieto",  "ubicacion": "https://goo.gl/maps/b7ALwFdsJhYh3jhR7",       "direccion": "GUILLERMO PRIETO	602 INTERIOR LOCAL 2"},
    {"tienda": "Celaya Cuota",      "ubicacion": "https://goo.gl/maps/vJPaiBztJ3QpohNBA",       "direccion": "AUTOPISTA CELAYA - SALAMANCA	KM40+600L3"},

// inicia la lista de las ubicaciones de cada tienda
//+*+*+*+*++*+*+*+*+*+*+**+*+*+*+*+*+*+*+*+*+*+*+**+*+*+*+*+*+**+*+***+
//+**+*++**--++-*+*-*+*--*+9+-*++---**+-*+-*+-*+-*+-*+-*+-*+-*+-*+-*+-*+-*+-

    {"tienda": "Rivapalacio",           "ubicacion": "https://goo.gl/maps/QKwDP6cN4adA13nr9",	"direccion": "HIDALGO2	HIDALGO ESQ RIVAPALACIO	16591	Queretaro	MEXICO	ACULCO	ACULCO	ACULCO DE ESPINOSA"},
    {"tienda" : "Aculco",               "ubicacion": "https://goo.gl/maps/sYja7a9LuFi9perAA",	"direccion": "CARR ACAMBAY-QUERETARO O CARR TOLUCA PALMILLAS	KM 109+200	CARR ACAMBAY-QUERETARO O CARR TOLUCA PALMILLAS	16592	Queretaro	MEXICO	ACULCO	ACULCO	GUNYO"},
    {"tienda" : "Amealco",              "ubicacion": "https://goo.gl/maps/w2vanio1tAtkZ4xZ6",	"direccion": "MONTE SUAVEZ	61	BOULEVARD ROBERTO RUIZ OBREGON	16612	Queretaro	QUERETARO	AMEALCO DE BONFIL	AMEALCO DE BONFIL	AMEALCO DE BONFIL"},
    {"tienda" : "La Mora",              "ubicacion": "https://goo.gl/maps/u9TF2fCNYj6R8Npi8",	"direccion": "PASEO DE LA LAJA	16	ESQUINA CARR DEHETI	16611	Queretaro	QUERETARO	AMEALCO DE BONFIL	AMEALCO DE BONFIL	AMEALCO DE BONFIL"},
    {"tienda" : "San Isidro",           "ubicacion": "https://goo.gl/maps/kLwLy4hgL4b3FLia9",	"direccion": "CARRETERA FEDERAL LIBRE CELAYA-QUERETARO	KM.13+700	DENTRO DE LA ESTACION DE SERVICIO No	11175	Queretaro	GUANAJUATO	APASEO EL ALTO	APASEO EL ALTO	SAN ISIDRO DEL LLANITO"},
    {"tienda" : "Apaseo II",            "ubicacion": "https://goo.gl/maps/4B3uaMHtzUFB7jGBA",	"direccion": "Carr. Panamericana	Km. 30.5	Esq. Santos Degollado	7681	Queretaro	GUANAJUATO	APASEO EL ALTO	APASEO EL ALTO	*EL REJALGAR"},
    {"tienda" : "16 de Septiembre",     "ubicacion": "https://goo.gl/maps/YN6mCb2ZpAvhdH1n7",	"direccion": "16 DE SEPTIEMBRE	302-A	MARIANO MATAMOROSGUILLERMO PRIETO	25783	Queretaro	GUANAJUATO	APASEO EL ALTO	APASEO EL ALTO	*APASEO EL ALTO CENTRO"},
    {"tienda" : "Apaseo Centro",        "ubicacion": "https://goo.gl/maps/ybXK1SgJQY7717cC6",	"direccion": "5 DE MAYO	118	INSURGENTES / CHAPULTEPEC	25977	Queretaro	GUANAJUATO	APASEO EL ALTO	APASEO EL ALTO	*APASEO EL ALTO CENTRO"},
    {"tienda" : "Apaceo",               "ubicacion": "https://goo.gl/maps/r9epxDfCpw7qSGny8",	"direccion": "Carr. Panamericana	802	Jose del Valle y Lazaro Cardenas	2353	Queretaro	GUANAJUATO	APASEO EL ALTO	APASEO EL ALTO	*M. AVILA CAMACHO"},
    {"tienda" : "Brujas Cel",           "ubicacion": "https://goo.gl/maps/eCERbNX417NfbE1N6",	"direccion": "Carretera Federal de Cuota 45-D, Cuerpo A	KM 26 +294 LOCAL 1	sobre carretera y sin calle	33951	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	*SAN PEDRO TENANGO EL NUEVO (TENANDGO EL NUEVO)"},
    {"tienda" : "Brujas Qro",           "ubicacion": "https://goo.gl/maps/LXyiza1LTFdbVVp4A",	"direccion": "Carretera Federal de Cuota 45-D CUERPO B	KM 26+708 LOCAL 1	sobre carretera y sin calle	33952	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	*SAN PEDRO TENANGO EL NUEVO (TENANDGO EL NUEVO)"},
    {"tienda" : "FuentesBalvanera",     "ubicacion": "https://goo.gl/maps/gkohMGX3LjSU5bKW8",	"direccion": "AV. PASEO DE CORDOBA	1151	PRIVADA URUGUAY	23518	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	*FUENTES DE BALVANERA "},
    {"tienda" : "Castillo",             "ubicacion": "https://goo.gl/maps/oPsaLAZQMy6EE8ue7",	"direccion": "Libramiento Sur Poniente 	KM 19+800	Libramiento Sur Poniente 	21371	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	CASTILLO"},
    {"tienda" : "La Norita",            "ubicacion": "https://goo.gl/maps/1tqTT9u5wRxPL8N29",	"direccion": "CARRETERA CUOTA #45,QUERETARO IRAPUATO	km 9 + 850 local 1	sobre carretera y sin calle	33949	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	CASTILLO"},
    {"tienda" : "ESTANCIA GEO",         "ubicacion": "https://goo.gl/maps/Abq1N1RFUtfAeMKv9",	"direccion": "PASEO DE LA ESTANCIA	700	PRIVADA LA ESTANCIA GEO. FRACC. LA ESTANCIA APASEO EL GRANDE 	26120	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	*LA ESTANCIA"},
    {"tienda" : "Plaza Ponty",          "ubicacion": "https://goo.gl/maps/g2YFXsbD6ngfaVGY8",	"direccion": "AV. PASEO DE LA ESTANCIA	1011 LOCAL 10	SIN NOMBRE	33169	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	*FRACCIONAMIENTO VILLAS DE LA ESTANCIA"},
    {"tienda" : "Rancho Nuevo",         "ubicacion": "https://goo.gl/maps/mCsKfeTTRHUeDu818",	"direccion": "CARRETERA CELAYA-QUERETARO	L 1 MZA 2	SOBRE CARRETERA CELAYA-QRO ALTURA APASEO EL GRANDE	14833	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	RANCHO NUEVO"},
    {"tienda" : "Trebol Libre",         "ubicacion": "https://goo.gl/maps/bwaD4RRMHnqjXaTt5",	"direccion": "CARRETERA DE CUOTA QUERETARO-IRAPUATO	KM 33	CRUCERO APASEO Y AUTOPISTA SALAMANCA-QUERETARO	12045	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	LA LABOR"},
    {"tienda" : "Trebol Cuota",         "ubicacion": "https://goo.gl/maps/ksJogHFcUSxG7mYt5",	"direccion": "CARRETERA DE CUOTA QUERETARO.IRAPUATO	KM 33	CRUCERO APASEO Y AUTOPISTA SALAMANCA-QUERETARO	12044	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	LA LABOR"},
    {"tienda" : "La Concepcion",        "ubicacion": "https://goo.gl/maps/hpmE6RkxZaox8doq8",	"direccion": "NICOLAS DE SAN LUIS MONTAÑEZ	276	AV. FRANCISCO BARRON RUIZ Y ATLAYAHUALCO	27757	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	*CENTRO APASEO EL GRANDE"},
    {"tienda" : "El Molino",            "ubicacion": "https://goo.gl/maps/Y2mjnTP2vFjyCqpu6",	"direccion": "ACCESO SUR	101	FERROCARRIL / MUÑOZ LEDO	26285	Queretaro	GUANAJUATO	APASEO EL GRANDE	APASEO EL GRANDE	*EL MOLINO DE ARRIBA"},
    {"tienda" : "Reforma",              "ubicacion": "https://goo.gl/maps/N7yQ8P8ZESAERaVj8",	"direccion": "FRANCISCO I. MADERO	231	REFORMA. MANZANA 062 LOTE NUMERO 001	24972	Queretaro	QUERETARO	CADEREYTA DE MONTES	CADEREYTA DE MONTES	*CENTRO"},
    {"tienda" : "Cadereyta",            "ubicacion": "https://goo.gl/maps/G9fMoNok9JEZYkh6A",	"direccion": "BLVD MANUEL GOMEZ MORIN	47+710	CARRETERA TRAMO FEDERAL CADEREYTA-XILITLA	13624	Queretaro	QUERETARO	CADEREYTA DE MONTES	CADEREYTA DE MONTES	CADEREYTA DE MONTES"},
    {"tienda" : "Las Alamedas",         "ubicacion": "https://goo.gl/maps/yyfFAwiSDKppez1X6",	"direccion": "Fundación 	100 local 17	2 de abril e Ignacion Gutierrez	34325	Queretaro	GUANAJUATO	CELAYA	CELAYA	CELAYA CENTRO"},
    {"tienda" : "Guillermo Prieto",     "ubicacion": "https://goo.gl/maps/b7ALwFdsJhYh3jhR7",	"direccion": "GUILLERMO PRIETO	602 INTERIOR LOCAL 2	COAHUILA Y DE TAMAULIPAS	33753	Queretaro	GUANAJUATO	CELAYA	CELAYA	ALAMEDA"},
    {"tienda" : "Celaya Cuota",         "ubicacion": "https://goo.gl/maps/vJPaiBztJ3QpohNBA",	"direccion": "AUTOPISTA CELAYA - SALAMANCA	KM40+600L3	ZONA DE PROTECCIÓN DE MÉNDEZ	29895	Queretaro	GUANAJUATO	CELAYA	CELAYA	LA TRINIDAD"},
    {"tienda" : "Paseo Del Bajio",      "ubicacion": "",	                                    "direccion": "PASEO DEL BAJIO	617	ROSAL Y MANZANOS	35301	Queretaro	GUANAJUATO	CELAYA	CELAYA	JARDINES DE CELAYA 3RA SECC"},
    {"tienda" : "Lopez Mateos",         "ubicacion": "https://goo.gl/maps/AyDTvnfgMhxzKw4B9",	"direccion": "Blvd. Adolfo Lopez Mateos Ote.	1108-A Y 329	Esq. Av. 2 de Abril	9502	Queretaro	GUANAJUATO	CELAYA	CELAYA	CELAYA CENTRO"},
    {"tienda" : "Hortencia",            "ubicacion": "https://goo.gl/maps/qxtNUrvCSqH56HbRA",	"direccion": "HORTENCIA	100	HORTENCIA Y AZALEA ESQ. AV. TECNOLOGICO	27758	Queretaro	GUANAJUATO	CELAYA	CELAYA	VALLE HERMOSO"},
    {"tienda" : "FOVISSSTE",            "ubicacion": "https://goo.gl/maps/9eWF5rHY6HZKEq5G8",	"direccion": "AV TECNOLOGICO 	601	ANTONIO GARCIA CUBAS	18441	Queretaro	GUANAJUATO	CELAYA	CELAYA	FOVISSSTE"},
    {"tienda" : "Villa Napoles",        "ubicacion": "https://goo.gl/maps/XEeg4FzPjc8T8An19",	"direccion": "AVENIDA PASEO CANTERA	117	VILLA NAPOLES Y AV LA CANTERA	27447	Queretaro	GUANAJUATO	CELAYA	CELAYA	*LA CANTERA"},
    {"tienda" : "Quetzalli",            "ubicacion": "https://goo.gl/maps/aWho242N4mBSHQsf9",	"direccion": "Flamenco	101	Paseo de los flamingos y Garza 	33170	Queretaro	GUANAJUATO	CELAYA	CELAYA	*RINCONADA LOS ALAMOS"},
    {"tienda" : "PUERTA DE PIEDRA",     "ubicacion": "https://goo.gl/maps/VqZLfgUAhHD4P1347",	"direccion": "AV CAMINO REAL	221	CAMINO REAL Y PUERTA DE PIEDRA	26450	Queretaro	GUANAJUATO	CELAYA	CELAYA	*CAMINO REAL ENTORNO RESIDENCIAL"},
    {"tienda" : "Industrial Celaya",    "ubicacion": "https://goo.gl/maps/3g1SYmat36hgH7Qg9",	"direccion": "EJE NOR-PTE. MANUEL J. CLOUTHIER	797 LOCAL1	PREDIO RUSTICO DENOMINADO GRANJA SAN ROMAN	29140	Queretaro	GUANAJUATO	CELAYA	CELAYA	CELAYA CENTRO"},
    {"tienda" : "Naranjos",             "ubicacion": "https://goo.gl/maps/HR73UaY1qoZtFotw8",   "direccion": "Paseo de los Naranjos	178	Circuito de los Ceresosn y Circuito de los cerezos	1524	Queretaro	GUANAJUATO	CELAYA	CELAYA	*LOS NARANJOS"},
    {"tienda" : "Lizardi",              "ubicacion": "https://goo.gl/maps/j3F1FfyFw7wBuRuc8",	"direccion": "Eje Poniente Manuel J.	S/N	Victor J. Lizardi Y Cardenal	1220	Queretaro	GUANAJUATO	CELAYA	CELAYA	*LOMA LINDA"},
    {"tienda" : "Alamos",               "ubicacion": "https://goo.gl/maps/uckUNeKN4YkRURnN8",	"direccion": "Eje Nor-Poniente M.J. Clouthier	S/N	Av. Torres Landa y Cam. a San Jose	2189	Queretaro	GUANAJUATO	CELAYA	CELAYA	LOS PINOS"},
    {"tienda" : "Crespo",               "ubicacion": "https://goo.gl/maps/KUFxdXF8E6DFiGeXA",	"direccion": "Carr. Celaya-Salamanca	Km. 5.5	Libramiento sur-pte y Acceso a fabricas	7680	Queretaro	GUANAJUATO	CELAYA	CELAYA	*CRESPO"},
    {"tienda" : "Salamanca",            "ubicacion": "https://goo.gl/maps/oG5HW7GwgXAAy63y9",	"direccion": "Carr. Fed. Celaya-Salamanca	Km 5	Av. Aeropuerto y Calle Acros	1878	Queretaro	GUANAJUATO	CELAYA	CELAYA	PRIMERA FRACCION DE CRESPO"},
    {"tienda" : "GRAN HACIENDA",        "ubicacion": "https://goo.gl/maps/XMfbo6uf8YURUD2p7",	"direccion": "AVENIDA DE LOS CEDROS 	246	ESQ. AVENIDA REAL DE MEZQUITE	26666	Queretaro	GUANAJUATO	CELAYA	CELAYA	*GRAN HACIENDA"},
    {"tienda" : "Buhos",                "ubicacion": "https://goo.gl/maps/Jkd7XjCz8dnWSqMx9",	"direccion": "HALCON ESQUINA BUHO	302	BUHO Y  ALBATROS	32846	Queretaro	GUANAJUATO	CELAYA	CELAYA	*ALAMOS"},
    {"tienda" : "Paseo Real",           "ubicacion": "https://goo.gl/maps/v7xt1QmC5UXV1KKD8",	"direccion": "PASEO REAL DE ARBOLEDAS 	110-B	AV. REAL DEL MONTE Y MONTE EVEREST	31858	Queretaro	GUANAJUATO	CELAYA	CELAYA	*REAL DE ARBOLEDAS"},
    {"tienda" : "La Cortina",           "ubicacion": "https://goo.gl/maps/HhzxNDHDoPSWWy4EA",	"direccion": "AV. 12 DE OCTUBRE ESQ. JESUS GOMEZ DE LA CORTINA	204	JESUS GOMEZ DE LA CORTINA Y CAMINO A SAN JOSE GUAN	31563	Queretaro	GUANAJUATO	CELAYA	CELAYA	NUEVO CELAYA"},
    {"tienda" : "Brasil",               "ubicacion": "https://goo.gl/maps/ukCGAkLoLpxhEthe8",	"direccion": "Av. Mexico	L.34,35,36	Esq. Av. Brasil	9476	Queretaro	GUANAJUATO	CELAYA	CELAYA	LA MISION"},
    {"tienda" : "Frida Kahlo",          "ubicacion": "https://goo.gl/maps/sg4vR1FtjtihWApu8",	"direccion": "AV. EL SAUZ ESUINA FRIDA KAHLO	1692	Esq. Frida Kahlo y Jose Chavez Morado	33435	Queretaro	GUANAJUATO	CELAYA	CELAYA	*HACIENDA DEL BOSQUE"},
    {"tienda" : "12 de Octubre",        "ubicacion": "https://goo.gl/maps/UG5YNnGw4FCBKRf46",	"direccion": "Av. 12 de Octubre	109	Esq. Ignacio Centeno y Ruben Campos	1384	Queretaro	GUANAJUATO	CELAYA	CELAYA	ZONA DE ORO"},
    {"tienda" : "Las Fuentes",          "ubicacion": "https://goo.gl/maps/wcXmQP3yexzL8tEM9",	"direccion": "Fuente el Ebro	306	Av. Fuentes y Fuente de la Diana	2580	Queretaro	GUANAJUATO	CELAYA	CELAYA	LAS FUENTES"},
    {"tienda" : "Pinos",                "ubicacion": "https://goo.gl/maps/jZPfRZptE8bhhfe87",	"direccion": "AV EL SAUZ	1501	GUATEMALA Y EJE NORPONIENTE	14668	Queretaro	GUANAJUATO	CELAYA	CELAYA	LOS PINOS"},
    {"tienda" : "Arboledas II",         "ubicacion": "https://goo.gl/maps/MZuicMsdTJRzWvge9",	"direccion": "Sierra Morena	126	Av. Arboledas y Sierra Torrecillas	2166	Queretaro	GUANAJUATO	CELAYA	CELAYA	LAS ARBOLEDAS 1RA SECC"},
    {"tienda" : "San Jose",             "ubicacion": "https://goo.gl/maps/dzEJTcNNZHcC9Jgx6",	"direccion": "Av. 12 de Octubre	201	Cam. A San Jose de Gto. y J. J. Torres de Landa	853	Queretaro	GUANAJUATO	CELAYA	CELAYA	*HACIENDA SAN JUANICO"},
    {"tienda" : "San Juanico",          "ubicacion": "https://goo.gl/maps/xeDUsPx1MrsGKAxt7",	"direccion": "Av. el Sauz	S/N	Cuarzo y Hilguera	1310	Queretaro	GUANAJUATO	CELAYA	CELAYA	*SAN JUANICO 1RA SECC"},
    {"tienda" : "El Sauz",              "ubicacion": "https://goo.gl/maps/TYHpSbEMzYgSQYZx7",	"direccion": "Av. el Sauz	S/N	Via del Ferrocarril y Laureles	1287	Queretaro	GUANAJUATO	CELAYA	CELAYA	LOS LAURELES 1RA SECC"},
    {"tienda" : "Tauro",                "ubicacion": "",	                                    "direccion": "Monte Tauro	s/n	Monte Etna y Monte Vesubio	35083	Queretaro	GUANAJUATO	CELAYA	CELAYA	*LAS ARBOLEDAS"},
    {"tienda" : "Bronce",               "ubicacion": "https://goo.gl/maps/fTS1ay1LbtEq7V297",	"direccion": "BRONCE	200	FRACCIONAMIENTO ZONA DE ORO	34312	Queretaro	GUANAJUATO	CELAYA	CELAYA	*ZONA DE ORO II"},
    {"tienda" : "Cortazar",             "ubicacion": "https://goo.gl/maps/vdbXpxkUXcLTed939",	"direccion": "CARR PANAMERICANA TRAMO CELAYA-CORTAZAR KM 1176	1176	DENTRO DE LA ESTACION DE SERVICIO GASOLINERA	13299	Queretaro	GUANAJUATO	CELAYA	CELAYA	PRIMERA FRACCION DE CRESPO"},
    {"tienda" : "Cuamoc",               "ubicacion": "https://goo.gl/maps/wFo4Eeq4Y8cnRWGy7",	"direccion": "ORIENTE 6	100	EJE NORTE-SUR Y CALLE SUR 2	32052	Queretaro	GUANAJUATO	CELAYA	CELAYA	CIUDAD INDUSTRIAL"},
    {"tienda" : "Badajoz",              "ubicacion": "https://goo.gl/maps/qAjzp3eLbKqab1jy5",	"direccion": "Av. Badajoz Esq. Baleares	170	BALEARES Y ARICA	31390	Queretaro	GUANAJUATO	CELAYA	CELAYA	*LOS OLIVOS 3RA SECC"},
    {"tienda" : "Regina",               "ubicacion": "https://goo.gl/maps/C7qEMgTu3WgwR5KV6",	"direccion": "AV. PASEO DE LOS OLIVOS	1238	AV DE LOS OLIVOS SUR Y C. CASTELLANA LOTE 97 MZA18	29899	Queretaro	GUANAJUATO	CELAYA	CELAYA	*LOS OLIVOS RESIDENCIAL 2DA SECCION"},
    {"tienda" : "Benavente",            "ubicacion": "https://goo.gl/maps/rWSJa5dETsjzAAfM7",	"direccion": "PROL. AVENIDA IRRIGACION	410	REVOLUCION AGRARIA Y ACCESO A VILLAS DE BENAVENTE	9266	Queretaro	GUANAJUATO	CELAYA	CELAYA	EMILIANO ZAPATA"},
    {"tienda" : "Temixco",              "ubicacion": "https://goo.gl/maps/NnN9f2X15Z79sKey5",	"direccion": "EJE NORTE-SUR	101 L-1	TEMIXCO y PRESA ALVARO OBREGON	26816	Queretaro	GUANAJUATO	CELAYA	CELAYA	CIUDAD INDUSTRIAL"},
    {"tienda" : "Exelaris",             "ubicacion": "https://goo.gl/maps/QwZXqFNbjFXBMshx7",	"direccion": "Av. Irrigacion	103-Loc.31	Gaspar Almanza yPaseo del Bosque	1286	Queretaro	GUANAJUATO	CELAYA	CELAYA	*EXELARIS"},
    {"tienda" : "Favorita",             "ubicacion": "https://goo.gl/maps/ctUxmhjWvsYAnyxYA",	"direccion": "Av. Irrigación Esq. Luis H. Gonzalez 	223	Luis H. Gonzalez y Juan de Angulo	1613	Queretaro	GUANAJUATO	CELAYA	CELAYA	*FRACC.LA FAVORITA"},
    {"tienda" : "Santa Fe",             "ubicacion": "https://goo.gl/maps/KsqJGM4Eo9CX9PoP9",	"direccion": "Avenida Mexico Japon	100	Av. Mision Santa Fe Y Aurelio Bonilla	3933	Queretaro	GUANAJUATO	CELAYA	CELAYA	*MISION DE SANTA FE"},
    {"tienda" : "Octopan",              "ubicacion": "https://goo.gl/maps/uWh4DqTv6fv7pf2b9",	"direccion": "AV. ANENECUILCO	S/N	AV. ANENECUILCO Y GENOVEVO DE LA O	10155	Queretaro	GUANAJUATO	CELAYA	CELAYA	ALFREDO VAZQUEZ BONFIL"},
    {"tienda" : "Gran Victoria",        "ubicacion": "https://goo.gl/maps/bj1tt5jmKtpgvB2V8",	"direccion": "FRANCISCO VILLA	99	AVENIDA MEXICO Y ZAPATA	31861	Queretaro	GUANAJUATO	CELAYA	CELAYA	SAN MIGUEL OCTOPAN"},
    {"tienda" : "Zapata",               "ubicacion": "https://goo.gl/maps/rbA4mgUhXfxseMCu6",	"direccion": "IRRIGACION	140-B	ESQ. CALLE PRESA DE LA AMISTAD	9274	Queretaro	GUANAJUATO	CELAYA	CELAYA	ALFREDO VAZQUEZ BONFIL"},
    {"tienda" : "Esnop",                "ubicacion": "",	                                    "direccion": "AV. EJE NOR-PONIENTE	104-A LOC. 1	PREDIO RUSTICO EX HACIENDA DE MUÑIZ	29139	Queretaro	GUANAJUATO	CELAYA	CELAYA	RESIDENCIAS HACIENDA DE MUÑIZ"},
    {"tienda" : "Los Reyes",            "ubicacion": "https://goo.gl/maps/JTv446hZevuyAqU36",	"direccion": "Salvador Ortega 	s/n	Nicaragua y Mision de los santos	34728	Queretaro	GUANAJUATO	CELAYA	CELAYA	*LA MISION"},
    {"tienda" : "Dos Mundos",           "ubicacion": "https://goo.gl/maps/SsCqmNwHy8Pv56oL9",	"direccion": "TECNOLOGICO 	699-G	ESQ. CON AV. MEXICO JAPON	20710	Queretaro	GUANAJUATO	CELAYA	CELAYA	*CIUDAD INDUSTRIAL"},
    {"tienda" : "Melchor Ortega",       "ubicacion": "https://goo.gl/maps/QRJsDCKW4tBUzA6M6",	"direccion": "Salvador Ortega 	508	melchor ocampo y de rosa	31214	Queretaro	GUANAJUATO	CELAYA	CELAYA	LINDAVISTA"},
    {"tienda" : "Misiones",             "ubicacion": "https://goo.gl/maps/fyf53AGuWcdixHL4A",	"direccion": "M. j. Clouthier	300-15C	Av. el Sauz y Entrada 15 de Mayo	1730	Queretaro	GUANAJUATO	CELAYA	CELAYA	*15 DE MAYO"},
    {"tienda" : "Nor Poniente",         "ubicacion": "https://goo.gl/maps/TuiKRCrPuzGzncbNA",	"direccion": "Eje Nor Poniente	900	Esq.Salvador Ortega	8597	Queretaro	GUANAJUATO	CELAYA	CELAYA	INFONAVIT"},
    {"tienda" : "Campanario",           "ubicacion": "https://goo.gl/maps/hRDf2Qe28gYwM2Qn9",	"direccion": "Av. Norponiente	200	Av. de las Torres y S. Ortega	3914	Queretaro	GUANAJUATO	CELAYA	CELAYA	*CAMPANARIO"},
    {"tienda" : "Praderas",             "ubicacion": "https://goo.gl/maps/Vg6s9MRxJfvqnnEn8",	"direccion": "Carr. Celaya-San Miguel Allende KM 1.8	Km. 1.8	El Canal y Praderas Hacienda	2205	Queretaro	GUANAJUATO	CELAYA	CELAYA	PRADERAS DE LA HACIENDA"},
    {"tienda" : "Rincon de Tamayo",     "ubicacion": "https://goo.gl/maps/6LSizqguoJyvaCYw8",	"direccion": "Benito Juarez	294	Mariano Abasolo y reforma	31213	Queretaro	GUANAJUATO	CELAYA	CELAYA	RINCON DE TAMAYO"},
    {"tienda" : "Megagas",              "ubicacion": "https://goo.gl/maps/YviX2MQtrezK6uMb8",	"direccion": "CARRETERA CELAYA - SALVATIERRA 	KM 5.5 LOCAL 2	CARRETERA CELAYA-SALVATIERRA	28917	Queretaro	GUANAJUATO	CELAYA	CELAYA	SANTA MARIA DEL REFUGIO"},
    {"tienda" : "Honda TM",             "ubicacion": "",	                                    "direccion": "CARR. LIB SUR 	KM 6	PLANTA HONDA TRANSMISIONES.	26416	Queretaro	GUANAJUATO	CELAYA	CELAYA	LA LUZ"},
    {"tienda" : "Juan Pablo II",        "ubicacion": "https://goo.gl/maps/4RTAJKDmxdreMDAQA",	"direccion": "EJE SUR-PONIENTE JUAN PABLO II	1132	ACCESO UNIVERSIDAD	16610	Queretaro	GUANAJUATO	CELAYA	CELAYA	SANTA MARIA DEL REFUGIO"},
    {"tienda" : "Providencia",          "ubicacion": "https://goo.gl/maps/L1SfQoV6hLVVALaG9",	"direccion": "Carretera Celaya a Salvatierra	Km. 5	Camino A Caracheo Y La Granja	3929	Queretaro	GUANAJUATO	CELAYA	CELAYA	LOS MANCERA"},
    {"tienda" : "Heliotropo",           "ubicacion": "https://goo.gl/maps/z3iGrABunY3W75py7",	"direccion": "Av. Lazaro C. del Rio	1227	Heliotropo y Pensamiento	2075	Queretaro	GUANAJUATO	CELAYA	CELAYA	LAS FLORES"},
    {"tienda" : "Salvatierra",          "ubicacion": "https://goo.gl/maps/jtmYT3B2aQZ6d2pX6",	"direccion": "Carr. Celaya-Salvatierra	Km. 10	A Rincon de Tamayo Y Camino Rancho la Ceja	2749	Queretaro	GUANAJUATO	CELAYA	CELAYA	EL SAUZ"},
    {"tienda" : "Honda",                "ubicacion": "",	                                    "direccion": "CARR. LIB SUR 	KM 6 	PLANTA HONDA CELAYA	25487	Queretaro	GUANAJUATO	CELAYA	CELAYA	LA LUZ"},
    {"tienda" : "City Express",         "ubicacion": "https://goo.gl/maps/PDG8pAT2JCiWdKQQ7",	"direccion": "Avenida La Cano	205 local 1	Libramiento Nororiente y rio laja	33433	Queretaro	GUANAJUATO	CELAYA	CELAYA	*PREDIO RUSTICO DENOMINADO LA CANO O SANTA ROSALIA"},
    {"tienda" : "El Cantar",            "ubicacion": "https://goo.gl/maps/TY88L6Q5mVxrS8nv7",	"direccion": "EUSEBIO KINO	601	EUSEBIO KINO FRACCIONAMIENTO EL CANTAR	33003	Queretaro	GUANAJUATO	CELAYA	CELAYA	*EL CANTAR"},
    {"tienda" : "San Nicolas",          "ubicacion": "https://goo.gl/maps/jKaG5qg3JgZhiC5u8",	"direccion": "PASEO DE SAN NICOLAS DE PARRA	219	Paseo de la Hacienda y Cerro Compostela	33954	Queretaro	GUANAJUATO	CELAYA	CELAYA	*LAS ARBOLEDAS"},
    {"tienda" : "Francisco Juarez",     "ubicacion": "https://goo.gl/maps/xDDVxwLxnXH61cyY6",	"direccion": "Francisco Juarez	618	Esq. Trueba Olivares Y Juan Jose Prado	1290	Queretaro	GUANAJUATO	CELAYA	CELAYA	VILLAS DEL PARAISO"},
    {"tienda" : "2 de Abril",           "ubicacion": "https://goo.gl/maps/LsG52pD5bvNW37HG6",	"direccion": "Av. 2 de Abril	S/N	Av. Constituyentes y Pino Suarez	2128	Queretaro	GUANAJUATO	CELAYA	CELAYA	*CENTRO"},
    {"tienda" : "Alameda",              "ubicacion": "https://goo.gl/maps/1yGwbCt3Rr9s4r9S9",	"direccion": "Arroyo Ch.	70	Tenochtitlan y 16 De Septiembre	1218	Queretaro	GUANAJUATO	CELAYA	CELAYA	ALAMEDA"},
    {"tienda" : "Jardines",             "ubicacion": "https://goo.gl/maps/3KDQ6Gy1NyXPfAbu7",	"direccion": "Paseo de Guanajuato	421	Esq. Paseo de Celaya Y Magnolia	1309	Queretaro	GUANAJUATO	CELAYA	CELAYA	JARDINES DE CELAYA 1RA SECC"},
    {"tienda" : "Suroriente",           "ubicacion": "",	                                    "direccion": "Villa de Juare	sn	sitio de qro y 2 de abril	34922	Queretaro	GUANAJUATO	CELAYA	CELAYA	VILLAS DEL ROMERAL"},
    {"tienda" : "Felipe Angeles",       "ubicacion": "https://goo.gl/maps/fmssfwNEvYHfdbRb6",	"direccion": "FELIPE ANGELES	313 LOCAL 3	ANTONIO PLAZA Y ALFONSO RIVERA PEREZ	33167	Queretaro	GUANAJUATO	CELAYA	CELAYA	CELAYA CENTRO"},
    {"tienda" : "Mateos",               "ubicacion": "https://goo.gl/maps/KhHE4bPoupyjj9Zq6",	"direccion": "BLVD ADOLFO LOPEZ MATEOS	109 OTE.	IGNACIO ALLENDE Y GUADALUPE VICTORIA	34448	Queretaro	GUANAJUATO	CELAYA	CELAYA	*ZONA CENTRO"},
    {"tienda" : "Division del Nte",     "ubicacion": "https://goo.gl/maps/LztBUVQcWe2qiCFn8",	"direccion": "DIVISION DEL NORTE	336	DIVISION DEL NORTE, ESQ CONSTITUYENTES	10707	Queretaro	GUANAJUATO	CELAYA	CELAYA	CELAYA CENTRO"},
    {"tienda" : "Sostenes  Rocha",      "ubicacion": "https://goo.gl/maps/BbEBYJV4DYP4JxHp7",	"direccion": "Sostenes Rocha	173	Guadalupe Victoria y Luis Cortazar	30763	Queretaro	GUANAJUATO	CELAYA	CELAYA	CELAYA CENTRO"},
    {"tienda" : "Don Gu",               "ubicacion": "",	                                    "direccion": "SALVADOR ORTEGA	2001	ESQ. VALLE DE LOS NARANJOS	9265	Queretaro	GUANAJUATO	CELAYA	CELAYA	DON GU"},
    {"tienda" : "Los Portales",         "ubicacion": "https://goo.gl/maps/fJGGVi4adNoUb42G9",	"direccion": "CORREGIDORA	103-C, L-2,3	CORREGIDORA Y MANUEL DOBLADO	24971	Queretaro	GUANAJUATO	CELAYA	CELAYA	CELAYA CENTRO"},
    {"tienda" : "Allende",              "ubicacion": "https://goo.gl/maps/hwfrVE2EWFRRLTSk9",	"direccion": "Allende	124-A	Gomez Farias y Blvd. Adolfo Lopez Mateos	8942	Queretaro	GUANAJUATO	CELAYA	CELAYA	*CENTRO"},
    {"tienda" : "El Romeral",           "ubicacion": "https://goo.gl/maps/X1krPBu33kBvA5HB9",	"direccion": "EJE VIAL HERMINIO MARTINEZ	601 LOCAL 1	2 de abril y citio de Queretaro	34320	Queretaro	GUANAJUATO	CELAYA	CELAYA	VILLAS DEL ROMERAL"},
    {"tienda" : "Morelos",              "ubicacion": "https://goo.gl/maps/5yJFTw7EE4JkGgZT7",	"direccion": "JOSE MARIA MORELOS Y PAVON	103	JOSE MARIA MORELOS Y PAVON ESQ PEDRO FIGUEROA	10543	Queretaro	GUANAJUATO	CELAYA	CELAYA	CELAYA CENTRO"},
    {"tienda" : "Tampico",              "ubicacion": "https://goo.gl/maps/rSsuAR74ZAASNywH9",	"direccion": "Tampico	167	Esq. 16 de septiembre	8600	Queretaro	GUANAJUATO	CELAYA	CELAYA	PARQUE CENTRAL"},
    {"tienda" : "Manuel Doblado",       "ubicacion": "https://goo.gl/maps/s3KWpbjJURtzvZpu7",	"direccion": "Manuel Doblado	401	Leandro Valle y Abasolo	1219	Queretaro	GUANAJUATO	CELAYA	CELAYA	*CENTRO"},
    {"tienda" : "IMSS",                 "ubicacion": "https://goo.gl/maps/HuGJT5fV4G1jJuLu6",	"direccion": "DIEGO RIVERA	200	MUTUALISMO	13766	Queretaro	GUANAJUATO	CELAYA	CELAYA	CELAYA CENTRO"},
    {"tienda" : "Carranza",             "ubicacion": "https://goo.gl/maps/ztZDs9vVRfUP8Q776",	"direccion": "PRIV. VENUSTIANO CARRANZA	113	VENUSTIANO CARRANZA Y PRIV V CARRANZA	15117	Queretaro	GUANAJUATO	CELAYA	CELAYA	CELAYA CENTRO"},
    {"tienda" : "Malecon",              "ubicacion": "https://goo.gl/maps/tgynZgAqbcyiQXWr7",	"direccion": "CARRETERA CELAYA-APASEO LIBRE	201	ESTACION DE SERVICIO No. 5746	9839	Queretaro	GUANAJUATO	CELAYA	CELAYA	SAN ISIDRO TROJES"},
    {"tienda" : "Antonio Plaza",        "ubicacion": "https://goo.gl/maps/EoUX8cDdJwCdehdS6",	"direccion": "ADOLFO LOPEZ MATEOS	501	ANTONIO PLAZA Y AGRARISMO SUR	33431	Queretaro	GUANAJUATO	CELAYA	CELAYA	*CENTRO"},
    {"tienda" : "Campestre",            "ubicacion": "https://goo.gl/maps/UouKJvAHiWotFVtUA",	"direccion": "Plaza Pabellon Campestre	L-16 Al 19	Esq. Raul Nieto	2354	Queretaro	GUANAJUATO	CELAYA	CELAYA	*CAMPESTRE DE CELAYA"},
    {"tienda" : "Colon",                "ubicacion": "https://maps.google.com/?cid=6745149778867", "direccion": "AV. CONSTITUYENTES ESQ. LUIS DONALDO COLOSIO	23	AJUCHITLAN TOLIMAN	27500	Queretaro	QUERETARO	COLON	COLON	COLON"},
    {"tienda" : "Comonfort",            "ubicacion": "https://goo.gl/maps/4n9U7KzQc2NvXxm77",	"direccion": "LIB. EMPALME ESCOBEDO-COMONFORT	760 LOCAL1	009	24630	Queretaro	GUANAJUATO	COMONFORT	COMONFORT	BORUNDA"},
    {"tienda" : "Delher",               "ubicacion": "https://goo.gl/maps/877J6yHZ98Z6wUv96",	"direccion": "CARRETERA A CELAYA	114-C	CARRETERA A CELAYA	32410	Queretaro	GUANAJUATO	COMONFORT	COMONFORT	*LA PROVIDENCIA"},
    {"tienda" : "Vaqueros",             "ubicacion": "https://goo.gl/maps/U3DjFihG6Cu35q5p6",	"direccion": "Miguel Hidalgo 	30-b	Benito Juarez y Mariano Arista	34263	Queretaro	GUANAJUATO	COMONFORT	COMONFORT	COMONFORT"},
    {"tienda" : "Fortuna",              "ubicacion": "https://goo.gl/maps/nsWKeicb1TL8XtzW8",	"direccion": "CARRETERA DR. MORA - SAN MIGUEL DE ALLENDE	km. 1.7	SOBRE CARRETERA DR. MORA - SAN MIGUEL DE ALLENDE ANTES DE LLEGAR A LA NORIA 	26089	Queretaro	GUANAJUATO	DOCTOR MORA	DOCTOR MORA	*LA FORTUNA"},
    {"tienda" : "Montecarlo",           "ubicacion": "https://goo.gl/maps/fbiTuAWSEDJRHXHq5",	"direccion": "AV. SUR	77	L-13 MZ- 15	33362	Queretaro	GUANAJUATO	DOLORES HIDALGO	DOLORES HIDALGO	*CENTRO DOLORES HIDALGO"},
    {"tienda" : "Valentina",            "ubicacion": "https://goo.gl/maps/xoW2rUxRiwRTE1hPA",	"direccion": "AV. GUANAJUATO	36	COLONIA CENTRO, ESQ. TAMAULIPAS	30612	Queretaro	GUANAJUATO	DOLORES HIDALGO	DOLORES HIDALGO	*CENTRO DOLORES HIDALGO"},
    {"tienda" : "Del Ferrocarril",      "ubicacion": "https://goo.gl/maps/UcTPRRtv4w7GGxcN6",	"direccion": "CARR DOLORES-SAN MIGUEL DE ALLENDE	KM 3.5	CARR DOLORES-SAN MIGUEL DE ALLENDE	16578	Queretaro	GUANAJUATO	DOLORES HIDALGO	DOLORES HIDALGO	CIUDAD DOLORES HIDALGO"},
    {"tienda" : "Jose Alfredo",         "ubicacion": "https://goo.gl/maps/LCq1ozK5Hoxdk2gu7",	"direccion": "AV. JOSE ALFREDO JIMENEZ	6 A	ESQ. MICHOACAN	33789	Queretaro	GUANAJUATO	DOLORES HIDALGO	DOLORES HIDALGO	*CENTRO DOLORES HIDALGO"},
    {"tienda" : "Morera",               "ubicacion": "https://goo.gl/maps/JhZZatmj6UhNNtUy9",	"direccion": "CARR DOLORES-GTO	KM 1	DOLORES-SAN FELIPE	15980	Queretaro	GUANAJUATO	DOLORES HIDALGO	DOLORES HIDALGO	CIUDAD DOLORES HIDALGO"},
    {"tienda" : "Heroes",               "ubicacion": "https://goo.gl/maps/G8h5KDFxDFoc8mV67",	"direccion": "CALZ DE LOS HEROES	S/N	CALZ DE LOS HEROES CON MARIANO BALLEZA	16808	Queretaro	GUANAJUATO	DOLORES HIDALGO	DOLORES HIDALGO	CIUDAD DOLORES HIDALGO"},
    {"tienda" : "Independencia",        "ubicacion": "https://goo.gl/maps/TC1W8xFnXJ8Bw2wF6",	"direccion": "CARRETERA DOLORES-SAN FELIPE	KM 0.50	CARR DOLORES HIDALGO-SAN FELIPE	15455	Queretaro	GUANAJUATO	DOLORES HIDALGO	DOLORES HIDALGO	CIUDAD DOLORES HIDALGO"},
    {"tienda" : "Bicentenario",         "ubicacion": "https://goo.gl/maps/rCzp1AWPD7Lzm5ra7",	"direccion": "PLAZA PRINCIPAL	17	JALISCO E HIDALGO	16192	Queretaro	GUANAJUATO	DOLORES HIDALGO	DOLORES HIDALGO	CIUDAD DOLORES HIDALGO"},
    {"tienda" : "Paseo Dolores",        "ubicacion": "https://goo.gl/maps/PVkNv9dhCjk2dUUb6",	"direccion": "Avenida Norte	65 BIS	Revoluciòn y Dolores Hidalgo	25644	Queretaro	GUANAJUATO	DOLORES HIDALGO	DOLORES HIDALGO	CIUDAD DOLORES HIDALGO"},
    {"tienda" : "Chiapas",              "ubicacion": "https://goo.gl/maps/euZXrk81heSudns6A",	"direccion": "CHIAPAS	1	CENTRO	32051	Queretaro	GUANAJUATO	DOLORES HIDALGO	DOLORES HIDALGO	*CENTRO DOLORES HIDALGO"},
    {"tienda" : "El Rehilete",          "ubicacion": "https://goo.gl/maps/7B3BPBfB6Wm9ukym8",	"direccion": "AVE. PASEO DEL SOL	200	SENDERO DEL VISITANTE Y CAMINO REAL	31464	Queretaro	GUANAJUATO	VILLAGRAN	VILLAGRAN	*EL REHILETE"},
    {"tienda" : "Polotitlan",           "ubicacion": "https://goo.gl/maps/72eRwa5of9ii6KSj9",   "direccion": "CUAUHTEMOC	1	ESQUINA PLAZA DE LA CONSTITUCION	27499	Queretaro	MEXICO	POLOTITLAN	POLOTITLAN	POLOTITLAN"},
    {"tienda" : "Encinillas",           "ubicacion": "https://goo.gl/maps/AsxxQT1wgA24r3xd9",   "direccion": "AUTOPISTA MEXICO-QRO	KM119	CARRETERA MEXICO-QUERETARO	15274	Queretaro	MEXICO	POLOTITLAN	POLOTITLAN	SAN FRANCISCO ACAXUCHITLANTONGO"},
    {"tienda" : "Villagran",            "ubicacion": "https://goo.gl/maps/GSov6vQfsmpCfZwA9",   "direccion": "BOULEVARD LUIS DONALDO COLOSIO 	700	ESQ FCO SARABIA	27729	Queretaro	GUANAJUATO	VILLAGRAN	VILLAGRAN	*LA VENTA"},
    {"tienda" : "Pio",                  "ubicacion": "https://goo.gl/maps/YD36XjGEZB5uRGLr5",     	"direccion": "PARQUE INDUSTRIAL 1-B	AV. LAS AMERICAS Y AV. ING. ANTONIO GUTIERREZ CORT	31284	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE"},
    {"tienda" : "Dr Mora",              "ubicacion": "https://goo.gl/maps/8mpaTBQJxQrCw5Ai6",	"direccion": "Carr. Queretaro - San Luis Potosi	Km. 62	Gasolinera ES0882 y Entronque Doctor Mora	3930	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE"},
    {"tienda" : "Puerto Mexico",        "ubicacion": "https://goo.gl/maps/o18T2FSj5sJjCgUo7",	"direccion": "CARR. FEDERAL 57 TRAMO QRO.- S-L-P	KM. 54	RANCHO LA GUADALUPANA	33365	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	*LA GUADALUPANA"},
    {"tienda" : "La Purisima",          "ubicacion": "https://goo.gl/maps/Bnty9hJjVWD6b3vr8",	"direccion": "AV. BICENTENARIO	S/N	POBLADO COMUNAL	31763	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	*LA PURISIMA DE LA HUERTA"},
    {"tienda" : "Villa Corzo",          "ubicacion": "https://goo.gl/maps/tCTSbzRCyCTE3GgX6",	"direccion": "LIBRAMIENTO SUR LUIS FERRO MEDINA	25	VICENTE GUERRERO	28867	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	*VILLA CORZO"},
    {"tienda" : "La Huerta",            "ubicacion": "https://goo.gl/maps/1AmiAPzAc1EWSjbPA",	"direccion": "Avenida Bicentenario 	KM 3.3 INT 1	CAMINO SIN NOMBRE Y JARDINES DE MARIA TERESA	33366	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	*LA HUERTA"},
    {"tienda" : "Iturbide",             "ubicacion": "https://goo.gl/maps/CN4pS3CibpEdum5X7",	"direccion": "Prol.Moctezuma	No 1	Carretera a Qro Esq.Prol Rayon	8604	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE"},
    {"tienda" : "La Cinta",             "ubicacion": "https://goo.gl/maps/fWmzc5VY78QsPDtv8",	"direccion": "CARRETERA 57	45.5	CARRETERA 57	15837	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	LA CINTA"},
    {"tienda" : "Presidencia",          "ubicacion": "https://goo.gl/maps/ERynzEwGiPGboiXa8",	"direccion": "PLAZA PRINCIPAL	25	AV PRINCIPAL	15840	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE"},
    {"tienda" : "Lomas Taurinas",       "ubicacion": "https://goo.gl/maps/Sm8EXQYMT65ubBzj7",	"direccion": "PLUTARCO ELIAS CALLES	S/N	ESQ. ABASOLO	34727	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE"},
    {"tienda" : "Mission Hills",        "ubicacion": "https://goo.gl/maps/paor8yYkc9wcuCkV6",	"direccion": "CARR. FED.57 A SAN JOSE I KM 2.5	KM 2.5	CARR 57 	18865	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	LA CINTA"},
    {"tienda" : "Revillagigedo",        "ubicacion": "https://goo.gl/maps/mYMzQZw5zt8JF58a8",	"direccion": "BOULEVARD LIC JUAN JOSE TORRES LANDA	17	ESQ. REVILLAGIGEDO	33563	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	*LAS ANIMAS"},
    {"tienda" : "QUIJAY",               "ubicacion": "https://goo.gl/maps/JjfushhtVHu78GEv6",	"direccion": "CAR. SAN LUIS DE LA PAZ-SAN JOSE ITURBIDE	19	ESQ. LIBRAMIENTO PONIENTE	26731	Queretaro	GUANAJUATO	SAN JOSE ITURBIDE	SAN JOSE ITURBIDE	*LA LLORONA"},
    {"tienda" : "Chapultepec",          "ubicacion": "https://goo.gl/maps/KeRSgxQA3Vw5Qhs97",	"direccion": "FRANCISCO VILLA ESQ. CHAPULTEPEC	2 LOCAL 5	FRANCISCO VILLA ESQ. CHAPULTEPEC	10858	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "Aramil",               "ubicacion": "https://goo.gl/maps/AdhvyqnmP7He9NJs9",	"direccion": "AV. PASEO CENTRAL	22 L.1,2,3	LOCAL 1,2, Y 3	31562	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*SAN CAYETANO"},
    {"tienda" : "San Rafael",           "ubicacion": "https://goo.gl/maps/2sZM63p8hRRjuabd6",	"direccion": "AV TECNOLOGICO LOTES 4 Y 5 	MZA 20	AV SAN RAFAEL	14364	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN RAFAEL"},
    {"tienda" : "Los Patos",            "ubicacion": "https://goo.gl/maps/sq2VxwCMWsteQnb86",	"direccion": "AV UNIVERSIDAD 	33	AV. DE LOS PATOS ESQ AV. UNIVERSIDAD 	20473	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	BANTHI"},
    {"tienda" : "Fernando Diaz",        "ubicacion": "https://goo.gl/maps/rJqf8mNHiCz5y6wn7",	"direccion": "PROFRA. MERCEDES CAMACHO	405	FERNANDO DIAZ	26924	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*CENTRO URBANO NUEVO SAN JUAN"},
    {"tienda" : "Rio San Juan",         "ubicacion": "https://goo.gl/maps/JDw3DM12EXtkS5P86",	"direccion": "RIO SAN JUAN	69	RIO LERMA	31767	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN CAYETANO"},
    {"tienda" : "Central",              "ubicacion": "https://goo.gl/maps/5fQwjxfhst5fYL1QA",	"direccion": "Av. Central	4	Av. Tecnologico y Av. Central	1778	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*QUINTAS DE GUADALUPE"},
    {"tienda" : "Cantera",              "ubicacion": "https://goo.gl/maps/YmesZFPXWqxiQ7Da7",	"direccion": "Cantera	2-A	Cuarzo y Lomas de Pedregoso	2948	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*LOMAS DE SAN JUAN"},
    {"tienda" : "Moctezuma",            "ubicacion": "https://goo.gl/maps/zkPd2ShfS7nXXw4T8",	"direccion": "Paricutin	1	Raul Ramirez y Rio Moctezuma	2114	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*LOMAS DE SAN JUAN"},
    {"tienda" : "Romero",               "ubicacion": "https://goo.gl/maps/6RvkCY7sE2QmWDDP9",	"direccion": "BLVD. MIGUEL HIDALGO	181	ESQ. LUIS ROMERO	9127	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "20 de Noviembre",      "ubicacion": "https://goo.gl/maps/sNeKd5DP4LtnYnQH8",	"direccion": "AV. 20 DE NOVIEMBRE	120	ESQ. 5 DE MAYO	9281	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "Plaza Universidad",    "ubicacion": "https://goo.gl/maps/uPMxSjstniquzSAw5",	"direccion": "UNIVERSIDAD	229	CAMINO A CERRO GORDO	13636	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*LA PAZ II"},
    {"tienda" : "El Siete",             "ubicacion": "",                                    	"direccion": "CARRETERA FEDERAL 120	S/N	CAMINO A SANTA ROSA XAJAY	34318	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*EL MIRADOR"},
    {"tienda" : "Fatima",               "ubicacion": "",                                    	"direccion": "FRANCISCO ZARCO	45	SANTOS DEGOLLADO	28502	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	BENITO JUAREZ"},
    {"tienda" : "Caseta",               "ubicacion": "https://goo.gl/maps/3Cp4aBYPdkpMp6kq8",	"direccion": "Autopista México-Querétaro	km 147.5 LOCAL 2	0	27684	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SANTA BARBARA LA CUEVA"},
    {"tienda" : "Banthi",               "ubicacion": "https://goo.gl/maps/zTKgEr79mKazrLieA",	"direccion": "PASEO DE LAS ESTRELLAS	68 LOCAL 1	LAS ESTRELLAS	30854	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*LAS ESTRELLAS"},
    {"tienda" : "Palmillas",            "ubicacion": "https://goo.gl/maps/ytLtEXCM9SSRQ43P8",	"direccion": "AUTOPISTA MEXICO-QRO	KM 152.5	AUTOPISTA MEXICO-QUERETARO	15454	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	PALMILLAS"},
    {"tienda" : "Palomas",              "ubicacion": "https://goo.gl/maps/PcKkKhZfkAcTy3YS7",	"direccion": "PROL. AV. MEXICO	5-1 LOCAL 1	PARQUE INDUSTRIAL NUEVO SAN JUAN	31860	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*CENTRO URBANO NUEVO SAN JUAN"},
    {"tienda" : "Imbera",               "ubicacion": "",                                    	"direccion": "CARR.MEXICO-TEQUIAQUIAPAN	K.M. 3.2	CARR.MEXICO-TEQUIAQUIAPAN	19044	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*VALLE DE ORO"},
    {"tienda" : "Jacarandas",           "ubicacion": "https://goo.gl/maps/34FqxDi67eSL9R6VA",	"direccion": "LTE 3 MZA 375	EN T	AV DE LOS PATOS ESQ LOMAS DEL PEDREGOSO	14351	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*LOMAS DE SAN JUAN"},
    {"tienda" : "Sagrado Corazon",      "ubicacion": "https://goo.gl/maps/Xe2kDPRjMxkMs17r8",	"direccion": "AVENIDA 2 DE JULIO	2	AVENIDA 2 DE JULIO	26923	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*SAGRADO CORAZON"},
    {"tienda" : "CAPRICHO",             "ubicacion": "https://goo.gl/maps/R3YZRC9R8f6CcC3m9",	"direccion": "AVENIDA LAS AGUILAS 	314	CISNE Y GARZA	26506	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*EL CAPRICHO"},
    {"tienda" : "San Juan",             "ubicacion": "https://goo.gl/maps/Zwaia4gWSYX3zkMM8",	"direccion": "Boulevard Lomas de San Juan	167	Av. Lomas del Pedregoso Y calle Dakota	3080	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*LOMAS DE SAN JUAN"},
    {"tienda" : "San Gil",              "ubicacion": "https://goo.gl/maps/32AcTXWgoGzWNDVcA",	"direccion": "AUTOPISTA MEXICO-QUERETARO	174-020 L-1	CARRETERA MEXICO-QRO	24410	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	EL ORGANAL"},
    {"tienda" : "La Llave",             "ubicacion": "",                                    	"direccion": "BENITO JUAREZ GARCIA	17 LOCAL 1	BENITO JUAREZ GARCIA	33755	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN PEDRO AHUACATLAN"},
    {"tienda" : "Agua Rica",            "ubicacion": "https://goo.gl/maps/tvra6ps6cTtjS4Ej9",	"direccion": "PINO SUAREZ	67 LOCAL 14	JOSE MARIA PINO SUAREZ Y EPIGMENIO GONZALEZ	33001	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "Porvenir",             "ubicacion": "https://goo.gl/maps/x4eFhKbe3zZuC3KdA",	"direccion": "PARCELA 63 ZONA 1 POL 1/1	KM 168 +250 Local 1	SIN INFORMACION	32848	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*LA ESTANCIA"},
    {"tienda" : "Rayon",                "ubicacion": "https://goo.gl/maps/2g2Vp3vGowksCHHD7",	"direccion": "IGNACIO LOPEZ RAYON	121	PABLO CABRERA	16113	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "Ayuntamiento",         "ubicacion": "https://goo.gl/maps/6MRfXoqxGoaSCTSG6",	"direccion": "AYUNTAMIENTO	112	20 DE NOVIEMBRE	25639	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "Paso Los Guzman",      "ubicacion": "https://goo.gl/maps/Kw3jgs3ua53tqXAZ6",	"direccion": "AV. CANAL DE SANTA CLARA	12	PASO DE LOS GUZMAN ESQ CANAL DE SANTA CLARA, CENTRO, S.J.R.	24063	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "Benito Juarez",        "ubicacion": "https://goo.gl/maps/CCtNnH69BBQyXkRo6",	"direccion": "AV JUAREZ OTE	4	AV HIDALGO SUR	16330	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "La Estancia",          "ubicacion": "https://goo.gl/maps/PRUqZ3AsBzqRC2eT6",	"direccion": "AUT. MEXICO-QRO	168	AUT MEXICO QUERETARO	13625	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	LA ESTANCIA"},
    {"tienda" : "Espiritu Santo",       "ubicacion": "https://goo.gl/maps/3zbFjdUpa45uRbXN8",	"direccion": "BLVD. MIGUEL HIDALGO NORTE	1	AVENIDA DEL FERROCARRIL	26925	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*ESPIRITU SANTO"},
    {"tienda" : "Pablo Cabrera",        "ubicacion": "https://goo.gl/maps/nRcTEMNEogceRCsV7",	"direccion": "Miguel Hidalgo	124	Pablo Cabrera y 5 de mayo	1731	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "Mina II",              "ubicacion": "https://goo.gl/maps/rG1rUsBPuDKB6tRGA",	"direccion": "JOSE MA. MORELOS	14	CENTRO S.J.R.	29502	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "La Venta",             "ubicacion": "https://goo.gl/maps/oGG8GGTQZWtLJYHy5",	"direccion": "CARRETERA PANAMERICANA	KM171	CARRETERA PANAMERICANA ESQ CAMINO A LA MURALLA	11307	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "Nieto",                "ubicacion": "https://goo.gl/maps/3LrqsC3v4nvdfVAH6",	"direccion": "AV. CENTRAL	10-B	AVENIDA CENTRAL	25976	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SANTA CRUZ NIETO"},
    {"tienda" : "Arteaga",              "ubicacion": "https://goo.gl/maps/NsRAVH6usjnijLbn9",	"direccion": "Jose Maria Artega	102	Esq. Av. Central	1875	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	SAN JUAN DEL RIO CENTRO"},
    {"tienda" : "Ghandi",               "ubicacion": "https://goo.gl/maps/GbCa5ExKwiz8PUAx8",	"direccion": "AV. GHANDI	8	ESQ. CALLE ERNESTO T. MONETA	9277	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*COMEVI LA PAZ"},
    {"tienda" : "Paseo Central",        "ubicacion": "https://goo.gl/maps/oKyiiFbVVmsrnGWy9",	"direccion": "AV CONSTITUYENTES	243	LIBRAMIENTO A TEQUISQUIAPAN	13699	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*VALLE DE ORO"},
    {"tienda" : "Mercedes Camacho",     "ubicacion": "https://goo.gl/maps/nvnwvfjqB6ScQoiXA",	"direccion": "AV. MERCEDES CAMACHO	103	FRACC. PRADERAS DEL SOL	19782	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*PRADERAS DEL SOL"},
    {"tienda" : "Bosques de San Juan",  "ubicacion": "https://goo.gl/maps/SJhYh4VafqUqyWmb8",	"direccion": "PROLONGACION ALVARO OBREGON	107	BARRIO DE SAN ISIDRO	28916	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*SAN ISIDRO"},
    {"tienda" : "Kamerun",              "ubicacion": "https://goo.gl/maps/AM1NKxm76P3jLWrh8",	"direccion": "Constituyentes	s/n	Esq. Pablo Cabrera	3927	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*LOMAS DE SAN JUAN"},
    {"tienda" : "Vistha",               "ubicacion": "https://goo.gl/maps/vWS8N8nno5kntGoG7",	"direccion": "VENUSTIANO CARRANZA	2	VENUSTIANO CARRANZA	25975	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	VISTA"},
    {"tienda" : "Jardines del Valle",   "ubicacion": "https://goo.gl/maps/rmDgSMfrk9G4n9Q47",	"direccion": "AVENIDA GANDHI	50	COMEVI LA PAZ	29900	Queretaro	QUERETARO	SAN JUAN DEL RIO	SAN JUAN DEL RIO	*LA PAZ II"},
    {"tienda" : "Libertad",             "ubicacion": "https://goo.gl/maps/X5hVW1o8BS2ZnV6Z7",	"direccion": "AV. FERROCARRIL	501	NIÑOS HEROES	29500	Queretaro	GUANAJUATO	SAN LUIS DE LA PAZ	SAN LUIS DE LA PAZ	*ISSSTE"},
    {"tienda" : "Portal Vertiz",        "ubicacion": "https://goo.gl/maps/WJpKSGTGyGdTCL2i7",	"direccion": "HIDALGO	126	BENITO JUAREZ Y GALEANA	32356	Queretaro	GUANAJUATO	SAN LUIS DE LA PAZ	SAN LUIS DE LA PAZ	*CENTRO"},
    {"tienda" : "La Palma",             "ubicacion": "https://goo.gl/maps/XASYzLAGuoVSuhyx7",	"direccion": "CARRETERA 110 SAN LUS DE LA PAZ - DOLORES HIDALGO	KM 1+855	SAN LUIS DE LA PAZ - DOLORES HGO MARGEN DERECHO	30220	Queretaro	GUANAJUATO	SAN LUIS DE LA PAZ	SAN LUIS DE LA PAZ	*LA PALMA"},
    {"tienda" : "Sierra Gorda",         "ubicacion": "https://goo.gl/maps/Evot4fVhJNVsDCCX8",	"direccion": "CARRETERA SAN LUIS - DOLORES HIDALGO	KM 2.6	DENTRO DE LA ESTACION DE SERVICIO 5519	12203	Queretaro	GUANAJUATO	SAN LUIS DE LA PAZ	SAN LUIS DE LA PAZ	EL MARAVILLAL"},
    {"tienda" : "SanLuis deLaPazI",     "ubicacion": "https://goo.gl/maps/opP3rFB7fS3aj9MHA",	"direccion": "Carretera No. 57 Qro-San Luis Potosi	Km. 86	Entronque San Luis de la Paz	7153	Queretaro	GUANAJUATO	SAN LUIS DE LA PAZ	SAN LUIS DE LA PAZ	SAN LUIS DE LA PAZ"},
    {"tienda" : "San Luis de LaPa",     "ubicacion": "https://goo.gl/maps/7JqBFLDhAkyK5tqu8",	"direccion": "Carr. 57 QRO-SLP	Km. 81.691	Gasolinera y Es 4032	3925	Queretaro	GUANAJUATO	SAN LUIS DE LA PAZ	SAN LUIS DE LA PAZ	LA CIENEGA"},
    {"tienda" : "Vista Hermosa",        "ubicacion": "https://goo.gl/maps/iJHnwvPJzXdjJJHe6",	"direccion": "CARRETERA SAN LUIS POZOS	101	ESQUINA LIBRAMIENTO SUR	14850	Queretaro	GUANAJUATO	SAN LUIS DE LA PAZ	SAN LUIS DE LA PAZ	SAN LUIS DE LA PAZ"},
    {"tienda" : "Panoramico",           "ubicacion": "https://goo.gl/maps/wYFNGoKShs9NkL2U9",	"direccion": "camino real lic. Juan Jose Torres Landa	510	calle guanajuato y calle de los padres	34322	Queretaro	GUANAJUATO	SAN LUIS DE LA PAZ	SAN LUIS DE LA PAZ	*LA PANORAMICA"},
    {"tienda" : "Insurgentes",          "ubicacion": "https://goo.gl/maps/5tt44K2vUFCjYFHY9",	"direccion": "AV. PRINCIPAL DE LA LUZ	25-A	ESQ. AV. JOSE DE LANDETA	9276	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	INSURGENTES"},
    {"tienda" : "Pipila",               "ubicacion": "https://goo.gl/maps/voNXgTJbwXkSto629",	"direccion": "CARRETERA SAN MIGUEL DE ALLENDE A CELAYA	1	CARRETERA SAN MIGUEL DE ALLENDE A CELAYA ESQ LIB Q	11042	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	SAN MIGUEL DE ALLENDE CENTRO"},
    {"tienda" : "Las Brisas",           "ubicacion": "https://goo.gl/maps/NbqQqA5LPHfaqwz26",	"direccion": "AVENIDA DE LAS BRISAS	1 LOCAL 1	HACIENDA EL MOLINO Y CALLE NEOCLASICA	17894	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*LAS BRISAS"},
    {"tienda" : "SAN ANTONIO",          "ubicacion": "https://goo.gl/maps/ngmn7gysQ2FPDDV96",	"direccion": "CANAL	122	SAN ANTONIO Y SAN ISIDRO	26451	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*CENTRO"},
    {"tienda" : "La Luz",               "ubicacion": "https://goo.gl/maps/SvhFMuxeoH6J7a7GA",	"direccion": "Blvd. de la Conspiracion	63	Alondra y Pirul	2615	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*LA LUZ"},
    {"tienda" : "Las Magnolias",        "ubicacion": "https://goo.gl/maps/4unEBqTbXEmP3qE29",	"direccion": "Antiguo Camino a Querétaro	50 INT 1	Real del Conde y Calle Heroico Cuerpo de Bomberos	34447	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*CASCO DE LANDETA"},
    {"tienda" : "Calle Ancha II",       "ubicacion": "https://goo.gl/maps/yiYoDb314NmZVJ777",	"direccion": "Ancha de San Antonio	8	Calle Potranca	2840	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*CENTRO"},
    {"tienda" : "Mesones",              "ubicacion": "https://goo.gl/maps/Bs8Y2zyrHHs3GDdS9",	"direccion": "BENITO JUAREZ	3	SAN FRANCISCO	14909	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*CENTRO"},
    {"tienda" : "Calle Ancha",          "ubicacion": "https://goo.gl/maps/w1pqHdHpwPZde26R6",	"direccion": "Calle Ancha  de San Antonio	81	Stirling Dickson y Callejon de San Antonio	521	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*San ANTONIO"},
    {"tienda" : "Canal",                "ubicacion": "https://goo.gl/maps/tLCxnhbtXtKZWa639",	"direccion": "CALZ DE LA ESTACION	9	MARIA AREVALO	15838	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	SAN RAFAEL INSURGENTES"},
    {"tienda" : "San Miguelito",        "ubicacion": "https://goo.gl/maps/YoHCvi7UwAdzagk59",	"direccion": "CALLE DE MESONES	31	ESQ CALLE JOSE LLANOS	13638	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*CENTRO"},
    {"tienda" : "El Encanto",           "ubicacion": "https://goo.gl/maps/D3ykMpD4AyWaLYgb6",	"direccion": "CARRETERA A CELAYA ESQUINA CON CALLE PASEO REAL	KM 0.720	Vicente Araiza	20586	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*PASEO REAL"},
    {"tienda" : "La Cieneguita",        "ubicacion": "https://goo.gl/maps/Si1kGapW6p197gqEA",	"direccion": "AV. LA VISTA 	1-A INT 10 Y 11	LA VISTA	31364	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*RESIDENCIAL LA VISTA"},
    {"tienda" : "Sn.Miguel Allend",     "ubicacion": "https://goo.gl/maps/HYiqj3oVxdFeHiGB9",	"direccion": "Carr. A Queretaro	Km 1	Lib. El Caracol y Callejon Alcocer - Estacion de S	605	Queretaro	GUANAJUATO	SAN MIGUEL DE ALLENDE	ALLENDE	*CENTRO"},
    {"tienda" : "Franco",               "ubicacion": "https://goo.gl/maps/FH49A2N9JfAVLaAz7",	"direccion": "Hidalgo	301-A	Zona Centro, Esq. Aldama	31359	Queretaro	GUANAJUATO	SANTA CRUZ DE JUVENTINO ROSAS	SANTA CRUZ DE JUVENTINO ROSAS	*SANTA CRUZ DE JUVENTINO ROSAS CENTRO"},
    {"tienda" : "Primo Verdad",         "ubicacion": "https://goo.gl/maps/WjSE4xZVPMGYLWrQ9",	"direccion": "CORREGIDORA	539 A	CORREGIDORA Y LOPEZ MATEOS	29396	Queretaro	GUANAJUATO	SANTA CRUZ DE JUVENTINO ROSAS	SANTA CRUZ DE JUVENTINO ROSAS	*SANTA CRUZ DE JUVENTINO ROSAS CENTRO"},
    {"tienda" : "Asfaltos",             "ubicacion": "https://goo.gl/maps/hLCHys5y75k5ccQw7",	"direccion": "Carretera Juventino Rosas - Celaya km 1	501-A	FRENTE CARRETERA	31762	Queretaro	GUANAJUATO	SANTA CRUZ DE JUVENTINO ROSAS	SANTA CRUZ DE JUVENTINO ROSAS	*SANTA CRUZ DE JUVENTINO ROSAS CENTRO"},
    {"tienda" : "Juventino",            "ubicacion": "https://goo.gl/maps/RRzNY246L6DSqnoG8",	"direccion": "CARRETERA JUVENTINO ROSAS CELAYA KILOMETRO 3.9	501-A	035	27448	Queretaro	GUANAJUATO	SANTA CRUZ DE JUVENTINO ROSAS	SANTA CRUZ DE JUVENTINO ROSAS	SANTA CRUZ DE JUVENTINO ROSAS"},
    {"tienda" : "Rodeo",                "ubicacion": "https://goo.gl/maps/MbEc8iKZQWebhSQT8",	"direccion": "CARRETERA ESTATAL 200, QUERETARO TEQUISQUIAPAN	KM 51+578 INT.1	EJIDO DE TEQUISQUIAPAN	29497	Queretaro	QUERETARO	TEQUISQUIAPAN	TEQUISQUIAPAN	TEQUISQUIAPAN"},
    {"tienda" : "Bordo Blanco",         "ubicacion": "https://goo.gl/maps/HyBN2adpCooMBAkm6",	"direccion": "CARRETERA FEDERAL SAN JUAN DEL RIO-XILITLA	16+384	CARRETERA SAN JUAN DEL RIO XILITLA	19021	Queretaro	QUERETARO	TEQUISQUIAPAN	TEQUISQUIAPAN	BORDO BLANCO"},
    {"tienda" : "Juarez",               "ubicacion": "https://goo.gl/maps/FNaW4tatNUvivVy28",	"direccion": "AV JUAREZ 	102	CARRETERA A EZEQUIEL MONTES Y LAZARO CARDENAS	12398	Queretaro	QUERETARO	TEQUISQUIAPAN	TEQUISQUIAPAN	TEQUISQUIAPAN"},
    {"tienda" : "Gasca",                "ubicacion": "https://goo.gl/maps/xG2C82yY2tLn7ZCt6",	"direccion": "CARRETERA SAN JUAN DEL RIO-XILITLA	16	CARRETERA TEQUISQUIAPAN Y CARRETERA A TECOZAUTLA	12047	Queretaro	QUERETARO	TEQUISQUIAPAN	TEQUISQUIAPAN	TEQUISQUIAPAN"},
    {"tienda" : "Vergel",               "ubicacion": "https://goo.gl/maps/aLdHB1pA27rptoDu5",	"direccion": "MATAMOROS	12	MATAMOROS ESQ CARR A EZEQUIEL MONTES	16809	Queretaro	QUERETARO	TEQUISQUIAPAN	TEQUISQUIAPAN	TEQUISQUIAPAN"},
    {"tienda" : "Chopos",               "ubicacion": "https://goo.gl/maps/vAQHAGUXwKrSEea37",	"direccion": "AV. BENITO JUAREZ	22	BARRIO DE SAN JUAN	31189	Queretaro	QUERETARO	TEQUISQUIAPAN	TEQUISQUIAPAN	*BARRIO DE SAN JUAN"},
    {"tienda" : "Centenario",           "ubicacion": "https://goo.gl/maps/dMPznSkgiqQv4N2s9",	"direccion": "CARRETERA FEDERAL 120	3 PONIENTE LOCAL 1	CALLE SIN NOMBRE	32354	Queretaro	QUERETARO	TEQUISQUIAPAN	TEQUISQUIAPAN	*VISTA HERMOSA"},
    {"tienda" : "Asuncion",             "ubicacion": "https://goo.gl/maps/8Dxcb1DRVtkKmGxD8",	"direccion": "MORELOS	2A Y 2B	NIÑOS HEROES	15839	Queretaro	QUERETARO	TEQUISQUIAPAN	TEQUISQUIAPAN	TEQUISQUIAPAN"},
    {"tienda" : "Villagasca",           "ubicacion": "https://goo.gl/maps/utXEnUNYkTLuL2Fb9",	"direccion": "BLVD. LUIS DONALDO COLOSIO	200	ALAMOS	32752	Queretaro	GUANAJUATO	VILLAGRAN	VILLAGRAN	*ARBOLEDAS"},
    {"tienda" : "Central Villagran",    "ubicacion": "https://goo.gl/maps/ZToKwaLTn5wtfwPJ7",	"direccion": "5 DE MAYO	4 INT B	5 DE MAYO Y FERROCARRIL 	29068	Queretaro	GUANAJUATO	VILLAGRAN	VILLAGRAN	*VILLAGRAN CENTRO"},
    {"tienda" : "El Caracol",           "ubicacion": "https://goo.gl/maps/VvdkPGrMPfdUKZ5V9",	"direccion": "Carretera Alternativa Villagrán- Celaya	KM 3.6 In1	EL PINTOR	31326	Queretaro	GUANAJUATO	VILLAGRAN	VILLAGRAN	EL CARACOL"},
    {"tienda" : "Colosio",              "ubicacion": "https://goo.gl/maps/uDu9nqVNbBszzXMj9",	"direccion": "BOULEVARD LUIS DONALDO COLOSIO	501	PENSAMIENTO Y NARDO	29067	Queretaro	GUANAJUATO	VILLAGRAN	VILLAGRAN	*LAS FLORES"}
],
    "agregar" : [
        {"nombre" : "", "fecha" : "" }
    ]
};
for (let conta = 0; conta < objeto.sucursales.length; conta++) {
    objeto.sucursales[conta].tienda = objeto.sucursales[conta].tienda.toLowerCase();
    //console.log(objeto.sucursales[conta].tienda);

    
}

/*
NOMBRE TIENDA	 CR TIENDA	Ubicacion	 ESTADO	 CIUDAD
{"tienda" : "Rivapalacio",          "cr" : "50RUQ", "ubicacion" : "https://goo.gl/maps/QKwDP6cN4adA13nr9"	MEXICO	ACULCO
{"tienda" : "Aculco",               "cr" : "50UJQ", "ubicacion" : "https://goo.gl/maps/sYja7a9LuFi9perAA"	MEXICO	ACULCO
{"tienda" : "La Estacion",          "cr" : "50QST", "ubicacion" : "https://goo.gl/maps/yBdy5KKyh7nabFA4A"	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Amealco",              "cr" : "50EMK", "ubicacion" : "https://goo.gl/maps/w2vanio1tAtkZ4xZ6"	QUERETARO	AMEALCO DE BONFIL
{"tienda" : "La Mora",              "cr" : "50WRJ", "ubicacion" : "https://goo.gl/maps/u9TF2fCNYj6R8Npi8"	QUERETARO	AMEALCO DE BONFIL
{"tienda" : "San Isidro",           "cr" : "50SWI", "ubicacion" : "https://goo.gl/maps/kLwLy4hgL4b3FLia9"	GUANAJUATO	APASEO EL ALTO
{"tienda" : "Apaseo II",            "cr" : "50AII", "ubicacion" : "https://goo.gl/maps/4B3uaMHtzUFB7jGBA"	GUANAJUATO	APASEO EL ALTO
{"tienda" : "16 de Septiembre",     "cr" : "50FPH", "ubicacion" : "https://goo.gl/maps/YN6mCb2ZpAvhdH1n7"	GUANAJUATO	APASEO EL ALTO
{"tienda" : "Apaseo Centro",        "cr" : "50FVD", "ubicacion" : "https://goo.gl/maps/ybXK1SgJQY7717cC6"	GUANAJUATO	APASEO EL ALTO
{"tienda" : "Apaceo",               "cr" : "50QAP", "ubicacion" : "https://goo.gl/maps/r9epxDfCpw7qSGny8"	GUANAJUATO	APASEO EL ALTO
{"tienda" : "Matador Quintana Roo", "cr" : "56PBH", "ubicacion" : "	GUANAJUATO	APASEO EL ALTO
{"tienda" : "MatadorGuanajuat",     "cr" : "56WLQ", "ubicacion" : "	GUANAJUATO	APASEO EL ALTO
{"tienda" : "Brujas Cel",           "cr" : "501JA", "ubicacion" : "https://goo.gl/maps/eCERbNX417NfbE1N6"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "Brujas Qro",           "cr" : "50ZB0", "ubicacion" : "https://goo.gl/maps/LXyiza1LTFdbVVp4A"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "FuentesBalvanera",     "cr" : "50VYY", "ubicacion" : "https://goo.gl/maps/gkohMGX3LjSU5bKW8"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "Castillo",             "cr" : "50HYI", "ubicacion" : "https://goo.gl/maps/oPsaLAZQMy6EE8ue7"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "La Norita",            "cr" : "50O94", "ubicacion" : "https://goo.gl/maps/1tqTT9u5wRxPL8N29"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "ESTANCIA GEO",         "cr" : "50PJS", "ubicacion" : "https://goo.gl/maps/Abq1N1RFUtfAeMKv9"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "Plaza Ponty",          "cr" : "50Y6N", "ubicacion" : "https://goo.gl/maps/g2YFXsbD6ngfaVGY8"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "Rancho Nuevo",         "cr" : "50FNW", "ubicacion" : "https://goo.gl/maps/mCsKfeTTRHUeDu818"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "Trebol Libre",         "cr" : "50HJC", "ubicacion" : "https://goo.gl/maps/bwaD4RRMHnqjXaTt5"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "Trebol Cuota",         "cr" : "50JDH", "ubicacion" : "https://goo.gl/maps/ksJogHFcUSxG7mYt5"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "La Concepcion",        "cr" : "50Q3E",	https://goo.gl/maps/hpmE6RkxZaox8doq8	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "El Molino",            "cr" : "50SMT", "ubicacion" : "https://goo.gl/maps/Y2mjnTP2vFjyCqpu6"	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "Mat. Jardin Iturbide", "cr" : "56HOA", "ubicacion" : "	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "Reforma",              "cr" : "50CTE", "ubicacion" : "https://goo.gl/maps/N7yQ8P8ZESAERaVj8"	QUERETARO	CADEREYTA DE MONTES
{"tienda" : "Cadereyta",            "cr" : "50KDS", "ubicacion" : "https://goo.gl/maps/G9fMoNok9JEZYkh6A"	QUERETARO	CADEREYTA DE MONTES
{"tienda" : "Las Alamedas",         "cr" : "503ID", "ubicacion" : "https://goo.gl/maps/yyfFAwiSDKppez1X6"	GUANAJUATO	CELAYA
{"tienda" : "Guillermo Prieto",     "cr" : "504MN", "ubicacion" : "https://goo.gl/maps/b7ALwFdsJhYh3jhR7"	GUANAJUATO	CELAYA
{"tienda" : "Celaya Cuota",         "cr" : "50B4P", "ubicacion" : "https://goo.gl/maps/vJPaiBztJ3QpohNBA"	GUANAJUATO	CELAYA
{"tienda" : "Paseo Del Bajio",      "cr" : "50GO8", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Lopez Mateos",         "cr" : "50MWM", "ubicacion" : "https://goo.gl/maps/AyDTvnfgMhxzKw4B9"	GUANAJUATO	CELAYA
{"tienda" : "Hortencia",            "cr" : "50VP4",	https://goo.gl/maps/qxtNUrvCSqH56HbRA	GUANAJUATO	CELAYA
{"tienda" : "FOVISSSTE",            "cr" : "50WBD", "ubicacion" : "https://goo.gl/maps/9eWF5rHY6HZKEq5G8"	GUANAJUATO	CELAYA
{"tienda" : "Villa Napoles",        "cr" : "50GR4", "ubicacion" : "https://goo.gl/maps/XEeg4FzPjc8T8An19"	GUANAJUATO	CELAYA
{"tienda" : "Quetzalli",            "cr" : "50J73", "ubicacion" : "https://goo.gl/maps/aWho242N4mBSHQsf9"	GUANAJUATO	CELAYA
{"tienda" : "PUERTA DE PIEDRA",     "cr" : "50KLU", "ubicacion" : "https://goo.gl/maps/VqZLfgUAhHD4P1347"	GUANAJUATO	CELAYA
{"tienda" : "Industrial Celaya",    "cr" : "50KO1", "ubicacion" : "https://goo.gl/maps/3g1SYmat36hgH7Qg9"	GUANAJUATO	CELAYA
{"tienda" : "Naranjos",             "cr" : "50NJS", "ubicacion" : "https://goo.gl/maps/HR73UaY1qoZtFotw8"	GUANAJUATO	CELAYA
{"tienda" : "Lizardi",              "cr" : "50QLD", "ubicacion" : "https://goo.gl/maps/j3F1FfyFw7wBuRuc8"	GUANAJUATO	CELAYA
{"tienda" : "Alamos",               "cr" : "50QMO", "ubicacion" : "https://goo.gl/maps/uckUNeKN4YkRURnN8"	GUANAJUATO	CELAYA
{"tienda" : "Crespo",               "cr" : "50QRP", "ubicacion" : "https://goo.gl/maps/KUFxdXF8E6DFiGeXA"	GUANAJUATO	CELAYA
{"tienda" : "Salamanca",            "cr" : "50SLS", "ubicacion" : "https://goo.gl/maps/oG5HW7GwgXAAy63y9"	GUANAJUATO	CELAYA
{"tienda" : "GRAN HACIENDA",        "cr" : "50VQN", "ubicacion" : "https://goo.gl/maps/XMfbo6uf8YURUD2p7"	GUANAJUATO	CELAYA
{"tienda" : "Buhos",                "cr" : "50Z1P", "ubicacion" : "https://goo.gl/maps/Jkd7XjCz8dnWSqMx9"	GUANAJUATO	CELAYA
{"tienda" : "Paseo Real",           "cr" : "5023B", "ubicacion" : "https://goo.gl/maps/v7xt1QmC5UXV1KKD8"	GUANAJUATO	CELAYA
{"tienda" : "La Cortina",           "cr" : "505A7", "ubicacion" : "https://goo.gl/maps/HhzxNDHDoPSWWy4EA"	GUANAJUATO	CELAYA
{"tienda" : "Brasil",               "cr" : "50BOF", "ubicacion" : "https://goo.gl/maps/ukCGAkLoLpxhEthe8"	GUANAJUATO	CELAYA
{"tienda" : "Frida Kahlo",          "cr" : "50BX3", "ubicacion" : "https://goo.gl/maps/sg4vR1FtjtihWApu8"	GUANAJUATO	CELAYA
{"tienda" : "12 de Octubre",        "cr" : "50DDQ", "ubicacion" : "https://goo.gl/maps/UG5YNnGw4FCBKRf46"	GUANAJUATO	CELAYA
{"tienda" : "Las Fuentes",          "cr" : "50FTS", "ubicacion" : "https://goo.gl/maps/wcXmQP3yexzL8tEM9"	GUANAJUATO	CELAYA
{"tienda" : "Pinos",                "cr" : "50NJP", "ubicacion" : "https://goo.gl/maps/jZPfRZptE8bhhfe87"	GUANAJUATO	CELAYA
{"tienda" : "Arboledas II",         "cr" : "50QAD", "ubicacion" : "https://goo.gl/maps/MZuicMsdTJRzWvge9"	GUANAJUATO	CELAYA
{"tienda" : "San Jose",             "cr" : "50QCJ", "ubicacion" : "https://goo.gl/maps/dzEJTcNNZHcC9Jgx6"	GUANAJUATO	CELAYA
{"tienda" : "San Juanico",          "cr" : "50QSJ", "ubicacion" : "https://goo.gl/maps/xeDUsPx1MrsGKAxt7"	GUANAJUATO	CELAYA
{"tienda" : "El Sauz",              "cr" : "50SUQ", "ubicacion" : "https://goo.gl/maps/TYHpSbEMzYgSQYZx7"	GUANAJUATO	CELAYA
{"tienda" : "Tauro",                "cr" : "50TY5", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Bronce",               "cr" : "50Z9C", "ubicacion" : "https://goo.gl/maps/fTS1ay1LbtEq7V297"	GUANAJUATO	CELAYA
{"tienda" : "Cortazar",             "cr" : "50KWH", "ubicacion" : "https://goo.gl/maps/vdbXpxkUXcLTed939"	GUANAJUATO	CELAYA
{"tienda" : "Cuamoc",               "cr" : "5011O", "ubicacion" : "https://goo.gl/maps/wFo4Eeq4Y8cnRWGy7"	GUANAJUATO	CELAYA
{"tienda" : "Badajoz",              "cr" : "507B4", "ubicacion" : "https://goo.gl/maps/qAjzp3eLbKqab1jy5"	GUANAJUATO	CELAYA
{"tienda" : "Regina",               "cr" : "50A6V", "ubicacion" : "https://goo.gl/maps/C7qEMgTu3WgwR5KV6"	GUANAJUATO	CELAYA
{"tienda" : "Benavente",            "cr" : "50BEV", "ubicacion" : "https://goo.gl/maps/rWSJa5dETsjzAAfM7"	GUANAJUATO	CELAYA
{"tienda" : "Temixco",              "cr" : "50DHO",	https://goo.gl/maps/NnN9f2X15Z79sKey5	GUANAJUATO	CELAYA
{"tienda" : "Exelaris",             "cr" : "50EXQ", "ubicacion" : "https://goo.gl/maps/QwZXqFNbjFXBMshx7"	GUANAJUATO	CELAYA
{"tienda" : "Favorita",             "cr" : "50QFV", "ubicacion" : "https://goo.gl/maps/ctUxmhjWvsYAnyxYA"	GUANAJUATO	CELAYA
{"tienda" : "Santa Fe",             "cr" : "50QSF", "ubicacion" : "https://goo.gl/maps/KsqJGM4Eo9CX9PoP9"	GUANAJUATO	CELAYA
{"tienda" : "Octopan",              "cr" : "50TPK", "ubicacion" : "https://goo.gl/maps/uWh4DqTv6fv7pf2b9"	GUANAJUATO	CELAYA
{"tienda" : "Gran Victoria",        "cr" : "50V4R", "ubicacion" : "https://goo.gl/maps/bj1tt5jmKtpgvB2V8"	GUANAJUATO	CELAYA
{"tienda" : "Zapata",               "cr" : "50ZAY", "ubicacion" : "https://goo.gl/maps/rbA4mgUhXfxseMCu6"	GUANAJUATO	CELAYA
{"tienda" : "Esnop",                "cr" : "502G5", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Los Reyes",            "cr" : "50B7K", "ubicacion" : "https://goo.gl/maps/JTv446hZevuyAqU36"	GUANAJUATO	CELAYA
{"tienda" : "Dos Mundos",           "cr" : "50CVM",	https://goo.gl/maps/SsCqmNwHy8Pv56oL9	GUANAJUATO	CELAYA
{"tienda" : "Melchor Ortega",       "cr" : "50DK0", "ubicacion" : "https://goo.gl/maps/QRJsDCKW4tBUzA6M6"	GUANAJUATO	CELAYA
{"tienda" : "Misiones",             "cr" : "50MIO", "ubicacion" : "https://goo.gl/maps/fyf53AGuWcdixHL4A"	GUANAJUATO	CELAYA
{"tienda" : "Nor Poniente",         "cr" : "50NPO", "ubicacion" : "https://goo.gl/maps/TuiKRCrPuzGzncbNA"	GUANAJUATO	CELAYA
{"tienda" : "Campanario",           "cr" : "50NRI", "ubicacion" : "https://goo.gl/maps/hRDf2Qe28gYwM2Qn9"	GUANAJUATO	CELAYA
{"tienda" : "Praderas",             "cr" : "50QPA", "ubicacion" : "https://goo.gl/maps/Vg6s9MRxJfvqnnEn8"	GUANAJUATO	CELAYA
{"tienda" : "Rincon de Tamayo",     "cr" : "502HS", "ubicacion" : "https://goo.gl/maps/6LSizqguoJyvaCYw8"	GUANAJUATO	CELAYA
{"tienda" : "Megagas",              "cr" : "508ZL", "ubicacion" : "https://goo.gl/maps/YviX2MQtrezK6uMb8"	GUANAJUATO	CELAYA
{"tienda" : "Honda TM",             "cr" : "50DAN", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Juan Pablo II",        "cr" : "50JBP", "ubicacion" : "https://goo.gl/maps/4RTAJKDmxdreMDAQA"	GUANAJUATO	CELAYA
{"tienda" : "Providencia",          "cr" : "50POQ", "ubicacion" : "https://goo.gl/maps/L1SfQoV6hLVVALaG9"	GUANAJUATO	CELAYA
{"tienda" : "Heliotropo",           "cr" : "50QHE", "ubicacion" : "https://goo.gl/maps/z3iGrABunY3W75py7"	GUANAJUATO	CELAYA
{"tienda" : "Salvatierra",          "cr" : "50QSL", "ubicacion" : "https://goo.gl/maps/jtmYT3B2aQZ6d2pX6"	GUANAJUATO	CELAYA
{"tienda" : "Honda",                "cr" : "50SLI", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "City Express",         "cr" : "507MO", "ubicacion" : "https://goo.gl/maps/PDG8pAT2JCiWdKQQ7"	GUANAJUATO	CELAYA
{"tienda" : "El Cantar",            "cr" : "508JH", "ubicacion" : "https://goo.gl/maps/TY88L6Q5mVxrS8nv7"	GUANAJUATO	CELAYA
{"tienda" : "San Nicolas",          "cr" : "50B78", "ubicacion" : "https://goo.gl/maps/jKaG5qg3JgZhiC5u8"	GUANAJUATO	CELAYA
{"tienda" : "Francisco Juarez",     "cr" : "50FJQ", "ubicacion" : "https://goo.gl/maps/xDDVxwLxnXH61cyY6"	GUANAJUATO	CELAYA
{"tienda" : "2 de Abril",           "cr" : "50QAB", "ubicacion" : "https://goo.gl/maps/LsG52pD5bvNW37HG6"	GUANAJUATO	CELAYA
{"tienda" : "Alameda",              "cr" : "50QAL", "ubicacion" : "https://goo.gl/maps/1yGwbCt3Rr9s4r9S9"	GUANAJUATO	CELAYA
{"tienda" : "Jardines",             "cr" : "50QJC", "ubicacion" : "https://goo.gl/maps/3KDQ6Gy1NyXPfAbu7"	GUANAJUATO	CELAYA
{"tienda" : "Suroriente",           "cr" : "501CF", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Felipe Angeles",       "cr" : "501R9", "ubicacion" : "https://goo.gl/maps/fmssfwNEvYHfdbRb6"	GUANAJUATO	CELAYA
{"tienda" : "Mateos",               "cr" : "504YI", "ubicacion" : "https://goo.gl/maps/KhHE4bPoupyjj9Zq6"	GUANAJUATO	CELAYA
{"tienda" : "Division del Nte",     "cr" : "50CFQ", "ubicacion" : "https://goo.gl/maps/LztBUVQcWe2qiCFn8"	GUANAJUATO	CELAYA
{"tienda" : "Sostenes  Rocha",      "cr" : "50D23", "ubicacion" : "https://goo.gl/maps/BbEBYJV4DYP4JxHp7"	GUANAJUATO	CELAYA
{"tienda" : "Don Gu",               "cr" : "50DGU", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Los Portales",         "cr" : "50DML", "ubicacion" : "https://goo.gl/maps/fJGGVi4adNoUb42G9"	GUANAJUATO	CELAYA
{"tienda" : "Allende",              "cr" : "50GLL", "ubicacion" : "https://goo.gl/maps/hwfrVE2EWFRRLTSk9"	GUANAJUATO	CELAYA
{"tienda" : "El Romeral",           "cr" : "50L6F", "ubicacion" : "https://goo.gl/maps/X1krPBu33kBvA5HB9"	GUANAJUATO	CELAYA
{"tienda" : "Morelos",              "cr" : "50MQS", "ubicacion" : "https://goo.gl/maps/5yJFTw7EE4JkGgZT7"	GUANAJUATO	CELAYA
{"tienda" : "Tampico",              "cr" : "50PCZ", "ubicacion" : "https://goo.gl/maps/rSsuAR74ZAASNywH9"	GUANAJUATO	CELAYA
{"tienda" : "Manuel Doblado",       "cr" : "50QDM", "ubicacion" : "https://goo.gl/maps/s3KWpbjJURtzvZpu7"	GUANAJUATO	CELAYA
{"tienda" : "IMSS",                 "cr" : "50TSY", "ubicacion" : "https://goo.gl/maps/HuGJT5fV4G1jJuLu6"	GUANAJUATO	CELAYA
{"tienda" : "Carranza",             "cr" : "50VNX", "ubicacion" : "https://goo.gl/maps/ztZDs9vVRfUP8Q776"	GUANAJUATO	CELAYA
{"tienda" : "Malecon",              "cr" : "50EGV", "ubicacion" : "https://goo.gl/maps/tgynZgAqbcyiQXWr7"	GUANAJUATO	CELAYA
{"tienda" : "Antonio Plaza",        "cr" : "50N90", "ubicacion" : "https://goo.gl/maps/EoUX8cDdJwCdehdS6"	GUANAJUATO	CELAYA
{"tienda" : "Campestre",            "cr" : "50QCM", "ubicacion" : "https://goo.gl/maps/UouKJvAHiWotFVtUA"	GUANAJUATO	CELAYA
{"tienda" : "Matador Parres ",      "cr" : "56BTU", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Matador Crimapa",      "cr" : "56DAY", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Del Parque",           "cr" : "56DLP", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Matador Calesa",       "cr" : "56FAB",		GUANAJUATO	CELAYA
{"tienda" : "Hidalgo",              "cr" : "56JHI", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Boulevard",       "cr" : "56MBO", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Jimenez",         "cr" : "56MJI", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Mutualismo",      "cr" : "56QMU", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Lerma",           "cr" : "56QRL", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Oro",             "cr" : "56RRO", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Colon",                "cr" : "501EG",	https://maps.google.com/?cid=6745149778867835716	QUERETARO	COLON
{"tienda" : "Comonfort",            "cr" : "50DLJ",	https://goo.gl/maps/4n9U7KzQc2NvXxm77	GUANAJUATO	COMONFORT
{"tienda" : "Delher",               "cr" : "50OD7", "ubicacion" : "https://goo.gl/maps/877J6yHZ98Z6wUv96"	GUANAJUATO	COMONFORT
{"tienda" : "Vaqueros",             "cr" : "50X0M", "ubicacion" : "https://goo.gl/maps/U3DjFihG6Cu35q5p6"	GUANAJUATO	COMONFORT
{"tienda" : "Velazquez",            "cr" : "50HBK", "ubicacion" : "	GUANAJUATO	CORONEO
{"tienda" : "Don Jose",             "cr" : "56DJM", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "Matador San Agustin",  "cr" : "56KBO", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "Matador Alcatraz",     "cr" : "56PGD", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "Matador Pocitos",      "cr" : "56ZJP", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "Los Olvera",           "cr" : "502BT", "ubicacion" : "https://goo.gl/maps/nhVNsXSZwB51hLJd8"	QUERETARO	CORREGIDORA
{"tienda" : "Harvest",              "cr" : "50C3U", "ubicacion" : "https://goo.gl/maps/eiZojVc99Xvy9Av66"	QUERETARO	CORREGIDORA
{"tienda" : "Vallendar",            "cr" : "50CC4", "ubicacion" : "https://goo.gl/maps/Vv1YsvLnaYApsLGU9"	QUERETARO	CORREGIDORA
{"tienda" : "Chabacano",            "cr" : "50CHC", "ubicacion" : "https://goo.gl/maps/4ifV7te23mfLTdvk9"	QUERETARO	CORREGIDORA
{"tienda" : "Mision Mariana",       "cr" : "50IBO", "ubicacion" : "https://goo.gl/maps/JRgyugxrFSQRPZ9r9"	QUERETARO	CORREGIDORA
{"tienda" : "Plaza Colinas",        "cr" : "50M3N",	https://goo.gl/maps/XWMQrPFpkWnE682UA	QUERETARO	CORREGIDORA
{"tienda" : "Real del Bosque",      "cr" : "50OXY", "ubicacion" : "https://goo.gl/maps/V5hx3KayxCQ74Ygy9"	QUERETARO	CORREGIDORA
{"tienda" : "El Roble",             "cr" : "50QER", "ubicacion" : "https://goo.gl/maps/zUuGfsp846EJQRCL6"	QUERETARO	CORREGIDORA
{"tienda" : "Matador Cuauhtemoc WRF	56KYM		QUERETARO	CORREGIDORA
{"tienda" : "Pronto Cuauhtemoc",                      "cr" : "56MSU", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "Villas Campestre",                   "cr" : "50CFN", "ubicacion" : "https://goo.gl/maps/e52Yb2pzSSzSdhy19"	QUERETARO	CORREGIDORA
{"tienda" : "Colinas del Sur",                    "cr" : "50CVS", "ubicacion" : "https://goo.gl/maps/bJAXnBnZbMadv92N8"	QUERETARO	CORREGIDORA
{"tienda" : "Buenaventura",                   "cr" : "50HH1", "ubicacion" : "https://goo.gl/maps/r7z34ikydw57VY7g9"	QUERETARO	CORREGIDORA
{"tienda" : "Quetzales",                      "cr" : "50KXG", "ubicacion" : "https://goo.gl/maps/auUGiv9nFhzczEqJ7"	QUERETARO	CORREGIDORA
{"tienda" : "La Negreta	501T4	https://goo.gl/maps/Q7NzZpzAjxa9UELy9	QUERETARO	CORREGIDORA
{"tienda" : "Colonial",                   "cr" : "504ST", "ubicacion" : "https://goo.gl/maps/jFRUuGEsdWo3tPvD6"	QUERETARO	CORREGIDORA
{"tienda" : "Madererias",                     "cr" : "504V3", "ubicacion" : "https://goo.gl/maps/AbEqmkWDJe5Dnk7Z6"	QUERETARO	CORREGIDORA
{"tienda" : "San Cristobal",                      "cr" : "50F6U", "ubicacion" : "https://goo.gl/maps/2gQbB2HLw39Zapwt6"	QUERETARO	CORREGIDORA
{"tienda" : "Piramides",                      "cr" : "50PXZ", "ubicacion" : "https://goo.gl/maps/xnDcgS9xN1ceYzgG6"	QUERETARO	CORREGIDORA
{"tienda" : "Balvanera",                      "cr" : "50QBL", "ubicacion" : "https://goo.gl/maps/qveFw3jzNfauLZpp9"	QUERETARO	CORREGIDORA
{"tienda" : "Santa Barbara",                      "cr" : "50SBZ", "ubicacion" : "https://goo.gl/maps/QDqk6tM8cREpUyV1A"	QUERETARO	CORREGIDORA
{"tienda" : "Don Jose",                   "cr" : "50SU3", "ubicacion" : "https://goo.gl/maps/KQyxipKcbCihxeP18"	QUERETARO	CORREGIDORA
{"tienda" : "Los Angeles",                    "cr" : "50WAN", "ubicacion" : "https://goo.gl/maps/kj8qeeH35cXamnqRA"	QUERETARO	CORREGIDORA
{"tienda" : "San Mateo",                      "cr" : "502E9", "ubicacion" : "https://goo.gl/maps/WViAJDDECTiRGDqo7"	QUERETARO	CORREGIDORA
{"tienda" : "Villa de Ronda",                     "cr" : "504IG", "ubicacion" : "https://goo.gl/maps/TTmGxFeRmsVM7tnp7"	QUERETARO	CORREGIDORA
{"tienda" : "Sonora",                     "cr" : "5073A", "ubicacion" : "https://goo.gl/maps/uc1A2ca4usHgF1Et7"	QUERETARO	CORREGIDORA
{"tienda" : "Don Bosco",                      "cr" : "50DBS", "ubicacion" : "https://goo.gl/maps/YEvLufgdTv3bCzu58"	QUERETARO	CORREGIDORA
{"tienda" : "Santuarios",                     "cr" : "50EDW", "ubicacion" : "https://goo.gl/maps/A6EUNgZMngnUBs54A"	QUERETARO	CORREGIDORA
{"tienda" : "Santa Sofia",                    "cr" : "50IBR", "ubicacion" : "https://goo.gl/maps/uSB8Gmkyh5NrDmn89"	QUERETARO	CORREGIDORA
{"tienda" : "Gallegos",                   "cr" : "50KGJ", "ubicacion" : "https://goo.gl/maps/HujELwUhbNCdhuHZA"	QUERETARO	CORREGIDORA
{"tienda" : "Lienzo",                     "cr" : "50OS7", "ubicacion" : "https://goo.gl/maps/xW4z9B2zZRArZYnw5"	QUERETARO	CORREGIDORA
{"tienda" : "Puerta Real",                    "cr" : "50YGK", "ubicacion" : "https://goo.gl/maps/8iMupwcGkSMPLXfh6"	QUERETARO	CORREGIDORA
{"tienda" : "Paseos del Bosque",                      "cr" : "50Z0B", "ubicacion" : "https://goo.gl/maps/Ef5CVCuNA3uF9Cnu9"	QUERETARO	CORREGIDORA
{"tienda" : "Plaza Vida",                     "cr" : "5017W", "ubicacion" : "https://goo.gl/maps/nWpfD5WQiS34yEHd8"	QUERETARO	CORREGIDORA
{"tienda" : "Pioneros",                   "cr" : "50U76", "ubicacion" : "https://goo.gl/maps/joK81sBTjdFGrgdh8"	QUERETARO	CORREGIDORA
{"tienda" : "Suntuarios",                     "cr" : "56FOZ", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "Cortagas",                   "cr" : "50QXD", "ubicacion" : "https://goo.gl/maps/zTHYApAYwfHrDxjh9"	GUANAJUATO	CORTAZAR
{"tienda" : "Vicente Guerrero",                   "cr" : "507XU", "ubicacion" : "https://goo.gl/maps/Y1oSRZC8gVPCj796A"	GUANAJUATO	CORTAZAR
{"tienda" : "Aldama",                     "cr" : "50CSY", "ubicacion" : "https://goo.gl/maps/iJobihvvFMS8Bew48"	GUANAJUATO	CORTAZAR
{"tienda" : "Paseo Casuarinas",                   "cr" : "50GY7", "ubicacion" : "https://goo.gl/maps/VzHLnXneMRJLf6GUA"	GUANAJUATO	CORTAZAR
{"tienda" : "Paseo de la Juventud",                   "cr" : "50O2A", "ubicacion" : "https://goo.gl/maps/4G5gowkzHzG1B7fy8"	GUANAJUATO	CORTAZAR
{"tienda" : "El Carmen",                      "cr" : "50YFX", "ubicacion" : "https://goo.gl/maps/Put3QVtNWKLjyZFY8"	GUANAJUATO	CORTAZAR
{"tienda" : "Fortuna",                    "cr" : "50KSQ", "ubicacion" : "https://goo.gl/maps/nsWKeicb1TL8XtzW8"	GUANAJUATO	DOCTOR MORA
{"tienda" : "Montecarlo",                     "cr" : "508BV", "ubicacion" : "https://goo.gl/maps/fbiTuAWSEDJRHXHq5"	GUANAJUATO	DOLORES HIDALGO
{"tienda" : "Valentina",                      "cr" : "508GU", "ubicacion" : "https://goo.gl/maps/xoW2rUxRiwRTE1hPA"	GUANAJUATO	DOLORES HIDALGO
{"tienda" : "Del Ferrocarril",                    "cr" : "50BDB", "ubicacion" : "https://goo.gl/maps/UcTPRRtv4w7GGxcN6"	GUANAJUATO	DOLORES HIDALGO
{"tienda" : "Jose Alfredo",                   "cr" : "50CP1", "ubicacion" : "https://goo.gl/maps/LCq1ozK5Hoxdk2gu7"	GUANAJUATO	DOLORES HIDALGO
{"tienda" : "Morera",                     "cr" : "50HKL", "ubicacion" : "https://goo.gl/maps/JhZZatmj6UhNNtUy9"	GUANAJUATO	DOLORES HIDALGO
{"tienda" : "Heroes",                     "cr" : "50HKZ", "ubicacion" : "https://goo.gl/maps/G8h5KDFxDFoc8mV67"	GUANAJUATO	DOLORES HIDALGO
{"tienda" : "Independencia",                      "cr" : "50IYI", "ubicacion" : "https://goo.gl/maps/TC1W8xFnXJ8Bw2wF6"	GUANAJUATO	DOLORES HIDALGO
{"tienda" : "Bicentenario",                   "cr" : "50QRB", "ubicacion" : "https://goo.gl/maps/rCzp1AWPD7Lzm5ra7"	GUANAJUATO	DOLORES HIDALGO
{"tienda" : "Paseo Dolores",                      "cr" : "50RDP", "ubicacion" : "https://goo.gl/maps/PVkNv9dhCjk2dUUb6"	GUANAJUATO	DOLORES HIDALGO
{"tienda" : "Chiapas",                    "cr" : "50U2O", "ubicacion" : "https://goo.gl/maps/euZXrk81heSudns6A"	GUANAJUATO	DOLORES HIDALGO
{"tienda" : "La Pradera",                     "cr" : "50HWB", "ubicacion" : "https://goo.gl/maps/gAXMTsiJc1APAAZE8"	QUERETARO	EL MARQUES
{"tienda" : "El Alacran",                     "cr" : "50W27", "ubicacion" : "	QUERETARO	EL MARQUES
{"tienda" : "El Mirador",                     "cr" : "50CMN", "ubicacion" : "https://goo.gl/maps/no19B1rZYyYcxHn48"	QUERETARO	EL MARQUES
{"tienda" : "Ejercito",                   "cr" : "50X0U", "ubicacion" : "	QUERETARO	EL MARQUES
{"tienda" : "Catania",                    "cr" : "50JV1", "ubicacion" : "https://goo.gl/maps/PwhG8M476iZMFwe49"	QUERETARO	EL MARQUES
{"tienda" : "La Quebrada",                    "cr" : "501D7", "ubicacion" : "	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "San Antonio",                    "cr" : "50AJE", "ubicacion" : "	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Coroneo",                    "cr" : "50BWS", "ubicacion" : "	GUANAJUATO	CORONEO
{"tienda" : "Valencia",                   "cr" : "50BZI", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Glorieta Cel",                   "cr" : "50CFS", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Centro Celaya",                      "cr" : "50CYI", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "La Aldea",                   "cr" : "50DXE", "ubicacion" : "	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Mutualismo",                     "cr" : "50MHF", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mexico Japon",                   "cr" : "50MJA", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Malecon",                    "cr" : "50MQN", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Las Huertas",                    "cr" : "50NKI", "ubicacion" : "	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "Nuevo Leon",                     "cr" : "50NLQ", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Real del Conde",                     "cr" : "50OUI", "ubicacion" : "	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Plutarco",                   "cr" : "50PLW", "ubicacion" : "	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "San Patricio",                   "cr" : "50PZN", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Sarabia",                    "cr" : "50SBI", "ubicacion" : "	GUANAJUATO	VILLAGRAN
{"tienda" : "Ortega",                     "cr" : "50TGA", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Valle Gaor",                     "cr" : "50ULU", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "La Castellana",                      "cr" : "50W1F", "ubicacion" : "	GUANAJUATO	APASEO EL GRANDE
{"tienda" : "Quijay",                     "cr" : "50XAL", "ubicacion" : "	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "El Puente",                      "cr" : "50XMV", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Zona de Oro",                    "cr" : "50ZNE", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat.Rosas Moreno",                   "cr" : "56ACG", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Armillita",                     "cr" : "56ARM", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Allende",                    "cr" : "56GLL", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Glorieta Celaya",                    "cr" : "56GOK", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Insurgentes",                   "cr" : "56ING", "ubicacion" : "	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Mat. Irrigacio",                     "cr" : "56IRQ", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Juventud", "cr" : "56JTD",		GUANAJUATO	CORTAZAR
{"tienda" : "Mat. Valencia",                      "cr" : "56LCI", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. San Rafael", "cr" : "56MSF",		GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Mat. San Juanico", "cr" : "56MSJ",		GUANAJUATO	CELAYA
{"tienda" : "Sostenes Rocha",                     "cr" : "56OCU", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. L. Cardenas",                   "cr" : "56QLC", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. San Migueq",                    "cr" : "56QQM", "ubicacion" : "	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Mat. Residencial",                   "cr" : "56RDN", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Cortazar",                      "cr" : "	56RZ", "ubicacion" : "		GUANAJUATO	CORTAZAR
{"tienda" : "Mat. Canal", "cr" : "56SCN",		GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Div.del Norte",                      "cr" : "56TJI", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Venus",                     "cr" : "56VNS", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "16 de Septiembre",                   "cr" : "56XSE", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Mat. Zapata",                    "cr" : "56ZPT", "ubicacion" : "	GUANAJUATO	CELAYA
{"tienda" : "Villas del Refugio",                     "cr" : "507FK", "ubicacion" : "https://goo.gl/maps/c5A1b6gmZbmTH9g47"	QUERETARO	EL MARQUES
{"tienda" : "Parques",                    "cr" : "50Z3T", "ubicacion" : "https://goo.gl/maps/sb9TiCW8n4A2VWst7"	QUERETARO	EL MARQUES
{"tienda" : "Fray Junipero",                      "cr" : "50IXM", "ubicacion" : "https://goo.gl/maps/2pNJYCNxibQkt7gEA"	QUERETARO	EL MARQUES
{"tienda" : "La Pradera II",                      "cr" : "50NXQ", "ubicacion" : "https://goo.gl/maps/f8qQKg8585FRqgyh6"	QUERETARO	EL MARQUES
{"tienda" : "Finsa",                      "cr" : "50FQN", "ubicacion" : "https://goo.gl/maps/VKFGWEwZphVsAVfo6"	QUERETARO	EL MARQUES
{"tienda" : "El Colorado",                    "cr" : "50O0Y", "ubicacion" : "https://goo.gl/maps/Q4Lz8JXEwUWaiZnG8"	QUERETARO	EL MARQUES
{"tienda" : "Conin",                      "cr" : "50VXW", "ubicacion" : "https://goo.gl/maps/gZc3Tj7pC9xWCJpDA"	QUERETARO	EL MARQUES
{"tienda" : "Petr", "cr" : ",    ",               "cr" : "50XAF", "ubicacion" : "https://goo.gl/maps/zhLTSybMRHuzXX5K9"	QUERETARO	EL MARQUES
{"tienda" : "Petromex",                   "cr" : "50XAY", "ubicacion" : "https://goo.gl/maps/ExkugqXuN3Lx6GAy9"	QUERETARO	EL MARQUES
{"tienda" : "Libramiento Nte",                    "cr" : "50DVF", "ubicacion" : "https://goo.gl/maps/mmS7yxqdpgfgNENQ9"	QUERETARO	EL MARQUES
{"tienda" : "Libramiento Sur",                    "cr" : "50LJI", "ubicacion" : "https://goo.gl/maps/GeP2fKkH71grt791A"	QUERETARO	EL MARQUES
{"tienda" : "Almira",                     "cr" : "50Y1Z", "ubicacion" : "https://goo.gl/maps/AEjAny2J7sQYFAAw9"	QUERETARO	EL MARQUES
{"tienda" : "La Griega",                      "cr" : "50AIP", "ubicacion" : "https://goo.gl/maps/GcY77kNAotty8BGv7"	QUERETARO	EL MARQUES
{"tienda" : "Rinconada",                      "cr" : "50J95", "ubicacion" : "https://goo.gl/maps/JZSn52xQdnFMo8Hq7"	QUERETARO	EL MARQUES
{"tienda" : "Higuera",                    "cr" : "50F82", "ubicacion" : "https://goo.gl/maps/sUVd7hk1zyuSVo569"	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Hacienda La Cruz", "cr" : "50MLT",	https://goo.gl/maps/bi28PnymVPh2fEjM6	QUERETARO	EL MARQUES
{"tienda" : "Marques",                    "cr" : "50NWB", "ubicacion" : "https://goo.gl/maps/RapK3gmDZps7mXWp8"	QUERETARO	EL MARQUES
{"tienda" : "Saldarriaga",                    "cr" : "50SSW", "ubicacion" : "https://goo.gl/maps/3WMxYf9hb1RWEWzUA"	QUERETARO	EL MARQUES
{"tienda" : "Espuelas", "cr" : "50SXT",	https://goo.gl/maps/NDXDHLGajDkrBXMj9	QUERETARO	EL MARQUES
{"tienda" : "Paseo Piedad",                   "cr" : "50TEO", "ubicacion" : "https://goo.gl/maps/qLkHQKxUzgBedw78A"	QUERETARO	EL MARQUES
{"tienda" : "Paseo Marques",                      "cr" : "50UGE", "ubicacion" : "https://goo.gl/maps/grzEh3yLoun2xh9c7"	QUERETARO	EL MARQUES
{"tienda" : "Navajas",                    "cr" : "50W8X", "ubicacion" : "https://goo.gl/maps/89QaHp2gX4KAzUw46"	QUERETARO	EL MARQUES
{"tienda" : "Cavas", "cr" : "502NP",	https://goo.gl/maps/1JKAohRjbPMFR11m8	QUERETARO	EZEQUIEL MONTES
{"tienda" : "San Felix",                      "cr" : "50FLH", "ubicacion" : "https://goo.gl/maps/MTNQUKKzyjGm9L7w6"	QUERETARO	EZEQUIEL MONTES
{"tienda" : "Colegio Militar",                    "cr" : "50HWD", "ubicacion" : "https://goo.gl/maps/NjttxBWoYsKwNjbC7"	QUERETARO	EZEQUIEL MONTES
{"tienda" : "Venustiano Carranza",                    "cr" : "50JRF", "ubicacion" : "https://goo.gl/maps/PkuBEnPcvKuHLNyNA"	QUERETARO	EZEQUIEL MONTES
{"tienda" : "Montes",                     "cr" : "50YGD", "ubicacion" : "https://goo.gl/maps/GQaMfRiRKofE8edS7"	QUERETARO	EZEQUIEL MONTES
{"tienda" : "Bernal Centro",                      "cr" : "50FNU", "ubicacion" : "https://goo.gl/maps/MZcTywyuTxGF2Q9C8"	QUERETARO	EZEQUIEL MONTES
{"tienda" : "Mewalpe",                    "cr" : "506WB", "ubicacion" : "	QUERETARO	EZEQUIEL MONTES
{"tienda" : "La Ceja",                    "cr" : "500UX", "ubicacion" : "https://goo.gl/maps/xCQ3YqCP7JapXuYM7"	QUERETARO	HUIMILPAN
{"tienda" : "Oriente",                    "cr" : "507EG", "ubicacion" : "https://goo.gl/maps/8X2vwZzU8Mpo1JFLA"	QUERETARO	HUIMILPAN
{"tienda" : "Lagunillas", "cr" : "50MEX",	https://goo.gl/maps/G4SnWqbahGHexM1cA	QUERETARO	HUIMILPAN
{"tienda" : "PYME",                   "cr" : "50W0D", "ubicacion" : "	QUERETARO	HUIMILPAN
{"tienda" : "Mat. Panamerican",                   "cr" : "56QMP", "ubicacion" : "	QUERETARO	PEDRO ESCOBEDO
{"tienda" : "Pedro Escobedo QRI	507PU	https://goo.gl/maps/pMGRAMe935fHrj1y8	QUERETARO	PEDRO ESCOBEDO
{"tienda" : "Quintanares", "cr" : "50KWO",	https://goo.gl/maps/CqqYRrgj1nJhkSeC8	QUERETARO	PEDRO ESCOBEDO
{"tienda" : "El Sauz Mex", "cr" : "50MCO",	https://goo.gl/maps/1TPvZN5GMBDArF6C8	QUERETARO	PEDRO ESCOBEDO
{"tienda" : "El Rehilete",                    "cr" : "50J4R", "ubicacion" : "https://goo.gl/maps/7B3BPBfB6Wm9ukym8",	GUANAJUATO	VILLAGRAN
{"tienda" : "Polotitlan QRI	50G22	https://goo.gl/maps/72eRwa5of9ii6KSj9	MEXICO	POLOTITLAN
{"tienda" : "Encinillas",                     "cr" : "50ZWL", "ubicacion" : "https://goo.gl/maps/AsxxQT1wgA24r3xd9",	MEXICO	POLOTITLAN
{"tienda" : "Boulevares",                     "cr" : "50NSK", "ubicacion" : "https://goo.gl/maps/2GwwQiHc8RDXaFny7",	QUERETARO	QUERETARO
{"tienda" : "Nogalera",                   "cr" : "50ALE", "ubicacion" : "https://goo.gl/maps/DSMeShctjQuXRouy7",	QUERETARO	QUERETARO
{"tienda" : "Mat. Balaustrada",                   "cr" : "56WQV", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Bellavista",                     "cr" : "50QBV", "ubicacion" : "https://goo.gl/maps/PrD6Bjtd5eCFTgXf7",	QUERETARO	QUERETARO
{"tienda" : "Plaza Industrial",                   "cr" : "50F0P", "ubicacion" : "https://goo.gl/maps/4t9AChLJ8MUr2w8F9",	QUERETARO	QUERETARO
{"tienda" : "CNH",                    "cr" : "508RR", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Calesa",                     "cr" : "50QCA", "ubicacion" : "https://goo.gl/maps/LVwGK5mjjt4yz8428",	QUERETARO	QUERETARO
{"tienda" : "Callejon Zaragoza",                      "cr" : "50551", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Prol. Pino Suare",                   "cr" : "50ZUA", "ubicacion" : "https://goo.gl/maps/EV8yQizm18NTDYcR7",	QUERETARO	QUERETARO
{"tienda" : "Mat Morita",                     "cr" : "56MTY", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Bogasa",                    "cr" : "56WBO", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "La Cruz",                    "cr" : "56QES", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Vicario",                    "cr" : "501EH", "ubicacion" : "https://goo.gl/maps/Gj7ySMTG7d5guD8H6",	QUERETARO	QUERETARO
{"tienda" : "Liceo", "cr" : "501O6",	https://goo.gl/maps/4nL8j2imp741Mei19	QUERETARO	QUERETARO
{"tienda" : "Santo Domingo",                      "cr" : "50399", "ubicacion" : "https://goo.gl/maps/yNfGykPDyibT9zuV7",	QUERETARO	QUERETARO
{"tienda" : "San Francisco",                      "cr" : "50CSF", "ubicacion" : "https://goo.gl/maps/7BZY8rbWYQUULeFh8",	QUERETARO	QUERETARO
{"tienda" : "Ignacio Perez",                      "cr" : "50IGP", "ubicacion" : "https://goo.gl/maps/9zm9GrDp5UuXdR1a9",	QUERETARO	QUERETARO
{"tienda" : "Del 57",                     "cr" : "50JPJ", "ubicacion" : "https://goo.gl/maps/ziJ36pfk2yEkd78eA",	QUERETARO	QUERETARO
{"tienda" : "Angela Peralta",                     "cr" : "50N9A", "ubicacion" : "https://goo.gl/maps/H3MB3vwbnsDirCYk7",	QUERETARO	QUERETARO
{"tienda" : "Villa de Paris",                     "cr" : "50PNJ", "ubicacion" : "https://goo.gl/maps/uFaci9oeTnGTYDCT6",	QUERETARO	QUERETARO
{"tienda" : "UAQ",                    "cr" : "50UCW", "ubicacion" : "https://goo.gl/maps/SsxtfAu2ZoJAdrS48",	QUERETARO	QUERETARO
{"tienda" : "Santa Cecilia",                      "cr" : "50CIY", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Andador Madero",                     "cr" : "50UFE", "ubicacion" : "https://goo.gl/maps/ePKoVNjGQzbgxchj9",	QUERETARO	QUERETARO
{"tienda" : "Casa Colorada",                      "cr" : "50VFB", "ubicacion" : "https://goo.gl/maps/byDbraZhPr7zxgEx9",	QUERETARO	QUERETARO
{"tienda" : "Congregacion",                   "cr" : "50VWK", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "	50ZJP		QUERETARO	QUERETARO
{"tienda" : "Mat. II",                    "cr" : "56QAT", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Plaza Esperanza",                    "cr" : "507DE", "ubicacion" : "https://goo.gl/maps/jnYM3RN5f6judXkY6",	QUERETARO	QUERETARO
{"tienda" : "Najera",                     "cr" : "50HRF", "ubicacion" : "https://goo.gl/maps/rUtJZkihM9kFH2i99",	QUERETARO	QUERETARO
{"tienda" : "Mat.EzequielMonte", "cr" : "56WMM",		QUERETARO	QUERETARO
{"tienda" : "Mat. Madero", "cr" : "56WMT",		QUERETARO	QUERETARO
{"tienda" : "La Cruz",                    "cr" : "50QES", "ubicacion" : "https://goo.gl/maps/6abcxzQtR1ffKgsV6",	QUERETARO	QUERETARO
{"tienda" : "Centro",                     "cr" : "50TDM", "ubicacion" : "https://goo.gl/maps/28Rtf5jh4MGo3JqA6",	QUERETARO	QUERETARO
{"tienda" : "Plaza Zaragoza	50AH3	https://goo.gl/maps/g3VADN2KUshZDS7A8	QUERETARO	QUERETARO
{"tienda" : "Porron",                     "cr" : "50NV4", "ubicacion" : "https://goo.gl/maps/i5972eZAcTAWcEPS6",	QUERETARO	QUERETARO
{"tienda" : "Gomez Morin",                    "cr" : "50T9G", "ubicacion" : "https://goo.gl/maps/ovXkyWjmTDNFnYRh9",	QUERETARO	QUERETARO
{"tienda" : "Mancilla",                   "cr" : "50Y90", "ubicacion" : "https://goo.gl/maps/nsbLfmvUHpxpJRzv9",	QUERETARO	QUERETARO
{"tienda" : "Mercado Escobedo",                   "cr" : "50ZJE", "ubicacion" : "https://goo.gl/maps/5zEb9pbB6FrcWF5R9",	QUERETARO	QUERETARO
{"tienda" : "Ezequiel Montes II",                     "cr" : "56BIB", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. 5 de Mayo",                     "cr" : "56QMY", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Colon",                     "cr" : "56QWE", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Alameda",                   "cr" : "56WAM", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Matador 15 de Mayo",                     "cr" : "56XCR", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Carrizal",                   "cr" : "50CYL", "ubicacion" : "https://goo.gl/maps/igtn6Wrvny5jjH8u8",	QUERETARO	QUERETARO
{"tienda" : "Madero",                     "cr" : "50ELB", "ubicacion" : "https://goo.gl/maps/J5jqPVgmU4gsVMvb9",	QUERETARO	QUERETARO
{"tienda" : "Orvit",                      "cr" : "50AK5", "ubicacion" : "https://goo.gl/maps/eNcQYfibwAhQyxun9",	QUERETARO	QUERETARO
{"tienda" : "Cipreces",                   "cr" : "50CIC", "ubicacion" : "https://goo.gl/maps/aeYRvvq67vi37u4P8",	QUERETARO	QUERETARO
{"tienda" : "Montecristo",                    "cr" : "50W3F", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Estanza",                    "cr" : "500R4", "ubicacion" : "https://goo.gl/maps/6ykP95bCA2FQ3wvZA",	QUERETARO	QUERETARO
{"tienda" : "Valle del SalitreQFR	50OKY		QUERETARO	QUERETARO
{"tienda" : "Mat. Ecologico",                     "cr" : "56QME", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mayorazgo",                      "cr" : "50BN8", "ubicacion" : "https://goo.gl/maps/LeFDS93qYAkfrKiB8",	QUERETARO	QUERETARO
{"tienda" : "Cd. del Sol",                    "cr" : "50DNA", "ubicacion" : "https://goo.gl/maps/cxnGjGwDG65CuS9d7",	QUERETARO	QUERETARO
{"tienda" : "Anahuac",                    "cr" : "50LKP", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Valle del Sol",                      "cr" : "50HG1", "ubicacion" : "https://goo.gl/maps/JCeDkJdHuHWLfHf56",	QUERETARO	QUERETARO
{"tienda" : "Peñaflor",                   "cr" : "50O1J", "ubicacion" : "https://goo.gl/maps/kunfWmaiZHZ1hBgq5",	QUERETARO	QUERETARO
{"tienda" : "Microparque",                    "cr" : "50U79", "ubicacion" : "https://goo.gl/maps/GgbCRFdmFbRwqc21A",	QUERETARO	QUERETARO
{"tienda" : "Mat. Patines",                   "cr" : "56MQP", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Valle del Salitr", "cr" : "50AGZ",	https://goo.gl/maps/Zq6c2mhfP7FESdRA7	QUERETARO	QUERETARO
{"tienda" : "Liam",                   "cr" : "505T9", "ubicacion" : "https://goo.gl/maps/Uzm3vp9dqxKwBH2N8",	QUERETARO	QUERETARO
{"tienda" : "Pronto Laurel	56P2H		QUERETARO	QUERETARO
{"tienda" : "Mat. Laurel",                    "cr" : "56LEL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Constitucion",                   "cr" : "50OTN", "ubicacion" : "https://goo.gl/maps/pcL8orcmQEtCpgP69",	QUERETARO	QUERETARO
{"tienda" : "Las Campanas",                   "cr" : "50AUK", "ubicacion" : "https://goo.gl/maps/5J5PHG4svk8HhyBz9",	QUERETARO	QUERETARO
{"tienda" : "El Rosario",                     "cr" : "50N31", "ubicacion" : "https://goo.gl/maps/WfLresyxqm712yb19",	QUERETARO	QUERETARO
{"tienda" : "UPQ", "cr" : "7	htt",ps://goo.gl/maps/4FKmxQQwy6dQ7UvU7	QUERETARO	QUERETARO
{"tienda" : "Plaza Sur",                      "cr" : "50887", "ubicacion" : "https://goo.gl/maps/WqXmAuUuxHQyXsrD6",	QUERETARO	QUERETARO
{"tienda" : "Mat. Candiles",                      "cr" : "56MCA", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Palmares",                   "cr" : "50V41", "ubicacion" : "https://goo.gl/maps/gXG5GhoabhzZbHvZA",	QUERETARO	QUERETARO
{"tienda" : "Mat. La Tuna",                   "cr" : "56WLT", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Hacienda Pompani",                   "cr" : "505V0", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat.Santa Barbar",                   "cr" : "56STB", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Hercules",                   "cr" : "50HLS", "ubicacion" : "https://goo.gl/maps/zJ2nExTxxk7GFvvd7",	QUERETARO	QUERETARO
{"tienda" : "Mat. del Prado", "cr" : "56MDP",		QUERETARO	QUERETARO
{"tienda" : "Mat. Hercules II",                   "cr" : "56WCS", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Santa Teresa",                   "cr" : "5022Y", "ubicacion" : "https://goo.gl/maps/dbryuUYtizA65f1eA",	QUERETARO	QUERETARO
{"tienda" : "Camino Real",                    "cr" : "50QCR", "ubicacion" : "https://goo.gl/maps/h8AFAstUnHCUk2HEA",	QUERETARO	QUERETARO
{"tienda" : "La Loma",                    "cr" : "50QLM", "ubicacion" : "https://goo.gl/maps/Jky3BzbgqvHka2Fu5",	QUERETARO	QUERETARO
{"tienda" : "Zibata",                     "cr" : "50IE4", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Gaor II",                    "cr" : "50BQA", "ubicacion" : "https://goo.gl/maps/5aXZeVi4y8XAJx278",	QUERETARO	QUERETARO
{"tienda" : "Mat. Las America",                   "cr" : "56MLA", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Loma Bonita",                   "cr" : "56WCB", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. El Pomo", "cr" : "56WPM",		QUERETARO	QUERETARO
{"tienda" : "Popocatepetl II",                    "cr" : "56WVD", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Popocatepel",                   "cr" : "56POP", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mompani",                    "cr" : "50YBD", "ubicacion" : "https://goo.gl/maps/DnczvqXPbNQvR3DXA",	QUERETARO	QUERETARO
{"tienda" : "Josefa Vergara",                     "cr" : "506VE", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Don Rosco",                     "cr" : "56QDR", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Pie de La Cuesta",                   "cr" : "50QPD", "ubicacion" : "https://goo.gl/maps/G9GPp4qBs51WpA3aA",	QUERETARO	QUERETARO
{"tienda" : "Euripides",                      "cr" : "50EOM", "ubicacion" : "https://goo.gl/maps/rwMrjAZSvFzsBwTt7",	QUERETARO	QUERETARO
{"tienda" : "Los Robles",                     "cr" : "50QLR", "ubicacion" : "https://goo.gl/maps/zZUAJwBLjeFSQ9i99",	QUERETARO	QUERETARO
{"tienda" : "Merlot",                     "cr" : "508CD", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Los Vinedos",                    "cr" : "50CLI", "ubicacion" : "https://goo.gl/maps/wSdSDbSPMrdZK7DBA",	QUERETARO	QUERETARO
{"tienda" : "Luma",                   "cr" : "5020J", "ubicacion" : "https://goo.gl/maps/Gb6fPSQxVNEGtY1A8",	QUERETARO	QUERETARO
{"tienda" : "Milenium",                   "cr" : "56ABD", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Pronto Gaviota	56EY8		QUERETARO	QUERETARO
{"tienda" : "Gaviota",                    "cr" : "56FVY", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Pronto Senda Eterna",                    "cr" : "56IFT", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Brisas",                     "cr" : "56RMB", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Express SanCarlo",                   "cr" : "50SQS", "ubicacion" : "https://goo.gl/maps/DBfzQK7PAm6kyAMK7",	QUERETARO	QUERETARO
{"tienda" : "Tlaloc",                     "cr" : "50QTC", "ubicacion" : "https://goo.gl/maps/sBDMkXhEMFhZ7ouY7",	QUERETARO	QUERETARO
{"tienda" : "Viveica",                    "cr" : "50QBB", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Zaragoza",                   "cr" : "50OZG", "ubicacion" : "https://goo.gl/maps/VPGp4u8KLPAtDqdr7",	QUERETARO	QUERETARO
{"tienda" : "Palmas",                     "cr" : "50FGH", "ubicacion" : "https://goo.gl/maps/SSsh3WH7WokXN3Ht5",	QUERETARO	QUERETARO
{"tienda" : "Mat. El Chanfle",                    "cr" : "56QCH", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Check Point",                    "cr" : "50AD5", "ubicacion" : "https://goo.gl/maps/suhPDF7F1cu9kXto6",	QUERETARO	QUERETARO
{"tienda" : "Redical",                    "cr" : "50Q5V", "ubicacion" : "https://goo.gl/maps/hCVuYZnPjaPQWCPz9",	QUERETARO	QUERETARO
{"tienda" : "Granito",                    "cr" : "50CD9", "ubicacion" : "https://goo.gl/maps/jnPsGYddVW6tA99d8",	QUERETARO	QUERETARO
{"tienda" : "Abastos",                    "cr" : "50WMA", "ubicacion" : "https://goo.gl/maps/x92dkNA71DYSWtyb8",	QUERETARO	QUERETARO
{"tienda" : "Gas Sombrerete",                     "cr" : "50HGV", "ubicacion" : "https://goo.gl/maps/h5muCaisbGcJVaoJA",	QUERETARO	QUERETARO
{"tienda" : "Monte Sion",                     "cr" : "500E1", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Puerta Navarra",                     "cr" : "50Z5I", "ubicacion" : "https://goo.gl/maps/bbZrSL4hszW6SvVY8",	QUERETARO	QUERETARO
{"tienda" : "Sol Nino",                   "cr" : "50QSN", "ubicacion" : "https://goo.gl/maps/nFX2Krze3MmHntNm7",	QUERETARO	QUERETARO
{"tienda" : "Rancho San Pedro",                   "cr" : "50MLP", "ubicacion" : "https://goo.gl/maps/kmCiYRdkcrVk7faGA",	QUERETARO	QUERETARO
{"tienda" : "Alborada",                   "cr" : "50Q6B", "ubicacion" : "https://goo.gl/maps/T5ZRSfpq74PtJWjY8",	QUERETARO	QUERETARO
{"tienda" : "Grand Juriquilla",                   "cr" : "5008A", "ubicacion" : "https://goo.gl/maps/U2oEAzuKbCevzGdG6",	QUERETARO	QUERETARO
{"tienda" : "Real de la Loma", "cr" : "50VBM",	https://goo.gl/maps/HH3J4oUMC4L3w3RB9	QUERETARO	QUERETARO
{"tienda" : "Real del Marques",                   "cr" : "505CM", "ubicacion" : "https://goo.gl/maps/Tkak8DGAEbZKcNtF8",	QUERETARO	QUERETARO
{"tienda" : "Mat.LibramientoI",                   "cr" : "56MLD", "ubicacion" : "	QUERETARO	EL MARQUES
{"tienda" : "Las Flores",                     "cr" : "50PGJ", "ubicacion" : "https://goo.gl/maps/bcoEL9Pf1tBDbwXt7",	QUERETARO	QUERETARO
{"tienda" : "Argus",                      "cr" : "500GX", "ubicacion" : "https://goo.gl/maps/NyzKUcqTH78Kbb9Q8",	QUERETARO	QUERETARO
{"tienda" : "Metropolis",                     "cr" : "508HJ", "ubicacion" : "https://goo.gl/maps/v5d1uoVJJDnYnC2n9",	QUERETARO	QUERETARO
{"tienda" : "Terranova",                      "cr" : "50GDV", "ubicacion" : "https://goo.gl/maps/4Eas7KBBeFzoqptQ6",	QUERETARO	QUERETARO
{"tienda" : "LA HERRADURA",                   "cr" : "503Z6", "ubicacion" : "https://goo.gl/maps/JWaeJuginYgMhELv9",	QUERETARO	QUERETARO
{"tienda" : "Mat.Libramiento",                    "cr" : "	56MU", "ubicacion" : "		QUERETARO	EL MARQUES
{"tienda" : "Campo Real",                     "cr" : "500SF", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Quiwi",                      "cr" : "500IC", "ubicacion" : "https://goo.gl/maps/8FBiraFnus1R5MYp9",	QUERETARO	QUERETARO
{"tienda" : "Sur Poniente",                   "cr" : "50HIG", "ubicacion" : "https://goo.gl/maps/X1skEK43rsc4y2698",	QUERETARO	QUERETARO
{"tienda" : "Mat. IX",                    "cr" : "56MNU", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Deposito",                      "cr" : "56TAR", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Deposito",                   "cr" : "50TAR", "ubicacion" : "https://goo.gl/maps/TZFQb9ke5XgKHrkG8",	QUERETARO	QUERETARO
{"tienda" : "Vista 2000	501DZ	https://goo.gl/maps/b3dedyBAQzfGHY2B6	QUERETARO	QUERETARO
{"tienda" : "Plaza Sonterra",                     "cr" : "50LQ4", "ubicacion" : "https://goo.gl/maps/bRk2CT2jRuEr9rWy6",	QUERETARO	QUERETARO
{"tienda" : "Americas",                   "cr" : "50ASQ", "ubicacion" : "https://goo.gl/maps/oxQsuTrFHm7zY79p8",	QUERETARO	QUERETARO
{"tienda" : "Tlacote",                    "cr" : "502RB", "ubicacion" : "https://goo.gl/maps/PGvtwLsx2WVVu8zk7",	QUERETARO	QUERETARO
{"tienda" : "Uteq",                   "cr" : "50R3V", "ubicacion" : "https://goo.gl/maps/sNb5NBNTourAUqt9A",	QUERETARO	QUERETARO
{"tienda" : "Matador Mestizo",                    "cr" : "56ADN", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Gobernadores",                   "cr" : "56XMU", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Circuito Jardin",                    "cr" : "508YC", "ubicacion" : "https://goo.gl/maps/MMuAnHowFLY6SLhw5",	QUERETARO	QUERETARO
{"tienda" : "Enramada",                   "cr" : "50QRM", "ubicacion" : "https://goo.gl/maps/MDrYqxYboNbitDh89",	QUERETARO	QUERETARO
{"tienda" : "Mat. Alamos",                    "cr" : "56MQA", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "MatCorregidora I",                   "cr" : "56WRG", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Arboledas",                      "cr" : "50ABS", "ubicacion" : "https://goo.gl/maps/vZUoMjUjxTjMaPXHA",	QUERETARO	QUERETARO
{"tienda" : "6 de Diciembre",                     "cr" : "5027X", "ubicacion" : "https://goo.gl/maps/wdJ4C1ferBbe1y29A",	QUERETARO	QUERETARO
{"tienda" : "San Joaquin", "cr" : "56ZJN",		QUERETARO	QUERETARO
{"tienda" : "Abastos",                    "cr" : "56WMA", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. VII",                   "cr" : "56QDO", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Azteca",                     "cr" : "50AZK", "ubicacion" : "https://goo.gl/maps/kwU6yKaQ3bcHzw8o9",	QUERETARO	QUERETARO
{"tienda" : "Lazaro Cardenas",                    "cr" : "50HWX", "ubicacion" : "https://goo.gl/maps/oY2e5AEVZmVo1pzN7",	QUERETARO	QUERETARO
{"tienda" : "Terminal",                   "cr" : "50HVS", "ubicacion" : "https://goo.gl/maps/pLwV5yK3SZDEgDdYA",	QUERETARO	QUERETARO
{"tienda" : "TAQ",                    "cr" : "50JNX", "ubicacion" : "https://goo.gl/maps/YGQapistitxZ7MX68",	QUERETARO	QUERETARO
{"tienda" : "Mat. Terminal",                      "cr" : "56YTL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Macro",                      "cr" : "50KRM", "ubicacion" : "https://goo.gl/maps/Du8xEsgbBixNKRBN8",	QUERETARO	QUERETARO
{"tienda" : "Ind. Juarez",                    "cr" : "50IAY", "ubicacion" : "https://goo.gl/maps/CeC5CZxMzgoSuixG8",	QUERETARO	QUERETARO
{"tienda" : "Corregidora",                    "cr" : "50CRR", "ubicacion" : "https://goo.gl/maps/Q3y5FLGaRvjChRsq5",	QUERETARO	QUERETARO
{"tienda" : "Barrio Santiago",                    "cr" : "50C50", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Arcos",                      "cr" : "50ACR", "ubicacion" : "https://goo.gl/maps/8FsWC6ADp1Fkrmq29",	QUERETARO	QUERETARO
{"tienda" : "Carretas",                   "cr" : "50VTS", "ubicacion" : "https://goo.gl/maps/PokqPdPJmupkWDEv9",	QUERETARO	QUERETARO
{"tienda" : "Mexico",                     "cr" : "50HDJ", "ubicacion" : "https://goo.gl/maps/Y4oqsWStT5ZhybZ39",	QUERETARO	QUERETARO
{"tienda" : "Azucenas II",                    "cr" : "56NPY", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Azucenas",                   "cr" : "50AWZ", "ubicacion" : "https://goo.gl/maps/gurYLSrPGE9M8FmaA",	QUERETARO	QUERETARO
{"tienda" : "Gaor",                   "cr" : "50QCZ", "ubicacion" : "https://goo.gl/maps/zsqf8KxBiFS3KnzZA",	QUERETARO	QUERETARO
{"tienda" : "Tarahumaras",                    "cr" : "50THM", "ubicacion" : "https://goo.gl/maps/yhPY2yZLZ1SLxkPY6",	QUERETARO	QUERETARO
{"tienda" : "Zacapoaxtlas",                   "cr" : "50ZXT", "ubicacion" : "https://goo.gl/maps/ESvJwbFvYCQyrYfS9",	QUERETARO	QUERETARO
{"tienda" : "Azucenas II", "cr" : "50KIZ",		QUERETARO	QUERETARO
{"tienda" : "Mat. Cerrito",                   "cr" : "56CER", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Cimatario",                      "cr" : "50IRC", "ubicacion" : "https://goo.gl/maps/vmyVC9tCbyL6kzUU6",	QUERETARO	QUERETARO
{"tienda" : "Mat. Porron",                    "cr" : "56QPR", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Onate",                      "cr" : "50LJG", "ubicacion" : "https://goo.gl/maps/jX1k45RL4QC6RXQW6",	QUERETARO	QUERETARO
{"tienda" : "Oviedo",                     "cr" : "50U4U", "ubicacion" : "https://goo.gl/maps/gKauZztvMDG3HKc5A",	QUERETARO	QUERETARO
{"tienda" : "Del Bosque",                     "cr" : "50QBO", "ubicacion" : "https://goo.gl/maps/t6YGfqTQdbdipFpo6",	QUERETARO	QUERETARO
{"tienda" : "Cerro Blanco",                   "cr" : "50QCB", "ubicacion" : "https://goo.gl/maps/7BL8zXf8nbWsff4t6",	QUERETARO	QUERETARO
{"tienda" : "Centro Sur",                     "cr" : "50QCS", "ubicacion" : "https://goo.gl/maps/c9t63KLiCn7de9SL9",	QUERETARO	QUERETARO
{"tienda" : "Claustros",                      "cr" : "50UXN", "ubicacion" : "https://goo.gl/maps/GzyRjiNhAiWvEiqj8",	QUERETARO	QUERETARO
{"tienda" : "Avanta",                     "cr" : "504QV", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Catania 0",                      "cr" : "50Q2I", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Aeropuerto",                     "cr" : "50OIC", "ubicacion" : "https://goo.gl/maps/NAKsUHxmrSxaSqY16",	QUERETARO	QUERETARO
{"tienda" : "Laurel",                     "cr" : "50QLA", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Zimapan",                   "cr" : "56QMZ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Matador El Pomo	56GMF		QUERETARO	QUERETARO
{"tienda" : "Cuota",                      "cr" : "50QUO", "ubicacion" : "https://goo.gl/maps/pWRcs1isduDuyQw18",	QUERETARO	QUERETARO
{"tienda" : "Libramiento",                    "cr" : "50LBW", "ubicacion" : "https://goo.gl/maps/8B3EHwqtjK9HtGDt7",	QUERETARO	QUERETARO
{"tienda" : "Bacalar",                    "cr" : "50QBR", "ubicacion" : "https://goo.gl/maps/tyUxVRfDwCMKVGRq6",	QUERETARO	QUERETARO
{"tienda" : "Mat. Diamante",                      "cr" : "56QMD", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Arcos", "cr" : "56WAS",		QUERETARO	QUERETARO
{"tienda" : "Mat. Arboledas", "cr" : "56WLD",		QUERETARO	QUERETARO
{"tienda" : "UNIVERSO",                   "cr" : "50RHP", "ubicacion" : "https://goo.gl/maps/1jPskUS35y9hy2ae9",	QUERETARO	QUERETARO
{"tienda" : "Plaza Campanario",                   "cr" : "50PKM", "ubicacion" : "https://goo.gl/maps/staM1qoLgQH1HhrH7",	QUERETARO	QUERETARO
{"tienda" : "Viterbo",                    "cr" : "50HGJ", "ubicacion" : "https://goo.gl/maps/HmGSbQiSkwGvns15A",	QUERETARO	QUERETARO
{"tienda" : "Los Santos",                     "cr" : "50ZAC", "ubicacion" : "https://goo.gl/maps/YJNvJC5fC2LKhGQu6",	QUERETARO	QUERETARO
{"tienda" : "Capilla",                    "cr" : "50CAP", "ubicacion" : "https://goo.gl/maps/1mdVZMgq9G8Gk6Ln7",	QUERETARO	QUERETARO
{"tienda" : "Ensueno",                    "cr" : "50WEU", "ubicacion" : "https://goo.gl/maps/PxsYBKWAvGCzqP8y5",	QUERETARO	QUERETARO
{"tienda" : "Parque Quintana", "cr" : "50PYQ",	https://goo.gl/maps/LDVUBbWQGk4BA9mVA	QUERETARO	QUERETARO
{"tienda" : "Matador Valcoop",                    "cr" : "56BAE", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mat. Ghandi",                    "cr" : "56GHA", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "El Pocito",                      "cr" : "56JGE", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "LA PENA QRI	56KJZ		QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Presidencia",                    "cr" : "56LGX", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mat. Pedregoso",                     "cr" : "56MPQ", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Matador Loma Alta",                      "cr" : "56NIM", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Industrial Marquez",                     "cr" : "50TN0", "ubicacion" : "https://goo.gl/maps/S8J5tkBMqYPtBLmUA",	QUERETARO	QUERETARO
{"tienda" : "Matador Cacahuate	56RRN		QUERETARO	COLON
{"tienda" : "El Colorado",                    "cr" : "56TLD", "ubicacion" : "	QUERETARO	EL MARQUES
{"tienda" : "Magisterial",                    "cr" : "56TMM", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Jacal 11",                   "cr" : "50LJK", "ubicacion" : "https://goo.gl/maps/LzRn78UycKbN2phZA",	QUERETARO	QUERETARO
{"tienda" : "Mat. Juarez",                    "cr" : "56WJR", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Agencia San Juan",                   "cr" : "56WVA", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Villas Ejecutiva",                   "cr" : "50EJV", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Plaza La Noria",                     "cr" : "50BGU", "ubicacion" : "https://goo.gl/maps/pu7yvS55hQN8S4LN6",	QUERETARO	QUERETARO
{"tienda" : "Plaza Krystal",                      "cr" : "50YFS", "ubicacion" : "https://goo.gl/maps/Yk8n5c5gf6o3b93v7",	QUERETARO	QUERETARO
{"tienda" : "Mat.VillasCampestr",                     "cr" : "56VCA", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Baco",                      "cr" : "56BCO", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Ejido",                      "cr" : "50EJW", "ubicacion" : "https://goo.gl/maps/mygSyGUYwJcuy5Mx9",	QUERETARO	QUERETARO
{"tienda" : "Platon",                     "cr" : "50MDB", "ubicacion" : "https://goo.gl/maps/bWkjH7Qq5JVYaiveA",	QUERETARO	QUERETARO
{"tienda" : "Salitre",                    "cr" : "50QZS", "ubicacion" : "https://goo.gl/maps/SCHuSnu6qazK6HbTA",	QUERETARO	QUERETARO
{"tienda" : "El Sol",                     "cr" : "50YSX", "ubicacion" : "https://goo.gl/maps/GsP3UJfXPXYTbn9P8",	QUERETARO	QUERETARO
{"tienda" : "Mat. Tintero", "cr" : "56MQT",		QUERETARO	QUERETARO
{"tienda" : "Mat. V",                     "cr" : "56QMR", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Via Lactea",                     "cr" : "50TZT", "ubicacion" : "https://goo.gl/maps/52BSBjkiK2LA5hVv7",	QUERETARO	QUERETARO
{"tienda" : "Mat. Estrella",                      "cr" : "56WQE", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Pasteur",                    "cr" : "50PTK", "ubicacion" : "https://goo.gl/maps/etmfa6Up2KSjWAqo9",	QUERETARO	QUERETARO
{"tienda" : "Panteon",                    "cr" : "50WTN", "ubicacion" : "https://goo.gl/maps/SkYbQdfCrwkTKfQBA",	QUERETARO	QUERETARO
{"tienda" : "SANTA ANA",                      "cr" : "50CCS", "ubicacion" : "https://goo.gl/maps/4g9oEEpAZAyhaMxUA",	QUERETARO	QUERETARO
{"tienda" : "Mat. Pipila",                    "cr" : "56QPI", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Casa Blanca",                    "cr" : "50BBI", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. La Bota",                   "cr" : "56WMB", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Cerro de la Silla",                      "cr" : "50SZJ", "ubicacion" : "https://goo.gl/maps/LUPi55ZhXnMNW5a26",	QUERETARO	QUERETARO
{"tienda" : "San Diego",                      "cr" : "50ZDG", "ubicacion" : "https://goo.gl/maps/LA4nUUL8a87h7DpcA",	QUERETARO	QUERETARO
{"tienda" : "5 de Febrero",                   "cr" : "50OCF", "ubicacion" : "https://goo.gl/maps/t5Dav1ufFQpBC5f58",	QUERETARO	QUERETARO
{"tienda" : "Sonterra",                   "cr" : "50XKT", "ubicacion" : "https://goo.gl/maps/pCcEVwqhqaJbbtx4A",	QUERETARO	QUERETARO
{"tienda" : "Mat. Carrillo",                      "cr" : "56WML", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Socavon",                    "cr" : "50ZKV", "ubicacion" : "https://goo.gl/maps/fr1u384eFJ3eg6UJA",	QUERETARO	QUERETARO
{"tienda" : "Azucenas II",                    "cr" : "50AJG", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Obrera",                     "cr" : "50OWB", "ubicacion" : "https://goo.gl/maps/7t8c7aYrk2gDTz9z6",	QUERETARO	QUERETARO
{"tienda" : "Geoplazas",                      "cr" : "50PGX", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "La Montana",                     "cr" : "50WMF", "ubicacion" : "https://goo.gl/maps/TMVPrPsP1o8SQbnX6",	QUERETARO	QUERETARO
{"tienda" : "Mat. Cristal",                   "cr" : "56WRL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Tapatia",                   "cr" : "56QTA", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Pozos",                      "cr" : "50PZZ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Hacienda",                   "cr" : "56MZH", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Hacienda",                   "cr" : "50HDA", "ubicacion" : "https://goo.gl/maps/BCYjrwjCfXCBSfDo8",	QUERETARO	QUERETARO
{"tienda" : "Circunvalacion",                     "cr" : "50CIR", "ubicacion" : "https://goo.gl/maps/keCFnVqvmgRP2TpVA",	QUERETARO	QUERETARO
{"tienda" : "De la Estrella",                     "cr" : "50IF4", "ubicacion" : "https://goo.gl/maps/VAdXcc9UGo5Apo7c7",	QUERETARO	QUERETARO
{"tienda" : "Lluvia ",                    "cr" : "50QLU", "ubicacion" : "https://goo.gl/maps/rmhMuVqbH2gDTMxF9",	QUERETARO	QUERETARO
{"tienda" : "ESTACION ANTEA",                     "cr" : "50GIP", "ubicacion" : "https://goo.gl/maps/tteXqDgMxmH8fMAeA",	QUERETARO	QUERETARO
{"tienda" : "Central Park",                   "cr" : "50MKE", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Camelinas",                "cr" : "50KFU",	https://goo.gl/maps/3nTx2wbUEx9TPzt89	QUERETARO	QUERETARO
{"tienda" : "Pronto Pinar",                   "cr" : "56QCJ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Jurica",                    "cr" : "56QRJ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Shopping Center",                    "cr" : "50NEV", "ubicacion" : "https://goo.gl/maps/a3R7XfNMKxmzy5827",	QUERETARO	QUERETARO
{"tienda" : "Universitario",                      "cr" : "50UVR", "ubicacion" : "https://goo.gl/maps/d2Lin7oCFbZCeMay6",	QUERETARO	QUERETARO
{"tienda" : "Mat. Capilla",                   "cr" : "56QCP", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Aragon",                     "cr" : "50JG5", "ubicacion" : "https://goo.gl/maps/wauijsvHqMPrxU699",	QUERETARO	QUERETARO
{"tienda" : "Nuevo Continente",                   "cr" : "50VR2", "ubicacion" : "https://goo.gl/maps/DK9JNwEy2whu49bz6",	QUERETARO	QUERETARO
{"tienda" : "El Tanque",                      "cr" : "50O66", "ubicacion" : "https://goo.gl/maps/LAo8ykWS4JP1DAYv8",	QUERETARO	QUERETARO
{"tienda" : "Rio",                    "cr" : "56RNB", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Viterbo",                    "cr" : "50VKJ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Rivapalacio", "cr" : "56QRV",		QUERETARO	QUERETARO
{"tienda" : "La Joya",                    "cr" : "50JUD", "ubicacion" : "https://goo.gl/maps/CcxWoGg8wh3siCi29",	QUERETARO	QUERETARO
{"tienda" : "La Loma II",                     "cr" : "50LLD", "ubicacion" : "https://goo.gl/maps/gssDRgxE22TeS5oK9",	QUERETARO	QUERETARO
{"tienda" : "Ubika",                      "cr" : "504Q3", "ubicacion" : "https://goo.gl/maps/NcGr5bhxoJvGcRsa8",	QUERETARO	QUERETARO
{"tienda" : "Mat. III",                   "cr" : "56QAR", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Ecologico",                      "cr" : "50FNZ", "ubicacion" : "https://goo.gl/maps/JkFpKDzwg3o3CRrG6",	QUERETARO	QUERETARO
{"tienda" : "Hidalgo",                    "cr" : "50OHG", "ubicacion" : "https://goo.gl/maps/MERoKdTDzw1nfENY7",	QUERETARO	QUERETARO
{"tienda" : "Galindas",                   "cr" : "50MJY", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Las Hadas",                      "cr" : "50HDS", "ubicacion" : "https://goo.gl/maps/aHQYnRP117vv6t2v5",	QUERETARO	QUERETARO
{"tienda" : "Constituyentes",                     "cr" : "50TUY", "ubicacion" : "https://goo.gl/maps/yWyDQStBcd8qzYMq8",	QUERETARO	QUERETARO
{"tienda" : "Candiles",                   "cr" : "50CDS", "ubicacion" : "https://goo.gl/maps/AisDCkLbNT8GJZjp8",	QUERETARO	QUERETARO
{"tienda" : "Mat. Plazas",                    "cr" : "56WQP", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Plazas",                     "cr" : "50PZS", "ubicacion" : "https://goo.gl/maps/JaPFdGXLx1f9M6948",	QUERETARO	QUERETARO
{"tienda" : "Santa Anita",                    "cr" : "50QSA", "ubicacion" : "https://goo.gl/maps/TexWHkwkBf5SyBLs5",	QUERETARO	QUERETARO
{"tienda" : "Mat. Topacio",                   "cr" : "56WTO", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Acueducto",                      "cr" : "50HJL", "ubicacion" : "https://goo.gl/maps/UM97HrZMNbXXM3gz6",	QUERETARO	QUERETARO
{"tienda" : "Loma Dorada",                    "cr" : "50LDQ", "ubicacion" : "https://goo.gl/maps/kAU3pzvZUJpUA4Bt7",	QUERETARO	QUERETARO
{"tienda" : "Amanecer",                   "cr" : "50MJD", "ubicacion" : "https://goo.gl/maps/YBasPgQsLvZmSAkM6",	QUERETARO	QUERETARO
{"tienda" : "Moises Solana",                      "cr" : "50OMS", "ubicacion" : "https://goo.gl/maps/8VdyamZMfs9ZbC7u9",	QUERETARO	QUERETARO
{"tienda" : "Pronto Mi General	56NT6		QUERETARO	QUERETARO
{"tienda" : "Mat. La Base",                   "cr" : "56QBA", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Mi General",                    "cr" : "56QMG", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat.L.de CasaBca",                   "cr" : "56WBC", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Papanoa",                    "cr" : "50PAW", "ubicacion" : "https://goo.gl/maps/wrkjxK7jSPB5H51p7",	QUERETARO	QUERETARO
{"tienda" : "Mat. Belen",                     "cr" : "56QMB", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "El Refugio",                     "cr" : "50YNJ", "ubicacion" : "https://goo.gl/maps/NaAiTqoX7WZpRjBRA",	QUERETARO	QUERETARO
{"tienda" : "La Cima",                    "cr" : "50HPP", "ubicacion" : "https://goo.gl/maps/tptb3GX4JryLNvdw8",	QUERETARO	QUERETARO
{"tienda" : "Galeria",                    "cr" : "50DVG", "ubicacion" : "https://goo.gl/maps/A6ZgDCGDRGdbmzxq6",	QUERETARO	QUERETARO
{"tienda" : "Fundadores",                     "cr" : "50OFS", "ubicacion" : "https://goo.gl/maps/oXNmPotA2sNKJcJPA",	QUERETARO	QUERETARO
{"tienda" : "Mat. Molinos",                   "cr" : "56WOO", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "El Jacal",                   "cr" : "50OJL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Las Torres",                     "cr" : "50QLT", "ubicacion" : "https://goo.gl/maps/n279bMegfWR1xtg49",	QUERETARO	QUERETARO
{"tienda" : "Mat. La Griega",                     "cr" : "56GJL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "La Laja",                    "cr" : "50LLJ", "ubicacion" : "https://goo.gl/maps/qEFpgqCD6Z72Aj968",	QUERETARO	QUERETARO
{"tienda" : "Mansiones",                      "cr" : "50QSI", "ubicacion" : "https://goo.gl/maps/LB2cH1GqdWZqp4Vp9",	QUERETARO	QUERETARO
{"tienda" : "Huertos",                    "cr" : "50A7J", "ubicacion" : "https://goo.gl/maps/oTNVCERabbQitwaL9",	QUERETARO	QUERETARO
{"tienda" : "Palmiras",                   "cr" : "50VQP", "ubicacion" : "https://goo.gl/maps/zGoNZZZG2Xw5WCEp9",	QUERETARO	QUERETARO
{"tienda" : "Mat. Ninos Heroe",           "cr" : "56QMN", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Ejido",                 "cr" : "56MEJ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Eloy Cavazos",               "cr" : "50ZL2", "ubicacion" : "https://goo.gl/maps/ySq3uwvvnPJt2sfK9",	QUERETARO	QUERETARO
{"tienda" : "Mat. Eloy Cavazo",           "cr" : "56MEL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Pathe",                 "cr" : "56MJR", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Seminario",                  "cr" : "56QSE", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Belen",                      "cr" : "50LBN", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Betina",                     "cr" : "50BIT", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Linda Vista",           "cr" : "56MLV", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "La Cuesta",                  "cr" : "56OUM", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Platon",                "cr" : "56QPN", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Plateros",              "cr" : "56WPL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Colinas II",                 "cr" : "50QCD", "ubicacion" : "https://goo.gl/maps/Bm3Sa23pQyGXmVrb9",	QUERETARO	QUERETARO
{"tienda" : "Luis Vega",                  "cr" : "502A9", "ubicacion" : "https://goo.gl/maps/nK1m31SP3Squ6Rou8",	QUERETARO	QUERETARO
{"tienda" : "De Letran",                  "cr" : "50DTV", "ubicacion" : "https://goo.gl/maps/tDBjRuQsrF325gyJ6",	QUERETARO	QUERETARO
{"tienda" : "Matador Zimapan",            "cr" : "56ARR",		QUERETARO	QUERETARO
{"tienda" : "Matador Gas Nat",            "cr" : "56SUG", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Penalty",                    "cr" : "50PEY", "ubicacion" : "https://goo.gl/maps/PwDLaUwEXiwpHsrZ9",	QUERETARO	QUERETARO
{"tienda" : "Mat. Presidentes",           "cr" : "56MPE", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Pueblito",              "cr" : "56MPU", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat.H.Col.Milita",           "cr" : "56QPT", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Plaza Mompani",              "cr" : "50LBZ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Villas de la Piedad",        "cr" : "507JA", "ubicacion" : "https://goo.gl/maps/TE8hXXAyNLMbMQfv9",	QUERETARO	QUERETARO
{"tienda" : "Colinas De La Piedad",       "cr" : "50C57", "ubicacion" : "https://goo.gl/maps/qU7jX1LDNTEYaMJn8",	QUERETARO	QUERETARO
{"tienda" : "Mat. Don Jorge",             "cr" : "56WDJ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Puerto",                "cr" : "56QPO", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "El Puente",                  "cr" : "56GEG", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Quintas",                    "cr" : "50QI",  "ubicacion" : "	https://goo.gl/maps/koi97CWkXZfc9CSa7	QUERETARO	QUERETARO
{"tienda" : "Mat. Esperanza",             "cr" : "56WEE", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Reforma",               "cr" : "56WRF", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Agraria",                    "cr" : "50NQE", "ubicacion" : "https://goo.gl/maps/M6BzaXZTdRmWAGiS7",	QUERETARO	QUERETARO
{"tienda" : "Tejeda",                     "cr" : "50TJE",		QUERETARO	QUERETARO
{"tienda" : "Plaza Tejeda",               "cr" : "50JDA", "ubicacion" : "https://goo.gl/maps/LqpdthwW6vT6rnD8A",	QUERETARO	QUERETARO
{"tienda" : "San Angel",                  "cr" : "50SGI", "ubicacion" : "https://goo.gl/maps/tWN8xtNdzVJm7Ss38",	QUERETARO	QUERETARO
{"tienda" : "Tec de Monterrey",           "cr" : "50TGC",		QUERETARO	QUERETARO
{"tienda" : "Cristal",                    "cr" : "50RTL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "San Roque",                  "cr" : "50OQE", "ubicacion" : "https://goo.gl/maps/X7AVuY13qeZ98Sfq8",	QUERETARO	QUERETARO
{"tienda" : "Girasoles",                  "cr" : "50GIZ", "ubicacion" : "https://goo.gl/maps/DV4oWCXzZJPPJLDw7",	QUERETARO	QUERETARO
{"tienda" : "Montesacro",                 "cr" : "5061K", "ubicacion" : "https://goo.gl/maps/cmgrv8hrVWu1bQZ66",	QUERETARO	QUERETARO
{"tienda" : "Amargura",                   "cr" : "50QAG", "ubicacion" : "https://goo.gl/maps/APTBC1Fj7RdfHZGo7",	QUERETARO	QUERETARO
{"tienda" : "Penuelas II",                "cr" : "56PGJ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Villas deSantiag",           "cr" : "56VPX", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Tapiceros",                  "cr" : "50VG0", "ubicacion" : "https://goo.gl/maps/6e8A9ZLimo7kEMqE7",	QUERETARO	QUERETARO
{"tienda" : "Amatista",                   "cr" : "50F50", "ubicacion" : "https://goo.gl/maps/9s7PagmUzjHhgyzv6",	QUERETARO	QUERETARO
{"tienda" : "Mat. Betina",                "cr" : "56QBE", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. San Roque",             "cr" : "56WSR", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Parador Turquesa",           "cr" : "50IXR", "ubicacion" : "https://goo.gl/maps/bjSooLYZ53j7LiUYA",	QUERETARO	QUERETARO
{"tienda" : "Mat. Centro",                "cr"	56TDM		QUERETARO	QUERETARO
{"tienda" : "Mat.CorregidoraI",           "cr" : "56WMX", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Universidad",                "cr" : "50VER", "ubicacion" : "https://goo.gl/maps/MCBHAj6nM1TSYXqYA",	QUERETARO	QUERETARO
{"tienda" : "Alameda II",                 "cr" : "50AWD", "ubicacion" : "https://goo.gl/maps/eAoYzkHqBjziKEWA9",	QUERETARO	QUERETARO
{"tienda" : "Mat. IV",                    "cr" : "56QMM", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Zaragoza",              "cr" : "56QZA", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Palmas",                "cr" : "56WPA", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Tecnologico",                "cr" : "50LOG", "ubicacion" : "https://goo.gl/maps/6GDCC7qQhvwLDZYN8",	QUERETARO	QUERETARO
{"tienda" : "Garambullo",                 "cr" : "50GRM", "ubicacion" : "https://goo.gl/maps/gZJQsNPJ3PNWt5qU6",	QUERETARO	QUERETARO
{"tienda" : "Kiva",                       "cr" : "508P2", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Glorieta Juriquilla",        "cr" : "50WKF", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Satelite",                   "cr" : "50OSA", "ubicacion" : "https://goo.gl/maps/VFNupAKUjBLfmKeWA",	QUERETARO	QUERETARO
{"tienda" : "Mat. La Luz",                "cr" : "56QML", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Tambor",                "cr" : "56QTM", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Cazador Capilla",       "cr" : "56WLL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Picapiedra",            "cr" : "56WPP", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Cascada",                    "cr" : "50G7F", "ubicacion" : "https://goo.gl/maps/QYo2WMNgHpFzhzrh6",	QUERETARO	QUERETARO
{"tienda" : "Rio",                        "cr" : "50RXH", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Satelite",              "cr" : "56WTT", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "M. La Joya",                 "cr" : "56MJY", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Covarrubias",                "cr" : "50LW5", "ubicacion" : "https://goo.gl/maps/TCKM5YPuJHbCFx1r9",	QUERETARO	QUERETARO
{"tienda" : "Epigmenio",                  "cr" : "50EPG", "ubicacion" : "https://goo.gl/maps/Gzn46ToiEMSDgzwx7",	QUERETARO	QUERETARO
{"tienda" : "Villas del Tec",             "cr" : "50VTB", "ubicacion" : "https://goo.gl/maps/kq4QEBnxo9J47SbE9",	QUERETARO	QUERETARO
{"tienda" : "Mat. Monterrey",             "cr" : "56MMY", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Espanola",              "cr" : "56WEL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Menchaca",              "cr" : "56WCC", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Monte Blanco",               "cr" : "50NZB", "ubicacion" : "https://goo.gl/maps/heP6PqZQeMBogFzSA",	QUERETARO	QUERETARO
{"tienda" : "Mat. Huimilpan",             "cr" : "56WAG", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Huimilpan",                  "cr" : "50OHM", "ubicacion" : "https://goo.gl/maps/5uUGn6VinD2bwHun6",	QUERETARO	QUERETARO
{"tienda" : "Milenio",                    "cr" : "50LNI", "ubicacion" : "https://goo.gl/maps/1N1nPQVAnKN2	QUER",ETARO	QUERETARO
{"tienda" : "Villagran",                  "cr" : "50RD1", "ubicacion" : "https://goo.gl/maps/GSov6vQfsmpCfZwA9",	GUANAJUATO	VILLAGRAN
{"tienda" : "2 de Febrero",               "cr" : "50BTI", "ubicacion" : "https://goo.gl/maps/AScJn1j4b5fVBocU7",	GUANAJUATO	SALVATIERRA
{"tienda" : "Azahares",                   "cr" : "50HZK", "ubicacion" : "https://goo.gl/maps/pEYzphhBQvxnzB7u9",	GUANAJUATO	SALVATIERRA
{"tienda" : "MatConstituyente",           "cr" : "51WCO", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "San Andres",                 "cr" : "50MNJ",	https://goo.gl/maps/uhuBhdg5CLFxGjNH9	GUANAJUATO	SALVATIERRA
{"tienda" : "Plaza del Carmen",           "cr" : "50UPC", "ubicacion" : "https://goo.gl/maps/Mzb4qgHjk2wp4LH99",	GUANAJUATO	SALVATIERRA
{"tienda" : "Pio",                        "cr" : "502GF", "ubicacion" : "https://goo.gl/maps/YD36XjGEZB5uRGLr5",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "Mat. Constituyentes",        "cr" : "56WCO", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Dr Mora",                    "cr" : "50MRQ", "ubicacion" : "https://goo.gl/maps/8mpaTBQJxQrCw5Ai6",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "Puerto Mexico",              "cr" : "50OP7", "ubicacion" : "https://goo.gl/maps/o18T2FSj5sJjCgUo7",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "La Purisima",                "cr" : "501PK", "ubicacion" : "https://goo.gl/maps/Bnty9hJjVWD6b3vr8",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "Villa Corzo",                "cr" : "507TR", "ubicacion" : "https://goo.gl/maps/tCTSbzRCyCTE3GgX6",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "La Huerta",                  "cr" : "508JI", "ubicacion" : "https://goo.gl/maps/1AmiAPzAc1EWSjbPA",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "Iturbide",                   "cr" : "50IRB", "ubicacion" : "https://goo.gl/maps/CN4pS3CibpEdum5X7",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "La Cinta",                   "cr" : "50NZI", "ubicacion" : "https://goo.gl/maps/fWmzc5VY78QsPDtv8",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "Presidencia",                "cr" : "50NZR", "ubicacion" : "https://goo.gl/maps/ERynzEwGiPGboiXa8",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "Lomas Taurinas",             "cr" : "50Q57", "ubicacion" : "https://goo.gl/maps/Sm8EXQYMT65ubBzj7",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "Mat. La Cabana",             "cr" : "56MCB",		QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mission Hills",              "cr" : "50YIE", "ubicacion" : "https://goo.gl/maps/paor8yYkc9wcuCkV6",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "Revillagigedo",              "cr" : "50Z2N", "ubicacion" : "https://goo.gl/maps/mYMzQZw5zt8JF58a8",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "QUIJAY",                     "cr" : "50ZDQ", "ubicacion" : "https://goo.gl/maps/JjfushhtVHu78GEv6",	GUANAJUATO	SAN JOSE ITURBIDE
{"tienda" : "Mat. Loma Dorada",           "cr" : "56WMD", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Chapultepec",                "cr" : "50CHQ", "ubicacion" : "https://goo.gl/maps/KeRSgxQA3Vw5Qhs97",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Aramil",                     "cr" : "50H8K", "ubicacion" : "https://goo.gl/maps/AdhvyqnmP7He9NJs9",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "San Rafael",                 "cr" : "50HPF", "ubicacion" : "https://goo.gl/maps/2sZM63p8hRRjuabd6",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Los Patos",                  "cr" : "50MLR",	https://goo.gl/maps/sq2VxwCMWsteQnb86	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Fernando Diaz",              "cr" : "50MMS",	https://goo.gl/maps/rJqf8mNHiCz5y6wn7	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Rio San Juan",               "cr" : "50N3S", "ubicacion" : "https://goo.gl/maps/JDw3DM12EXtkS5P86",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mat. Fiesta",                "cr" : "56MFI",		QUERETARO	QUERETARO
{"tienda" : "Central",                    "cr" : "50QCE", "ubicacion" : "https://goo.gl/maps/5fQwjxfhst5fYL1QA",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Cantera",                    "cr" : "50QCN", "ubicacion" : "https://goo.gl/maps/YmesZFPXWqxiQ7Da7",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mat. Triangulo",             "cr" : "56TRI",		QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mat. Morelos",               "cr" : "56UMM",		QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Moctezuma",                  "cr" : "50QMC", "ubicacion" : "https://goo.gl/maps/zkPd2ShfS7nXXw4T8",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Romero",                     "cr" : "50REW", "ubicacion" : "https://goo.gl/maps/6RvkCY7sE2QmWDDP9",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Quintana",                   "cr" : "50QAN", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Quintana",                      "cr" : "56MKI", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "20 de Noviembre",                    "cr" : "50VEY", "ubicacion" : "https://goo.gl/maps/sNeKd5DP4LtnYnQH8",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Plaza Universidad",                      "cr" : "50YBC", "ubicacion" : "https://goo.gl/maps/uPMxSjstniquzSAw5",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "El Siete",                   "cr" : "50I9Q", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Fatima",                     "cr" : "50J5F", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Caseta",                     "cr" : "509HT", "ubicacion" : "https://goo.gl/maps/3Cp4aBYPdkpMp6kq8",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Banthi",                     "cr" : "504ME", "ubicacion" : "https://goo.gl/maps/zTKgEr79mKazrLieA",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mat. Jacal",                     "cr" : "56JCL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Palmillas",                      "cr" : "50IYY", "ubicacion" : "https://goo.gl/maps/ytLtEXCM9SSRQ43P8",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Palomas",                    "cr" : "50GP0", "ubicacion" : "https://goo.gl/maps/PcKkKhZfkAcTy3YS7",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mat. Pasteur",                   "cr" : "51WMP", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Pasteur",                   "cr" : "56WMP", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Pasteur II",            "cr" : "56WPS",		QUERETARO	QUERETARO
{"tienda" : "Imbera",                     "cr" : "50YVQ", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Jacarandas",                     "cr" : "50JKR", "ubicacion" : "https://goo.gl/maps/34FqxDi67eSL9R6VA",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Churubusco",                     "cr" : "50QHK", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Sagrado Corazon",            "cr" : "50MHU",	https://goo.gl/maps/Xe2kDPRjMxkMs17r8	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "CAPRICHO",                   "cr" : "50QUG", "ubicacion" : "https://goo.gl/maps/R3YZRC9R8f6CcC3m9",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Eloy Cavazos",                   "cr" : "50KVZ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "San Juan",                   "cr" : "50SJQ", "ubicacion" : "https://goo.gl/maps/Zwaia4gWSYX3zkMM8",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "San Gil",                    "cr" : "50MGG", "ubicacion" : "https://goo.gl/maps/32AcTXWgoGzWNDVcA",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "La Llave",                   "cr" : "5098G", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Agua Rica",                      "cr" : "5084V", "ubicacion" : "https://goo.gl/maps/tvra6ps6cTtjS4Ej9",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Porvenir",                   "cr" : "5094Y", "ubicacion" : "https://goo.gl/maps/x4eFhKbe3zZuC3KdA",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Rayon",                      "cr" : "50BWM", "ubicacion" : "https://goo.gl/maps/2g2Vp3vGowksCHHD7",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Monte Sacro",                    "cr" : "50MWS", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Ayuntamiento",                   "cr" : "50CGG", "ubicacion" : "https://goo.gl/maps/6MRfXoqxGoaSCTSG6",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Colinas",                    "cr" : "50QCL", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Vega y Monroy",                      "cr" : "56VEH", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Paso Los Guzman",            "cr" : "50CPZ",	https://goo.gl/maps/Kw3jgs3ua53tqXAZ6	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Benito Juarez",                      "cr" : "50JBZ", "ubicacion" : "https://goo.gl/maps/CCtNnH69BBQyXkRo6",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "La Estancia",                    "cr" : "50KWS", "ubicacion" : "https://goo.gl/maps/PRUqZ3AsBzqRC2eT6",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Espiritu Santo",             "cr" : "50MMV",	https://goo.gl/maps/3zbFjdUpa45uRbXN8	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Pablo Cabrera",                      "cr" : "50PBC", "ubicacion" : "https://goo.gl/maps/nRcTEMNEogceRCsV7",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mat. Penalty",                   "cr" : "56QPY", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mina II",                    "cr" : "50SU6", "ubicacion" : "https://goo.gl/maps/rG1rUsBPuDKB6tRGA",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "La Venta",                   "cr" : "50TYI", "ubicacion" : "https://goo.gl/maps/oGG8GGTQZWtLJYHy5",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Nieto",                      "cr" : "50CXR", "ubicacion" : "https://goo.gl/maps/3LrqsC3v4nvdfVAH6",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Arteaga",                    "cr" : "50CZS", "ubicacion" : "https://goo.gl/maps/NsRAVH6usjnijLbn9",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Ghandi",                     "cr" : "50GHY", "ubicacion" : "https://goo.gl/maps/GbCa5ExKwiz8PUAx8",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Paseo Central",                      "cr" : "50GJX", "ubicacion" : "https://goo.gl/maps/oKyiiFbVVmsrnGWy9",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mercedes Camacho",                   "cr" : "50HPH", "ubicacion" : "https://goo.gl/maps/nvnwvfjqB6ScQoiXA",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Bosques de San Juan",                    "cr" : "50J66", "ubicacion" : "https://goo.gl/maps/SJhYh4VafqUqyWmb8",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Kamerun",                    "cr" : "50QKA", "ubicacion" : "https://goo.gl/maps/AM1NKxm76P3jLWrh8",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Vistha",                     "cr" : "50XLB", "ubicacion" : "https://goo.gl/maps/vWS8N8nno5kntGoG7",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Jardines del Valle",                     "cr" : "50Y8T", "ubicacion" : "https://goo.gl/maps/rmDgSMfrk9G4n9Q47",	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Libertad",                   "cr" : "5029B", "ubicacion" : "https://goo.gl/maps/X5hVW1o8BS2ZnV6Z7",	GUANAJUATO	SAN LUIS DE LA PAZ
{"tienda" : "Portal Vertiz",                      "cr" : "505OJ", "ubicacion" : "https://goo.gl/maps/WJpKSGTGyGdTCL2i7",	GUANAJUATO	SAN LUIS DE LA PAZ
{"tienda" : "La Palma",	"cr" : "505VC",	https://goo.gl/maps/XASYzLAGuoVSuhyx7	GUANAJUATO	SAN LUIS DE LA PAZ
{"tienda" : "Sierra Gorda",                   "cr" : "50BNH", "ubicacion" : "https://goo.gl/maps/Evot4fVhJNVsDCCX8",	GUANAJUATO	SAN LUIS DE LA PAZ
{"tienda" : "SanLuis deLaPazI",                   "cr" : "50KSL", "ubicacion" : "https://goo.gl/maps/opP3rFB7fS3aj9MHA",	GUANAJUATO	SAN LUIS DE LA PAZ
{"tienda" : "San Luis de LaPa",                   "cr" : "50QSP", "ubicacion" : "https://goo.gl/maps/7JqBFLDhAkyK5tqu8",	GUANAJUATO	SAN LUIS DE LA PAZ
{"tienda" : "Vista Hermosa",                      "cr" : "50WPB", "ubicacion" : "https://goo.gl/maps/iJHnwvPJzXdjJJHe6",	GUANAJUATO	SAN LUIS DE LA PAZ
{"tienda" : "Panoramico",                     "cr" : "50W46", "ubicacion" : "https://goo.gl/maps/wYFNGoKShs9NkL2U9",	GUANAJUATO	SAN LUIS DE LA PAZ
{"tienda" : "Matador San Isidro",                     "cr" : "56LED", "ubicacion" : "	GUANAJUATO	SAN LUIS DE LA PAZ
{"tienda" : "Matador Chispas",                    "cr" : "56PQX", "ubicacion" : "	GUANAJUATO	SAN LUIS DE LA PAZ
{"tienda" : "Insurgentes",                    "cr" : "50IRN", "ubicacion" : "https://goo.gl/maps/5tt44K2vUFCjYFHY9",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Pipila",                     "cr" : "50JKA", "ubicacion" : "https://goo.gl/maps/voNXgTJbwXkSto629",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Las Brisas",                     "cr" : "50JLV", "ubicacion" : "https://goo.gl/maps/NbqQqA5LPHfaqwz26",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "SAN ANTONIO",                    "cr" : "50LAF", "ubicacion" : "https://goo.gl/maps/ngmn7gysQ2FPDDV96",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "La Luz",                     "cr" : "50LUZ", "ubicacion" : "https://goo.gl/maps/SvhFMuxeoH6J7a7GA",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Las Magnolias",                      "cr" : "50OE5", "ubicacion" : "https://goo.gl/maps/4unEBqTbXEmP3qE29",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Calle Ancha II",                     "cr" : "50QSM", "ubicacion" : "https://goo.gl/maps/yiYoDb314NmZVJ777",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Mesones",                    "cr" : "50UGX", "ubicacion" : "https://goo.gl/maps/Bs8Y2zyrHHs3GDdS9",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Calle Ancha",                    "cr" : "50WED", "ubicacion" : "https://goo.gl/maps/w1pqHdHpwPZde26R6",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Canal",                      "cr" : "50XJQ", "ubicacion" : "https://goo.gl/maps/tLCxnhbtXtKZWa639",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "San Miguelito",                      "cr" : "50YBE", "ubicacion" : "https://goo.gl/maps/YoHCvi7UwAdzagk59",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "El Encanto",           "cr" : "50XCT",	https://goo.gl/maps/D3ykMpD4AyWaLYgb6	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "La Cieneguita",                      "cr" : "50I2J", "ubicacion" : "https://goo.gl/maps/Si1kGapW6p197gqEA",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Gas La Negreta",                     "cr" : "5064E", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Avantia",                    "cr" : "506FY", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Dinorrey",                   "cr" : "506SD", "ubicacion" : "	QUERETARO	EL MARQUES
{"tienda" : "Manantiales",                    "cr" : "506SZ", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Sn.Miguel Allend",                   "cr" : "50QAO", "ubicacion" : "https://goo.gl/maps/HYiqj3oVxdFeHiGB9",	GUANAJUATO	SAN MIGUEL DE ALLENDE
{"tienda" : "Abasolo",                    "cr" : "50ABV", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Franco",                     "cr" : "501EX", "ubicacion" : "https://goo.gl/maps/FH49A2N9JfAVLaAz7",	GUANAJUATO	SANTA CRUZ DE JUVENTINO ROSAS
{"tienda" : "Primo Verdad",                   "cr" : "5027Q", "ubicacion" : "https://goo.gl/maps/WjSE4xZVPMGYLWrQ9",	GUANAJUATO	SANTA CRUZ DE JUVENTINO ROSAS
{"tienda" : "Asfaltos",                   "cr" : "507NG", "ubicacion" : "https://goo.gl/maps/hLCHys5y75k5ccQw7",	GUANAJUATO	SANTA CRUZ DE JUVENTINO ROSAS
{"tienda" : "Juventino",                      "cr" : "50NR1", "ubicacion" : "https://goo.gl/maps/RRzNY246L6DSqnoG8",	GUANAJUATO	SANTA CRUZ DE JUVENTINO ROSAS
{"tienda" : "Garcia",                     "cr" : "56VBP", "ubicacion" : "	GUANAJUATO	SANTA CRUZ DE JUVENTINO ROSAS
{"tienda" : "Mat. Ref.Agraria",                   "cr" : "56MQR", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. Carranza",                      "cr" : "56YCZ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "San Felix",                      "cr" : "50IFU", "ubicacion" : "	QUERETARO	EZEQUIEL MONTES
{"tienda" : "Palmillas",                      "cr" : "50ILZ", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Guerrero",                   "cr" : "50JPH", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Mat. La Goma",                   "cr" : "56WLG", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Libramiento Sur",                    "cr" : "50LBS", "ubicacion" : "	QUERETARO	EL MARQUES
{"tienda" : "Carrillo Puerto",                    "cr" : "50HKV", "ubicacion" : "https://goo.gl/maps/UG1TvZ5q4MX5ufjd7",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Libramiento Nte",                    "cr" : "50LNE", "ubicacion" : "	QUERETARO	EL MARQUES
{"tienda" : "Villa del Real",                     "cr" : "50VPY", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Q7001", "cr" :	"5068H",	https://goo.gl/maps/KbYZ6DSHnbkGCjsk9	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Torre 57",                   "cr" : "50E6K", "ubicacion" : "https://goo.gl/maps/9qPqqQBQ8maYjFpn8",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Intersur",                   "cr" : "50UC1", "ubicacion" : "https://goo.gl/maps/igrAKk8NgGZb1NB97",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Catedral",                   "cr" : "50P40", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Pueblito",                   "cr" : "50PBI", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "Fray Luis",                      "cr" : "50BS4", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "M.SanJose El Alt",                   "cr" : "56SQA", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Feria",                      "cr" : "50FAP", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Cordillera",                     "cr" : "50XLT", "ubicacion" : "https://goo.gl/maps/z6qaDk1u8LPMEWDU8",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "San Roque",                      "cr" : "50SQO", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Vitro",                      "cr" : "50VTK", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. San Pablo",                     "cr" : "51WSS", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Mat. San Pablo",                     "cr" : "	56WS", "ubicacion" : "		QUERETARO	QUERETARO
{"tienda" : "Mat. Tecnologico",                   "cr" : "56WTC", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "La Paz",                     "cr" : "50QPZ", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Corregidora",                    "cr" : "50QRG", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "Valbo",                      "cr" : "50QVL", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Nouvalia",                   "cr" : "50RC5", "ubicacion" : "	QUERETARO	EL MARQUES
{"tienda" : "Plaza Loarca",                   "cr" : "50PST", "ubicacion" : "https://goo.gl/maps/t3sjhk4MtcbqXHiZ8",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "San Pablo",                   "cr" : "50SPU",		QUERETARO	QUERETARO
{"tienda" : "Loarca",                     "cr" : "50XLA", "ubicacion" : "https://goo.gl/maps/2R9bpTd6xv7idq6L9",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Gas San Pedro",                      "cr" : "50DMV", "ubicacion" : "https://goo.gl/maps/wtcEmPtRxKS45U2m7",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Triangulo",                      "cr" : "50TNG", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Los Sauces",                     "cr" : "50IXS", "ubicacion" : "https://goo.gl/maps/WuYeUTxiEJ6CbbWC7",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Geoplazas",                      "cr" : "50CVL", "ubicacion" : "https://goo.gl/maps/6JSvHA4PM9NA2AMJ7",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Pronto La Noria",                    "cr" : "50PNL", "ubicacion" : "https://goo.gl/maps/mWPT5rqgHA69aiD89",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Penuelas",                   "cr" : "50PEU", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "El Condado",                     "cr" : "50WB7", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "Parque la Gloria",                   "cr" : "50SVG", "ubicacion" : "https://goo.gl/maps/VKBs39pr1HgVMEAd7",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Italia",                     "cr" : "50TLI", "ubicacion" : "https://goo.gl/maps/ainrjLLFEThPi16m9",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Los Sabinos",                    "cr" : "50YIF", "ubicacion" : "	QUERETARO	TEQUISQUIAPAN
{"tienda" : "Mision La Joya",                     "cr" : "50216", "ubicacion" : "https://goo.gl/maps/ZToEPkG9JVeDZVpC8",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Gas Quintana",                   "cr" : "50GMC", "ubicacion" : "https://goo.gl/maps/ktDdaoYWokR27fCp8",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Media Luna",                     "cr" : "50JN3", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "ATENAS",                     "cr" : "503GI", "ubicacion" : "https://goo.gl/maps/E3PCcKAQzjiHbPmr7",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Mat. Curva",                     "cr" : "56CVA", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Villas del Meson", "cr" : "50CDB",	https://goo.gl/maps/s5yBHG233JtP2Dr48	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Tiara",                      "cr" : "50FR3", "ubicacion" : "https://goo.gl/maps/sPgEsJDYAfo1QaJA8",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "FrayJuniperoJuriquilla",                     "cr" : "50GQW", "ubicacion" : "https://goo.gl/maps/9y6YmfLiLTRNZUJk9",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Juriquilla StaFE",                   "cr" : "50JEP", "ubicacion" : "https://goo.gl/maps/iACb36p1SdnSJuUr9",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "La Solana",                      "cr" : "50KLK", "ubicacion" : "https://goo.gl/maps/RoEu4Qh9npj6JUVM7",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Samsung",                    "cr" : "50QFE", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Juriquilla",                     "cr" : "50OJU", "ubicacion" : "https://goo.gl/maps/LqnP6cwa14oVznh48",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Cumbres",                    "cr" : "50PH3", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Mat. Manolo Mtz.",                   "cr" : "56MQM", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Real Juriquilla",                    "cr" : "50RJL", "ubicacion" : "https://goo.gl/maps/vYXQUGsZ77L5GagCA",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Mat. Universidad",                   "cr" : "56MUV", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Villas del Meson",                   "cr" : "50VMW", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Chichimecas",                    "cr" : "50HIM", "ubicacion" : "https://goo.gl/maps/STQcc5rWDDbUJbrx7",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Mat. Gallegos",                      "cr" : "56QGL", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "MONTERREY",                      "cr" : "50SEU", "ubicacion" : "https://goo.gl/maps/63ZvB5sX7mFUbnwF7",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Penal",                      "cr" : "50SVW", "ubicacion" : "https://goo.gl/maps/kSqP8r1ayeRPVZZy6",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Parque BIcentenario	50AK9	https://goo.gl/maps/YnnYt8dPWHeqA2NG8	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Parador",                    "cr" : "50DRP", "ubicacion" : "https://goo.gl/maps/HmfQ2CcZFyRD8azs9",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Jauregui",                   "cr" : "50WJA", "ubicacion" : "	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Upsrj",                      "cr" : "508QG", "ubicacion" : "https://goo.gl/maps/qNtRJPw3KKYYuiBW7",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "PIQ",                    "cr" : "50HPJ", "ubicacion" : "https://goo.gl/maps/58uhETPE571zX4C8A",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Mat. Pueblito II",                   "cr" : "56UBL", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "PI",                     "cr" : "50QZP", "ubicacion" : "https://goo.gl/maps/DU1LEVfzqQ43SH5V6",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "M.Villa Corregidora",                    "cr" : "56VYC", "ubicacion" : "	QUERETARO	CORREGIDORA
{"tienda" : "Cumbres del Lago",                   "cr" : "50NEZ", "ubicacion" : "https://goo.gl/maps/uvft2iAxKSKzyQjw6",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Mat. Chapultepec",                   "cr" : "56WCH", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Valle de Santiag",                   "cr" : "50AHA", "ubicacion" : "https://goo.gl/maps/AV6A6kNR6Pyjsz8N8",	QUERETARO	SANTIAGO DE QUERETARO
{"tienda" : "Cascada",                    "cr" : "50CAK", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Rodeo",                      "cr" : "5060B", "ubicacion" : "https://goo.gl/maps/MbEc8iKZQWebhSQT8",	QUERETARO	TEQUISQUIAPAN
{"tienda" : "Bordo Blanco",                   "cr" : "50IXT", "ubicacion" : "https://goo.gl/maps/HyBN2adpCooMBAkm6",	QUERETARO	TEQUISQUIAPAN
{"tienda" : "Juarez",                     "cr" : "50QJZ", "ubicacion" : "https://goo.gl/maps/FNaW4tatNUvivVy28",	QUERETARO	TEQUISQUIAPAN
{"tienda" : "Gasca",                      "cr" : "50UXH", "ubicacion" : "https://goo.gl/maps/xG2C82yY2tLn7ZCt6",	QUERETARO	TEQUISQUIAPAN
{"tienda" : "Mat.20deNoviembr",                   "cr" : "56WMN", "ubicacion" : "	QUERETARO	SAN JUAN DEL RIO
{"tienda" : "Vergel",                     "cr" : "50VZL", "ubicacion" : "https://goo.gl/maps/aLdHB1pA27rptoDu5",	QUERETARO	TEQUISQUIAPAN
{"tienda" : "Chopos",                     "cr" : "505MU", "ubicacion" : "https://goo.gl/maps/vAQHAGUXwKrSEea37",	QUERETARO	TEQUISQUIAPAN
{"tienda" : "Centenario",                     "cr" : "50D4L", "ubicacion" : "https://goo.gl/maps/dMPznSkgiqQv4N2s9",	QUERETARO	TEQUISQUIAPAN
{"tienda" : "Asuncion",                   "cr" : "50NZW", "ubicacion" : "https://goo.gl/maps/8Dxcb1DRVtkKmGxD8",	QUERETARO	TEQUISQUIAPAN
{"tienda" : "Villagasca",                     "cr" : "501ZE", "ubicacion" : "https://goo.gl/maps/utXEnUNYkTLuL2Fb9",	GUANAJUATO	VILLAGRAN
{"tienda" : "Central Villagran",                      "cr" : "504XL", "ubicacion" : "https://goo.gl/maps/ZToKwaLTn5wtfwPJ7",	GUANAJUATO	VILLAGRAN
{"tienda" : "Xajay",                      "cr" : "50XAJ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "Xajay",                      "cr" : "56XAJ", "ubicacion" : "	QUERETARO	QUERETARO
{"tienda" : "El Caracol",                     "cr" : "50CB2", "ubicacion" : "https://goo.gl/maps/VvdkPGrMPfdUKZ5V9",	GUANAJUATO	VILLAGRAN
{"tienda" : "Malbec",                     "cr" : "500CP", "ubicacion" : "		
{"tienda" : "La vida",                    "cr" : "500JZ", "ubicacion" : "		
{"tienda" : "Cuesta Bonita",                      "cr" : "500XF", "ubicacion" : "		
{"tienda" : "Paseo Heroes",                   "cr" : "5014W", "ubicacion" : "		
{"tienda" : "Matador Azucenas II",                    "cr" : "501PQ", "ubicacion" : "		
{"tienda" : "Celayita",                   "cr" : "502CC", "ubicacion" : "		
{"tienda" : "Crucero Aeropuerto",                     "cr" : "5034C", "ubicacion" : "		
{"tienda" : "San Gremal",                     "cr" : "504H0", "ubicacion" : "		
{"tienda" : "Ma. Teresa",                     "cr" : "504IA", "ubicacion" : "		
{"tienda" : "Jardin Iturbide",                    "cr" : "504K6", "ubicacion" : "		
{"tienda" : "Parador Sauz",                   "cr" : "5059I", "ubicacion" : "		
{"tienda" : "Manuel Tolsa",                   "cr" : "505PR", "ubicacion" : "		
{"tienda" : "5 Halcones",                     "cr" : "505RM", "ubicacion" : "		
{"tienda" : "La Aurora",                      "cr" : "505VS", "ubicacion" : "		
{"tienda" : "CR disponible	506IU			
{"tienda" : "Cañadas del Lago",                   "cr" : "5072F", "ubicacion" : "		
{"tienda" : "Cayetano Rubio",                     "cr" : "507FX", "ubicacion" : "		
{"tienda" : "Gas Encinos",                    "cr" : "507UU", "ubicacion" : "		
{"tienda" : "Qro Libre",                      "cr" : "507XA", "ubicacion" : "		
{"tienda" : "Figueroa",                   "cr" : "5088A", "ubicacion" : "		
{"tienda" : "Las Ventanas",                   "cr" : "508XM", "ubicacion" : "		
{"tienda" : "O Donell",                   "cr" : "5092N", "ubicacion" : "		
{"tienda" : "Prueba Insercion Dinamica 2	50AAG			
{"tienda" : "Pelavacas",                      "cr" : "50B4H", "ubicacion" : "		
{"tienda" : "Estatal 200",                    "cr" : "50BBU", "ubicacion" : "		
{"tienda" : "LibramientoCelay",                   "cr" : "50BOH", "ubicacion" : "		
{"tienda" : "Revolucion",                     "cr" : "50BOJ", "ubicacion" : "		
{"tienda" : "Ind Quintana",                   "cr" : "50BTL", "ubicacion" : "		
{"tienda" : "Valcoop",                    "cr" : "50C1L", "ubicacion" : "		
{"tienda" : "Camino Real",                    "cr" : "50C41", "ubicacion" : "		
{"tienda" : "Montecarlo",                     "cr" : "50C9U", "ubicacion" : "		
{"tienda" : "Libramiento Oriente",                    "cr" : "50CG5", "ubicacion" : "		
{"tienda" : "Galegas",                    "cr" : "50CT3", "ubicacion" : "		
{"tienda" : "Zielo",                      "cr" : "50D0L", "ubicacion" : "		
{"tienda" : "Cazadero",                   "cr" : "50D58", "ubicacion" : "		
{"tienda" : "Jardin Hidalgo",                     "cr" : "50DMU", "ubicacion" : "		
{"tienda" : "Jurica", "cr" : "50DRE",			
{"tienda" : "Industiral Celay",                   "cr" : "50EBQ", "ubicacion" : "		
{"tienda" : "Expansion Celaya	50ECE			
{"tienda" : "Pronto Gaviota",                     "cr" : "50EY8", "ubicacion" : "		
{"tienda" : "San Miguel Arcangel",                    "cr" : "50F07", "ubicacion" : "		
{"tienda" : "SEGOB",                      "cr" : "50FNI", "ubicacion" : "		
{"tienda" : "Estacion Galaxia",                   "cr" : "50GA0", "ubicacion" : "		
{"tienda" : "RanchoBellavista",                   "cr" : "50GGZ", "ubicacion" : "		
{"tienda" : "Hda.Santa Rosa",                     "cr" : "50GVB", "ubicacion" : "		
{"tienda" : "Lagrimas",                   "cr" : "50HJ9", "ubicacion" : "		
{"tienda" : "Bernal",                     "cr" : "50HKU", "ubicacion" : "		
{"tienda" : "Impulso	50HQP			
{"tienda" : "Tepic Ahuacatlan GDL	50HWK			
{"tienda" : "Irrigacion",                     "cr" : "50IRQ", "ubicacion" : "		
{"tienda" : "Rio",                    "cr" : "50IYF", "ubicacion" : "		
{"tienda" : "Madero",                     "cr" : "50IYW", "ubicacion" : "		
{"tienda" : "Janos NOG	50JNS			
{"tienda" : "Real Solare",                    "cr" : "50K9F", "ubicacion" : "		
{"tienda" : "Nororiente",                     "cr" : "50KXQ", "ubicacion" : "		
{"tienda" : "Huawei",                     "cr" : "50L6A", "ubicacion" : "		
{"tienda" : "La Soledad",                     "cr" : "50L6E", "ubicacion" : "		
{"tienda" : "Santa Rosa",                     "cr" : "50MED", "ubicacion" : "		
{"tienda" : "Quintana Roo", "cr" : "50MHL",			
{"tienda" : "Monzimba ACA	50MZB			
{"tienda" : "Puertas",                    "cr" : "50N3F", "ubicacion" : "		
{"tienda" : "Pronto Mi General",                      "cr" : "50NT6", "ubicacion" : "		
{"tienda" : "El Moro MAM	50OEM			
{"tienda" : "Oxxo Parques	50OPQ			
{"tienda" : "Tayco",                      "cr" : "50OV7", "ubicacion" : "		
{"tienda" : "Castanos MTY	50OXC			
{"tienda" : "Acueducto Encinos",                      "cr" : "50P0V", "ubicacion" : "		
{"tienda" : "Pronto Laural",                      "cr" : "50P2H", "ubicacion" : "		
{"tienda" : "Hospital",                   "cr" : "50Q09", "ubicacion" : "		
{"tienda" : "Villalba",                   "cr" : "50Q6J", "ubicacion" : "		
{"tienda" : "Oxxo Alameda	50QAC			
{"tienda" : "Oxxo Bucarest	50QBU			
{"tienda" : "Oxxo Gaor	50QGA			
{"tienda" : "Hda. Santa Rosa",                    "cr" : "50QOB", "ubicacion" : "		
{"tienda" : "Oxxo Pie de la Cuesta	50QPC			
{"tienda" : "Oxxo Rayon	50QRA			
{"tienda" : "Oxxo Tlaloc	50QTL			
{"tienda" : "Oxxo San Roque	50ROQ			
{"tienda" : "Estancia Geo",                   "cr" : "50SEI", "ubicacion" : "		
{"tienda" : "*Oxxo Sinai	50SNA			
{"tienda" : "CR Disponible	50T2E			
{"tienda" : "ParqueTecnologic",                   "cr" : "50TDR", "ubicacion" : "		
{"tienda" : "Tda. Puente Qro.	50TPQ			
{"tienda" : "Santa Ana",                      "cr" : "50TRN", "ubicacion" : "		
{"tienda" : "TuzoPlaza PAC	50TUZ			
{"tienda" : "Aculco Libre",                   "cr" : "50UDB", "ubicacion" : "		
{"tienda" : "Monte Miranda",                      "cr" : "50UHM", "ubicacion" : "		
{"tienda" : "Vaqueritos MEX	50VKT			
{"tienda" : "Centenario",                     "cr" : "50VPX", "ubicacion" : "		
{"tienda" : "Nuevo San Juan",                     "cr" : "50VQM", "ubicacion" : "		
{"tienda" : "Feria II",                   "cr" : "50WGT", "ubicacion" : "		
{"tienda" : "Feria III",                      "cr" : "50WGW", "ubicacion" : "		
{"tienda" : "San Antonio",                    "cr" : "50WMX", "ubicacion" : "		
{"tienda" : "Tulipan",                    "cr" : "50XYH", "ubicacion" : "		
{"tienda" : "Vinedos",                    "cr" : "50YLV", "ubicacion" : "		
{"tienda" : "Matador Parrres",                    "cr" : "50Z4K", "ubicacion" : "		
{"tienda" : "Rio Blanco",                     "cr" : "50Z4N", "ubicacion" : "		
{"tienda" : "Alcatraz",                   "cr" : "50ZDE", "ubicacion" : "		
{"tienda" : "QUIJAY",                     "cr" : "50ZDW", "ubicacion" : "		
{"tienda" : "RealdeCarretera",                    "cr" : "50ZHT", "ubicacion" : "		
{"tienda" : "San Rafael",                     "cr" : "50ZSI", "ubicacion" : "		
{"tienda" : "Cerro Gordo",                    "cr" : "50ZX1", "ubicacion" : "		
{"tienda" : "Londres CUU	51DPC			
{"tienda" : "Mat. San Pablo",                     "cr" : "53CJO", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53CZO", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53DZZ", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53ERL", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53FDI", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53FST", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53IZZ", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53LBL", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53LDZ", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53MOZ", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53MZD", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53SNE", "ubicacion" : "		
{"tienda" : "Mat. San Pablo",                     "cr" : "53YZM", "ubicacion" : "		
{"tienda" : "Pronto Geovillas",                   "cr" : "56DNJ", "ubicacion" : "		
{"tienda" : "Matador Geo",                    "cr" : "56JGG", "ubicacion" : "		
{"tienda" : "Geovillas",                      "cr" : "56JHW", "ubicacion" : "		
{"tienda" : "Pronto Fresnos",                     "cr" : "56KLX", "ubicacion" : "		
{"tienda" : "Balsas",                     "cr" : "56RPA", "ubicacion" : "		
{"tienda" : "18",                     "cr" : "56TVM", "ubicacion" : "		
{"tienda" : "TuzoPlaza PAC	56WSF			
{"tienda" : "Colosio",                    "cr" : "50UO4", "ubicacion" : "https://goo.gl/maps/uDu9nqVNbBszzXMj9",	GUANAJUATO	VILLAGRAN
*/



