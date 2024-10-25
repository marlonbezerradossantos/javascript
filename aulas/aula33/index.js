// Estudo de Expressões Regulares - (RegEx)

const texto = "25/10/24"
const regex = /\d{2}/\d{2}/\d{4}/gi;
//console.log(texto.match(/(Olá,) (meu nome)/gi))
console.log(texto.replace(regex, "$2/$1/$3"))
//console.log(texto)