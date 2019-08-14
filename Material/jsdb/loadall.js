function loadAll() {
                var active = dataBase.result;
                var data = active.transaction(["people"], "readonly");
                var object = data.objectStore("people");

                var elements = [];

                object.openCursor().onsuccess = function (e) {

                    var result = e.target.result;

                    if (result === null) {
                        return;
                    }

                    elements.push(result.value);
                    result.continue();
                };

                console.log(elements);

                data.oncomplete = function () {

                    var outerHTML = '';

                    for (var key in elements) {

                        outerHTML += '\n\
                        <tr>\n\
                            <td>' + elements[key].dni + '</td>\n\
                            <td>' + elements[key].name + '</td>\n\
                            <td>\n\
                                <button type="button" onclick="load(' + elements[key].id + ')">Details</button>\n\
                                <button type="button" onclick="loadByDni(' + elements[key].dni + ')">Details DNI</button>\n\
                            </td>\n\
                        </tr>';

                    }

                    elements = [];
                    document.querySelector("#elementsList").innerHTML = outerHTML;
                };
            }
            
            function loadAllByName() {
                var active = dataBase.result;
                var data = active.transaction(["people"], "readonly");
                var object = data.objectStore("people");
                var index = object.index("by_name");
                
                var elements = [];

                index.openCursor().onsuccess = function (e) {

                    var result = e.target.result;

                    if (result === null) {
                        return;
                    }

                    elements.push(result.value);
                    //console.log(elements);
                    result.continue();

                };
                console.log(elements);
                data.oncomplete = function () {

                    var outerHTML = '';

                    for (var key in elements) {

                        outerHTML += '\n\
                        <tr>\n\
                            <td>' + elements[key].dni + '</td>\n\
                            <td>' + elements[key].name + '</td>\n\
                            <td>\n\
                                <button type="button" onclick="load(' + elements[key].id + ')">Details</button>\n\
                                <button type="button" onclick="loadByDni(' + elements[key].dni + ')">Details DNI</button>\n\
                            </td>\n\
                        </tr>';

                    }

                    elements = [];
                    document.querySelector("#elementsList").innerHTML = outerHTML;
                };
            }