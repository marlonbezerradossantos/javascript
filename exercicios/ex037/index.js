// Escreva uma função que receba duas strings numéricas, sua função deve ser capaz de converter e somar os valores

function somaStrings(str1, str2) {
    str1 = Number(str1)
    str2 = Number(str2)
    let num = str1 + str2
    num = (num.toString(10))
    console.log(eToNumber(num))

}
console.log(somaStrings('712569312664357328695151392', '8100824045303269669937'))