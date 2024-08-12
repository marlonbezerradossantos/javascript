const date = new Date(2024, 0, 1, 0, 0, 0);
const horas = document.querySelector('.timer__hours');
const minutos = document.querySelector('.timer__minutes');
const segundos = document.querySelector('.timer__seconds');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset')

let cont = 0;
function inicia() {
    
    const timer = setInterval(function(){
        horas.innerHTML = date.getHours();
        minutos.innerHTML = date.getMinutes();
        segundos.innerHTML = date.getSeconds();
        cont++
        date.setSeconds(cont++)

        pause.addEventListener('click', function(){
            clearInterval(timer)
        })

    }, 1000)
}

