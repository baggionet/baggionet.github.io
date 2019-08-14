function add() {
                var active = dataBase.result;
                var data = active.transaction(["people"], "readwrite");
                var object = data.objectStore("people");
                //console.log("este es mi objeto add", object);
                var request = object.put({
                    dni: document.querySelector("#dni").value,
                    name: document.querySelector("#name").value,
                    surname: document.querySelector("#surname").value,
                    telefono: document.querySelector("#telefono").value
                });
                console.log(request);
                request.onerror = function (e) {
                    alert(request.error.name + '\n\n' + request.error.message);
                };
                console.log("inprimiendo data", data);

                data.oncomplete = function (e) {
                    document.querySelector("#dni").value = '';
                    document.querySelector("#name").value = '';
                    document.querySelector("#surname").value = '';
                    document.querySelector("#telefono").value = '';
                    alert('Objeto agregado correctamente');
                };
             }

//Esta funcion guardara los datos modificados
function addm() {
                var active = dataBase.result;
                var data = active.transaction(["people"], "readwrite");
                var object = data.objectStore("people");

                var request = object.put({
                    //dni: document.querySelector("#dnim").value,
                    name: document.querySelector("#namem").value,
                    surname: document.querySelector("#surnamem").value
                });

                request.onerror = function (e) {
                    alert(request.error.name + '\n\n' + request.error.message);
                };

                data.oncomplete = function (e) {
                    //document.querySelector("#dnim").value = '';
                    document.querySelector("#namem").value = '';
                    document.querySelector("#surnamem").value = '';
                    alert('Objeto agregado correctamente');
                };
             }

//Esta funcion añadira los equipos de computo
function adduser() {
                var active = dataBase.result;
                var data = active.transaction(["usuarios"], "readwrite");
                var object = data.objectStore("usuarios");
                console.log("este es mi objeto add user", object);
                var request = object.put({
                    userID: document.querySelector("#userID").value,
                    nombre: document.querySelector("#nombre").value,
                    area: document.querySelector("#area").value,
                    correo: document.querySelector("#correo").value,
                    manager: document.querySelector("#manager").value,
                    ceco: document.querySelector("#ceco").value
                });
                console.log(request);
                request.onerror = function (e) {
                    alert(request.error.name + '\n\n' + request.error.message);
                };
                console.log("inprimiendo data", data);

                data.oncomplete = function (e) {
                    document.querySelector("#userID").value = "";
                    document.querySelector("#nombre").value = "";
                    document.querySelector("#area").value = "";
                    document.querySelector("#correo").value = "";
                    document.querySelector("#manager").value = "";
                    document.querySelector("#ceco").value = "";
                    alert('Objeto agregado correctamente');
                };
             }