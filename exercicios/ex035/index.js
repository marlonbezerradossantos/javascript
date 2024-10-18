// Escreva uma função que receba dois arrays numéricos com a mesma quantidade de caracteres, compare os seus valores correspondentes para pegar a diferença entre eles e então faça o cálculo destes números ao quadrado, retorne a média deste array.

function comparaArray(arr1, arr2) {
    let soma = 0;
    let newArr = []
    const parametroMedia = arr1.length;
    for(c in arr1) {
        let result;
        arr1[c] > arr2[c] ? result = arr1[c] - arr2[c] : result = arr2[c] - arr1[c];
        newArr.push(result ** 2);
    }
    for(c of newArr) {
        soma += c;
    }
    return soma / parametroMedia;
}

console.log(comparaArray([1, 2, 3], [4, 5, 6])) // 9 porque (9 + 9 + 9) / 3
console.log(comparaArray([10, 20, 10, 2], [10, 25, 5, -2]))
console.log(comparaArray([-1, 0], [0, -1]))
is