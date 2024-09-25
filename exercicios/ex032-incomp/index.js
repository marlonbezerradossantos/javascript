// Escreva uma função que receba uma lista de arrays contendo intervalos entre dois números, retorne a soma destes intervalos valores sobrepostos de intervalos devem ser contabilizados somente uma vez.

function somaIntervalos(arr) {
    const repete = []
    let newArr = []
    
    arr.map(function(x){
        const bckp = x.pop()
        for(c = x[0] + 1; c < bckp; c++){
            x.push(c)
        }
        x.push(bckp)
    })
    
    
//////////////////////////////
    for(c of arr) {
        for(i of c) {
            newArr.push(i)
        }
    }
    for(c = 0; c < newArr.length; c++) {
        if(newArr[c] > newArr[c + 1]) {
            const bckp = newArr[c]
            newArr[c] = newArr[c + 1]
            newArr[c + 1] = bckp
            c = 0
        }
    }
    for(c in newArr) {
        for(i in arr) {
            //console.log(`Comparando o Index: ${i} com o numero ${arr[i]} /// array completo = ${arr[i]}`)
            if(arr[i].includes(newArr[c])) {
                repete.includes(i) ? '' : repete.push(i)
            } 
        }
    }
    console.log(repete)
}


//console.log(somaIntervalos([[1, 4],[3, 5], [8, 10]]))
console.log(somaIntervalos([[1, 4], [7, 10], [3, 5]])) // = 7
//console.log(somaIntervalos([[1, 5],[1, 6],[5, 11],[10, 20],[16, 19]])) // = 7
