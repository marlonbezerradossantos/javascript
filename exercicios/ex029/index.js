// Escreva uma função que receberá 2 strings onde a primeira terá todas as suas letras convertidas para title-case(todas as primeiras letras maiusculas), e a segunda conterá outra string com palavras de exceção que terão todas as letras minusculas exceto pela primeira palavra da string.

function titleCase(str, min = '#') {
    min = min.toLowerCase().split(' ');
    str = str.toLowerCase().split(' ');
    function maiuscula(e) {
        for(c in e) {
            e[c] = e[c].split('')
            e[c][0] = e[c][0].toUpperCase()
            e[c] = e[c].join("")
        }
        return e
    }
    maiuscula(str)
    maiuscula(min)
    for (c of min) {
        const bckp = str.lastIndexOf(c)
        if (bckp >= 1) {
            str[bckp] = str[bckp].toLowerCase()
        }
    }
    str = str.join(' ')
    return str
}

console.log(titleCase('marlon bezerra dos santos é legal', 'é santos'))

//titleCase('the quick brown fox')
//titleCase('THE WIND IN THE WILLLOWS')