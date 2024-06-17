const soma = document.querySelector('.somar');
const subtracao = document.querySelector('.subtrair');
const multiplicacao = document.querySelector('.multiplicar');
const divisao = document.querySelector('.dividir');

const saida = document.querySelector('.saida');
const paragrafo = document.createElement("p");
paragrafo.classList.add('estilo');

soma.addEventListener("click", function(e){
    e.preventDefault()
    let num1 = document.querySelector(".num1");
    let num2 = document.querySelector(".num2");
    num1 = Number(num1.value);
    num2 = Number(num2.value);
    const resultado = num1 + num2;
    paragrafo.classList.add('estilo');
    paragrafo.innerHTML = `RESULTADO = ${resultado}.`;
    
})

subtracao.addEventListener("click", function(e){
    e.preventDefault()
    let num1 = document.querySelector(".num1");
    let num2 = document.querySelector(".num2");
    num1 = Number(num1.value);
    num2 = Number(num2.value);
    const resultado = num1 - num2;
    paragrafo.classList.add('estilo');
    paragrafo.innerHTML = `RESULTADO = ${resultado}.`
    
})

multiplicacao.addEventListener("click", function(e){
    e.preventDefault()
    let num1 = document.querySelector(".num1");
    let num2 = document.querySelector(".num2");
    num1 = Number(num1.value);
    num2 = Number(num2.value);
    const resultado = num1 * num2;
    paragrafo.classList.add('estilo');
    paragrafo.innerHTML = `RESULTADO = ${resultado}.`
    
})

divisao.addEventListener("click", function(e){
    e.preventDefault()
    let num1 = document.querySelector(".num1");
    let num2 = document.querySelector(".num2");
    num1 = Number(num1.value);
    num2 = Number(num2.value);
    const resultado = num1 / num2;
    paragrafo.classList.add('estilo');
    paragrafo.innerHTML = `RESULTADO = ${resultado}.`
    
})

saida.append(paragrafo);


