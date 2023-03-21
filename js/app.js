import { valida } from "./validaciones.js";

//agregar el lisener que va a llaamr la funcione cada vez que el usuario salga del input 

const input = document.querySelectorAll("input");

input.forEach( input => {
    //para cada uno de los input recibo un input
    //blur: cuando saque de foco  manda a llamar a la funcion valida
    input.addEventListener("blur", (input) => {
        valida(input.target);
    })
})