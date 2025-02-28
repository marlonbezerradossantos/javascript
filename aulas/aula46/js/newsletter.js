const txtEmail = document.querySelector("#txtEmail");

function habilita() {
    txtEmail.disabled = false
    txtEmail.focus()
}

function desabilita() {
    txtEmail.disabled = true
}