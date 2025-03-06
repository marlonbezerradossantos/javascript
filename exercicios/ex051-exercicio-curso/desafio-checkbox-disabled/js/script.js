"use strict"

const checkbox = document.querySelector("#contrato")
const submit = document.querySelector("#submit")



function enableOrDisableButton() {
    if(checkbox.checked === true) {
        submit.disabled = false
    } else {
        submit.disabled = true
    }
}