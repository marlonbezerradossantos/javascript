"use strict"
// Use o método reduce() para reduzir um array de números com vários valores repetidos em um array de números sem valores repetidos.

const numeros = [1, 1, 2, 4, 3, 4, 7, 9, 3, 10, 10]
const numerosSemRepetidos = numeros.reduce(function(arr, atual) {
    if(!arr.includes(atual)) {
        arr.push(atual)
    }
    return arr
}, [])
console.log(numerosSemRepetidos)