const container = document.querySelector('.container');
const paragrafos = container.querySelectorAll('.paragrafos');
const estilos = getComputedStyle(document.body);
const cor = estilos.backgroundColor;

for (i in paragrafos) {
    paragrafos[i].style.backgroundColor = cor;
    paragrafos[i].style.color = 'White';
    paragrafos[i].innerHTML = 'Tudo foi alterado'
}
