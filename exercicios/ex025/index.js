// escreva uma função que receba uma string e retorne a quantidade de caracteres que se repetem mais de uma vez

function contaDuplicados(str) {
    let bckp = '';
    let duplicados = 0;
    let letra = 0;
    let cont = 0;
    str = str.toUpperCase()
    str = str.split('')
    for (; letra < str.length; letra++) {
        for (c of str) {
            if (str[letra] === c && str[letra] !== undefined) { cont++ }
        }
        if (cont > 1) {
            bckp = str[letra];
            duplicados++
            for (i in str) {
                if (bckp === str[i] && str[i] !== undefined) {
                    str[i] = undefined
                    letra = 0; 
                } 
            }
        cont = 0;
        }
    }
    return duplicados;
}
console.log(contaDuplicados('ABBA'))


