(function(){
    const nameUser = window.prompt('Digite seu nome de usuário: ')
    const element = document.querySelector(".top-bar p")
    element.textContent += nameUser
})()
