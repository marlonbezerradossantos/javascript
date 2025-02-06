"use strict"
// Crie uma função que calcule a média, ela deve ser capaz de receber um ou mais valores numéricos, deve retornar somente um número sendo este a média, deve gerar um erro se receber um parâmetro não numérico e deve retornar zero caso não receba nenhum parâmetro.

function media() {
    let contador = 0;
    if(arguments.length === 0) {
        return 0
    }
    let nums = Array.from(arguments)
    const isValid = nums.every(function(x){
        return !isNaN(x)
    })
    if(isValid === false) {
        throw new Error('Os valores passados precisam ser numéricos.')
    } else {
        for(let num of nums){
            contador += num
        }
        return contador / nums.length
    }
}

console.log(media(7, 7, 7, 9))
console.log(media("a", 1, 2, 'd'))