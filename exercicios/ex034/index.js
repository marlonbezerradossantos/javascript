// Crie uma função que receba uma função que terá uma string com um número no final. Sua função deverá ser capaz de incrementar o número contido nessa string 

function incrementaString(str) {
    let index = 0
    let newStr = []
    if(isNaN(Number(str[str.length - 1])) === true) {str = str + 0}
    for(c = (str.length - 1); c >= 0; c--) {
        if(isNaN(str[c]) === true) {
            index = c + 1
            break
        }
    }
    let num = str.slice(index, str.length) 
    for(c = 0; c < (str.length - num.length); c++) { 
        newStr.push(str[c])                            
    }
    newStr = newStr.toString().split(',').join('')
    const tamanho = num.length
    num = (Number(num) + 1).toString().padStart(tamanho, '0')
    return newStr + num
}

console.log(incrementaString('F22oobar99'))
console.log(incrementaString('Foobar00'))
console.log(incrementaString('Foobar0000'))
console.log(incrementaString('Foobar71'))
console.log(incrementaString('F22ooba3r100000'))