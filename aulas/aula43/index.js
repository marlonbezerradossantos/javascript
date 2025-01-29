"use strict" 

function soma(n1, n2) {
    //console.log(n1, n2)
    let final = 0;
    for(let c of arguments) {
        final += c
    }
    return final
}

console.log(soma(1, 2, 3, 40, 100)) 