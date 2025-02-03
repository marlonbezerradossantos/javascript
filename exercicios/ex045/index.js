"use strict"
// crie duas funções, uma que codifique um número decimal em um número maia, e outro que codifique um número maia em um número decimal

function paraDecimal(str) {
    str = String(str)
    str = str.split("\n")
    let strTemporaria = [];
    for(let linha = str.length - 1; linha >=  0; linha-- ) {
        strTemporaria.push(str[linha])
    }
    str = strTemporaria
    const basesNumericas = [1, 20, 360, 7200, 144000, 2880000]
    let indiceBase = 0
    let resultado = 0;
    let contaNumeros = 0
    for(let linha of str) {
        if(linha.includes('.')) {
            let contaPontos = 0
            for(let carac of linha) {
                if(carac === ".") {
                    contaPontos++
                }
            }
        contaNumeros += contaPontos
        } else if(linha.includes('-')){
            contaNumeros += 5
        } else if(linha.includes('O')) {
            contaNumeros += 0
        } else {
            resultado += contaNumeros * basesNumericas[indiceBase]
            indiceBase++
            contaNumeros = 0
        }
    }
    return resultado += contaNumeros * basesNumericas[indiceBase]
}

// console.log(paraDecimal("  .  \n     \n  0  "))
// console.log(paraDecimal('  .  \n     \n  O  '))
// console.log(paraDecimal("  .  \n-----\n-----\n     \n   0   \n     \n-----")) //1811
//console.log(paraDecimal(" ..  \n-----\n     \n  0  \n     \n  .  \n     \n  0  \n     \n  .  "))


function paraMaia(num) { 
    const symbols = {
        "0": "  0  \n",
        "1": "  .  \n",
        "2": " ..  \n",
        "3": " ... \n",
        "4": ".... \n",
        "5": "-----\n",
        pula: "     \n"
    }
    let contaPontos = 0;
    const limites = [144000, 7200, 360, 20, 1]
    let final = []
    const loopDedutor = (x) => {
        contaPontos = 0;
        while(num >= x){
            num -= x
            contaPontos++ 
        }
    }
    const criaSimbolo = (pontos) => {
        let stringBase = [];
        if(pontos === 0 /*&& integra === true*/) {
            stringBase.unshift(symbols["0"])
        }
        while(pontos > 0) {
            if(pontos > 5 /*&& integra === true*/) {
                while(pontos >= 5) {
                    pontos -= 5
                    stringBase.unshift(symbols["5"])
                }
            } 
            if (pontos < 5){
                for(let key in symbols) {
                    if(Number(key) === pontos /*&& integra === true*/) {
                        pontos -= Number(key)
                        stringBase.unshift(symbols[key])
                    }
                }
            }
        }
        stringBase.unshift(symbols.pula)
        for(let carac in stringBase) { 
            final += stringBase[carac]
        }
    }
    const deduz = () => {
        if(num <= 2880000 && num >= 14400){
            loopDedudor(limites[0])
            criaSimbolo(contaPontos)
        } else {
            criaSimbolo(0)
        }
        if(num <= 144000 && num >= 7200) {
            loopDedutor(limites[1])
            criaSimbolo(contaPontos)    
        } else {
            criaSimbolo(0)
        }
        if(num <= 7200 && num >= 360) {
            loopDedutor(limites[2])
            criaSimbolo(contaPontos)  
        } else {
            criaSimbolo(0)
        }
        if(num <= 360 && num >= 20) {
            loopDedutor(limites[3])
            criaSimbolo(contaPontos)     
        } else {
            criaSimbolo(0)
        }
        if(num <= 19){
            loopDedutor(limites[4])
            criaSimbolo(contaPontos)      
        } else {
            criaSimbolo(0)
        }
    }
    
    if(num === 0) {
        final.push('  O  \n     ')
    }

    while(num > 0) {
        deduz()
    }
    final = String(final)
    final = final.split("\n")
    while(true) {
        if(final[0] === "     " || final[0] === "  0  ") {
            final.splice(0, 1)
        } else {
            break
        }
    }
    final.splice(final.length - 1, 1)
    return final.join('\n')
}

console.log(paraMaia(0))
//console.log(paraMaia(2))
//console.log(paraMaia(10))
//console.log(paraMaia(360))
// console.log("---------------------------------------------------------------")
// console.log(paraMaia(1794))
//console.log(paraMaia(653))
