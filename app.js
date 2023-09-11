// Requiere el paquete 'colors' para habilitar colores en la consola.
require('colors');

// Importa el módulo "math.js" desde la ruta local "./proy_6modules/math.js".
const math = require('./proy_6modules/math.js');

// Definición de la función principal como asíncrona.
const main = async () => {
    // Imprime un saludo en color rojo usando el paquete 'colors'.
    console.log('*****************************************************************'.cyan);
    console.log(`*                     `.cyan, 'hola SENA CBA'.bgRed,`                           * `.cyan);
    console.log('*****************************************************************'.cyan);
    console.log('*****************************************************************'.cyan);
    console.log(`*                     `.cyan, 'FUNCION NUMERO'.bgRed,`                          * `.cyan);
    console.log('*****************************************************************'.cyan);
     // Array de números para probar las funciones.
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
    for (const numero of numeros) {
        // Utiliza las funciones del módulo "math" para invertir números y mostrar resultados.
        const invertidoComoNumero = math.invertirNumero(numero);
        const invertidoComoCadena = math.invertirNumeroComoCade(numero);
        console.log("El número '%s' invertido como número es '%s', y como cadena es '%s'",
            numero, invertidoComoNumero, invertidoComoCadena);
    }
    console.log('*****************************************************************'.cyan);
    console.log('*****************************************************************'.cyan);
    console.log(`*                     `.cyan, 'FUNCION TEXTO'.bgRed,`                           * `.cyan);
    console.log('*****************************************************************'.cyan);
    // Array de textos para probar las funciones.
    const textos = ['Hola Sena', 'Ficha 2798618', 'Analisis y desarrollo de software'];
    for (const texto of textos) {
        // Utiliza la función del módulo "math" para invertir textos y mostrar resultados.
        const textoInvertido = math.invertirTexto(texto);
        console.log("El texto '%s' invertido es '%s'", texto, textoInvertido);
    }
    console.log('****************************************************************'.cyan);
    console.log(`*                      `.cyan, 'RESULTADOS'.bgRed,`                            * `.cyan);
    console.log('****************************************************************'.cyan);
    // Array de datos diversos para probar las conversiones.
    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO']];
    for (let dato of datos) {
        // Utiliza la función del módulo "math" para realizar conversiones y mostrar resultados.
        const datoConvertido = math.conversionDatos(dato);
        console.log(`El resultado de la conversión es: ${datoConvertido}`);
    }
    console.log('****************************************************************'.cyan);
}

// Llama a la función principal para ejecutar el programa.
main();