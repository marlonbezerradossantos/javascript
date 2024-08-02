// crie uma função que retorne a soma dos multiplos de 3 e 5 abaixo do numero passado como parâmetro

function multiplosDeTresECinco(num){
    let soma = 0;
    for (let i = 0; i < num; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}

console.log(multiplosDeTresECinco(100))