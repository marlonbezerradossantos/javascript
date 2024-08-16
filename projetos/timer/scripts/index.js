let date = new Date(2024, 0, 1, 0, 0, 0);
const container = document.querySelector('.timer')
const horas = document.querySelector('.timer__hours');
const minutos = document.querySelector('.timer__minutes');
const segundos = document.querySelector('.timer__seconds');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset')

function zeroAEsquerda(valor) {
    if(valor < 10) {
        valor = "0" + valor
    }
    return valor
}

function inicia() {
    container.style.color = 'black'
    start.disabled = true
    const timer = setInterval(function () {
        date.setSeconds(date.getSeconds() + 1)
        segundos.innerHTML = zeroAEsquerda(date.getSeconds())
        minutos.innerHTML = zeroAEsquerda(date.getMinutes())
        horas.innerHTML = zeroAEsquerda(date.getHours())
    }, 1000)
    pause.addEventListener('click', function(){
        container.style.color = 'red'
        start.removeAttribute("disabled")
        clearInterval(timer)
    })
}

function reinicia() {
    container.style.color = 'black'
    date = new Date(2024, 0, 1, 0, 0, 0)
    horas.innerHTML = zeroAEsquerda(date.getHours())
    minutos.innerHTML = zeroAEsquerda(date.getMinutes())
    segundos.innerHTML = zeroAEsquerda(date.getSeconds())
}
