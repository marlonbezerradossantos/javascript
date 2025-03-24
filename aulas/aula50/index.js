// spread operator
const arr = [1, 2, 3, 4]
function sum() {
    let total = 0;
    for(c of arguments) {
        total += c
    }
    return total
}
console.log(sum(...arr))

// ex 2
const arr2 = [5, 6, 7, 8]
arr.push(...arr2)
console.log(arr)
