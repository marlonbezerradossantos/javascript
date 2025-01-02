// "Como você consegue diferenciar um introvertido de um extrovertido na NSA?" -> "Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf."

// Seu trabalho é desenvolver uma função que decodifique a resposta da piada usando o ROT-13, uma cifra de césar cujo a chave é mover 13 casas do alfabeto.


// const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


let texto = "Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf."

function rot13(str) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase()
    function soma13(num) {
        for(c = 1; c <= 13; c++) {
            num <= 24 ? num++ : num = 0
        }
        console.log(num)
        return num
    }
    //console.log(soma13(2))
    str = str.split('')
    for(c = 0; c <= str.length; c++) {
        if(!/[A-Za-z]/.test(str[c])) {
            continue
        }
        let index = alfabeto.indexOf(str[c])
        index = soma13(index)  
    }
}
rot13(texto)


// uma forma de aplicar a função soma13 e substituir os caracteres somente nas letras ignorando espaços e etc