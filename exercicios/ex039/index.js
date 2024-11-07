// Crie uma função que irá aceitar duas strings, a primeira conterá uma sequência de caracteres aleatórios, a segunda conterá uma palavra, seu trabalho é avaliar se com os caracteres da primeira string pode-se formar a palavra da segunda string.

function scramble(str1, str2){
    let result = true
    const comp = str1.length
    str2 = str2.split("");
    str2.map(function(x) {
        if(str1.search(x) !== -1) {
            result = false
        }
    })
    return result
}

console.log(scramble('cedewaraaossoqqyt', 'codewars'))