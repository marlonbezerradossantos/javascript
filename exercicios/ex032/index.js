// Escreva uma função que receba uma lista de arrays contendo intervalos entre dois números, retorne a soma destes intervalos valores sobrepostos de intervalos devem ser contabilizados somente uma vez.

function somaIntervalos(arr) {

    arr.map(function (x) {
        const bckp = x.pop()
        for (c = x[0] + 1; c < bckp; c++) {
            x.push(c)
        }
        x.push(bckp)
    })
    //console.log(arr)

    
    console.log(arr)
}

//console.log(somaIntervalos([[1, 4],[3, 5], [8, 10]]))
console.log(somaIntervalos([[1, 4], [7, 10], [3, 5]])) // = 7
