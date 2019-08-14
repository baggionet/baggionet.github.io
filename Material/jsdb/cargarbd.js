var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
//Se crea la funcion la cual creara o abrira la base de datos, crea la tabla a usar y sus campos y los mensajes de error o exito
            //function startDB() {
            
    dataBase = indexedDB.open("object", 1);//crea o abre la base de datos
    //console.log("ESta es mi base de datos " + dataBase);           
    dataBase.onupgradeneeded = function (e) {

        active = dataBase.result;
                
       //crea la llave principal en el campo "id" de la tabla "people" y le dice que sea autoincrementable
       object = active.createObjectStore("people", { keyPath : 'id', autoIncrement : true });
       //crea el segundo campo de la tabla
       object.createIndex('by_name', 'name', { unique : false });
       //crea el tercer campo de la tabla
       object.createIndex('by_dni', 'dni', { unique : true });   
       console.log("la primera tabla " + object);
       //crea la llave principal en el campo "id" de la tabla "people" y le dice que sea autoincrementable
       object = active.createObjectStore("usuarios", { keyPath : 'id', autoIncrement : true });
       //crea el segundo campo de la tabla
       object.createIndex('by_userID', 'userID', { unique : true });
       //crea el tercer campo de la tabla
       object.createIndex('by_nombre', 'nombre', { unique : true }); 
       //console.log("la segunda tabla " + object);
    };

    dataBase.onsuccess = function (e) {//es la funcion que noe enviara la cadena si se logro crear o cargar la BD

        console.log('Base de datos cargada correctamente');
    };
    
    dataBase.onerror = function (e)  {//esta funcion nos enviara el texto de error por que no cargo correctamente la BD

        console.log('Error cargando la base de datos');

    };
    //}