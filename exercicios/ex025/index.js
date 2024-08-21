// escreva uma função que receba uma string e retorne a quantidade de caracteres que se repetem mais de uma vez

function contaDuplicados(str){
    str = str.split('');
    let letra = 0;
    let duplicados = 0;
    for(;letra < str.length; letra++) {
        let cont = 0;
        for(c of str) {
            if(str[letra] === c && str[letra] !== null) {
                cont++
                console.log(cont)
            } //? cont++ : cont += 0;
        }
        letra = 0;
        if(cont >  1){
            duplicados += 1
            const x = str[letra]
            for(i of str) {
                if (i === x) i = null;
            }
        }
        
    }
    return duplicados
}

console.log(contaDuplicados('aabbcccdefg'))


