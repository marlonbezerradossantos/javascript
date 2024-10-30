// Estudo de Expressões Regulares - (RegEx)

// const nome = 'Marlon Bezerra dos Santos'
// regex = /(([a-z]+) ([a-z]+)) ([a-z]+) ([a-z]+)/gi
// const texto = nome.replace(regex, "$4 $5 $1 $2 $3 $1")
// console.log(texto)
const texto = "Essa piada foi muito boa ashuashuashuashuashua"
console.log(texto.match(/\S+/g))

