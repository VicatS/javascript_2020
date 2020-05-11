'use strict'

var n1 = prompt(`Tell me a word`, `You have not put anything`)
var n2 = prompt(`Tell me a word`, `You have not put anything`)

function JoinWords(n1, n2) {
    var PalabrasUnidas = `${n1} ${n2}`

    return PalabrasUnidas
}

var resultado = JoinWords(n1, n2)

console.log(resultado)