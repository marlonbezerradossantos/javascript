// dado dois pontos x e y maiores do que 0 em um plano cartesiano, identifique em qual quadrante o ponto se encontra

function identificaQuadrante(x, y){
    if(x > 0 && y > 0) {
        return 1
    } else if(x < 0 && y > 0) {
        return 2
    } else if(x < 0 && y < 0) {
        return 3
    } else {
        return 4
    }
}
console.log(identificaQuadrante(19, -56));