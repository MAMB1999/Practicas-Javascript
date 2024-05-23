import { fizzbuzz, anagrama, Fibonacci } from "./exercise.js";

//Funcion que ingresa un string y escapa los caracteres especiales HTML para prevenir la inyeccion de datos.
//Retorna un string con los caracteres comprometedores convertidos.
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (match) {
        const escapeMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
        };
        return escapeMap[match];
    });
}
//Evento que busca ingresar datos a DOM, se lleva a cabo un control de errores y se ejecuta la funcion fizzbuzz().
document.addEventListener("DOMContentLoaded", function () {
    let fizzElemento = document.getElementById("fizzbuzzrest");
    if (fizzElemento) {
        try {
            let resultado = fizzbuzz();
            // Validar y sanear el restag si es necesario
            if (typeof resultado === "string") {
                resultado = escapeHTML(resultado);
                fizzElemento.textContent = resultado;
            } else {
                throw new Error("Fizzbuzz no retorna un string.");
            }
        } catch (error) {
            console.error("Error al ejecutar la funcion Fizzbuzz:", error);
            fizzElemento.textContent = "Error ejecutando la funcion Fizzbuzz.";
        }
    } else {
        console.error("Elemento con ID 'fizzbuzzRest' no fue encontrado.");
    }
    
    let fiboElemento  = document.getElementById("fibonaccirest");
    if (fiboElemento) {
        try {
            fiboElemento.textContent = Fibonacci()
        }catch{
            console.error("Error al ejecutar la funcion Fibonacci");
        }
    }
});
//Evento espera el click de del boton en el acordion de anagrama
document.getElementById("anagramabtn").addEventListener("click", function () {
    let value1 = escapeHTML(document.getElementById("inputangr1").value);
    let value2 = escapeHTML(document.getElementById("inputangr2").value);
    let restag = document.getElementById("angrrest");
    //anagrama retorna un valor boleano
    // Proporcionar feedback visual al usuario
    if (anagrama(value1, value2)) {
        if (restag.classList.contains("text-success")) {
            restag.textContent = "Es anagrama";
        } else {
            restag.classList.replace("text-danger", "text-success");
            restag.textContent = "Es anagrama";
        }
    } else {
        restag.classList.replace("text-success", "text-danger");
        restag.textContent = "No es anagrama";
    }
});
