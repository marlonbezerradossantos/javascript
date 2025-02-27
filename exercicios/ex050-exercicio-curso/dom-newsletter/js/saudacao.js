const emailInput = document.querySelector('#txtEmail')
const output = document.querySelector('#newsletterFeedback')

function cadastro() {
    const email = emailInput.value
    output.innerHTML = `O email ${email} foi cadastrado`
}