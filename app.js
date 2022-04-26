// === PACKAGES
// Paquete "fs" para generar el archivo txt
const fs = require('fs');

// FUNCIÓN PRINCIPAL (Se le pasa el Array)
circleOfWords = (array, index = 1, attempts = 1, beforeIndex = 1) => {

    if (array.length > 1) { // Validar que el Array tenga más de un elemento

        do {

            let strBefore = array[index - 1]; // Palabra anterior
            let strNow = array[index]; // Palabra actual

            let lastCharacter = strBefore.charAt(strBefore.length - 1); // Se obtiene la última letra
            let firstCharacter = strNow.charAt(0); // Se obtiene la primera letra

            // Se valida si la última letra de la palabra anterior en la que se encuentra evaluado (basado en el index) coincida con la primera letra de la palabra  en la que se encuentra evaluado (basado en el index) del Array
            if (lastCharacter != firstCharacter) {

                // Si se continua evaluado el mismo Index
                if (index == beforeIndex) {

                    // Se suma los intentos
                    attempts++;

                    // Si se intentó varias veces (en base a la cantidad de elementos del Array)
                    if (attempts == array.length) {

                        // Se hace un cambio de orientación al Array (comienza el flujo de nuevo)
                        circleOfWords(array.reverse());
                    }

                } else {
                    attempts = 1;
                }

                // Como las letras son diferentes, se coloca esta palabra, que se encuentra evaluado, al final del Array
                array.push(array.splice(array.indexOf(strNow), 1)[0]);

                // Se llama de nuevo a la función pero basado en el array nuevo (la palabra que no se cumple, al final del Array), con el Index dónde se quedó para evaluar
                circleOfWords(array, index, attempts, index);

            } else {

                // El index incrementa porque la última letra de la palabra anterior en la que se encuentra evaluado (basado en el index) coincide/(es igual) con la primera letra de la palabra  en la que se encuentra evaluado (basado en el index) del Array 
                index++; // Es decir, toca evaluar la siguiente palabra del Array

                // Cuando haya terminado de ordenar todas la palabras del Array
                if (index == array.length) {

                    let firstWord = array[0]; // Primera palabra del Array
                    let lastWord = array[array.length - 1]; // Última palabra del Array

                    let strFirst = firstWord.charAt(0); // Se obtiene la primera letra
                    let strLast = lastWord.charAt(lastWord.length - 1); // Se obtiene la última letra

                    // Se valida si la última letra de la última palabra coincida con la primera letra de la primera palabra del Array
                    if (strFirst != strLast) {

                        // Se hace un cambio de orientación al Array (comienza el flujo de nuevo)
                        circleOfWords(array.reverse());
                    }

                }

            }

        } while (index < array.length); // Se ejecuta siempre y cuando el Index a evaluar sea menor al total de elementos del Array (Sigue en evaluación de cada palabra del Array)

    }

    return array; // Retorna el Array Ordenado
};


// =============== CASOS DE PRUEBA (SIN ERRORES) =============== //
let array = ['chair', 'racket', 'touch', 'height', 'tunic'];
//let array = ['chair', 'height', 'racket', 'touch', 'tunic'];
//let array = ['racket', 'chair', 'tunic', 'height', 'touch'];
//let array = ['tuna', 'tiger', 'rabbit', 'rat', 'anteater'];
//let array = ['done', 'last', 'equal', 'toss', 'some', 'end'];
//let array = ['for', 'geek', 'rig', 'kaf'];
//let array = ['king', 'geek'];
//let array = ['aab', 'bac', 'aaa', 'cda'];
//let array = ['zap', 'car', 'rocket', 'tunic', 'pat', 'touch', 'table', 'height', 'exit', 'taz'];
//let array = ['aaa'];
//let array = ['abc', 'efg', 'cde', 'ghi', 'ija'];
//let array = ['aaa', 'bbb', 'baa', 'aab'];
//let array = [];
//let array = ['12', '51', '35', '23'];
//let array = [12, 51, 35, 23];
//let array = ['axb', 'bxc', 'cxd', 'dxa', 'dxe', 'exd'];


// =============== CASOS DE PRUEBA (CON ERRORES) =============== //
//let array = ['chair', 'height', 'racket', 'touch', 'tunic', 'car'];
//let array = ['ijk', 'kji', 'abc', 'cba'];
//let array = ['12', '51', '35', '23', '15'];


// Try & Catch para capturar los errores (bucle infinito => se intentó varias veces, pero no se encuentra un orden al Array)
try {

    if (array.length) { // Se valida que haya elementos dentro del Array

        const start = Date.now(); // Marca el inicio del proceso

        array = array.map(String); // Transforma todos los elementos del Array en String (validación previa)
        let result = circleOfWords(array); // Se ejecuta la función principal (Se le pasa el array)

        const stop = Date.now(); // Marca el fin del proceso

        if (result.length) { // Se valida que el resultado tenga elementos (resultado: Array)
            let content = '';

            // Se recorre todos los elementos del Array Ordenado (Resultado)
            for (let a = 0; a < result.length; a++) {
                content += result[a]; // Se contatena el elemento del Array Resultado
                if ((a + 1) != result.length) {
                    content += '\n'; // Salto de línea (siempre y cuando el elemento NO sea el último)
                }
            }

            // Se genera el archivo con el contenido de las palabras ordenadas (una palabra por línea)
            fs.writeFileSync('resultado.txt', content);

            // Mensajes de confirmación:
            // Confirmación del archivo TXT generado
            console.log('El resultado se encuentra en el archivo "resultado.txt"');
            // Confirmación del tiempo de ejecución de la función principal
            console.log(`El tiempo de ejecución fue de ${(stop - start)} milisegundos`);
        }

    } else {
        // Mensaje de error (Array vacío)
        throw new Error('Array Vacío');
    }

} catch (e) {
    // Mensaje de error (Se intentó, pero no se logró un orden en base a las reglas)
    console.error('No se puede formar un círculo con este array de palabras:', array);
}