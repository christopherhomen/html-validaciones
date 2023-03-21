/*const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur", (evento) => {
    console.log(evento.target)
    validarNacimiento(evento.target);
})*/
// se llama cada vez que el user sale del input que estaba rellenando
export function valida(input) {
    // tipo: obtener uno especifico
    // dataset : coleccion de datas
    const tipoDeInput = input.dataset.tipo;
    // tipp de input
    // por e tipo de inpit validar si existe en los validadores :

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }


    console.log(input.parentElement)
    if (input.validity.valid) { // quite la clase
        input.parentElement.classList.remove("input-container--invalid");
        // debo seleccionar el span

        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else { // SI no es valido

        input.parentElement.classList.add("input-container--invalid");
        // si hay un error lo muestro
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}


const tipoDeErrores = ["valueMissing", "typeMismatch", "patternMismatch", "customError",];


// Objeto: segun el cambpo el texto de error debe cambiar:
const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacÃ­o"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacÃ­o",
        typeMismatch: "El correo no es vÃ¡lido"
    },
    password: {
        valueMissing: "El campo contraseÃ±a no puede estar vacÃ­o",
        patternMismatch: "Al menos 6 caracteres, mÃ¡ximo 12, debe contener una letra minÃºscula, una letra mayÃºscula, un nÃºmero y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacÃ­o",
        customError: "Debes tener al menos 18 aÃ±os de edad"
    },
    numero: {
        valueMissing: "Este campo no puede estar vaci­o",
        customError: "Debes tener al menos 18 aÃ±os de edad",
        patternMismatch : "El formato requerido es (XXXXXXXXXX)"
    },
    direccion: {
        valueMissing: "Este campo no puede estar vaci­o",
        patternMismatch : "Debe tener entre 10 a 40 caracteres"
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vaci­o",
        patternMismatch : "Ciudad : Debe tener entre 10 a 40 caracteres"
    },
    estado: {
        valueMissing: "Este campo no puede estar vaci­o",
        patternMismatch : "Estado Debe tener entre 10 a 40 caracteres"
    }
};


const validadores = {
    // para que coincida el nombre del tipo con la llave dentor dle objeto
    // objeto para los inputs que va a tener
    nacimiento: (input) => validarNacimiento(input)
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ""
    // para cada tipo de error lo recorro
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;

}
function validarNacimiento(input) { // acceder al valor de la fecha
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 aÃ±os de edad";
    }

    input.setCustomValidity(mensaje);
}


function mayorDeEdad(fecha) { // omparacion entre la fecha de hoy y la que puso el usuario
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return diferenciaFechas <= fechaActual;
}

