////testeeeee

function quantidadeDeUms(n) {
    let qtd = 0;
    console.log(n.toString(2))
    num = n.toString(2).split('')
    for(c of num) {
        if(c === '1') {qtd++}
    }
    return qtd
}

console.log(quantidadeDeUms(19))