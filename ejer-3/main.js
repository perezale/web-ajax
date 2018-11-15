"use strict"

function lanzarTemporizadores(){
    let cant_temporizadores = document.querySelector('#cant-botones').value;
    for (let temp = 0; temp < cant_temporizadores; temp++) {
        let div = document.querySelector("#btn-list");
        setTimeout(function(){
            let btn = document.createElement("button");
            btn.innerHTML = "Btn" + temp;
            btn.addEventListener("click", e => {
                alert("Hola, soy el botón número " + temp);
            });
            div.appendChild(btn);

        }, Math.random() * cant_temporizadores * 1000);
        
    }
}


document.querySelector("#btn-submit")
    .addEventListener("click", e => lanzarTemporizadores());