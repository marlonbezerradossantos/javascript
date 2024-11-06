// Crie uma função que avalie o orçamento disponivel e o preço da bebida e diga quantas latas da pra comprar pra fazer a pirâmide. Então faça os cálculos necessários de quantos andares da pra fazer tendo em mente que o número do andar ao quadrado significa quantas latas serão usadas para preenchê-la.

function beeramide(dinheiro, preco) {
    if(dinheiro <= 0) {return 0}
    const latas = dinheiro / preco;
    let andares = 0;
    let latasUsadas = 0;
    while(latasUsadas < latas) {
        andares++
        latasUsadas += andares ** 2
    }
    return latasUsadas > latas ? andares - 1 : andares;
}

console.log(beeramide(0, 4))