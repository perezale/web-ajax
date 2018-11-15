/**
 * 
 * Crear una pagina web con un formulario que permita
 * agregar comentarios a una lista. 
 * El nuevo comentario se creará al cumplirse un timer
 * con un tiempo aleatorio entre 0 y 5 segundos.
 * Junto a cada comentario debe agregarse un botón "Me gusta".
 * Este botón debera mostrar un mensaje de alerta diciendo:
 * "Hola!" seguido del comentario seleccionado.  
 * 
 * Opcional: Durante la demora introducida al crear el comentario, 
 * cambie la palabra del botón "Enviar" a "Enviando" y cambie el 
 * estado del botón a deshabilitado.
 */

function agregarComentario(){
    let comentarios = document.querySelector("#lista-comentarios");
    let btnEnviar = document.querySelector("#btn-nuevo-comentario")

    setTimeout(() => {
        let comentario = document.querySelector("#comentario").value;
        let li = document.createElement("li");
        li.innerHTML = comentario;
        let btnMeGusta = document.createElement("button");
        btnMeGusta.innerHTML = "Me gusta ";
        btnMeGusta.addEventListener("click", e => alert("Hola! " + comentario));
        li.appendChild(btnMeGusta);
        comentarios.appendChild(li);

    },Math.random() * 5 * 1000);
}

 document.querySelector("#btn-nuevo-comentario")
    .addEventListener("click", e => {
        agregarComentario();
    })