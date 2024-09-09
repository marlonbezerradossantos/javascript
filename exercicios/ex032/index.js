// Escreva uma função que receba uma lista de arrays contendo intervalos entre dois números, retorne a soma destes interalos valores sobrepostos de intervalos devem ser contabilizados somente uma vez.

function somaIntervalos(arr) {
    /////
    let cont = 0;
    let soma = 0;
    arr.map(function(e){
        const bckp = e.pop()
        for(i = e[0] + 1; i < bckp; i++) {
            e.push(i)
        }
        e.push(bckp)
    })

    for(c of arr) {
        soma += c[c.length - 1] - c[0]
        //console.log('sou o arr:', c, '/// tenho essa soma', soma)
    }
    //console.log('eu', soma)
    const newArr = [...arr[0], ...arr[1], ...arr[2]]
    
    for(c = 0; c < newArr.length; c++) {
        if(newArr[c] > newArr[c + 1]) {
            const bckp = newArr[c]
            newArr[c] = newArr[c + 1]
            newArr[c + 1] = bckp
            c = 0
        } 
    }

    for(c = 0; c < newArr.length; c++) {
        if(newArr[c] === newArr[c + 1]) {
            soma--
        }
    }
    console.log(newArr)
    console.log(cont)
    console.log(soma)
    return soma - (cont)
}

const lista = [1, 2, 3]





console.log(somaIntervalos([[1, 4], [7, 10],[3, 5]]))