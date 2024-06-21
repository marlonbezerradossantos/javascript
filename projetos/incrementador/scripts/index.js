const saida = document.querySelector('.saida');

const incrementa2 = document.querySelector('.botao-aumenta2');
const incrementa = document.querySelector('.botao-aumenta');
const reseta = document.querySelector('.botao-reset');
const decrementa = document.querySelector('.botao-diminui');
const decrementa2 = document.querySelector('.botao-diminui2')

let contador = Number(window.prompt('Digite um número:'));
const inicial = contador;
saida.innerHTML = contador;

incrementa2.addEventListener('click', function(e){
    e.preventDefault();
    contador += 2;
    saida.innerHTML = contador;
})

incrementa.addEventListener("click", function(e){
    e.preventDefault();
    contador += 1;
    saida.innerHTML = contador;
})

reseta.addEventListener('click', function(e){
    e.preventDefault();
    contador = inicial;
    saida.innerHTML = contador;
})

decrementa.addEventListener('click', function(e){
    e.preventDefault();
    contador -= 1;
    saida.innerHTML = contador;
})

decrementa2.addEventListener('click', function(e){
    e.preventDefault();
    contador -= 2;
    saida.innerHTML = contador;
})