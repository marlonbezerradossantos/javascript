// Faça uma função que receba uma string e retorne True se caso ela for um pangrama, ou seja, possuir todas as letras do alfabeto pelo menos uma vez, retorne Falso caso não seja.

function isPangram(str) {
    str = str.toLowerCase()
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let cont = 0;
    for(l in alphabet) {
        const indice = str.indexOf(alphabet[l]);
        if(indice >= 0) {cont += 1}
    }
    return cont === 26 ? true : false;
}

console.log(isPangram("Zebras caolhas de Java querem mandar fax para moça gigante de New York"))
console.log(isPangram("The quick brown fox jumps over the lazy dog."))