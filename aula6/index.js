const nome = 'Marlon';
const sobrenome = 'Bezerra';
const idade = 19;
const peso = 60;
const altura = 1.72
let imc;
let anoNascimento;
imc = peso / (altura * altura)
anoNascimento = (2024 - idade) - 1;
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)
console.log(`Olá meu nome é ${nome}`)