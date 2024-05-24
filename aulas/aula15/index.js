// function criaPessoa(nome, idade) {
//     return {
//         nome:nome, 
//         idade:idade
//     }
// }


// pessoa1 = criaPessoa('Marlon', 20);
// console.log(pessoa1.nome);
// console.log(pessoa2.nome);

const pessoa = {
    nome: 'Marlon',
    idade: 19,
    idadePosterior: function(x) {
        return pessoa.idade + x;
    }
};

console.log(pessoa.idadePosterior(10));
