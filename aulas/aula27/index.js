//objetos não são iteraveis pelo "for normal" 
const pessoa = {
    nome: 'Marlon',
    sobrenome: 'Bezerra',
    idade: 20
}

const numeros = ['Marlon', 'João', 'Geane', 'José']

// for (v of numeros) {
//     console.log(v)
// }

for (p of pessoa) {
    console.log(p)
}