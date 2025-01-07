// Praticando métodos de Array


// --> Includes()
const nomes = ["Marlon", "José", "Geane", "João"]
//console.log(nomes.includes("José"))

// --> ForEach()
let numeros = [1, 2, 3, 4, 5]
numeros.forEach(multiplica)
function multiplica(x) {
    //console.log(x * 2)
}

numeros.forEach(function(x) {
    //console.log(x * 2)
})

// --> Map() 

numeros = numeros.map(function(x){
    return x * 2
})
//console.log(numeros)

// --> Filter()

//console.log(numeros)
numeros = numeros.filter(function(x) {
    return x > 6
})
//console.log(numeros)

// --> Reduce()

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] 
numeros = numeros.reduce(function(prev, x) {
    return prev + x
}, 0)
//console.log(0, numeros)

// --> Every()
numeros = [2, 4, 6, 7]
const saoPares = numeros.every(function(x){
    return x % 2 === 0
})
//console.log(saoPares)

// --> Some()

numeros = [2, 4, 5, 6, 8]
const temImpar = numeros.some(function(x){
    return x % 2 === 1
})
//console.log(temImpar)

// --> From()

let str =  "Marlon"
str = Array.from(str)
//console.log(str)

// --> With()

nomes2 = nomes
nomes2 = nomes.with(3, "Fulana")
//console.log(nomes, nomes2)

// --> Splice()

let names = ["Marlon", "João", "José", "Geane"]
names.splice(0, 2, "Fulano", "Cicrano")
console.log(names)









