const paragrafo = document.createElement("p"); //cria o elemento e joga ele dentro da constante sem nenhum conteudo
paragrafo.innerHTML = "Olá, eu sou o conteúdo do elemento criado!"; // introduz um conteudo no elemento
const num = 100;
const texto = document.querySelector('#container'); // retorna o container em uma constante
texto.classList.add("fundo") //cria uma classe através de código
texto.appendChild(paragrafo) // atribui uma variavel contendo um elemento em um outro elemento
texto.append(num)

