const nomeCompleto = {
    nome: 'Marlon',
    sobrenome: "Bezerra",
    ultimo: "Dos Santos"
}

function display({ultimo, nome, sobrenome}) { // Aqui foi passado somente os "valores" do obj
    console.log(`Meu nome completo é ${nome} ${sobrenome} ${ultimo}. Prazer!"`)
}

display(nomeCompleto);

// No caso dos objetos, nós podemos desestruturá-los nos argumentos de uma função, quando passamos um objeto como argumento a função busca no objeto passado os valores necessários para a execução através do nome das propriedades e o nome dos parâmetros pedidos, portanto o nome dos parâmetros devem ser passados entre chaves e ter seus nomes iguais para que a função retire seus valores para usá-los

const marcas = ["Natura", "O Boticário", "Avon"];
const [marca1, ...resto] = marcas;
console.log(marca1);
console.log(resto);