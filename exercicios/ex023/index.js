// Faça uma função que receba uma string e formate ela em uma hashtag.
// Seu retorno deverá ser uma string com um simbolos de "#", todas 
// as primeiras letras das palavras deverão estar em maiusculo, se no 
// final o número de caracteres for maior do que 140 retorne falso e se
// for enviado uma string vazia retorne falso.

function geradorDeHashtag(str) {
    if (str.length === 0) return false;
    let tag = str.split(" ");
    for (c in tag){
       let palavra = tag[c];
       palavra = palavra.split('')
       palavra[0] = palavra[0].toUpperCase();
       palavra = palavra.join('')
       tag[c] = palavra
    }
    tag = tag.join('')
    return tag.length >= 139 ? false : `#${tag}`
}
console.log(geradorDeHashtag('computador e legal'))
