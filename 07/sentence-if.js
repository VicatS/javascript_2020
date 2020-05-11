'use strict'

var age = 31

if (age > 18) {
    console.log(`Eres mayor de edad`)
} else{
    console.log(`Eres menor de edad`)
}

if (age > 18 || age < 30) {
    console.log(`Estas entre 19 y 30 años`)
} else  {
    console.log(`Muy chiquito o demasiado mayor xD`)
}

// == comparador exacto
// > Mayor que
// < Menor que
// != Diferente a

// AND && Si ambas son verdaderas da true
// OR || Si una es verdadera da true
// NOT ! Si una es false da false