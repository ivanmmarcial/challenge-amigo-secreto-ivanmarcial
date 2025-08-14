// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
            // 1. Capturar el valor del campo de entrada
            let nombre = document.getElementById("amigo").value.trim();

            // 2. Validar la entrada
            if (nombre === "") {
                alert("Por favor, inserte un nombre.");
                return; // Sale de la función si está vacío
            }

            // 3. Actualizar el array
            amigos.push(nombre);

            // (Opcional) Mostrar en consola para verificar
            console.log(amigos);

            // 4. Limpiar el campo de entrada
            document.getElementById("nombreAmigo").value = "";
        }