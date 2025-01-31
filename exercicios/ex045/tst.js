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
    let final = [];
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