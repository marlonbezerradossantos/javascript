"use strict"
// Crie uma função que calcule a média, ela deve ser capaz de receber um ou mais valores numéricos, deve retornar somente um número sendo este a média, deve gerar um erro se receber um parâmetro não numérico e deve retornar zero caso não receba nenhum parâmetro.

function media() {
    
    if(arguments.length === 0) {
        return 0
    }

    let nums = []
    for(let c of arguments){
        nums.push(c)
    }

    for(let c of nums) {
        console.log(c)
    }

    try {
        const isValid = nums.every(function(x){
            return x == NaN
        })
        console.log(isValid)
    } catch(e) {
        console.log("executado")
    }
    
}

//console.log("a" === NaN)
//media("a","b","c")
media(1, 2, 3, 4)
//console.log(media())