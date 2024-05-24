const num = Number(window.prompt('Digite um número: '));
const results = document.getElementById('resultados');
const numero = document.getElementById('numero');
numero.innerHTML = num;
results.innerHTML = `<p>Seu número x2 é: ${num * 2}</p>`;
results.innerHTML += `<p>Seu número /2 é: ${num / 2}</p>`;