// function hexToRgb(r, g, b) {
//     let list = [r, g, b]
//     for(c in list) {
//         if(list[c] < 0) {list[c] = list[c] * (-1) - list[c]}
//         console.log(list[c])
//     }
//     console.log(list)
//     return (r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0')).toUpperCase()
// }

// console.log(hexToRgb( 0,   0, -20))

let lista = [-1, -10, -20]
for(c in lista) {
    if(lista[c] < 0) {
        lista[c] = lista[c] * (-1) - lista[c] 
    }
}
console.log(lista)