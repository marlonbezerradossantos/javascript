// Escreva uma função que receba um número inteiro maior do que 0 representando segundos e retorne o horário em um formato legível para humanos

function tempo(seconds) {
   
    let minutos = (seconds / 60).toFixed();
    let horas = 0
    console.log(horas,':',minutos,':', seconds)
    if(minutos >= 59) {
        let bckp = minutos - 59
        minutos = 59
        console.log(bckp)
        if(bckp <= 59) {
            horas++
        } else {
            bckp = bckp / 59 
            horas += bckp
        }
    }
    
    console.log(horas,':',minutos,':', seconds)
}

console.log(tempo(3600 ))