// Escreva um função que identifique números de IPv4 válidos. Eles devem ter 4 números separados por pontos, e também devem ser números de 0 a 255 lembrando que 0 a esquerda retornam False. Retorne True caso o número de IP seja válido.

function validaIP(ip) {
    ip = ip.split('.');
    //console.log(ip)
    if(ip.length > 4 || ip.length < 4) {return false}
    for(n of ip) {
        if(Number(n) > 255 || (n.length > 1 && n[0] === '0') || n === '') {return false}
        if(n[0] === "\n" || n[-1] === "\n") {return false}
        for(c of n) {
            if(isNaN(c)) {return false}
        }
    }
    //console.log(ip)
    return true
}
console.log(validaIP('1.2.3.4\n')) 

console.log(validaIP('\n1.2.3.4')) 