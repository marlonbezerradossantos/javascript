const hora = 14;

if (hora >= 0 && hora <= 12) { // executa o bloco se caso a condição for verdadeira 
    console.log("Bom dia!");
} else if (hora >= 13 && hora <= 18) { // executa o bloco se caso a condição anterior for falsa e esta for verdadeira
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!") // executa o bloco se caso todas as condições anteriores forem falsas
}

if (false) {
    console.log('executado!')
}