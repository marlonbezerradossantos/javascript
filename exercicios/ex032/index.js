// Escreva uma função que receba uma lista de arrays contendo intervalos entre dois números, retorne a soma destes interalos valores sobrepostos de intervalos devem ser contabilizados somente uma vez.

// function somaIntervalos(arr) {
//    console.log(arr)
//    for(c = 0; c < arr.length; c++) {
//     let bckp = c[0]
//           // 0       // 1
//     if(arr[0][1] > arr[0 + 1][1]) {
//           // 0
//         arr[0] = arr[0 + 1]
//         arr[0 + 1] = arr[0]
//         c = 0
//     }
//    }
//    console.log(arr)
// }

// console.log(somaIntervalos([[1, 5],[2, 20],[3, 10]]))

let lista = [[1], [2], [3]];
lista[1] = lista[2];
console.log(lista)