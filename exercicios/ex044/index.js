// crie uma função que receberá um array contendo números inteiros, ela deverá retornar qual número se repete uma quantidade ímpar de vezes, só haverá um único número que se repetirá uma quantidade ímpar de vezes

function identificaImparVezes(arr) {
    for(c of arr) {
        let contador = 0;
        for(i of arr){
            if(c === i) {
                contador++
            }
        }
        if(contador % 2 === 1) {
            return c
        }
    }
}

console.log(identificaImparVezes([0, 0, 0, 1, 1, 2, 4 , 2, 4, 5, 5, 5, 5, 6, 6 ])) // 2