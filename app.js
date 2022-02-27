let operaciones = require('./mate')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

start()

function start() {
    console.log('')
    console.log('-----------MENU DE OPERACIONES-----------')
    console.log('Selecciona una de las siguientes opciones: ')
    console.log('1. Suma')
    console.log('2. Resta')
    console.log('3. Multiplicacion')
    console.log('4. Division')
    console.log('5. Modulo')
    console.log('')

    let opcion = 0
    readline.question('Ingresa el número de la opción deseada: ', input => {
        opcion = parseInt(input, 10)
        opcion >= 1 && opcion <=5 ? leern1(opcion) : opcion == 6 ? salir() : error()
    })
}

function leern1(opcion) {
    let n1 = 0
        readline.question('Ingresa el primer número : ', input => {
            n1 = parseInt(input, 10)
            leern2(opcion, n1)
        })
}

function leern2(opcion, n1) {
    let n2 = 0
        readline.question('Ingresa el segundo número : ', input => {
            n2 = parseInt(input, 10)
            calcular(opcion, n1, n2)
            readline.close()
        })
}

function calcular(opcion, n1, n2) {
    let resultado = 0
    switch (opcion) {
        case 1:
            resultado = operaciones.suma(n1, n2)
            break;
        case 2:
            resultado = operaciones.resta(n1, n2)
            break;
        case 3:
            resultado = operaciones.multiplicacion(n1, n2)
            break;
        case 4:
            resultado = operaciones.division(n1, n2)
            break;
        case 5:
            resultado = operaciones.modulo(n1, n2)
            break;
        default:
            break;
    }
    console.log('El resultado es: ' + resultado)
}

function error() {
    console.log('Opción inválida, intente de nuevo') 
    start()
}

function salir() {
    console.log('Hasta pronto!')
    readline.close()
}