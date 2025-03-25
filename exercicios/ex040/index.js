// "Como você consegue diferenciar um introvertido de um extrovertido na NSA?" -> "Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf."
// Seu trabalho é desenvolver uma função que decodifique a resposta da piada usando o ROT-13, uma cifra de césar cujo a chave é mover 13 casas do alfabeto.

let texto = "Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf."
function rot13(str) {
    let alfabeto = "abcdefghijklmnopqrstuvwxyz"
    str = str.split('')
    function soma13(num) {
        for(c = 1; c <= 13; c++) {
            num <= 24 ? num++ : num = 0
        }
        return num
    }
    for(c in str) {
        /[A-Z]/.test(str[c]) === true ? alfabeto = alfabeto.toUpperCase() : alfabeto = alfabeto.toLowerCase()
        if(!/[A-Za-z]/.test(str[c])) {
            continue
        }
        let index = alfabeto.indexOf(str[c])
        str[c] = alfabeto[soma13(index)]
    }
   str = str.join('')
   return str
}
console.log(rot13(texto))
// uma forma de aplicar a função soma13 e substituir os caracteres somente nas letras ignorando espaços e etc