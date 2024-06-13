
const btn = document.querySelector(".btn");
function mudaTexto(){
    const texto = document.querySelector("text");
    texto.innerHTML = "Mudou";
}

btn.addEventListener("click", mudaTexto());

