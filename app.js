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





 // Función para actualizar la lista HTML
function actualizarLista() {
    // 1. Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
    lista.innerHTML = "";

    // 3. Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un elemento <li>
        let li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregar el <li> a la lista
        lista.appendChild(li);
    }
}