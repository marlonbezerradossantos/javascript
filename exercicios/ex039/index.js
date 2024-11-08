// Crie uma função que irá aceitar duas strings, a primeira conterá uma sequência de caracteres aleatórios, a segunda conterá uma palavra, seu trabalho é avaliar se com os caracteres da primeira string pode-se formar a palavra da segunda string.

function scramble(str1, str2) { 
    for(c in str2) {
        let result = str1.search(str2[c]); 
        if(result >= 0) {
            str1 = str1.split("")
            str1.splice(result, 1)
            str1 = str1.join("")
        } else {
            return false
        }
   }
   return true
}

console.log(scramble('rkqodlw', 'world')) // true
console.log(scramble('scriptjavx', 'javascript' )) // == false
console.log(scramble('cedewaraaossoqqyt', 'codewars')) // true
console.log(scramble('katas', 'steak')) // false
