'use strict'

'use strict'

//funciones anonimas

function sumar(n1, n2, fun) {
    var suma = n1 + n2
    fun(suma)
    return suma
}

//Flecha
sumar(7, 8, d => {
    console.log(`La suma es ${d}`);
    console.log(`La multiplicación es ` + d * 2);
})

//Si lleva mas de un parentesis si incluiremos los parentesis
