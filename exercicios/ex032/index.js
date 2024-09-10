// Escreva uma função que receba uma lista de arrays contendo intervalos entre dois números, retorne a soma destes interalos valores sobrepostos de intervalos devem ser contabilizados somente uma vez.

function somaIntervalos(arr) {
    let qtd = 0
    items = arr.length
    arr.map(function(x){//PREENCHE OS ARRAYS
        const bckp = x.pop()
        for(c = x[0] + 1; c < bckp; c++) {
            x.push(c)
        }
        x.push(bckp)
    })
    const newArr = [...arr[0], ...arr[1], ...arr[2]] //CRIA UM ARRAY UNICO COM TODOS OS NUMEROS
    for(c = 0; c < newArr.length; c++) { //ITERA SOBRE TODOS OS ITENS
        if(newArr[c] > newArr[c + 1]) { // PÕE OS ITENS EM ORDEM
            const bckp = newArr[c]
            newArr[c] = newArr[c + 1]
            newArr[c + 1] = bckp
            c = 0
        } 
        if(newArr[c + 1] === newArr[c]) { //REMOVE ITENS REPETIDOS
            newArr.splice(newArr[c], 1)
           
        }
    }
    //console.log(qtd)
    
    return newArr.length - items -1
}

console.log(somaIntervalos([[1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]]))