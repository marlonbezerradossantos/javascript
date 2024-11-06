// Escreva uma função que valide se uma string passada é alfanumérica, esta string tem que ter pelo menos um caractere, sendo que são validos somente letras maiusculas ou minusculas e numeros de 0 a 9.

function isAlphanumeric(str) {
    let valid = true;
    const regex = /[a-z0-9]/gi;
    for(c of str) {
        valid = regex.test(str)
        if(valid === false) {return valid}
    }
    return true
}

console.log(isAlphanumeric('senh4'))
console.log(isAlphanumeric('hello WOrld'))
console.log(isAlphanumeric('Marlon'))
console.log(isAlphanumeric('  '))