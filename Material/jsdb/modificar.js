console.log('si cargo');

function loadm() {
                var active = dataBase.result;
                var data = active.transaction(["people"], "readwrite");
                var object = data.objectStore("people");
                var buscado = document.getElementById("busca").value;
                console.log(buscado);
                
                var request = object.get(parseInt(buscado));
                console.log(request);

                request.onsuccess = function () {
                    var result = request.result;
                    console.log(result.id);

                    document.querySelector("#dnim").value = result.dni;
                    document.querySelector("#namem").value = result.name;
                    document.querySelector("#surnamem").value = result.surname;
                    document.querySelector("#telefonom").value = result.telefono;
                };
            }

            document.getElementsById