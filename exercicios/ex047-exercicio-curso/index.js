"use strict"
//crie uma função que receba o peso e altura e retorne o IMC, ela deve gerar um erro se caso não receber parâmetro ou se caso não receber algum dos parâmetros necessários. Ela deve ser retornada em uma outra função que deve retornar uma classificação baseado no IMC da pessoa.

function imc(peso, altura){
    if(isNaN(peso) || isNaN(altura)) {
        throw Error('n passou')
    }
    return (peso / (altura ** 2)).toFixed(1)
    
}

function classificacao(imc) {
    const classes = {
        "Muito abaixo do peso": 16.9,
        "Abaixo do peso": 18.4,
        "Peso Normal": 24.9,
        "Acima do peso": 29.9,
        "Obesidade grau I": 34.9,
        "Obesidade grau II": 40
    }
    for(let msg in classes) {
        if(imc <= classes[msg]) {
            return `Seu IMC é de ${imc}m², portanto sua classificação é: ${msg}.`
        } if(imc > 40){
            return `Seu IMC é de ${imc}m², portanto sua classificação é: Obesidade grau III.`
        }
    }
}
console.log(classificacao(imc(80, 1.78)))
