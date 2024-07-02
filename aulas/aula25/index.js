const pessoa = {
    nome: "Marlon",
    sobrenome: "Bezerra",
    idade: 20,
    endereco: {
        rua: "Travessa do Mikami",
        num:20
    }
}

const {nome: n, sobrenome, idade, endereco: {rua, num}} = pessoa;
console.log(n, sobrenome, idade, rua, num);

// function display({ultimo, nome, sobrenome}) { // Aqui foi passado somente os "valores" do obj
//     console.log(`Meu nome completo é ${nome} ${sobrenome} ${ultimo}. Prazer!"`)
// }



// display(nomeCompleto);

// No caso dos objetos, nós podemos desestruturá-los nos argumentos de uma função, quando passamos um objeto como argumento a função busca no objeto passado os valores necessários para a execução através do nome das propriedades e o nome dos parâmetros pedidos, portanto o nome dos parâmetros devem ser passados entre chaves e ter seus nomes iguais para que a função retire seus valores para usá-los

// const marcas = ["Natura", "O Boticário", "Avon"];
// const [marca1, ...resto] = marcas;
// console.log(marca1);
// console.log(resto);
// console.log(600/17)