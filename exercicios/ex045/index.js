// crie duas funções, uma que codifique um número decimal em um número maia, e outro que codifique um número maia em um número decimal

function paraDecimal(str) {

    str = str.split("\n")
    const digitos = {
        zero: /0/gi,
        um: /./gi,
        cinco: /-----/gi
    }
    const basesNumericas = [1, 20, 360, 7200, 144000]
    let indiceBase = 0
    let resultado = 0;
    let contaNumeros = 0
    for(linha of str) {
        if(linha.includes('.')) {
            let contaPontos = 0
            for(carac of linha) {
                if(carac === ".") {
                    contaPontos++
                }
            }
        contaNumeros += contaPontos
        } else if(linha.includes('-')){
            contaNumeros += 5
        } else if(linha.includes('0')) {
            contaNumeros += 0
        } else {
            resultado += contaNumeros * basesNumericas[indiceBase]
            indiceBase++
            contaNumeros = 0
        }
    }
    return resultado += contaNumeros * basesNumericas[indiceBase]
}

//console.log(paraDecimal("  .  \n-----\n-----\n     \n   0   \n     \n-----"))

console.log(paraDecimal("-----\n-----\n-----\n ... \n     \n-----\n-----\n  .  \n     \n-----\n     \n  0  \n     \n-----\n-----\n-----\n     \n-----\n.... "))



