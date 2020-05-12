'use strict'

//funciones anonimas

function sumar(n1, n2, multiplicar) {
    var suma = n1 + n2
    multiplicar(suma)
    return suma
}

sumar(7,8, function (d) {
    console.log(`La suma es ${d}`);
    console.log(`La multiplicación es ` + d*2);
    
    
})