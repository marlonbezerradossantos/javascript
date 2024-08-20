// crie uma função que retorne True caso o número enviado como argumento seja narcisista e False caso não seja, um número narcisista é quando a soma de seus digitos elevado pela quantidade de algarismos resulta no próprio número

function narcisista(n) {
    let soma = 0;
    let num = n.toString()
    num = num.split('')
    for(c of num) {
        c = Number(c)
        soma += c ** num.length
    }
    return (soma === n) ? true : false;
}

console.log('153 é um número narcisista? = ', narcisista(153));
console.log('256 é um número narcisista? = ', narcisista(256));
console.log('7 é um número narcisista? = ', narcisista(7));
console.log('889 é um número narcisista? = ', narcisista(889));