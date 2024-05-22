export { fizzbuzz,anagrama };

/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function fizzbuzz() {
    let res = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            res += " (" + i + ")" + "FizzBuzz";
        } else if (i % 3 == 0) {
            res += " (" + i + ")" + "Fizz";
        } else if (i % 5 == 0) {
            res += " (" + i + ")" + "Buzz";
        }
    }
    return res
}


/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
function borrarEspacios(palabra) {
    return palabra.replace(/\s+/g,'')
}

function anagrama(palabra1, palabra2) {
    try {
        //Evaluamos si las dos entradas son un string
        if (typeof palabra1 === "string" && typeof palabra2 === "string") {
            //Eliminamos espacios, si las palabras son iguales, entonces no son anagramas
            palabra1 = borrarEspacios(palabra1);
            palabra2 = borrarEspacios(palabra2);
            if (palabra1 === palabra2) {
                return false;
            }
            //Convertimos en un array y ordenamos.
            let palabra1Arr = palabra1.split("").sort();
            let palabra2Arr = palabra2.split("").sort();
            //se evalua la longitud de ambas palabras
            if (palabra1Arr.length == palabra2Arr.length) {
                //se evalua si las dos palabras presentan los mismos caracteres
                for (let i = 0; i < palabra1Arr.length; i++) {
                    if (palabra1Arr[i] != palabra2Arr[i]) {
                        return false
                    }
                }
                //True si son iguales
                return true
            } else {
                return false
            }
        } else {
            throw new Error("No son cadenas de texto");
        }
    } catch (error) {
        console.error("Se ha ingresado un dato erroneo", error);
        return false
    }

}