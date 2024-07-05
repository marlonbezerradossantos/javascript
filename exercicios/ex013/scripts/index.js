const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container');
const criaDiv = document.createElement('div');
criaDiv.classList.add('classe')
container.appendChild(criaDiv);

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    const criaElemento = document.createElement(tag)
    criaElemento.innerText = texto;
    criaDiv.appendChild(criaElemento);
}
