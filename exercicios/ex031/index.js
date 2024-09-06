// crie diversas funções que realizarão calculos sem passarmos parâmetros, somente funções passadas como argumento, teremos 4 funções de operadores (+, -, /, *) e 9 funções que representarão números de 0 a 9.

function calcula(op, n1, n2) {
    if(op === 's') {
        return n1 + n2
    } else if(op === 'm') {
        return n1 - n2
    } else if (op === 'v') {
        return n1 * n2
    } else {return Math.floor(n1 / n2)}
}

function zero(x) {
    if (x === undefined) {return 0}
    const r = calcula(x[0], 0, x[1])
    return r
}

function one(x) {
    if (x === undefined) {return 1}
    const r = calcula(x[0], 1, x[1])
    return r
}

function two(x) {
    if (x === undefined) {return 2}
    const r = calcula(x[0], 2, x[1])
    return r
}

function three(x) {
    if (x === undefined) {return 3}
    const r = calcula(x[0], 3, x[1])
    return r
}

function four(x) {
    if (x === undefined) {return 4}
    const r = calcula(x[0], 4, x[1])
    return r
}

function five(x) {
    if (x === undefined) {return 5}
    const r = calcula(x[0], 5, x[1])
    return r
}

function six(x) {
    if (x === undefined) {return 6}
    const r = calcula(x[0], 6, x[1])
    return r
}

function seven(x) {
    if (x === undefined) {return 7}
    const r = calcula(x[0], 7, x[1])
    return r
}

function eight(x) {
    if (x === undefined) {return 8}
    const r = calcula(x[0], 8, x[1])
    return r
}

function nine(x) {
    if (x === undefined) {return 9}
    const r = calcula(x[0], 9, x[1])
    return r
}

function plus(x) {
    return ['s', x]
}

function minus(x) {
    return ['m', x]
}

function times(x) {
    return ['v', x]
}

function dividedBy(x) {
    return ['d', x]
}

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))