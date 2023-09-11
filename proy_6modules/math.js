// Se crea un objeto llamado "math" para almacenar las funciones relacionadas con cálculos y conversiones.
const math = {};

// Función que invierte el orden de los dígitos de un número utilizando operaciones matemáticas.
const invertirNumero = numero => {
    let invertido = 0;
    while (numero !== 0) {
        invertido = 10 * invertido + numero % 10; // Agrega el último dígito al número invertido.
        numero = Math.floor(numero / 10); // Elimina el último dígito del número original.
    }
    return invertido; // Devuelve el número invertido.
};

// Función que convierte un número en cadena, invierte sus caracteres y lo devuelve como cadena.
const invertirNumeroComoTexto = numero => {
    const invertirNumeroComoTexto = numero.toString().split("").reverse().join("");
    return invertirNumeroComoTexto;
};

// Función que invierte el orden de los caracteres en una cadena y la devuelve invertida.
const invertirTexto = texto => {
    const splitText = texto.split(''); // Divide la cadena en un arreglo de caracteres.
    const reversedText = splitText.reverse(); // Invierte el arreglo de caracteres.
    const joindText = reversedText.join(''); // Une los caracteres invertidos en una cadena.
    return joindText; // Devuelve la cadena invertida.
};

// Función que invierte el orden de los elementos en un arreglo y lo devuelve invertido.
const invertirArreglo = arreglo => {
    const reverseObjecto = arreglo.reverse(); // Invierte el orden de los elementos en el arreglo.
    return reverseObjecto; // Devuelve el arreglo invertido.
};

// Función que realiza conversiones basadas en el tipo de dato proporcionado.
const conversionDatos = data => {
    let datatype = typeof data; // Obtiene el tipo de dato del valor.
    let dataVar;

    // Comprueba si el valor es vacío, nulo, indefinido o un arreglo vacío.
    if (data === '' || data === null || data === undefined || data.length === 0) {
        dataVar = 'El valor ingresado está vacío o incorrecto';
    } else {
        console.log(`El valor ingresado es de tipo: ${datatype}, con valor de ${data}`);
        switch (datatype) {
            case 'number':
                dataVar = invertirNumero(data); // Si es un número, invierte sus dígitos.
                break;
            case 'string':
                dataVar = invertirTexto(data); // Si es una cadena, invierte sus caracteres.
                break;
            case 'object':
                dataVar = invertirArreglo(data); // Si es un objeto (arreglo), invierte sus elementos.
                break;
            default:
                dataVar = 'El valor ingresado no se puede invertir'; // Otros tipos no son invertibles.
        }
    }
    return dataVar; // Devuelve el resultado de la conversión o el mensaje de error.
}

// Asigna las funciones definidas anteriormente como propiedades del objeto "math".
math.invertirNumero = invertirNumero;
math.invertirNumeroComoCade = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

// Exporta el objeto "math" para que pueda ser utilizado por otros archivos.
module.exports = math;