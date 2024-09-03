// Escreva um função que identifique números de IPv4 válidos. Eles devem ter 4 números separados por pontos, e também devem ser números de 0 a 255 lembrando que 0 a esquerda retornam False. Retorne True caso o número de IP seja válido.

function validaIP(ip) {
    const char = ip.length
    ip = ip.replace(/(\r\n|\n|\r)/gm, "")
    if(ip.length < char) {return false}
    ip = ip.split('.')
    if(ip.length > 4 || ip.length < 4) {return false}
    for(c of ip) {
        if(c === '') {return false}
        if(Number(c) > 255 || Number(c) < 0 || isNaN(Number(c)) || (Number(c) > 0 && (c[0] === '0' || c[0] === ' ')) || c[c.length - 1] === ' ' || c === '00') {return false}
        for(n of c) {if(isNaN(Number(n))) {return false}}
    }
    return true
}
console.log(validaIP('\n1.2.3.4'))
console.log(validaIP('1.2.3.4\n'))
console.log(validaIP('192.167.2.1'))
console.log(validaIP('192.167.02.1'))
console.log(validaIP('192.-167.2.1'))






