//Escreva uma função que receba 3 valores em que compõem um código RGB e converta e retorne este valor em hexadecimal. Os valores passados devem estar sempre entre 0-255 e se caso não estiverem neste range, eles devem ser arredondados para o valor mais próximo. Devemos sempre ter 6 digitos HEX retornados.

function hexToRgb(r, g, b) {
    let list = [r, g, b]
    for(c in list) {
        if(list[c] < 0) {
            list[c] = list[c] * (-1);
            list[c] -= list[c]
        } else if(list[c] > 255) {
            const bckp = list[c] - 255
            list[c] -= bckp
        }
    }
    return (list[0].toString(16).padStart(2, '0') + list[1].toString(16).padStart(2, '0') + list[2].toString(16).padStart(2, '0')).toUpperCase()
}
console.log(hexToRgb( 256,   290, 400))
