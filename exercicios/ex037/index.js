//Crie uma função que codifique uma string trocando suas vogais por número de 1 a 5 de acordo com a ordem das letras respectivamente, e então crie uma outra função que decodifique essa string transformando seus números em suas respectivas vogais

function encode(str) {
    const vogais = ["a", "e", "i", "o", "u"]
    str = str.split("");
    for(c in str) {
        for(i in vogais) {
            if(str[c] === vogais[i]) {
                str[c] = Number(i) + 1
            }
        }
    }
    return str.join("")
}

function decode(str) {
    const vogais = ["a", "e", "i", "o", "u"];
    str = str.split("");
    for(c in str) {
        for(i = 1; i < vogais.length + 1; i++) {
            if(str[c] == i){
                str[c] = vogais[i-1]
            }
        }
    }
    return str = str.join("")
}

console.log(encode('Marlon Bezerra dos Santos'))
console.log(decode(encode('Marlon Bezerra dos Santos')))
