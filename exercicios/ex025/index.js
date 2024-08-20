// escreva uma função que receba uma string e retorne a quantidade de caracteres que se repetem mais de uma vez

function contaDuplicados(str){
    const quantidade = str.length
    let semDuplos = new Set(str)
    semDuplos = Array.from(semDuplos)
    return quantidade - semDuplos.length
}

console.log(contaDuplicados('aabbcccdefg'))


