// Crie uma função que receba um número e o transforme em bits e então retorne a quantidade de 'ums'

function quantidadeDeUms(n) {
    let qtd = 0;
    num = n.toString(2).split('')
    for(c of num) {
        if(c === '1') {qtd++}
    }
    return qtd
}

console.log(quantidadeDeUms(19))