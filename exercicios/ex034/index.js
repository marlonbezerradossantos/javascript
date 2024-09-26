// Crie uma função que receba uma função que terá uma string com um número no final. Sua função deverá ser capaz de incrementar o número contido nessa string 

function incrementaString(str) {
    let index;
    let newStr = []
    if(isNaN(Number(str[str.length - 1])) === true) {str = str + 0}


    // for(letra in str) {
    //     if(!isNaN(str[letra])) {
    //         index = letra;
    //         break
    //     }
    // }

//////////////

    for(c = str.length; c > -1; c--) {
        if(!isNaN(str[c])) {
            index = c;
            break
        }
    }

    console.log(index,'sou eu')

//////////////

    let num = str.slice(index, str.length)
    for(c = 0; c < (str.length - num.length); c++) {
        newStr.push(str[c])
    }
    newStr = newStr.toString().split(',').join('')
    const tamanho = num.length
    num = (Number(num) + 1).toString().padStart(tamanho, '0')
    return newStr + num
}

console.log(incrementaString('Fo22obar99'))

