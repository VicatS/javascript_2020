'use strict'

var n1 = prompt(`Tell me a word`, `A`)
var n2 = prompt(`Tell me a word`, `Other`)

function MostrarConsola(n1, n2) {
    console.log(`${n1} ${n2}`)
}

function EnDocumento(n1, n2) {
    document.write(`${n1} ${n2}`)
}

function Mostrar(n1, n2, n3 = false) {
    if (n3 == false) {
        MostrarConsola(n1, n2)
    }else{
        EnDocumento(n1, n2)
    }
}

Mostrar(n1, n2, true)