// Escreva uma função que receba um número inteiro maior do que 0 representando segundos e retorne o horário em um formato legível para humanos

function tempo(seconds) {
    function zeroAEsquerda(num) {
        return num < 10 ? "0" + num.toString() : num
    }
    const horas = Math.floor(seconds / 60 / 60)
    seconds -= horas * 60 * 60
    const minutos = Math.floor(seconds / 60)
    seconds -= minutos * 60
    return zeroAEsquerda(horas) + ":" + zeroAEsquerda(minutos) + ":" + zeroAEsquerda(seconds)
}

console.log(tempo(3600)) // 01:00:00
console.log(tempo(45296)) // 12:34:56
console.log(tempo(3660)) // 01:01:00
console.log(tempo(359999)) // 99:59:59