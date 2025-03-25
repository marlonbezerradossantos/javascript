"use strict"
//crie duas funções, uma sum() que deve retornar a média dos valores passados como argumento e average() que deve retornar a média dos valores passados. Ambos não tem limite de argumentos a serem passados, use e abuse dos métodos aprendidos na seção.

const numeros = [1, 20, 44, 17, 89, 63, 64, 2, 80]

function sum(){
    let nums = Array.from(arguments)
    nums = nums.reduce(function(atual, acumulador){
        return acumulador += atual
    })
    return nums
}

function average(){
    let total = 0;
    let nums = Array.from(arguments)
    nums.forEach(function(){
        total++
    })
    return Math.floor(nums.reduce(function(atual, acumulador){
        return acumulador += atual
    }) / total)
}

console.log(sum(...numeros))
console.log(average(...numeros))