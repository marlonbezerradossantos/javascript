let nome = 'Marlon';
nome[5] = 'b';
console.log(nome);

let a = 'a'; //declaramos uma variavel com o valor "a"
let b = a; //agora a variavel "b" recebeu uma CÓPIA de "a"
a = 'c' //e então "a" recebeu outro valor
console.log(a, b) // ao exibirmos temos que as variáveis "A" e "B" tem são diferentes e não estão ligados

const nomes = ['Marlon', 'José', 'Geane', 'João']
nomes[0] = 'Giovana';
console.log(nomes)

const nomes = ['Marlon', 'João', 'José', 'Geane'];  
const novoNomes = nomes;
novoNomes[0] = 'Fulano';
console.log(nomes);
console.log(novoNomes)