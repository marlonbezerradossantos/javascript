const botao = document.querySelector(".btn");
botao.addEventListener("click", mudaTexto);

function mudaTexto() {
    const texto = document.querySelector("#text");
    texto.innerHTML = "<p>Texto Alterado</p>"
}
