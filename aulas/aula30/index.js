const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (n of numeros) {
    
    if (n === 4) {
        console.log('[PULADO]')
        continue
    }
    console.log(n)
}

console.log('==============================')

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (n of nums) {
    if (n === 7) {
        break
    }
    console.log(n)
}