// Escreva uma função que receba uma string com 1 ou mais palavras, ela deve retornar a mesma string mas com as palavras com mais de 5 letras invertida.

function inverteLetras(str) {
    str = str.split(" ")
    for(c in str) {
        if(str[c].length >= 5) {
            const index = c
            let novaPalavra = ""
            str[c] = str[c].split("")
            for(i = str[c].length - 1; i >= 0; i--) {
                novaPalavra += str[c][i]
            }
            str[c] = novaPalavra
        }
    }
    return str.join(" ")
}

console.log(inverteLetras("Meu nome é Marlon tenho vinte anos"))