// crie duas funções, uma que codifique um número decimal em um número maia, e outro que codifique um número maia em um número decimal

function paraDecimal(str) {
    str = str.split("\n")
    const basesNumericas = [1, 20, 360, 7200, 144000, 2880000]
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
//console.log(paraDecimal("  .  \n-----\n-----\n     \n   0   \n     \n-----")) //1811


function paraMaia(num) {
    const symbols = {
        zero: "  0  ",
        um: "  .  ",
        dois: " ..  ",
        tres: " ... ",
        quatro: ".... ",
        cinco: "-----",
        pula: "     "
    }
    const bases = [1, 20, 360, 7200, 144000, 2880000]
    let indiceBase = 0;
    let resultado = 0;
    let somaNums = 0

    // while(somaNums < 359 && somaNums < num){
    //     somaNums += 20
    //     console.log(somaNums)
    // }
    // while(somaNums < 7199 && somaNums < num) {
    //     somaNums += 360
    //     console.log(somaNums)
    // }
    // while(somaNums < 143999 && somaNums < num) {
    //     somaNums += 7200
    //     console.log(somaNums)
    
    // } while(somaNums < 2879999 && somaNums < num) {
    //     somaNums += 144000
    //     console.log(somaNums)
    // }


    const breaksESomas = {
        "359": 20,
        "7199": 360,
        "143999": 7200,
        "2879999": 144000
    }
    controle = 0;
    function acumula(quebra, soma) {
        quebra = Number(quebra)
        while(somaNums < quebra && somaNums < num) {
            somaNums += soma
            //console.log(somaNums)
        }
     
        controle++
        
    }

    for(c in breaksESomas) {
        acumula(c, breaksESomas[c])
    }
}


paraMaia(1794)