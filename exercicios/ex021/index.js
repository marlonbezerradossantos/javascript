// faça uma função que leia um número e faça a soma de todos os seus digitos, se o resultado da soma for um número com mais de dois dígitos, então continue somando seus digitos

function raizDoDigito(n) {
    let num = n.toString().split("");
    let soma = 0;
    while(true) {
        for(i in num) {
            soma += Number(num[i])
        }
        if (soma >= 10) {
            num = soma.toString().split('')
            soma = 0;
        } else {
            break
        }
    }
    return soma
}

console.log(raizDoDigito(493193))

