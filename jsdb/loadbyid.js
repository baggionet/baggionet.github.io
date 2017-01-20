//funcion que cargara la base
            function load(id) {
                var active = dataBase.result;
                var data = active.transaction(["people"], "readwrite");
                var object = data.objectStore("people");
                console.log(id);
                var request = object.get(parseInt(id));
                console.log(request);

                request.onsuccess = function () {
                    var result = request.result;
                    console.log(result.id);

                    if (result !== undefined) {
                        alert("ID: " + result.id + "\n\
                               DNI " + result.dni + "\n\
                               Name: " + result.name + "\n\
                               Surname: " + result.surname);
                    }
                };
            }
//funcion que cargara por el dni
            function loadByDni(dni) {
                var active = dataBase.result;
                var data = active.transaction(["people"], "readonly");
                var object = data.objectStore("people");
                var index = object.index("by_dni");
                var request = index.get(String(dni));

                request.onsuccess = function () {
                    var result = request.result;

                    if (result !== undefined) {
                        alert("ID: " + result.id + "\n\
                               DNI " + result.dni + "\n\
                               Name: " + result.name + "\n\
                               Surname: " + result.surname + "\n\
                               telefono: " + result.telefono);
                    }
                };
            }