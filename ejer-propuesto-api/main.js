/**
 * 
 * Utilizar los servicios de Blockchain para mostrar un indicador
 * del precio de mercado promedio para la moneda Bitcoin.
 * 
 * Mostrar el indicador al iniciar la página y 
 * agregar un botón para refrescar la información.
 * 
 * URL Servicio Blockchain para promedio del precio Dolar-Bitcoin:
 * https://blockchain.info/ticker
 * Utilizar el último valor indicado (last)
 * 
 * Ejemplo respuesta:
 * {
    "USD": {
        "15m": 5610.6817045,
        "last": 5610.6817045,
        "buy": 5610.6817045,
        "sell": 5610.6817045,
        "symbol": "$"
    },
    "EUR": ....
    }
 */

let blockchain = "https://blockchain.info/ticker"
function getPromedio(){
    let inputPromedio = document.querySelector("#promedio");
    
    fetch(blockchain).
        then( function(response) {
            return response.json();
          }).
        then( data => {
            inputPromedio.value = data.USD.last;
        });
}

document.querySelector("#btn-refresh")
    .addEventListener("click", getPromedio)

document.addEventListener("DOMContentLoaded", getPromedio)