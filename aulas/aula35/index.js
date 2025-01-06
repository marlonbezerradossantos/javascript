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

numeros = [1, 2, 3, 4, 5] 
numeros = numeros.reduce(function(prev, x) {
    return prev + x
}, 0)
console.log(numeros)




