'use strict'

var n1 = prompt(`Tell me a word`, `You have not put anything`)
var n2 = prompt(`Tell me a word`, `You have not put anything`)

// function JoinWords(n1, n2, n3=false) {
//     var PalabrasUnidas = `${n1} ${n2}`
//
//     return PalabrasUnidas
// }
//
// var resultado = JoinWords(n1, n2)
//
// console.log(resultado)


function JoinWords(n1, n2, n3=false) {
    if (n3 == false) {
        console.log(`${n1} ${n2}`)
    }else{
        document.write(`${n1} ${n2}`)
    }
}

// JoinWords(n1, n2, false)
JoinWords(n1, n2, true)