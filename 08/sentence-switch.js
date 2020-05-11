'use strict'

var age = 17
var text = ''

switch (age) {
    case 17:
        text = `No tienes 18 años`
        break;
    case 18:
        text = `Eres mayor de edad`
        break;
    default:
        `Parece que no tienes edad`
}

console.log(text)