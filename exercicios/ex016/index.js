// Crie uma função que identifique se uma imagem está ou não no modo paisagem

function ePaisagem(alt, lar) {
    if (alt < lar) {
        return true;
    } else {
        return false;
    }
}

console.log(ePaisagem(30, 10))